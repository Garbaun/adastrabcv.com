import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { baseEntries, serviceData } from "@/lib/service-pages";

const BASE = "web";

export function generateStaticParams() {
  return baseEntries(BASE).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = serviceData[`${BASE}/${slug}`];
  return { title: entry ? `${entry.title} — Ad Astra Ajans` : "Ad Astra Ajans" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = serviceData[`${BASE}/${slug}`];
  if (!entry) notFound();
  const siblings = baseEntries(BASE).filter((s) => s.slug !== slug);
  return <ServicePage entry={entry} siblings={siblings} />;
}
