import os
from pathlib import Path
from pdf2image import convert_from_path

INPUT_DIR = Path("CETCam_videos/camera_images")
OUTPUT_DIR = Path("CETCam_videos/camera_images_jpg")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def convert_pdfs(input_dir, output_dir, output_format="jpg"):
    for pdf_path in input_dir.rglob("*.pdf"):
        print(f"Processing: {pdf_path}")

        # Convert all pages in the PDF
        images = convert_from_path(str(pdf_path))

        for i, img in enumerate(images):
            out_name = f"{pdf_path.stem}_page{i+1}.{output_format}"
            out_path = output_dir / out_name

            img.save(out_path)
            print(f"Saved: {out_path}")

    print("Done.")

convert_pdfs(INPUT_DIR, OUTPUT_DIR, output_format="jpg")
