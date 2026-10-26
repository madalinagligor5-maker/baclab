import type { Lectie } from "./types";

/** Lecții A19–A23. Surse: ghidul „Biologie vegetală și animală” (Nominatrix, 2020) și fișele de sinteză E.d (2012). */
export const LECTII_4: Lectie[] = [
  {
    code: "A19",
    intro: "Organele de simț conțin receptori care transformă stimulii în impulsuri nervoase, trimise la ariile corticale unde se formează senzațiile. Se învață fiecare organ cu receptorul lui.",
    sectiuni: [
      {
        titlu: "Pielea",
        text: [
          "Are trei straturi: epiderma (nevascularizată), derma (țesut conjunctiv dens, cu glande sebacee, sudoripare și foliculi piloși) și hipoderma (țesut conjunctiv cu adipocite). Conține receptori pentru tact, presiune, vibrație, temperatură și durere. Alte roluri: protecție, termoreglare, excreție prin glandele sudoripare și sebacee.",
        ],
      },
      {
        titlu: "Nasul și limba",
        puncte: [
          "Mucoasa olfactivă (sus, în fosele nazale, 2–3 cm²): celule receptoare care sunt neuroni bipolari, chemoreceptori de distanță. Substanțele volatile se percep dizolvate în mucus.",
          "Mugurii gustativi din papilele limbii și din mucoasa buco-faringiană: receptori de contact pentru substanțe sapide dizolvate. Senzații primare: dulce, sărat, acru, amar.",
        ],
      },
      {
        titlu: "Ochiul",
        text: ["Globul ocular are trei tunici, aparatul optic și receptorul."],
        puncte: [
          "Externă: sclerotica și cornee transparentă. Medie: coroida (nutriție, cameră obscură) și irisul cu pupila. Internă: retina, cu celulele fotoreceptoare.",
          "Aparatul optic: cornee, umoare apoasă, cristalin (lentilă biconvexă), corp vitros.",
          "Conurile (aprox. 7 milioane): vederea diurnă și colorată, exclusive în foveea centralis. Bastonașele (aprox. 130 milioane): vederea nocturnă, acromatică, lipsesc din fovee.",
          "Imaginea unui ochi normal (emetrop) se formează pe retină, reală, mai mică și răsturnată.",
        ],
      },
      {
        titlu: "Urechea",
        puncte: [
          "Externă: pavilion și conduct auditiv extern, până la timpan; cerumenul are rol protector.",
          "Medie: cameră cu aer, trei oscioare (ciocan, nicovală, scăriță) care transmit vibrațiile; trompa lui Eustachio o leagă de faringe.",
          "Internă: labirint osos (perilimfă) și membranos (endolimfă). Organul Corti din melcul membranos este receptorul auzului. Crestele ampulare și maculele din canalele semicirculare, sacula și utricula sunt receptorii echilibrului.",
        ],
      },
      {
        titlu: "Deficiențe senzoriale",
        puncte: [
          "Miopia: glob ocular alungit; imaginea se formează în fața retinei; lentile divergente (biconcave).",
          "Hipermetropia: glob ocular mai scurt; imaginea în spatele retinei; lentile convergente (biconvexe).",
          "Astigmatismul: curbură neuniformă a corneei sau cristalinului; lentile cilindrice.",
          "Strabismul: slăbirea unui mușchi extern al globului ocular; axele optice nu sunt paralele.",
          "Surditatea: de conducere (dopuri de ceară, timpan lezat) sau nervoasă (nerv sau centru lezat); sunetele foarte puternice distrug receptorii. Prevenire: igienă, evitarea zgomotelor puternice, tratarea infecțiilor.",
        ],
      },
    ],
    retine: [
      "Receptorii vederii: retina. Auzului: organul Corti. Mirosului: mucoasa olfactivă. Gustului: mugurii gustativi.",
      "Conuri = lumină și culoare. Bastonașe = lumină slabă.",
      "Miopie → lentile divergente. Hipermetropie → lentile convergente.",
    ],
    capcane: [
      "Nu confunda coroida (tunica medie) cu retina (tunica internă).",
      "Oscioarele sunt în urechea medie, receptorul auzului în cea internă.",
      "Hipermetropia se corectează cu lentile convergente, nu divergente.",
    ],
  },
  {
    code: "A20",
    intro: "Plantele se înmulțesc asexuat (fără fecundație) sau sexuat (prin flori, fecundație, sămânță și fruct). Se învață structura florii și transformările de după fecundație.",
    sectiuni: [
      {
        titlu: "Reproducerea asexuată",
        text: ["Nu implică fuziunea celulelor reproducătoare. Poate fi prin spori (mușchi, ferigi) sau vegetativă, cu organe vegetative."],
        puncte: [
          "Stolon (fragi), rizom (iris), bulb (lalea, ceapă), tubercul (cartof).",
          "Butași (mușcată), marcote (viță-de-vie), altoire (pomi fructiferi).",
        ],
      },
      {
        titlu: "Floarea angiospermelor",
        puncte: [
          "Peduncul și receptacul.",
          "Înveliș floral: caliciul (totalitatea sepalelor) și corola (totalitatea petalelor).",
          "Androceul (partea masculină): staminele, fiecare cu filament și antere în care se formează grăunciorii de polen.",
          "Gineceul (partea feminină): pistilul, format din ovar, stil și stigmat. În ovar se află ovulele, cu sacul embrionar.",
        ],
      },
      {
        titlu: "Polenizarea și fecundația",
        text: [
          "Polenizarea este transferul polenului pe stigmat. Fecundația este altceva: unirea gameților. La angiosperme este dublă. O spermatie se unește cu oosfera și formează zigotul principal (2n). A doua spermatie se unește cu nucleul secundar diploid și formează zigotul accesoriu (3n), din care se dezvoltă endospermul (țesutul de rezervă).",
        ],
      },
      {
        titlu: "Sămânța și fructul",
        text: [
          "După fecundație, ovulul devine sămânță, iar ovarul devine fruct. Sămânța are tegument, embrion (radiculă, hipocotil, gemulă) și cotiledoane (două la dicotiledonate, unul la monocotiledonate); poate avea endosperm.",
        ],
        puncte: [
          "Fructe cărnoase: drupa (prun, cireș), baca (tomată, strugure), poama (măr, păr).",
          "Fructe uscate indehiscente: nuca, achena (floarea-soarelui), cariopsa (grâu, porumb).",
          "Fructe uscate dehiscente: păstaia (fasole), capsula (mac).",
        ],
      },
    ],
    retine: [
      "Androceu = stamine. Gineceu = carpele (pistil).",
      "Ovul → sămânță. Ovar → fruct. Zigot → embrion.",
      "Fecundația la angiosperme este dublă.",
    ],
    capcane: [
      "Polenizarea nu este fecundație.",
      "Nu confunda androceul cu gineceul: androceul e masculin.",
      "Zigotul accesoriu este triploid, nu diploid.",
    ],
  },
  {
    code: "A21",
    intro: "Reproducerea umană se învață pe aparatele reproducătoare, pe gametogeneză și pe bolile cu transmitere sexuală, cu cauze, manifestări și prevenire.",
    sectiuni: [
      {
        titlu: "Idei de bază",
        text: ["Reproducerea sexuată are două momente: meioza (formarea gameților haploizi) și fecundația (refacerea numărului diploid în zigot). Spermatogeneza (în testicule) și ovogeneza (în ovare) se fac prin meioză."],
      },
      {
        titlu: "Aparatul reproducător masculin",
        puncte: [
          "Testiculele (gonadele): în scrot, glande mixte. Produc spermatozoizi, în tuburile seminifere, și hormonul sexual masculin.",
          "Căi genitale: epididim, canale deferente, canale ejaculatoare, uretra (comună cu sistemul excretor).",
          "Glande anexe: veziculele seminale și prostata.",
          "Penisul: organ de copulație.",
        ],
      },
      {
        titlu: "Aparatul reproducător feminin",
        puncte: [
          "Ovarele (gonadele): în abdomen, glande mixte. Produc ovule, în foliculi; eliberarea ovulului se numește ovulație. Secretă hormoni sexuali feminini.",
          "Trompele uterine: duc ovulul spre uter; aici are loc de regulă fecundația.",
          "Uterul: implantarea embrionului, dezvoltarea fătului, expulzia lui la naștere.",
          "Vaginul și vulva (organe genitale externe).",
        ],
      },
      {
        titlu: "Boli cu transmitere sexuală",
        puncte: [
          "Sifilisul: bacterie (spirochetă). Primar: șancru; secundar: erupție (rozeolă); terțiar: afectarea inimii și a creierului.",
          "Gonoreea: bacterie (gonococ). Usturimi uretrale, scurgeri galben-verzui, complicații renale, sterilitate.",
          "Candidoza: ciupercă (Candida albicans). Scurgere albicioasă, inflamarea vulvei, mâncărimi.",
          "SIDA: virusul HIV. Depresie imună majoră, infecții grave, tumori, deces.",
          "Prevenire: evitarea relațiilor cu parteneri necunoscuți sau multipli, prezervativ, seringi de unică folosință, controlul donatorilor de sânge, igienă.",
        ],
      },
    ],
    retine: [
      "Testicule și ovare = glande mixte.",
      "Fecundația are loc în trompa uterină, implantarea în uter.",
      "Sifilis, gonoree = bacterii. Candidoză = ciupercă. SIDA = virus.",
    ],
    capcane: [
      "Uretra bărbatului elimină și urina, și sperma.",
      "Nu confunda gonada (ovar, testicul) cu gametul (ovul, spermatozoid).",
    ],
  },
  {
    code: "A22",
    intro: "Mendel a explicat cum se transmit caracterele. Capitolul se rezolvă cu pătrate Punnett și cu vocabular precis: gene, alele, genotip, fenotip.",
    sectiuni: [
      {
        titlu: "Vocabular",
        puncte: [
          "Ereditatea: transmiterea caracterelor de la părinți la descendenți. Variabilitatea: diferențele dintre indivizi.",
          "Gene alele: cele două variante ale aceleiași gene (A și a). Dominantă: se notează cu literă mare, se manifestă în fenotip. Recesivă: literă mică, se manifestă doar la homozigot.",
          "Homozigot: alele identice (AA sau aa). Heterozigot: alele diferite (Aa).",
          "Genotip: totalitatea genelor. Fenotip: totalitatea însușirilor rezultate din genotip și mediu.",
          "Gameții sunt întotdeauna puri: conțin o singură alelă dintr-o pereche.",
        ],
      },
      {
        titlu: "Monohibridarea",
        text: [
          "Mendel a lucrat pe mazăre, o plantă autogamă, ușor de cultivat, cu multe semințe. Încrucișarea NN × zz dă în F1 100% Nz (uniformitate: toți au boabe netede). Încrucișarea F1 × F1 dă în F2: 25% NN, 50% Nz, 25% zz. Raport de segregare după fenotip 3 : 1, după genotip 1 : 2 : 1. Aceasta este legea purității gameților.",
        ],
      },
      {
        titlu: "Dihibridarea",
        text: [
          "NNGG × zzgg dă în F1 100% NzGg. În F2 apar 16 combinații cu raportul fenotipic 9 : 3 : 3 : 1. Legea segregării independente: fiecare pereche de alele segregă independent de celelalte.",
          "Pentru un dihibrid AaBb gameții sunt AB, Ab, aB și ab, în proporții egale (25% fiecare). Probabilitatea aabb din AaBb × AaBb este 1/16.",
        ],
      },
      {
        titlu: "Încrucișarea test",
        text: ["Individul cu fenotip dominant, genotip necunoscut, se încrucișează cu un homozigot recesiv. Dacă toți descendenții au fenotip dominant, individul este AA. Dacă apar și recesivi (în raport 1 : 1), individul este Aa."],
      },
      {
        titlu: "Codominanța și grupele de sânge",
        text: [
          "Codominanța este o abatere de la segregarea mendeliană: două alele se exprimă împreună în heterozigot. Grupele sanguine au trei alele: LA și LB (codominante, dominante față de l) și l (recesivă). Grupa AB (IV) apare prin codominanța LA și LB.",
        ],
        puncte: [
          "Grupa I (O): ll. Hematii fără antigene, în plasmă anticorpi alfa și beta. Donator universal.",
          "Grupa II (A): LALA sau LAl. Antigen A, anticorpi beta.",
          "Grupa III (B): LBLB sau LBl. Antigen B, anticorpi alfa.",
          "Grupa IV (AB): LALB. Ambele antigene, fără anticorpi. Primitor universal.",
        ],
      },
      {
        titlu: "Cum rezolvi o problemă",
        puncte: [
          "Notează caracterele cu litere și stabilește dominanța din enunț.",
          "Scrie genotipurile părinților (fenotipul dominant poate fi AA sau Aa: citește indiciile).",
          "Scrie gameții fiecărui părinte.",
          "Alcătuiește pătratul Punnett și citește genotipurile.",
          "Trece la fenotipuri și la procente. Răspunde exact la ce se cere.",
        ],
      },
    ],
    retine: [
      "Aa × Aa → 1 AA : 2 Aa : 1 aa (3 : 1 fenotipic).",
      "AaBb × AaBb → 9 : 3 : 3 : 1.",
      "Un gamet are o singură alelă din pereche.",
      "Grupa AB: LALB, codominanță.",
    ],
    capcane: [
      "Fenotipul dominant nu înseamnă obligatoriu homozigot dominant.",
      "Raportul 3 : 1 este fenotipic, 1 : 2 : 1 este genotipic.",
      "Procentele sunt probabilități, nu garanții pentru un număr mic de descendenți.",
    ],
  },
  {
    code: "A23",
    intro: "Variabilitatea apare prin recombinare și prin mutații. Capitolul include și determinismul sexului, factorii mutageni și bolile genetice.",
    sectiuni: [
      {
        titlu: "Recombinarea genetică",
        text: [
          "Crossing-over-ul (recombinare intracromozomală) are loc în profaza I a meiozei: cromozomii omologi formează bivalenți, între cromatidele nesurori se formează chiasme, iar la nivelul lor se schimbă material genetic, rezultând cromozomi recombinați. Orientarea aleatoare a cromozomilor omologi în metafaza I este recombinarea intercromozomală.",
        ],
      },
      {
        titlu: "Determinismul cromozomal al sexului",
        text: [
          "La mamifere (tipul Drosophila) femela este XX (sex homogametic, un singur tip de gameți) și masculul XY (heterogametic, 50% gameți X și 50% Y). Sexul copilului depinde de spermatozoidul care fecundează. La păsări, unele insecte, amfibieni și reptile (tipul Abraxas) situația este inversă.",
        ],
      },
      {
        titlu: "Mutațiile",
        text: ["Mutația este o modificare a materialului genetic care nu rezultă din recombinare. Majoritatea sunt dăunătoare, unele neutre, foarte puține utile. Pot fi gametice (se transmit) sau somatice."],
        puncte: [
          "Genice: afectează gene sau perechi de nucleotide (cea mai mică este mutația punctiformă): substituții, deleții, adiții, inversii.",
          "Cromozomiale: modifică structura cromozomului (deleție, duplicație, inversie, translocație).",
          "Genomice: modifică numărul de cromozomi. Poliploidia (3n, 4n) și aneuploidia (2n+1 trisomie, 2n–1 monosomie).",
        ],
      },
      {
        titlu: "Factorii mutageni",
        puncte: [
          "Fizici: radiații ionizante, ultraviolete, cosmice, variații bruște de temperatură.",
          "Chimici: derivați ai bazelor azotate, acid nitros, coloranți, unele medicamente, colchicina.",
          "Biologici: virusuri și unele microorganisme parazite.",
          "Efecte: cancerigen (celule tumorale) și teratogen (malformații în dezvoltarea intrauterină).",
        ],
      },
      {
        titlu: "Cariotipul uman și bolile genetice",
        puncte: [
          "Cariotip normal: 46 de cromozomi (44 autozomi + XX sau XY).",
          "Sindromul Down: trisomia 21 (47 de cromozomi).",
          "Sindromul Klinefelter: XXY, bărbat. Sindromul Turner: monosomie XO, femeie.",
          "Boli genice autozomale: polidactilia și sindactilia (dominante), albinismul (recesiv), anemia falciformă.",
          "Boli genice heterozomale (gena pe cromozomul X, recesive): hemofilia și daltonismul. Bărbații sunt hemizigoți și se îmbolnăvesc de câte ori au gena. Femeile se îmbolnăvesc doar ca homozigote.",
        ],
      },
    ],
    retine: [
      "Crossing-over: profaza I, între cromatide nesurori ale omologilor.",
      "Mamifere: femela XX, masculul XY.",
      "Hemofilia și daltonismul: recesive, pe X.",
      "Trisomia 21 = 47 de cromozomi.",
    ],
    capcane: [
      "Nu spune că toate mutațiile produc boli grave: pot fi și neutre sau utile.",
      "La păsări sexul heterogametic este femela, nu masculul.",
      "Trisomia este 2n + 1, monosomia 2n – 1.",
    ],
  },
];
