(function(){
 for(const id of ['glosario','actividades']) VentanaModal.registrar(id,async()=>{const p=document.createElement('p');p.textContent='Próximamente · Pendiente de contenido · En revisión documental';return {titulo:id==='glosario'?'Glosario':'Actividades',botonCerrar:'Cerrar ventana',secciones:[{id:'pendiente',pestana:'Estado',contenido:p}]};});
})();
