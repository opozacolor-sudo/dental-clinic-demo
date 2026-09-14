import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/components/ServiceView";
import { getService, services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Serviciu" };
  return { title: service.title, description: service.tagline };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceView service={service} />;
}
