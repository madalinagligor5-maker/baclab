/**
 * Unde apare fiecare imagine în lecții: după secțiunea cu titlul dat. Imaginile și atribuirile lor
 * sunt în materiale/imagini/imagini.json (domeniu public, CC0, CC BY sau CC BY-SA, de pe Wikimedia Commons).
 */
export const IMAGINI_LECTII: Record<string, { dupa: string; slug: string }[]> = {
  A01: [
    { dupa: "Două tipuri de celulă", slug: "celula-procariota" },
    { dupa: "Organitele și rolul lor", slug: "celula-animala" },
    { dupa: "Organitele și rolul lor", slug: "celula-vegetala" },
  ],
  A02: [
    { dupa: "Mitoza", slug: "mitoza-etape" },
    { dupa: "Mitoza", slug: "mitoza-faze" },
    { dupa: "Meioza", slug: "meioza" },
  ],
  A03: [
    { dupa: "Taxonomia și denumirea speciilor", slug: "clasificare" },
    { dupa: "Virusurile", slug: "virus" },
  ],
  A04: [
    { dupa: "Țesuturile definitive", slug: "frunza-tesuturi" },
    { dupa: "Țesuturile definitive", slug: "stomata" },
    { dupa: "Țesuturile definitive", slug: "xilem-floem" },
  ],
  A05: [
    { dupa: "Țesutul epitelial", slug: "tesut-epitelial" },
    { dupa: "Țesutul muscular", slug: "tesut-muscular" },
    { dupa: "Țesutul nervos", slug: "neuron" },
  ],
  A06: [
    { dupa: "Ce este și unde are loc", slug: "fotosinteza" },
    { dupa: "Ce este și unde are loc", slug: "cloroplast" },
  ],
  A07: [
    { dupa: "Nutriția parazită", slug: "cuscuta" },
    { dupa: "Simbioza", slug: "licheni" },
  ],
  A08: [
    { dupa: "Tubul digestiv", slug: "sistem-digestiv" },
    { dupa: "Tubul digestiv", slug: "stomac-rumegatoare" },
  ],
  A09: [{ dupa: "Respirația aerobă", slug: "mitocondrie" }],
  A10: [
    { dupa: "Căile respiratorii", slug: "sistem-respirator" },
    { dupa: "Plămânii", slug: "alveola" },
  ],
  A11: [{ dupa: "Seva brută", slug: "xilem-floem" }],
  A12: [{ dupa: "Elementele figurate", slug: "celule-sange" }],
  A13: [
    { dupa: "Inima", slug: "inima" },
    { dupa: "Cele două circuite", slug: "sistem-circulator" },
  ],
  A14: [{ dupa: "Stomata", slug: "stomata" }],
  A15: [
    { dupa: "Rinichii", slug: "rinichi" },
    { dupa: "Rolul rinichiului", slug: "nefron" },
  ],
  A16: [
    { dupa: "Scheletul", slug: "schelet" },
    { dupa: "Mușchii", slug: "muschi" },
  ],
  A17: [
    { dupa: "Exemple de tropisme", slug: "fototropism" },
    { dupa: "Exemple de nastii", slug: "mimoza" },
  ],
  A18: [
    { dupa: "Măduva spinării", slug: "maduva" },
    { dupa: "Arcul reflex", slug: "arc-reflex" },
    { dupa: "Encefalul", slug: "encefal" },
  ],
  A19: [
    { dupa: "Pielea", slug: "piele" },
    { dupa: "Ochiul", slug: "ochi" },
    { dupa: "Urechea", slug: "ureche" },
  ],
  A20: [{ dupa: "Floarea angiospermelor", slug: "floare" }],
  A21: [{ dupa: "Aparatul reproducător feminin", slug: "aparat-genital-feminin" }],
  A22: [{ dupa: "Monohibridarea", slug: "punnett" }],
  A23: [
    { dupa: "Recombinarea genetică", slug: "crossing-over" },
    { dupa: "Cariotipul uman și bolile genetice", slug: "cariotip" },
    { dupa: "Cariotipul uman și bolile genetice", slug: "sindrom-down" },
  ],
};
