from pathlib import Path
import json,re
p=Path('assets/css/variables.css');s=p.read_text(encoding='utf8')
colors={'bg-deep':'#0B2345','bg-main':'#123461','bg-section':'#173F73','bg-hero':'#102E58','surface':'#214D80','surface-hover':'#2C6097','footer-bg':'#081D3B','primary':'#FFFFFF','primary-hover':'#DCEAFF','secondary':'#FFFFFF','secondary-hover':'#DCEAFF','accent':'#B9D6FF','accent-hover':'#E4EFFF','cta-color':'#123461','cta-hover':'#0B2345','title-end':'#DCEAFF','icon-blue':'#DCEAFF','icon-teal':'#B9D6FF'}
for key,value in colors.items(): s=re.sub(r'(--'+re.escape(key)+r':)\s*[^;]+;',r'\1 '+value+';',s)
s=s.replace('Comunicaciones en Red','Logística y cadena de suministro').replace('Azul cielo vibrante de alto contraste (WCAG AAA)','Blanco institucional').replace('Turquesa / aguamarina de acento e iconografía','Azul claro de acento e iconografía')
p.write_text(s,encoding='utf8')
p=Path('assets/data/navegacion.json');d=json.loads(p.read_text(encoding='utf-8-sig'));d['marca']['logo_der']={'src':'assets/img/esit.png','alt':'Escuela Superior de Ingeniería Textil','clase':'brand-logo--esit'};p.write_text(json.dumps(d,ensure_ascii=False,indent=2),encoding='utf8')
p=Path('index.html');s=p.read_text(encoding='utf8');s=s.replace('<div aria-label="Identidad institucional"', '<img alt="Escuela Superior de Ingeniería Textil" class="hero-emblem hero-emblem-escom hero-emblem-esit" src="assets/img/esit.png">\n<div aria-label="Identidad institucional"');s=s.replace('href="assets/img/IPNb.png"','href="assets/img/esit.png"');p.write_text(s,encoding='utf8')
p=Path('assets/css/comun.css');s=p.read_text(encoding='utf8');s+='\n/* Logo ESIT original, con fondo blanco para preservar su contraste. */\n.brand-logo--esit{width:52px!important;height:52px!important;object-fit:contain;background:#fff;padding:3px;border-radius:8px;opacity:1!important;filter:none!important;flex-shrink:0}\n';p.write_text(s,encoding='utf8')
p=Path('assets/css/inicio.css');s=p.read_text(encoding='utf8');s+='\n.hero-emblem-esit{width:180px;height:180px;background:#fff;padding:8px;border-radius:16px;opacity:1;filter:none;object-fit:contain}\n@media(max-width:900px){.hero-emblem-esit{width:140px;height:140px}}\n@media(max-width:600px){.hero-emblem-esit{width:112px;height:112px}}\n';p.write_text(s,encoding='utf8')
p=Path('ESTADO-INTEGRACION.md');s=p.read_text(encoding='utf-8-sig').replace('Paleta verde oscuro y acento dorado.','Paleta azul y blanco conforme al logo ESIT proporcionado. Logo original incorporado en portada y navegación sobre fondo blanco.');p.write_text(s,encoding='utf8')

