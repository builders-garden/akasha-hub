import { createTitle } from "@/lib/utils";
import { NextPageProps } from "@/types/next-page-props";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

import {
  Page,
  PageBack,
  PageBody,
  PageHeader,
  PagePrimaryBar,
  PageTitle,
} from "@/components/ui/page";
import { Routes } from "@/constants/routes";
import { HubDto } from "@/types/dtos/hub-dto";

import { HubTabs } from "@/components/home/hubs/hub-tabs";

const paramsCache = createSearchParamsCache({
  hubSlug: parseAsString.withDefault(""),
});

export async function generateMetadata({
  params,
}: NextPageProps): Promise<Metadata> {
  const { hubSlug } = await paramsCache.parse(params);

  if (hubSlug) {
    // const hub = await getHub({ slug: hubSlug });
    // if (hub) {
    //   return {
    //     title: createTitle(hub.name),
    //   };
    // }
  }

  return {
    title: createTitle("Hub"),
  };
}

const HubDetailsPage = async ({ params }: NextPageProps) => {
  const { hubSlug } = await paramsCache.parse(params);
  if (!hubSlug) {
    return notFound();
  }

  const hub: HubDto | null = {
    id: "1",
    slug: "urbe-hub",
    name: "Urbe Hub",
    location: "Rome, Italy",
    memberCount: 76,
  };
  try {
    // hub = await getHub({ slug: hubSlug });
  } catch (error) {
    console.error(error);
    return notFound();
  }
  return (
    <Page>
      <PageHeader>
        <PagePrimaryBar>
          <div className="flex flex-row items-center gap-4">
            <PageBack href={Routes.MyHubs} />
            <div className="flex items-center gap-2">
              <PageTitle>{hub.name}</PageTitle>
            </div>
          </div>
        </PagePrimaryBar>
      </PageHeader>
      <PageBody
        disableScroll
        className="flex h-full flex-col overflow-auto md:flex-row md:divide-x md:overflow-hidden"
      >
        <HubTabs hub={hub} />
      </PageBody>
    </Page>
  );
};

export default HubDetailsPage;
