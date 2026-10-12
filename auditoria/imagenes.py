from pypdf import PdfReader
from pathlib import Path
r=PdfReader(r'C:\Users\israe\Downloads\Mobile Devices\Logística y cadena de suministro_1.pdf')
for i,p in enumerate(r.pages):
 for j,img in enumerate(p.images):
  Path(f'auditoria/plan-{i+1}-{j}.{img.name.split(".")[-1]}').write_bytes(img.data)
