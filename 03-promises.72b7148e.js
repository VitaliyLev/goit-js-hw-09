!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l=r("iU1Pc"),i={formEl:document.querySelector("form"),inputValueAllEl:document.querySelectorAll("input")},a=null;i.formEl.addEventListener("submit",(function(n){n.preventDefault();var t=Number(n.target.elements.delay.value),o=Number(n.target.elements.step.value),r=Number(n.target.elements.amount.value),i=t,u=0,c=0;a=setInterval((function(){var n,t;c+=1,(n=u+=1,t=i,new Promise((function(e,o){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})}))).then((function(n){var t=n.position,o=n.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(l).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),c>=r?clearInterval(a):i+=o}),o)}))}();
//# sourceMappingURL=03-promises.72b7148e.js.map
