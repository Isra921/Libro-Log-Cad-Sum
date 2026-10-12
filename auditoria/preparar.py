from pathlib import Path
from lxml import etree,html
import zipfile,json,shutil,hashlib
root=Path.cwd(); src=Path(r'C:\Users\israe\Downloads\Mobile Devices')
for name,target in [('Logística y cadena de suministro_1.pdf','programa-logistica.pdf'),('Polilibro Logistica_y_Cadena 1.docx','contenido-logistica.docx')]:
 shutil.copy2(src/name,root/'assets/docs'/target)
 assert hashlib.sha256((src/name).read_bytes()).digest()==hashlib.sha256((root/'assets/docs'/target).read_bytes()).digest()
with zipfile.ZipFile(src/'Polilibro Logistica_y_Cadena 1.docx') as z:
 x=etree.fromstring(z.read('word/document.xml'));ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
 ps=[''.join(p.xpath('.//w:t/text()',namespaces=ns)) for p in x.xpath('//w:body/w:p | //w:body/w:tbl//w:p',namespaces=ns)]
pending='Próximamente · Pendiente de contenido'
p=Path('index.html');doc=html.fromstring(p.read_text(encoding='utf8'))
welcome=doc.xpath('//*[@class="welcome-content"]')[0]
for ch in list(welcome): welcome.remove(ch)
for text in ps[1:6]:
 el=etree.SubElement(welcome,'p');el.text=text
for section in doc.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," modal-section ")]'):
 ident=section.get('id');heading=section.xpath('.//h3')[0].text_content() if section.xpath('.//h3') else 'Pendiente'
 for ch in list(section):section.remove(ch)
 etree.SubElement(section,'h3').text=heading
 etree.SubElement(section,'p').text=pending+' · En revisión documental'
for el in doc.xpath('//*[@class="hero-stats"]/*'):el.getparent().remove(el)
for text in ['5 unidades en revisión','Programa académico disponible','Integración documental pendiente']:
 etree.SubElement(doc.xpath('//*[@class="hero-stats"]')[0],'span').text=text
for el in doc.xpath('//img[contains(@class,"hero-emblem-escom")]'):el.getparent().remove(el)
for el in doc.xpath('//script[contains(@src,"examen-diagnostico")]'):el.getparent().remove(el)
s=html.tostring(doc,encoding='unicode',doctype='<!DOCTYPE html>')
s=s.replace('Aplicaciones para Comunicaciones en Red','Logística y cadena de suministro').replace('Escuela Superior de Cómputo','Escuela Superior de Ingeniería Textil').replace('ESCOM - IPN','ESIT - IPN').replace('assets/img/ESCOMB.png','assets/img/IPNb.png')
p.write_text(s,encoding='utf8')
nav=json.loads(Path('assets/data/navegacion.json').read_text(encoding='utf8'));nav['marca']['titulo']='ESIT · Polilibro académico';nav['marca']['subtitulo']='Logística y cadena de suministro';nav['marca'].pop('logo_der',None)
Path('assets/data/navegacion.json').write_text(json.dumps(nav,ensure_ascii=False,indent=2),encoding='utf8')
auth=json.loads(Path('assets/data/autores.json').read_text(encoding='utf8'));auth['secciones'][0]['descripcion']='Autoría académica pendiente de confirmación.';auth['secciones'][0]['personas']=[];auth['secciones'][1]['titulo']='Créditos técnicos del proyecto base'
Path('assets/data/autores.json').write_text(json.dumps(auth,ensure_ascii=False,indent=2),encoding='utf8')
css=Path('assets/css/variables.css');s=css.read_text(encoding='utf8')
for a,b in {'#082F42':'#123C35','#123B5A':'#184A40','#184A70':'#20594C','#0B2F49':'#123C35','#2A6288':'#2C6557','#34719C':'#367867','#0A2A40':'#102F2A','#38BDF8':'#F0CB78','#7DD3FC':'#FFE0A0','#54D6C5':'#98E0C1'}.items():s=s.replace(a,b)
css.write_text(s,encoding='utf8')
# Preserve page shells; prevent all old academic routes from displaying inherited material.
for p in Path('unidades').rglob('*.html'):
 depth=len(p.parts)-1;prefix='../'*depth
 p.write_text('<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pendiente | Logística y cadena de suministro</title><link rel="stylesheet" href="'+prefix+'assets/css/comun.css"></head><body data-root="'+prefix+'"><header class="site-nav" data-componente="navegacion"></header><main style="max-width:900px;margin:140px auto;padding:24px"><h1>'+pending+'</h1><p>Integración pendiente de resolver las discrepancias entre el programa y el documento de contenido.</p><a href="'+prefix+'unidades.html">Volver a unidades</a></main><script src="'+prefix+'assets/js/data-manager.js"></script><script src="'+prefix+'assets/js/componentes.js"></script></body></html>',encoding='utf8')
# Temporary neutral catalog until the document ordering is approved.
for n in range(1,6):
 ident=f'unidad-{n:02}'
 Path(f'assets/data/unidades/{ident}.json').write_text(json.dumps({'id':ident,'numero':n,'titulo':f'Unidad {n} · En revisión documental','descripcion':pending,'temas':[]},ensure_ascii=False),encoding='utf8')
 p=Path(f'unidades/{ident}/index.html');p.parent.mkdir(parents=True,exist_ok=True)
 if not p.exists():shutil.copy2('unidades/unidad-01/index.html',p)
Path('assets/data/unidades-data.json').write_text(json.dumps({'titulo':'Unidades temáticas','descripcion':'Integración pendiente de resolver las discrepancias documentales.','unidades':[f'unidad-{n:02}' for n in range(1,6)]},ensure_ascii=False),encoding='utf8')
p=Path('unidades.html');p.write_text(p.read_text(encoding='utf8').replace('Aplicaciones para Comunicaciones en Red','Logística y cadena de suministro').replace('ESCOM-IPN','ESIT-IPN').replace('assets/img/ESCOMB.png','assets/img/IPNb.png'),encoding='utf8')
with Path('assets/css/unidades.css').open('a',encoding='utf8') as f:f.write('\n/* Center incomplete rows and preserve the existing list view. */\n.u-units:not(.is-list){display:flex;flex-wrap:wrap;justify-content:center}.u-units:not(.is-list)>.u-unit-card{flex:0 1 calc((100% - 48px)/3);min-width:min(100%,300px)}\n')
# Welcome text comparison is exact at paragraph level.
check=html.fromstring(Path('index.html').read_text(encoding='utf8'))
assert [p.text_content() for p in check.xpath('//*[@class="welcome-content"]/p')]==ps[1:6]
Path('auditoria/estado.json').write_text(json.dumps({'bienvenida':'5 párrafos cotejados literalmente contra OOXML','fuentes':'PDF y DOCX copiados con SHA-256 idéntico','unidades':'Pendientes de decisión; no incorporadas','verificacion_integral':'Pendiente'},ensure_ascii=False,indent=2),encoding='utf8')
print('Cambios independientes preparados. Bienvenida cotejada; fuentes idénticas.')
