import { CHAPTER_BY_CODE } from "@/content/chapters";
import { GLOSAR } from "@/content/materiale";
import { Glosar } from "@/components/Glosar";
import { Eyebrow, H1 } from "@/components/ui";

export const metadata = { title: "Glosar" };

export default function GlosarPage() {
  const termeni = GLOSAR.filter((t) => CHAPTER_BY_CODE[t.chapter]).map((t) => ({
    ...t,
    chapterShort: CHAPTER_BY_CODE[t.chapter]!.short,
    chapterSlug: CHAPTER_BY_CODE[t.chapter]!.slug,
  }));
  return (
    <div className="space-y-6">
      <div>
        <Eyebrow>Vocabularul de Bac</Eyebrow>
        <H1>Glosar</H1>
        <p className="mt-2 max-w-xl text-muted">
          {termeni.length} de termeni din toate cele 23 de capitole, cu definiția pe scurt. La examen, termenul corect valorează puncte: folosește-i exact așa.
        </p>
      </div>
      <Glosar termeni={termeni} />
    </div>
  );
}
