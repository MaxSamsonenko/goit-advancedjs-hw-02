import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-651d7991.js";const g=document.querySelector("[data-minutes]"),b=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-seconds]"),u=document.getElementById("datetime-picker"),o=document.querySelector("[data-start]");o.setAttribute("disabled","true");o.addEventListener("click",T);let d,l;function T(){o.setAttribute("disabled","true"),u.setAttribute("disabled","true"),l=setInterval(()=>{S(d)},1e3)}const v={title:"Error",message:"Please choose a date in the future",titleColor:"#ffffff",messageColor:"#ffffff",backgroundColor:"rgb(231, 39, 39)",theme:"light",position:"topCenter"},E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;if(t[0].getTime()>e.getTime()){o.removeAttribute("disabled"),d=t[0].getTime();return}y.show(v)}};function S(t){const e=new Date().getTime(),r=t-e;if(r<=0){clearInterval(l),u.removeAttribute("disabled");return}const{days:i,hours:c,minutes:s,seconds:a}=k(r);b.textContent=n(i),p.textContent=n(c),g.textContent=n(s),C.textContent=n(a)}h("#datetime-picker",E);function k(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:m,seconds:f}}function n(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map
