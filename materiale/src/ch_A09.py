from lib import *

CH = dict(
meta=dict(id="A09", title="Respirația: aerobă, anaerobă, fermentații", module="A",
  sources=["Fișe sinteză 2012, p.47–48"],
  concepts=["respirația = oxidarea substanțelor organice cu eliberare de energie (ATP)", "aerobă: ecuația, mitocondrii", "anaerobă: oxidare parțială, fără O2", "fermentații: alcoolică, lactică, acetică (aerobă)",
            "respirația la plante; evidențiere (substanță organică consumată, O2 consumat, CO2 produs)"],
  bac_slots=["I.A", "I.C", "I.D", "III.1"], prereq=["A01", "A06"], big_ideas=["energie"]),

gr=[
 G("Ecuația respirației aerobe", "Ecuația chimică a respirației aerobe este:",
   ["6CO2 + 6H2O → C6H12O6 + 6O2", "C6H12O6 + 6O2 → 6CO2 + 6H2O + energie", "C6H12O6 → 2C2H5OH + 2CO2 + energie", "C2H5OH + O2 → CH3COOH + H2O"], 1,
   "Oxidarea completă a glucozei, în prezența oxigenului, cu eliberare de energie stocată în ATP.", {0: "M15", 2: "M19", 3: "M19"}, "C", 1, "Fișe p.47"),
 G("Locul respirației", "Respirația aerobă celulară se desfășoară în:", ["cloroplaste", "mitocondrii", "ribozomi", "nucleu"], 1,
   "Mitocondriile sunt sediul respirației celulare.", {0: "M06", 2: "M06", 3: "M06"}, "C", 1, "Fișe p.47"),
 G("Respirația anaerobă", "Respirația anaerobă:", ["are loc în prezența oxigenului", "constă în oxidarea parțială a substanțelor organice", "eliberează o cantitate mare de energie", "este caracteristică păsărilor"], 1,
   "Oxidarea este incompletă, energia eliberată este mică; caracteristică ciupercilor, bacteriilor, temporar țesuturilor plantelor superioare inundate.", {0: "M19", 2: "M19", 3: "M19"}, "C", 1, "Fișe p.47"),
 G("Fermentația alcoolică", "Fermentația alcoolică este produsă de:", ["bacteriile lactice", "drojdii", "bacteriile acetice", "cianobacterii"], 1,
   "Glucoza este transformată în alcool etilic; aplicații: pâine și băuturi alcoolice.", {0: "M19", 2: "M19", 3: "M19"}, "C", 1, "Fișe p.48"),
 G("Fermentația lactică", "Prin fermentație lactică glucoza se transformă în:", ["alcool etilic", "acid lactic", "acid acetic", "CO2 și apă"], 1,
   "Agenți: bacteriile lactice; aplicații: acrirea laptelui, murături.", {0: "M19", 2: "M19", 3: "M19"}, "C", 1, "Fișe p.48"),
 G("Fermentația acetică", "Fermentația acetică:", ["este un proces anaerob", "transformă alcoolul etilic în acid acetic în prezența O2", "este produsă de drojdii", "transformă glucoza în acid lactic"], 1,
   "Este atipică, fiind aerobă; agenți: bacterii acetice (Mycoderma aceti); aplicație: oțetul.", {0: "M19", 2: "M19", 3: "M19"}, "C", 2, "Fișe p.48"),
 G("Evidențierea respirației", "Respirația la plante poate fi evidențiată după:", ["O2 eliberat", "CO2 produs", "substanța organică sintetizată", "CO2 absorbit"], 1,
   "Se evidențiază după consumul de substanță organică, consumul de O2 și CO2 produs.", {0: "M15", 2: "M15", 3: "M15"}, "A", 2, "Fișe p.47"),
 G("Energie", "Energia eliberată în respirație este înmagazinată în:", ["clorofilă", "ATP", "amidon", "ADN"], 1,
   "ATP (adenozintrifosfat) este substanță macroergică.", {0: "M06", 2: "M06", 3: "M06"}, "C", 1, "Fișe p.47"),
 G("Respirația plantelor", "Respirația este intensă la plante în:", ["rădăcinile mature lignificate", "frunze, flori, meristeme active", "cuticula frunzei", "vasele lemnoase"], 1,
   "Respirația se dezvoltă cu intensitate la nivelul frunzelor, florilor, meristemelor active.", {0: "M19", 2: "M19", 3: "M19"}, "C", 2, "Fișe p.48"),
],

af=[
 AF("Fermentații", "Fermentația acetică este un proces anaerob.", False, "Fermentația acetică este un proces aerob.", "Alcoolul etilic se transformă în acid acetic în prezența oxigenului.", "M19"),
 AF("Respirația aerobă", "În respirația aerobă oxidarea substanțelor organice este completă.", True, None, "Produși finali: CO2 și apă."),
 AF("Respirația anaerobă", "Respirația anaerobă eliberează mai multă energie decât cea aerobă.", False, "Respirația aerobă eliberează mai multă energie decât cea anaerobă.", "Aerobă ~675 kcal; anaerobă 16–34 kcal.", "M19"),
 AF("Drojdii", "Drojdia de bere realizează fermentația alcoolică.", True, None, "Aplicații: pâine, băuturi alcoolice."),
],

cp=[
 CP("Respirația", "Respirația aerobă are loc în prezența ............ și se desfășoară în ............ .", ["oxigenului", "mitocondrii"]),
 CP("Fermentații", "La microorganisme, respirația anaerobă se numește ............ .", ["fermentație"]),
],

ex=[
 EX("Fermentații", "Dați două exemple de fermentații; scrieți câte un agent și o aplicație.",
    [("fermentația alcoolică", "drojdii; pâine, băuturi alcoolice"), ("fermentația lactică", "bacterii lactice; iaurt, murături"), ("fermentația acetică", "bacterii acetice; oțet")]),
],

st=[
 ST("Respirația aerobă", "III.1.b", "Explicați de ce respirația aerobă eliberează mai multă energie decât fermentația.",
    "În respirația aerobă oxidarea substanțelor organice este completă (până la CO2 și apă), în prezența oxigenului; în fermentație oxidarea este parțială și rămân substanțe organice, deci energia eliberată este mică.",
    ["oxidare completă vs parțială", "prezența/absența O2"], "U", 2),
 ST("Respirația", "II.A.b", "Scrieți ecuația chimică a respirației aerobe și precizați unde se desfășoară.",
    "C6H12O6 + 6O2 → 6CO2 + 6H2O + energie (675 kcal); în mitocondrii.", ["ecuația corectă", "mitocondrii"], "C", 1),
],

en=[
 EN("Respirația", "Construiți patru enunțuri afirmative, câte două pentru fiecare conținut: respirația aerobă; fermentația lactică.",
    ["Respirația aerobă", "Fermentația lactică"],
    ["Respirația aerobă se desfășoară în mitocondrii.", "Respirația aerobă eliberează energie stocată în ATP.",
     "Fermentația lactică este produsă de bacterii lactice.", "Fermentația lactică transformă glucoza în acid lactic."]),
],

me=[
 ME("Respirația", "Respirația celulară", ["mitocondrie", "glucoză", "oxigen", "ATP", "dioxid de carbon", "energie"],
    "Respirația celulară are loc în mitocondrii, unde glucoza este oxidată în prezența oxigenului. Rezultă dioxid de carbon și apă, iar energia eliberată este stocată în ATP."),
],

gl=[
 ("respirație", "Oxidarea substanțelor organice la nivel celular, cu eliberare de energie (ATP)."),
 ("respirație aerobă", "Oxidare completă cu O2; produși CO2 și apă; mitocondrii."),
 ("respirație anaerobă", "Oxidare parțială, fără O2; energie mică."),
 ("fermentație", "Respirație anaerobă la microorganisme."),
 ("fermentație alcoolică", "Glucoză → alcool etilic; drojdii."),
 ("fermentație lactică", "Glucoză → acid lactic; bacterii lactice."),
 ("fermentație acetică", "Alcool etilic → acid acetic; aerob; bacterii acetice."),
 ("oxihemoglobină", "Compus instabil al hemoglobinei cu oxigenul."),
],

cd=[
 ("Ecuația respirației aerobe?", "C6H12O6 + 6O2 → 6CO2 + 6H2O + energie."),
 ("Unde are loc respirația aerobă?", "În mitocondrii."),
 ("Care fermentație este aerobă?", "Fermentația acetică."),
 ("Exemple de aplicații ale fermentațiilor?", "Pâine/băuturi (alcoolică); iaurt/murături (lactică); oțet (acetică)."),
],

cmp=[
 dict(title="Fermentații", cols=["Tip", "Agent", "Substrat → produs", "Aplicație", "O2"],
      rows=[["alcoolică", "drojdii", "glucoză → alcool etilic", "pâine, băuturi alcoolice", "fără O2"], ["lactică", "bacterii lactice", "glucoză → acid lactic", "lapte acru, murături", "fără O2"],
            ["acetică", "bacterii acetice", "alcool etilic → acid acetic", "oțet", "cu O2"]]),
],
)
