!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),r=a("2TvXO"),s=a("6JpON");function l(){s.Loading.pulse({svgColor:"rgb(236, 248, 5)"})}function c(e,t){return e.map((function(e){var n=e.id,i=e.title,a=e.poster_path,o=e.genre_ids,r=e.release_date;if(a){var s=new Date(r).getFullYear(),l=t.filter((function(e){return o.includes(e.id)})).map((function(e){return e.name})).slice(0,3).join(", ");return'<li class="gallery__item" id="'.concat(n,'">\n        <div class="gallery__film-box">\n          <img src="').concat("https://image.tmdb.org/t/p/w500").concat(a,'" alt="').concat(i,'" class="gallery__film-poster"/>\n          <button type="button" class="gallery__trailer">\n            <span class="trailer-text">Watch trailer</span>\n          </button>\n        </div>\n        <div class="gallery__title-box">\n          <h2 class="gallery__title-film">').concat(i,'</h2>\n          <h3 class="gallery__genre-film">').concat(l," | ").concat(s,"</h3>\n        </div>\n      </li>")}}))}var u,m,f={};u=void 0!==t?t:"undefined"!=typeof window?window:f,m=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",a="Circle",o="Arrows",r="Dots",s="Pulse",l="Custom",c="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},m=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},f=function(t){return t||(t="head"),null!==e.document[t]||(m('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},d=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=d(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},h=function(c,p,h,y,b){if(!f("body"))return!1;t||v.Loading.init({});var w=d(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof h&&!Array.isArray(h)){var x={};"object"==typeof p?x=p:"object"==typeof h&&(x=h),t=d(!0,t,x)}var k,N,L="";if("string"==typeof p&&p.length>0&&(L=p),y){var S="";(L=L.length>t.messageMaxLength?g(L).toString().substring(0,t.messageMaxLength)+"...":g(L).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+L+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var C="";if(c===n)k=t.svgSize,N=t.svgColor,k||(k="60px"),N||(N="#32c682"),C='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+N+'" width="'+k+'" height="'+k+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)C=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)C='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return m('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;C=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var M=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),T=e.innerWidth,z=M>=T?T-40+"px":M+"px",_='<div style="width:'+z+"; height:"+z+';" class="'+t.className+"-icon"+(L.length>0?" nx-with-message":"")+'">'+C+"</div>",E=e.document.createElement("div");E.id=u.ID,E.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),E.style.zIndex=t.zindex,E.style.background=t.backgroundColor,E.style.animationDuration=t.cssAnimationDuration+"ms",E.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",t.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=_+S,e.document.getElementById(E.id)||(e.document.body.appendChild(E),t.clickToClose&&e.document.getElementById(E.id).addEventListener("click",(function(){E.classList.add("nx-remove");var e=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(u.ID))var j=e.document.getElementById(u.ID),D=setTimeout((function(){j.classList.add("nx-remove");var e=setTimeout((function(){null!==j.parentNode&&(j.parentNode.removeChild(j),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(D)}),b);t=d(!0,t,w)},v={Loading:{init:function(n){t=d(!0,u,n),function(t,n){if(!f("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return m("You have to initialize the Loading module before call Merge function."),!1;t=d(!0,t,e)},standard:function(e,t){h(n,e,t,!0,0)},hourglass:function(e,t){h(i,e,t,!0,0)},circle:function(e,t){h(a,e,t,!0,0)},arrows:function(e,t){h(o,e,t,!0,0)},dots:function(e,t){h(r,e,t,!0,0)},pulse:function(e,t){h(s,e,t,!0,0)},custom:function(e,t){h(l,e,t,!0,0)},notiflix:function(e,t){h(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),h(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(u.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else m("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?d(!0,e.Notiflix,{Loading:v.Loading}):{Loading:v.Loading}},"function"==typeof define&&define.amd?define([],(function(){return m(u)})):"object"==typeof f?f=m(u):u.Notiflix=m(u);o=a("bpxeT"),r=a("2TvXO");var d=a("b7ONl"),g=document.querySelector(".upward");function p(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){g.classList.toggle("upward-active",window.scrollY>500)})),g.addEventListener("click",p);var h=new(0,d.default),v=document.querySelector(".gallery"),y=document.querySelector(".gallery__list");function b(){return b=e(o)(e(r).mark((function t(){var n,i,a,s,u;return e(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(),t.next=4,h.getPopularMovies();case 4:return n=t.sent,t.next=7,h.getGenresName();case 7:i=t.sent,f.Loading.remove(),a=n.results,s=c(a,i),y.innerHTML=s.join(""),(u=new x(n.total_pages)).render(v),u.onChange(function(){var t=e(o)(e(r).mark((function t(n){var a,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),h.page=n.target.value,l(),e.next=5,h.getPopularMovies();case 5:a=e.sent,f.Loading.remove(),o=c(a.results,i),y.innerHTML=o.join("");case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])}))),b.apply(this,arguments)}!function(){b.apply(this,arguments)}(),a("b7ONl");var w=function(e,t,n){var i=Math.floor(t/2),a=t;n+i>=e?a=e:n>i&&(a=n+i);var o=Math.max(a-t,0);return Array.from({length:Math.min(e,t)},(function(e,t){return t+1+o}))};function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=this,a=w(e,t,n),o=null,r=new Map,s={start:function(){return 1===a[0]},prev:function(){return 1===n||n>e},end:function(){return a.slice(-1)[0]===e},next:function(){return n>=e}},l=document.createDocumentFragment(),c=document.createElement("div");c.className="pagination-buttons";var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,s=i,l=document.createElement("button");return l.textContent=e,l.className="page-btn ".concat(t),l.disabled=a,l.addEventListener("click",(function(e){r(e),s.update(),c.value=n,c.dispatchEvent(new CustomEvent("change",{detail:{currentPageBtn:o}}))})),l},m=function(e){return n=Number(e.currentTarget.textContent)},f=function(e){return function(t){t.textContent=a[e],a[e]===n&&(o.classList.remove("active"),t.classList.add("active"),(o=t).focus())}};r.set(u("start","start-page",s.start(),(function(){return n=1})),(function(e){return e.disabled=s.start()})),r.set(u("prev","prev-page",s.prev(),(function(){return n-=1})),(function(e){return e.disabled=s.prev()})),a.map((function(e,t){var i=n===e,a=u(e,i?"active":"",!1,m);i&&(o=a),r.set(a,f(t))})),r.set(u("next","next-page",s.next(),(function(){return n+=1})),(function(e){return e.disabled=s.next()})),r.set(u("end","end-page",s.end(),(function(){return n=e})),(function(e){return e.disabled=s.end()})),r.forEach((function(e,t){return l.appendChild(t)})),c.appendChild(l),this.render=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;e.appendChild(c)},this.update=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;a=w(e,t,n=i),r.forEach((function(e,t){return e(t)}))},this.onChange=function(e){c.addEventListener("change",e)}}var k=new(0,(d=a("b7ONl")).default),N=document.querySelector(".gallery"),L=document.querySelector(".gallery__list"),S=document.querySelector(".filter-button"),C=document.querySelector(".form-filter");function M(){return M=e(o)(e(r).mark((function t(n){var i,a,s,u,m,d;return e(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(),t.next=4,k.getMoviesByGenre(n);case 4:return i=t.sent,t.next=7,k.getGenresName();case 7:a=t.sent,s=i.results,u=c(s,a),L.innerHTML=u.join(""),f.Loading.remove(),(m=document.querySelector(".pagination-buttons"))&&m.remove(),(d=new x(i.total_pages)).render(N),d.onChange(function(){var t=e(o)(e(r).mark((function t(n){var i,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),k.page=n.target.value,l(),e.next=5,k.getPopularMovies();case 5:i=e.sent,o=c(i.results,a),L.innerHTML=o.join(""),f.Loading.remove();case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])}))),M.apply(this,arguments)}S.addEventListener("click",(function(){C.classList.toggle("is-hidden")})),C.addEventListener("change",(function(e){!function(e){M.apply(this,arguments)}(e.target.value)})),a("5xtVg"),a("cDXQO"),a("czDmN");o=a("bpxeT"),r=a("2TvXO"),d=a("b7ONl"),s=a("6JpON");var T=document.querySelector(".header__input"),z=document.querySelector(".header__form"),_=document.querySelector(".gallery__list"),E=document.querySelector(".gallery"),j=new(0,d.default);function D(){return D=e(o)(e(r).mark((function t(n){var i,a,u,m,f,d,g;return e(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),j.query=T.value,t.prev=2,l(),t.next=6,j.getMovieByQuery(j.query);case 6:return i=t.sent,t.next=9,j.getGenresName();case 9:a=t.sent,s.Loading.remove(),u=i.results,m=c(u,a),_.innerHTML=m.join(""),z.reset(),u.length?(s.Notify.success("We have found ".concat(i.total_results," options!")),(d=document.querySelector(".pagination-buttons"))&&d.remove(),(g=new x(i.total_pages)).render(E),g.onChange(function(){var t=e(o)(e(r).mark((function t(n){var i,o;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),j.page=n.target.value,l(),e.next=5,j.getMovieByQuery(j.query);case 5:i=e.sent,o=c(i.results,a),_.innerHTML=o.join(""),s.Loading.remove();case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):(s.Notify.failure("We couldn't find a match on \"".concat(j.query,'"" request.')),(f=document.querySelector(".pagination-buttons"))&&f.remove()),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[2,18]])}))),D.apply(this,arguments)}z.addEventListener("submit",(function(e){return D.apply(this,arguments)}))}();
//# sourceMappingURL=index.c778e5c7.js.map
