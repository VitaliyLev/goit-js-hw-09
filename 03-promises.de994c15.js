function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequired7c6=r);var o=r("eWCmQ");const i={formEl:document.querySelector("form"),inputValueAllEl:document.querySelectorAll("input")};let a=null;i.formEl.addEventListener("submit",(function(t){t.preventDefault();const n=Number(t.target.elements.delay.value),l=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value);let i=n,u=0,s=0;a=setInterval((()=>{var t,n;u+=1,s+=1,(t=u,n=i,new Promise(((e,l)=>{Math.random()>.3?e({position:t,delay:n}):l({position:t,delay:n})}))).then((({position:t,delay:n})=>{e(o).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(o).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)})),s>=r?clearInterval(a):i+=l}),l)}));
//# sourceMappingURL=03-promises.de994c15.js.map