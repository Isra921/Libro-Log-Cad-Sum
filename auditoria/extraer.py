import pathlib,zipfile,json
from lxml import etree
from pypdf import PdfReader
root=pathlib.Path('.')
src=pathlib.Path(r'C:\Users\israe\Downloads\Mobile Devices')
pdf=PdfReader(src/'Logística y cadena de suministro_1.pdf').pages
(root/'auditoria/plan.txt').write_text('\n\n'.join(f'PÁGINA {i+1}\n'+p.extract_text() for i,p in enumerate(pdf)),encoding='utf8')
with zipfile.ZipFile(src/'Polilibro Logistica_y_Cadena 1.docx') as z:
 x=etree.fromstring(z.read('word/document.xml')); ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
 paragraphs=[''.join(p.itertext()) for p in []]
 paragraphs=[''.join(p.xpath('.//w:t/text()',namespaces=ns)) for p in x.xpath('//w:body/w:p | //w:body/w:tbl//w:p',namespaces=ns)]
 (root/'auditoria/contenido.txt').write_text('\n'.join(f'{i}: {p}' for i,p in enumerate(paragraphs)),encoding='utf8')
 print('PDF pages',len(pdf),'paragraphs',len(paragraphs),'images',len([n for n in z.namelist() if n.startswith('word/media/')]))

