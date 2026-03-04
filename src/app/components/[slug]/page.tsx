import { notFound } from "next/navigation";
import { ComponentPage } from "@/components/component-page";
import { getComponentBySlug, getAllSlugs } from "@/lib/registry";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ComponentRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getComponentBySlug(slug);

  if (!meta) notFound();

  return (
    <ComponentPage
      name={meta.slug}
      displayName={meta.displayName}
      description={meta.longDescription}
      accentColor={meta.accentColor}
      fileName={meta.fileName}
      component={meta.component}
      variant={meta.slug}
    />
  );
}
