const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(o);let d=null;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((function(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearTimeout(d)}));
//# sourceMappingURL=01-color-switcher.7bcaf3ee.js.map
