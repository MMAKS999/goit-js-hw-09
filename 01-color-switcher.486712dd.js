!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(o);var a=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearTimeout(a)}))}();
//# sourceMappingURL=01-color-switcher.486712dd.js.map