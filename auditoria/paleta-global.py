from pathlib import Path
import re
p=Path('assets/css/variables.css');s=p.read_text(encoding='utf8');v={'bg-deep':'#E8F1FC','bg-main':'#F5F9FF','bg-section':'#D4E4F8','bg-hero':'#E8F1FC','surface':'#FFFFFF','surface-hover':'#DCEBFC','footer-bg':'#D4E4F8','primary':'#17477E','primary-hover':'#0C2D56','secondary':'#17477E','secondary-hover':'#0C2D56','accent':'#2765A5','accent-hover':'#17477E','cta-color':'#FFFFFF','cta-hover':'#FFFFFF','text-light':'#123461','text-muted-light':'#3D5878','text-soft':'#243F60','title-mid':'#17477E','title-end':'#2765A5','icon-blue':'#17477E','icon-teal':'#2765A5','scroll-thumb':'#8BAED7'}
for k,x in v.items():s=re.sub(r'(--'+re.escape(k)+r':)\s*[^;]+;',r'\1 '+x+';',s)
p.write_text(s,encoding='utf8')
p=Path('assets/css/inicio.css');s=p.read_text(encoding='utf8');s=s.split('/* Identidad ESIT: imagen original transparente sobre azul claro. */')[0];s=s.replace('background:#fff;padding:8px;border-radius:16px','background:transparent;padding:0;border-radius:0').replace('background-color:#fff!important','background-color:transparent!important').replace('color: #FFFFFF !important','color: var(--text-light) !important');s+='\n/* El encabezado conserva su estructura original, sin tarjeta independiente. */\n.hero-emblem-ipn{filter:brightness(0) saturate(100%) invert(17%) sepia(32%) saturate(1852%) hue-rotate(179deg) brightness(94%) contrast(94%)}\n';p.write_text(s,encoding='utf8')
p=Path('assets/css/comun.css');s=p.read_text(encoding='utf8');s+='\nhtml{color-scheme:light}.site-nav .brand .brand-logo--esit{filter:none!important;background:transparent!important}.brand-logo--ipn{filter:brightness(0) saturate(100%) invert(17%) sepia(32%) saturate(1852%) hue-rotate(179deg) brightness(94%) contrast(94%)}\n';p.write_text(s,encoding='utf8')
# Refresh style URLs so the preview uses the complete palette immediately.
for p in Path('.').rglob('*.html'):
 if 'auditoria' in p.parts:continue
 s=p.read_text(encoding='utf8-sig' .replace('utf8','utf-8'))
 s=re.sub(r'(assets/css/[\w-]+\.css)(?:\?[^"\s]*)?',r'\1?v=paleta4',s)
 p.write_text(s,encoding='utf8')
