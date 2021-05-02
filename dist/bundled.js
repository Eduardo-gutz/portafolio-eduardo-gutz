(()=>{"use strict";var e={191:e=>{e.exports=JSON.parse('[{"name":"Targeta de Preguntas Frecuentes","images":{"desktop":"faq_accordion_desktop.jpg","tablet":"faq_accordion_ipad.jpg","mobile":"faq_accordion_mobile.jpg"},"url":"https://eduardo-gutz.github.io/faq_accordion/","tecs":{"javascript":"20%","html":"40%","css":"40%"},"description":"El acordeon de preguntas frecuentes es un proyecto personal tomado de la pagina de <a href=\'frontendmentor.io\'>frontend mentor</a>, el diseño y el desarrollo es adaptable a telefonos, tablets, y computadoras, usé html y css para la maquetacion y javascript para la interaccion del usuario con las preguntas.</br></br>El usuario puede:</br></br>Ver el diseño óptimo para el componente según el tamaño de pantalla de su dispositivo</br>Ver estados de \'hover\' para todos los elementos interactivos en la página</br>Ocultar / mostrar la respuesta a una pregunta cuando se hace clic en la pregunta"},{"name":"Todo app","images":{"desktop":"todo-app_desktop.jpg","tablet":"todo-app_ipad.jpg","mobile":"todo-app_mobile.jpg"},"url":"https://eduardo-gutz.github.io/todo-app/","tecs":{"javascript":"20%","html":"40%","css":"40%"},"description":"Tome el proyecto de frontend mentor para practicar el uso del framework vuejs.<br/><br/>El usuario puede:<br/><br/>Ver el diseño óptimo para la aplicación según el tamaño de la pantalla de su dispositivo<br/>Ver estados de hover para todos los elementos interactivos en la página<br/>Agregar nuevos todos a la lista<br/>Marcar las tareas como completas<br/>Eliminar tareas de la lista<br/>Filtrar por tareas activas / tareas completas<br/>Borrar todos las tareas completadas<br/>Alternar modo claro y oscuro"},{"name":"Shortly Acortador de URL","images":{"desktop":"shorten-url_desktop.jpg","tablet":"shorten-url_ipad.jpg","mobile":"shorten-url_mobile.jpg"},"url":"https://eduardo-gutz.github.io/shorten-url/","tecs":{"javascript":"20%","html":"30%","css":"50%"},"description":"este es un proyecto personal en el cual hice uso de html y css para la maquetacion y javascript para la interacion del usuario, el proyecto fue tomado de la pagina de <a href=\'frontendmentor.io\'>frontend mentor</a>, integre la <a href=\'app.shrtco.de\'>API shrtcode</a> como pedia en el brief del proyecto y guardo los url\'s acortados en el navegador, el diseño es adaptable a cualquier dispositivo.</br></br>El usuario puede:</br></br>Ver el diseño óptimo para el sitio según el tamaño de pantalla de su dispositivo</br>Acorta cualquier URL válida</br>Ver una lista de sus enlaces abreviados, incluso después de actualizar el navegador</br>Copie el enlace abreviado a su portapapeles con un solo clic</br>Reciba un mensaje de error cuando se envíe el form si el campo de entrada esta vacio"},{"name":"Easybank Pagina de Inicio","images":{"desktop":"easybank_desktop.jpg","tablet":"easybank_ipad.jpg","mobile":"easybank_mobile.jpg"},"url":"https://eduardo-gutz.github.io/easybank/","tecs":{"javascript":"","html":"","css":""},"description":"Proyecto personal tomado de <a href=\'frontendmentor.io\'>frontend mentor</a> es un proyecto sencillo de una pagina estatica donde uso el javascript solo para la funcionalidad del boton del menu en el tamaño de pantalla movil y tablet, el resto es solo maquetacion e html y css.</br></br>El usuario puede:</br></br>Ver el diseño óptimo para el sitio según el tamaño de pantalla de su dispositivo</br>Ver estados de \'hover\' para todos los elementos interactivos en la página"},{"name":"Targeta de Perfil","images":{"desktop":"profile_card_desktop.jpg","tablet":"profile_card_ipad.jpg","mobile":"profile_card_mobile.jpg"},"url":"https://eduardo-gutz.github.io/profile_card_component/","tecs":{"javascript":"","html":"","css":""},"description":"Es un proyecto muy sencillo, unicamente es un desarrolo en html y css 100% adaptativo a tamaños de pantalla. El desafío consiste en construir esta targeta de perfil y hacer que se parezca lo más posible al diseño."}]')}},t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p;const e=document.querySelector("#slider"),t=document.querySelectorAll(".slider__img"),o=t[t.length-1];e&&e.insertAdjacentElement("afterbegin",o);const r=()=>{const t=document.querySelectorAll("#slider > img")[0];e.style.marginLeft="-200%",e.style.transition="all 0.5s",setTimeout((()=>{e.style.transition="none",e.insertAdjacentElement("beforeend",t),e.style.marginLeft="-100%"}),500)},s=()=>{const a=document.querySelectorAll("#slider > img")[t.length-1];e.style.marginLeft="0",e.style.transition="all 0.5s",setTimeout((()=>{e.style.transition="none",e.insertAdjacentElement("afterbegin",a),e.style.marginLeft="-100%"}),500)},n=a(191),l=document.location.pathname,i=document.getElementById("nav-bar__modal"),c=document.getElementById("tooltip");function d(e){e.preventDefault();const t=document.createElement("input");t.value=this.textContent,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),c.textContent=`${this.id} copiado!`,c.style.display="block",setTimeout((()=>{c.style.opacity="1"}),10),setTimeout((()=>{c.style.opacity="0",setTimeout((()=>{c.style.display="none"}),300)}),3e3)}if("/"===l){const e=document.querySelectorAll(".exercise__preview"),t=document.getElementById("modalExercise"),a=document.getElementById("closeModal"),o=document.getElementById("iframe"),r=()=>{t.style.opacity="0",setTimeout((()=>{t.style.display="none"}),500)},s=e=>{o.src=`./exercises/${e}.html`,t.style.display="flex",setTimeout((()=>{t.style.opacity="1"}),100)};e.forEach((e=>e.addEventListener("click",(()=>{s(e.name)})))),a.addEventListener("click",r)}/project.html/.test(l)&&function(e){const t=document.getElementById("project"),a=document.querySelector("#left"),o=document.querySelector("#right"),n=document.querySelectorAll(".button__page");let{hash:l}=document.location,i=l[l.length-1];l="#index=2";const c=()=>{const a=e[i];t.querySelector(".title").innerHTML=a.name;const o=t.querySelectorAll(".slider__img");o[1].src=`./images/${a.images.desktop}`,o[2].src=`./images/${a.images.tablet}`,o[0].src=`./images/${a.images.mobile}`,t.querySelector(".card__text").innerHTML=a.description,t.querySelector(".button").href=a.url},d=e=>{i=e.target.textContent-1,l=`#index=${i}`,c(),n.forEach((e=>{e.classList.remove("button_active")})),e.target.classList.add("button_active"),document.location=`${document.location.pathname}${l}`};a.addEventListener("click",s),o.addEventListener("click",r),n.forEach((e=>{e.textContent-1==i&&e.classList.add("button_active"),e.addEventListener("click",d)})),c()}(n),document.getElementById("burger").addEventListener("click",(e=>{e.preventDefault(),function(e){const t=e;"translateX(100%)"===t.style.transform|""===e.style.transform?t.style.transform="translateX(0)":t.style.transform="translateX(100%)"}(i)})),document.addEventListener("scroll",(()=>{!function(e){const t=e;"translateX(0px)"===t.style.transform&&(t.style.transform="translateX(100%)")}(i)})),document.getElementById("Numero").addEventListener("click",d),document.getElementById("E-mail").addEventListener("click",d)})()})();