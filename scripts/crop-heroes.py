from pathlib import Path
from PIL import Image

base = Path(__file__).resolve().parents[1]
src = base / "mockups"
out = base / "public" / "heroes"
out.mkdir(parents=True, exist_ok=True)

jobs = [
    ("hf_20260914_084914_70876102-7796-4374-bcc2-aa8a91917831.png", "fast-fixed", (0.40, 0.08, 0.68, 0.38)),
    ("hf_20260914_085017_5bcdad2e-1471-4333-a47c-3af231b8829f.png", "stomatologie-generala", (0.40, 0.08, 0.70, 0.38)),
    ("hf_20260914_085228_64e52415-9f6c-49d5-9d09-3f509cf4c803.png", "implantologie", (0.40, 0.07, 0.70, 0.38)),
    ("hf_20260914_085351_cfd7b8b6-9910-4bf9-ad63-30260553a23d.png", "chirurgie", (0.38, 0.07, 0.68, 0.36)),
    ("hf_20260914_085717_cd7725f5-18ab-41d6-a64a-a0f5c5c58246.png", "estetica", (0.40, 0.07, 0.68, 0.38)),
    ("hf_20260914_085751_9972c052-ed9c-4ff1-8c63-b8a8439a320e.png", "parodontologie", (0.40, 0.07, 0.70, 0.38)),
    ("hf_20260914_090100_4e72a6b2-aa94-4ef7-a51f-02a54dec0cba.png", "pedodontie", (0.42, 0.05, 0.88, 0.32)),
    ("hf_20260914_090130_bd843314-0eb4-4fde-9277-75932698bebf.png", "ortodontie", (0.40, 0.07, 0.70, 0.38)),
    ("hf_20260914_090210_43f3f32a-4869-4d22-ba65-96d8248619a9.png", "endodontie", (0.40, 0.07, 0.70, 0.38)),
    ("hf_20260914_090244_35cebfe4-4e6b-42fe-9e41-90b50f9fd35f.png", "radiologie", (0.40, 0.06, 0.78, 0.36)),
]

for name, slug, box in jobs:
    im = Image.open(src / name).convert("RGB")
    w, h = im.size
    l, t, r, b = box
    crop = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    crop.thumbnail((1400, 900), Image.Resampling.LANCZOS)
    dest = out / f"{slug}.jpg"
    crop.save(dest, "JPEG", quality=86, optimize=True)
    webp = out / f"{slug}.webp"
    if webp.exists():
        webp.unlink()
    print(slug, crop.size, dest.stat().st_size)
