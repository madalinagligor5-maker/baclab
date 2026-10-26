"""One-off transcription of the official 2026 national simulation rubric.
Source: docs/research/barem-simulare-2026.pdf, pp. 1-2.
Model answers remain authored examples; this does not assert specialist validation.
"""
import json
from pathlib import Path

path = Path("public/content/exams/bac-2026-simulare.json")
paper = json.loads(path.read_text())
paper["rubricSource"] = "https://cdn.edupedu.ro/wp-content/uploads/2026/03/E_d_bio_veg_anim_2026_bar_simulare_LRO.pdf"
paper["rubricVerified"] = True
paper["note"] = "Criteriile și punctajele au fost confruntate cu baremul oficial al simulării naționale 2026 (copie a documentului CNCE). Răspunsurile model sunt exemple redactate de autori; răspunsurile deschise se autoevaluează. Rezultatul este o notă de antrenament."

def criterion(label, points, allowed=None):
    result = {"id": "", "label": label, "points": points}
    if allowed is not None:
        result["allowed"] = allowed
    return result

C = criterion
rubrics = {
    "I.A.a": [C("Prima noțiune corectă", 2)],
    "I.A.b": [C("A doua noțiune corectă", 2)],
    "I.B.1": [C("Primul vas conducător corect", 1), C("Rolul corect al primului vas", 2)],
    "I.B.2": [C("Al doilea vas conducător corect, diferit de primul", 1), C("Rolul corect al celui de-al doilea vas", 2)],
    "II.A.a": [C("Boala numită corect", 1), C("O cauză corectă", 1), C("O manifestare corectă", 1), C("Prima măsură de prevenire", 1), C("A doua măsură de prevenire, diferită", 1)],
    "II.A.b": [C("Explicarea corectă a numărului mare de mitocondrii", 3)],
    "II.A.c": [C("Calcularea masei sângelui; 1 p doar pentru raționament corect fără calcule", 2, [0, 1, 2]), C("Calcularea masei plasmei; 1 p doar pentru raționament corect fără calcule", 2, [0, 1, 2]), C("Calcularea masei apei; 1 p doar pentru raționament corect fără calcule", 2, [0, 1, 2])],
    "II.A.d": [C("Formularea unei cerințe noi corecte", 2), C("Rezolvarea corectă a cerinței noi", 2)],
    "II.B.a": [C("Primul genotip: ooVv", 1), C("Al doilea genotip: Oovv", 1)],
    "II.B.b": [C("Primul tip de gameți: Ov", 1), C("Al doilea tip de gameți: ov", 1)],
    "II.B.c": [C("Procentul corect: 50%", 2), C("Primul genotip: OoVv", 1), C("Al doilea genotip: ooVv", 1)],
    "II.B.d": [C("Formularea unei cerințe noi corecte", 2), C("Rezolvarea corectă a cerinței noi", 2)],
    "III.1.a": [C("Localizarea corectă a rinichilor", 1), C("Prima caracteristică structurală", 1), C("A doua caracteristică structurală, diferită", 1)],
    "III.1.b": [C("Explicarea corectă a rolului stomatelor în transpirație", 3)],
    "III.1.c": [C("Primul enunț corect despre căile urinare", 2), C("Al doilea enunț corect despre căile urinare", 2), C("Primul enunț corect despre litiaza urinară", 2), C("Al doilea enunț corect despre litiaza urinară", 2)],
    "III.2.a": [C("Primul exemplu corect de mutație", 1), C("Al doilea exemplu corect, diferit", 1), C("Al treilea exemplu corect, diferit", 1)],
    "III.2.b": [C("Argumentul corect despre codominanță", 3)],
    "III.2.c": [*[C(f"Noțiunea {i} enumerată, specifică temei", 1) for i in range(1, 7)], C("Coerența textului și folosirea corectă în corelație a fiecărei noțiuni", 2), C("Respectarea lungimii: maximum trei-patru fraze", 2)],
}
for part in paper["parts"]:
    if part["kind"] == "af":
        part["weights"] = [4, 4, 2]
    if part["kind"] == "open":
        for sub in part["subs"]:
            entries = rubrics[f'{part["id"]}.{sub["id"]}']
            for i, entry in enumerate(entries):
                entry["id"] = str(i + 1)
            sub["rubric"] = entries
            sub["points"] = sum(entry["points"] for entry in entries)
        assert sum(sub["points"] for sub in part["subs"]) == part["points"]
path.write_text(json.dumps(paper, ensure_ascii=False, indent=1) + "\n")

# A/F correction must not merely negate the original sentence.
bank_path = Path("public/content/bank.json")
bank = json.loads(bank_path.read_text())
for item in bank["items"]:
    if item["id"] == "A01-SA01":
        item["correction"] = "Celula eucariotă are nucleu delimitat de membrană nucleară."
bank_path.write_text(json.dumps(bank, ensure_ascii=False, indent=1) + "\n")
