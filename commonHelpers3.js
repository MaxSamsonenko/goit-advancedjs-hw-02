import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form"),n={};let r=0;i.addEventListener("input",c);i.addEventListener("submit",a);function c(e){n[e.target.name]=Number(e.target.value)}function a(e){e.preventDefault();let t=n.delay;for(let o=0;o<n.amount;o+=1)r+=1,f(r,t).then(p).catch(l),t+=n.step}function p({position:e,delay:t}){s.success({message:`Fulfilled promise ${e} in ${t}ms`,position:"topRight"})}function l({position:e,delay:t}){s.error({message:`Rejected promise ${e} in ${t}ms`,position:"topRight"})}function f(e,t){const o=Math.random()>.3;return new Promise((m,u)=>{setTimeout(()=>{o?m({position:e,delay:t}):u({position:e,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map
