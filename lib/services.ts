export type PricingRow = {
  name: string;
  price: string;
  note?: string;
};

export type Service = {
  slug: string;
  shortName: string;
  title: string;
  tagline: string;
  heroKicker: string;
  description: string;
  longDescription: string;
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  pricing: PricingRow[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "fast-fixed",
    shortName: "Fast & Fixed",
    title: "Fast & Fixed",
    tagline: "Dinți ficși în 24 de ore",
    heroKicker: "Protocol implantar imediat",
    description:
      "Reabilitare orală completă pe implante, cu punte provizorie fixă montată în aceeași zi. Soluția este gândită pentru pacienții care vor să iasă din clinică cu un zâmbet funcțional, fără perioade lungi fără dinți.",
    longDescription:
      "Fast & Fixed este un protocol de implantologie imediată: extracțiile necesare, inserarea implantelor și protezarea temporară fixă se planifică într-un flux compact. Lucrarea provizorie este înșurubată pe implante, nu se scoate noaptea, iar masticarea ușoară este posibilă imediat. După ostointegrare, puntea provizorie este înlocuită cu restaurarea definitivă din materiale de înaltă rezistență. Toate tarifele de mai jos sunt orientative, pentru demonstrație.",
    benefits: [
      {
        title: "Zâmbet în 24h",
        text: "Punte fixă provizorie în aceeași zi cu intervenția, fără proteză mobilă clasică.",
      },
      {
        title: "Planificare 3D",
        text: "Poziția implantelor și forma lucrării se definesc pe CBCT și scanare digitală.",
      },
      {
        title: "Stabilitate imediată",
        text: "Implante cu ancorare primară ridicată, potrivite pentru încărcare imediată.",
      },
      {
        title: "Estetică naturală",
        text: "Ghidaj gingival și proporții faciale urmărite încă din faza provizorie.",
      },
    ],
    steps: [
      {
        title: "Consultație și imagistică",
        text: "Examen clinic, CBCT, fotografii și scanare intraorală pentru planul chirurgical.",
      },
      {
        title: "Planul de tratament",
        text: "Stabilim numărul de implante, extragerile, forma punții și calendarul de 24h.",
      },
      {
        title: "Intervenția",
        text: "Extracții acolo unde este nevoie, inserare implante și suturi minim invazive.",
      },
      {
        title: "Puntea fixă",
        text: "Montarea lucrării provizorii înșurubate, verificare ocluzie și instrucțiuni de igienă.",
      },
      {
        title: "Lucrarea definitivă",
        text: "După vindecare, înlocuim provizoriul cu puntea finală din zirconiu sau material echivalent.",
      },
    ],
    pricing: [
      { name: "Consultație Fast & Fixed + plan 3D", price: "350 lei" },
      { name: "Arcadă completă — protocol imediat (provizoriu inclus)", price: "de la 18.900 lei", note: "orientativ" },
      { name: "Ambele arcade — protocol imediat", price: "de la 34.900 lei", note: "orientativ" },
      { name: "Punte definitivă zirconiu / arcadă", price: "de la 12.500 lei" },
    ],
    accent: "#0f766e",
  },
  {
    slug: "stomatologie-generala",
    shortName: "Generală",
    title: "Stomatologie Generală",
    tagline: "Îngrijire completă, de la prevenție la restaurare",
    heroKicker: "Medicină dentară de zi cu zi",
    description:
      "Servicii esențiale pentru sănătatea orală: consultații, detartraj, obturații, tratamente preventive și restaurări conservatoare, într-un flux calm și predictibil.",
    longDescription:
      "Stomatologia generală este baza oricărui plan de tratament. Începem cu un diagnostic clar, radiografii acolo unde e nevoie și un protocol de igienă profesională. Caria, sensibilitatea, obturațiile vechi și urgențele simple se tratează cu materiale contemporane, sub izolare și cu respect pentru structura dentară restantă. Pacientul pleacă cu un plan scris, nu cu surprize.",
    benefits: [
      {
        title: "Diagnostic clar",
        text: "Consultație structurată, fotografii și recomandare imagistică acolo unde contează.",
      },
      {
        title: "Prevenție reală",
        text: "Detartraj, airflow, fluorurări și instrucțiuni personalizate de igienă.",
      },
      {
        title: "Restaurări conservatoare",
        text: "Obturații estetice, inlay/onlay și reparații minime, fără sacrificiu inutil de smalț.",
      },
      {
        title: "Urgențe de zi",
        text: "Durere, obturație căzută sau dinte fracturat — triaj rapid în programul clinicii.",
      },
    ],
    steps: [
      {
        title: "Consultația inițială",
        text: "Anamneză, examen clinic și, dacă e cazul, radiografie bitewing sau periapicală.",
      },
      {
        title: "Igienizare",
        text: "Detartraj ultrasonic, lustruire și controlul inflamației gingivale.",
      },
      {
        title: "Tratamente restaurative",
        text: "Obturații, reconstituiri și ajustări ocluzale, în ședințe scurte.",
      },
      {
        title: "Plan de mentenanță",
        text: "Rechemări la 4–6 luni, în funcție de risc de carie și de parodontită.",
      },
    ],
    pricing: [
      { name: "Consultație stomatologie generală", price: "150 lei" },
      { name: "Detartraj + airflow + fluorizare", price: "350 lei" },
      { name: "Obturație estetică 1 față", price: "280 lei" },
      { name: "Obturație estetică 2–3 fețe", price: "380–450 lei" },
      { name: "Urgență (consultație + calmarea durerii)", price: "200 lei" },
    ],
    accent: "#475569",
  },
  {
    slug: "implantologie",
    shortName: "Implanturi",
    title: "Implantologie Dentară",
    tagline: "Rădăcini artificiale, dinți stabili pe termen lung",
    heroKicker: "Înlocuire predictibilă a dinților lipsă",
    description:
      "Implante dentare pentru un dinte, mai mulți dinți sau arcade întregi. Planificare ghidată, materiale de calitate și un protocol de vindecare urmărit atent.",
    longDescription:
      "Implantul dentar înlocuiește rădăcina dintelui lipsă și susține o coroană, o punte sau o lucrare fixă pe mai mulți stâlpi. Succesul ține de os, de igienă, de fumat și de planificare. Folosim imagistică 3D, ghiduri chirurgicale acolo unde aduc precizie și o etapizare clară: inserare, vindecare, bont și coroană. Augmentările osoase se discută transparent, înainte de a începe.",
    benefits: [
      {
        title: "Un dinte sau o arcadă",
        text: "De la implant singular până la reconstrucții complete pe mai mulți stâlpi.",
      },
      {
        title: "Ghidaj digital",
        text: "Poziție, ax și adâncime calculate pe CBCT, nu „din ochi”.",
      },
      {
        title: "Conservarea osului",
        text: "Implantul stimulează osul și evită resorbția tipică după extracții netratate.",
      },
      {
        title: "Masticație stabilă",
        text: "Fără agrafe vizibile și fără alunecarea protezei mobile.",
      },
    ],
    steps: [
      {
        title: "Evaluare 3D",
        text: "CBCT, modele digitale și analiză a volumului osos și a sinusurilor.",
      },
      {
        title: "Plan chirurgical",
        text: "Alegem sistemul de implant, necesitatea augmentării și tipul de restaurare.",
      },
      {
        title: "Inserarea implantului",
        text: "Intervenție sub anestezie locală, cu sau fără ghid chirurgical.",
      },
      {
        title: "Vindecare",
        text: "Ostointegrare de câteva luni, cu controale și igienă specială.",
      },
      {
        title: "Coroana pe implant",
        text: "Bont personalizat și coroană ceramică / zirconiu, verificată în ocluzie.",
      },
    ],
    pricing: [
      { name: "Consultație implantologie + CBCT interpretare", price: "300 lei" },
      { name: "Implant dentar (inserare)", price: "de la 2.400 lei" },
      { name: "Bont + coroană pe implant", price: "de la 2.200 lei" },
      { name: "Sinus lift / augmentare osoasă", price: "de la 1.800 lei", note: "orientativ" },
    ],
    accent: "#0f766e",
  },
  {
    slug: "chirurgie",
    shortName: "Chirurgie",
    title: "Chirurgie Dentară",
    tagline: "Intervenții precise, recuperare urmărită",
    heroKicker: "Chirurgie orală minim invazivă",
    description:
      "Extracții, molari de minte incluși, rezecții, chistectomii și pregătire osoasă pentru implante — cu protocol de durere și edem controlat.",
    longDescription:
      "Chirurgia dentară rezolvă situațiile pe care tratamentul conservator nu le mai poate salva: dinți incluși, rădăcini restante, infecții periapicale persistente sau leziuni osoase. Lucrăm cu anestezie eficientă, suturi fine și instrucțiuni clare pentru primele 72 de ore. Când cazul o cere, colaborăm cu imagistica 3D pentru a evita structurile anatomice riscante.",
    benefits: [
      {
        title: "Extracții atraumatic",
        text: "Conservăm corticala și papilele, important dacă urmează un implant.",
      },
      {
        title: "Molari incluși",
        text: "Plan pe CBCT pentru nervul alveolar inferior și sinusul maxilar.",
      },
      {
        title: "Recuperare ghidată",
        text: "Schema de antiinflamatoare, gheață și alimentație, explicată pe loc.",
      },
      {
        title: "Urgențe chirurgicale",
        text: "Abcese, dinți fracturați subgingival, hemoragii post-extracție.",
      },
    ],
    steps: [
      {
        title: "Diagnostic",
        text: "Clinic + radiografie sau CBCT, evaluarea riscului nervos și sinusului.",
      },
      {
        title: "Pregătire",
        text: "Analize dacă e nevoie, medicație preoperatorie, consimțământ informat.",
      },
      {
        title: "Intervenția",
        text: "Anestezie, abord chirurgical, toaletă a plăgii și sutură.",
      },
      {
        title: "Control",
        text: "Suprimarea firelor și verificarea vindecării la 7–10 zile.",
      },
    ],
    pricing: [
      { name: "Extracție simplă", price: "250–400 lei" },
      { name: "Extracție molar de minte (erupt)", price: "450–650 lei" },
      { name: "Extracție molar inclus / semiinclus", price: "700–1.100 lei" },
      { name: "Rezecție apicală", price: "de la 800 lei" },
    ],
    accent: "#334155",
  },
  {
    slug: "estetica",
    shortName: "Estetică",
    title: "Estetică Dentară",
    tagline: "Formă, culoare și simetrie, fără exagerare",
    heroKicker: "Zâmbet proiectat, nu inventat",
    description:
      "Albire, fațete, coroane full-contour și reconturare gingivală. Estetica se construiește pe ocluzie sănătoasă și pe dinți tratați corect, nu doar pe un set de poze.",
    longDescription:
      "Un zâmbet reușit începe cu mock-up și fotografie, nu cu șlefuire. Propunem albire profesională, bonding conservator sau fațete din ceramică, în funcție de cât de mult vrem să schimbăm forma. Culoarea se alege la lumina zilei, iar gingia se respectă — un zâmbet „hollywood” care inflamează papilele nu este un succes. Demo-ul arată traseul clinic real, cu prețuri orientative.",
    benefits: [
      {
        title: "Mock-up înainte de șlefuire",
        text: "Vezi forma pe dinții tăi, în oglindă, înainte de a accepta planul.",
      },
      {
        title: "Albire controlată",
        text: "Protocol în cabinet sau gutiere, fără a arde smalțul.",
      },
      {
        title: "Fațete minimale",
        text: "Preparare subțire acolo unde se poate, ceramică stratificată.",
      },
      {
        title: "Armonie facială",
        text: "Linia mediană, expoziția incisivilor și coridorul buccal se măsoară, nu se ghicesc.",
      },
    ],
    steps: [
      {
        title: "Design de zâmbet",
        text: "Fotografii, scanare, wax-up digital și discuție despre așteptări.",
      },
      {
        title: "Mock-up",
        text: "Transferul formei pe dinți, ajustări de lungime și contur.",
      },
      {
        title: "Preparare și amprentă",
        text: "Șlefuire minimă, cordon gingival, scanare sau amprentă analogică.",
      },
      {
        title: "Cimentare",
        text: "Proba ceramicii, culoare de ciment și lustruire finală.",
      },
    ],
    pricing: [
      { name: "Albire profesională în cabinet", price: "1.200 lei" },
      { name: "Bonding estetic / dinte", price: "450–700 lei" },
      { name: "Fațetă ceramică / dinte", price: "de la 1.800 lei" },
      { name: "Coroană zirconiu estetică", price: "de la 1.600 lei" },
    ],
    accent: "#0e7490",
  },
  {
    slug: "parodontologie",
    shortName: "Paro",
    title: "Parodontologie",
    tagline: "Gingii stabile, os conservat, dinți păstrați",
    heroKicker: "Tratamentul bolii parodontale",
    description:
      "Diagnostic de parodontită, debridare în profunzime, chirurgie mucogingivală și mentenanță. Fără controlul gingiei, orice lucrare estetică sau implantar e fragilă.",
    longDescription:
      "Parodontita este o boală inflamatorie a țesuturilor de susținere. Măsurăm pungi, sângerare, recesii și mobilitate, apoi stabilim un protocol: igienizare, scaling și root planing, reevaluare și, dacă e nevoie, chirurgie de regenerare sau de acoperire a recesiilor. Mentenanța la 3–4 luni nu este opțională — este partea care ține rezultatul.",
    benefits: [
      {
        title: "Status parodontal complet",
        text: "Hărți de sondare, fotografii și radiografii comparative.",
      },
      {
        title: "Stoparea inflamației",
        text: "Debridare subgingivală, uneori cu adjuvant antiseptic.",
      },
      {
        title: "Estetică gingivală",
        text: "Grefă de conjunctiv, alungire coronară, simetrie a zâmbetului gingival.",
      },
      {
        title: "Bază pentru implante",
        text: "Nu inserăm implante într-o gură cu parodontită activă netratată.",
      },
    ],
    steps: [
      {
        title: "Diagnostic",
        text: "Sondare în 6 puncte / dinte, indici de igienă, radiografii.",
      },
      {
        title: "Faza cauzală",
        text: "Igienizare profesională și instruire, apoi scaling pe cadrane.",
      },
      {
        title: "Reevaluare",
        text: "La 6–8 săptămâni măsurăm din nou pungile și sângerarea.",
      },
      {
        title: "Faza corectivă + mentenanță",
        text: "Chirurgie acolo unde persistă pungi adânci, apoi rechemări strânse.",
      },
    ],
    pricing: [
      { name: "Status parodontal complet", price: "250 lei" },
      { name: "Scaling & root planing / cadran", price: "400 lei" },
      { name: "Chirurgie parodontală / zonă", price: "de la 1.200 lei" },
      { name: "Acoperire recesie (grefă)", price: "de la 1.500 lei" },
    ],
    accent: "#047857",
  },
  {
    slug: "pedodontie",
    shortName: "Copii",
    title: "Pedodonție",
    tagline: "Stomatologie pentru copii, fără grabă și fără teamă",
    heroKicker: "Primul contact cu dentistul contează",
    description:
      "Consultații prietenoase, sigilări, fluorurări, tratamentul cariilor pe dinți de lapte și pe dinții permanenți tineri, plus obiceiuri de igienă pentru acasă.",
    longDescription:
      "Pedodonția nu este stomatologie de adult „pe scaun mai mic”. Ritmul, limbajul și dozele de anestezie sunt adaptate vârstei. Punem accent pe prevenție: sigilări, fluor, controlul zahărului și periute corecte. Cariile pe dinții temporari se tratează — nu se așteaptă „să cadă singuri” dacă durerea sau infecția au apărut deja. Părintele rămâne partener, nu spectator confuz.",
    benefits: [
      {
        title: "Adaptare graduală",
        text: "Ședințe scurte, tell-show-do, fără forțarea copilului nepregătit.",
      },
      {
        title: "Prevenție întâi",
        text: "Sigilări de șanțuri, fluoruri și plan de igienă pe vârste.",
      },
      {
        title: "Dinți de lapte tratați",
        text: "Obturații, pulpotomii și menținătoare de spațiu când e cazul.",
      },
      {
        title: "Echipă cu ortodonția",
        text: "Depistăm inghesuiri, obiceiuri vicioase și momentul potrivit pentru aparat.",
      },
    ],
    steps: [
      {
        title: "Prima vizită",
        text: "Cunoașterea cabinetului, control scurt, fără tratament forțat.",
      },
      {
        title: "Plan preventiv",
        text: "Sigilări, fluor, periaj demonstrativ împreună cu părintele.",
      },
      {
        title: "Tratamente necesare",
        text: "Carii, infecții sau traumatisme, cu anestezie adaptată.",
      },
      {
        title: "Rechemări",
        text: "La 4–6 luni, mai des dacă riscul de carie este ridicat.",
      },
    ],
    pricing: [
      { name: "Consultație pedodonție", price: "120 lei" },
      { name: "Sigilare / dinte", price: "150 lei" },
      { name: "Obturație dinte temporar", price: "220–320 lei" },
      { name: "Fluorizare profesională", price: "120 lei" },
    ],
    accent: "#0369a1",
  },
  {
    slug: "ortodontie",
    shortName: "Orto",
    title: "Ortodonție & Aparate Dentare",
    tagline: "Aliniere, ocluzie și spațiu — la copii și la adulți",
    heroKicker: "Aparate metalice, estetice sau alignere",
    description:
      "Corectăm inghesuiri, spații, mușcături adânci sau inverse. Opțiuni: brackets metalici, ceramici și gutiere transparente, cu controale ritmice.",
    longDescription:
      "Ortodonția mută dinții în os cu forțe mici și continue. Înainte de aparat facem analize: fotografii, radiografie panoramică, teleradiografie dacă e nevoie și scanare. La copii urmărim și creșterea; la adulți lucrăm adesea împreună cu parodontologia și prostetica. Alignerele nu sunt magie — funcționează când cazul e bine selectat și gutierele se poartă 20–22h/zi.",
    benefits: [
      {
        title: "Mai multe sisteme",
        text: "Metal, ceramic, autoligaturant sau alignere, alese după caz, nu după modă.",
      },
      {
        title: "Ocluzie, nu doar „drepți”",
        text: "Ținta este mușcătura funcțională, nu doar linia vizibilă din față.",
      },
      {
        title: "Adulți bineveniți",
        text: "Tratamente la 30, 40 sau 50 de ani, cu respect pentru parodonțiu.",
      },
      {
        title: "Contenție inclusă în plan",
        text: "Fără contenție, dinții migrează înapoi. Planul include această etapă.",
      },
    ],
    steps: [
      {
        title: "Consultație ortodontică",
        text: "Evaluare de spațiu, simetrie, obiceiuri și așteptări.",
      },
      {
        title: "Analize",
        text: "Scanare, fotografii, radiografii, uneori CBCT pentru dinți incluși.",
      },
      {
        title: "Aplicarea aparatului",
        text: "Brackets sau prima serie de alignere, plus instrucțiuni de igienă.",
      },
      {
        title: "Controale și contenție",
        text: "Activări lunare, apoi gutieră / retainer fix după debonding.",
      },
    ],
    pricing: [
      { name: "Consultație + plan ortodontic", price: "250 lei" },
      { name: "Aparat metalic / arcadă", price: "de la 3.500 lei" },
      { name: "Aparat ceramic / arcadă", price: "de la 4.500 lei" },
      { name: "Alignere / caz complet", price: "de la 8.900 lei", note: "orientativ" },
    ],
    accent: "#4338ca",
  },
  {
    slug: "endodontie",
    shortName: "Canal",
    title: "Endodonție",
    tagline: "Tratament de canal precis, sub izolare și microscop",
    heroKicker: "Salvăm dintele, scoatem infecția",
    description:
      "Tratamente și retratamente de canal, cu izolarea dintelui, instrumentare mecanică, irigare activată și obturație tridimensională.",
    longDescription:
      "Endodonția tratează pulpa inflamată sau necrotică și infecțiile din jurul vârfului rădăcinii. Succesul depinde de găsirea tuturor canalelor, de curățarea lor și de o obturație etanșă, urmată de o restaurare coronară corectă. Lucrăm sub digă, cu radiografii de control sau localizator electronic de apex. Un dinte bine tratat endodontic poate rămâne ani buni pe arcadă — unul tratat „la repezeală” se reîmbolnăvește.",
    benefits: [
      {
        title: "Izolare obligatorie",
        text: "Diga de cauciuc ține canalul uscat și ferit de bacterii din salivă.",
      },
      {
        title: "Instrumentare modernă",
        text: "Ace rotative / reciproce, irigare cu hipoclorit și activare.",
      },
      {
        title: "Retratamente",
        text: "Scoatem obturații vechi, stâlpi și căutăm canale omise.",
      },
      {
        title: "Fără durere inutilă",
        text: "Anestezie eficientă; urgențele pulpite se calmează în aceeași ședință când e posibil.",
      },
    ],
    steps: [
      {
        title: "Diagnostic",
        text: "Teste de vitalitate, percuție, radiografie periapicală.",
      },
      {
        title: "Acces și izolare",
        text: "Diga, deschidere conservatoare, localizarea canalelor.",
      },
      {
        title: "Preparare și irigare",
        text: "Lungime de lucru, instrumentare, dezinfecție abundentă.",
      },
      {
        title: "Obturație și reconstrucție",
        text: "Sigilarea canalelor și restaurarea dintelui (obturație sau coroană).",
      },
    ],
    pricing: [
      { name: "Tratament de canal — monoradicular", price: "450–600 lei" },
      { name: "Tratament de canal — premolar", price: "650–800 lei" },
      { name: "Tratament de canal — molar", price: "850–1.100 lei" },
      { name: "Retratament / dinte", price: "+200–350 lei" },
    ],
    accent: "#b45309",
  },
  {
    slug: "radiologie",
    shortName: "3D / RX",
    title: "Radiologie Dentară & Imagistică 3D",
    tagline: "Diagnostic vizibil, doze mici, decizii clare",
    heroKicker: "CBCT, panoramic și radiografii periapicale",
    description:
      "Imagistică în clinică pentru planificare de implante, endodonție, chirurgie și ortodonție. Interpretare împreună cu medicul curant, nu doar un fișier pe stick.",
    longDescription:
      "Fără imagine bună, tratamentul e ghicitorie. Oferim radiografii retroalveolare, bitewing, panoramică și CBCT pe câmp mic sau mediu, în funcție de întrebarea clinică — nu „un 3D pentru toți”. Doza se ține jos prin colimare și protocoale pediatrice. Fișierele se pot exporta pentru colegi, iar pentru pacient explicăm pe ecran ce se vede, în limbaj simplu.",
    benefits: [
      {
        title: "CBCT la cerere clinică",
        text: "Câmp mic pentru un dinte sau implant, câmp mai larg pentru arcade.",
      },
      {
        title: "Panoramic de screening",
        text: "Vedere de ansamblu pentru molari incluși, sinusuri, articulații.",
      },
      {
        title: "Endo și paro",
        text: "Periapicale și bitewing pentru carii proximale și leziuni apicale.",
      },
      {
        title: "Export digital",
        text: "DICOM / JPEG pentru planificare ghidată și a doua opinie.",
      },
    ],
    steps: [
      {
        title: "Indicația",
        text: "Medicul alege tipul de imagine după întrebarea clinică, nu invers.",
      },
      {
        title: "Achiziția",
        text: "Poziționare, protecție, expunere scurtă, verificare calitate.",
      },
      {
        title: "Interpretare",
        text: "Citire pe loc, măsurători de os, canale, sinus, nerv.",
      },
      {
        title: "Arhivare",
        text: "Salvare în fișa pacientului și copiere pentru laborator sau ghid.",
      },
    ],
    pricing: [
      { name: "Radiografie retroalveolară", price: "50 lei" },
      { name: "Radiografie panoramică", price: "120 lei" },
      { name: "CBCT câmp mic (1–3 dinți)", price: "250 lei" },
      { name: "CBCT maxilar sau mandibular", price: "350 lei" },
      { name: "CBCT ambele arcade", price: "450 lei" },
    ],
    accent: "#0f172a",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceIndex(slug: string) {
  return services.findIndex((s) => s.slug === slug);
}
