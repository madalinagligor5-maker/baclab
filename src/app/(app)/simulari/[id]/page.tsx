import { SimRunner } from "@/components/SimRunner";

export function generateStaticParams() {
  return [{ id: "bac-2026-simulare" }, { id: "bac-2025-var01" }];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <SimRunner id={id} />;
}
