import type { MicroCMSListContent } from "microcms-js-sdk";
import { sampleWorks } from "@/data/sample-works";
import { getMicroCMSClient } from "@/lib/microcms";
import type { Thumbnail } from "@/types/media";
import type { Work } from "@/types/work";

type MicroCMSWork = {
  title: string;
  description?: string;
  content?: string;
  thumbnail?: Thumbnail;
} & MicroCMSListContent;

function toWork(work: MicroCMSWork): Work {
  return {
    id: work.id,
    slug: work.id,
    title: work.title,
    description: work.description ?? "",
    content: work.content ?? "",
    thumbnail: work.thumbnail,
  };
}

export async function getWorks(): Promise<Work[]> {
  const client = getMicroCMSClient();

  if (!client) {
    return sampleWorks;
  }

  const { contents } = await client.getList<MicroCMSWork>({
    endpoint: "works",
    queries: {
      orders: "-publishedAt",
    },
  });

  return contents.map(toWork);
}

export async function getWorkBySlug(slug: string): Promise<Work | undefined> {
  const client = getMicroCMSClient();

  if (!client) {
    return sampleWorks.find((work) => work.slug === slug);
  }

  try {
    const work = await client.getListDetail<MicroCMSWork>({
      endpoint: "works",
      contentId: slug,
    });

    return toWork(work);
  } catch {
    return undefined;
  }
}
