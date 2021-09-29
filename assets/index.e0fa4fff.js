import{c as t,w as e,S as o,i as s,s as l,a as r,b as c,e as n,d as i,t as a,f as u,u as $,g as d,h as p,j as f,k as m,l as b,m as g,n as h,o as y,p as x,q as C,r as v,v as k,x as z,y as L,z as j,A as q,B as w}from"./vendor.6d7c5e86.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const o of t)if("childList"===o.type)for(const t of o.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const N=e({base:"#000",text:"#fff"});function S(t){let e,o,s;const l=t[4].default,h=r(l,t,t[3],null);let y=[t[1],{style:o=t[1].style+"; --base-color: "+t[0]+"; --side-color: "+t[2].sideColor+"; --top-light-color: "+t[2].topLightColor+"; --bottom-color: "+t[2].bottomColor+"; --thickness: "+A+";"}],x={};for(let r=0;r<y.length;r+=1)x=c(x,y[r]);return{c(){e=n("div"),h&&h.c(),i(e,x),a(e,"svelte-lao3dn",!0)},m(t,o){u(t,e,o),h&&h.m(e,null),s=!0},p(t,[r]){h&&h.p&&(!s||8&r)&&$(h,l,t,t[3],s?p(l,t[3],r,null):d(t[3]),null),i(e,x=f(y,[2&r&&t[1],(!s||7&r&&o!==(o=t[1].style+"; --base-color: "+t[0]+"; --side-color: "+t[2].sideColor+"; --top-light-color: "+t[2].topLightColor+"; --bottom-color: "+t[2].bottomColor+"; --thickness: "+A+";"))&&{style:o}])),a(e,"svelte-lao3dn",!0)},i(t){s||(m(h,t),s=!0)},o(t){b(h,t),s=!1},d(t){t&&g(e),h&&h.d(t)}}}const A="0.6rem";function B(e,o,s){let l,r;h(e,N,(t=>s(5,r=t)));let{$$slots:c={},$$scope:n}=o,{color:i=r.base}=o,{attrs:a={}}=o;return e.$$set=t=>{"color"in t&&s(0,i=t.color),"attrs"in t&&s(1,a=t.attrs),"$$scope"in t&&s(3,n=t.$$scope)},e.$$.update=()=>{1&e.$$.dirty&&s(2,l=function(e){const o=t(e),s=o.luminance()<.01;return{sideColor:t.mix(e,s?"#333":"black",.4).hex(),topLightColor:o.brighten(1.5).hex(),bottomColor:t.mix(e,s?"#333":"black",.6).hex()}}(i))},[i,a,l,n,c]}class E extends o{constructor(t){super(),s(this,t,B,S,l,{color:0,attrs:1})}}function I(t){let e;const o=t[3].default,s=r(o,t,t[5],null);return{c(){s&&s.c()},m(t,o){s&&s.m(t,o),e=!0},p(t,l){s&&s.p&&(!e||32&l)&&$(s,o,t,t[5],e?p(o,t[5],l,null):d(t[5]),null)},i(t){e||(m(s,t),e=!0)},o(t){b(s,t),e=!1},d(t){s&&s.d(t)}}}function H(t){let e,o,s,l,r;o=new E({props:{color:t[1],$$slots:{default:[I]},$$scope:{ctx:t}}});let $=[t[0]],d={};for(let n=0;n<$.length;n+=1)d=c(d,$[n]);return{c(){e=n("button"),y(o.$$.fragment),i(e,d),a(e,"svelte-1sij4dr",!0)},m(c,n){u(c,e,n),x(o,e,null),e.autofocus&&e.focus(),s=!0,l||(r=C(e,"click",t[4]),l=!0)},p(t,[s]){const l={};2&s&&(l.color=t[1]),32&s&&(l.$$scope={dirty:s,ctx:t}),o.$set(l),i(e,d=f($,[1&s&&t[0]])),a(e,"svelte-1sij4dr",!0)},i(t){s||(m(o.$$.fragment,t),s=!0)},o(t){b(o.$$.fragment,t),s=!1},d(t){t&&g(e),v(o),l=!1,r()}}}function K(t,e,o){let{$$slots:s={},$$scope:l}=e,{attrs:r={}}=e,{baseColor:c}=e;const n=k();return t.$$set=t=>{"attrs"in t&&o(0,r=t.attrs),"baseColor"in t&&o(1,c=t.baseColor),"$$scope"in t&&o(5,l=t.$$scope)},[r,c,n,s,t=>n("click",t),l]}class M extends o{constructor(t){super(),s(this,t,K,H,l,{attrs:0,baseColor:1})}}function O(t){let e,o,s;const l=t[5].default,h=r(l,t,t[4],null);let y=[t[2],{style:o=t[2].style+"; --size: "+t[0]+"; --base-color: "+t[1]+"; --side-color: "+t[3].sideColor+"; --bottom-color: "+t[3].bottomColor+"; --thickness: calc(var(--size) / 15);"}],x={};for(let r=0;r<y.length;r+=1)x=c(x,y[r]);return{c(){e=n("p"),h&&h.c(),i(e,x),a(e,"svelte-1cspubq",!0)},m(t,o){u(t,e,o),h&&h.m(e,null),s=!0},p(t,[r]){h&&h.p&&(!s||16&r)&&$(h,l,t,t[4],s?p(l,t[4],r,null):d(t[4]),null),i(e,x=f(y,[4&r&&t[2],(!s||15&r&&o!==(o=t[2].style+"; --size: "+t[0]+"; --base-color: "+t[1]+"; --side-color: "+t[3].sideColor+"; --bottom-color: "+t[3].bottomColor+"; --thickness: calc(var(--size) / 15);"))&&{style:o}])),a(e,"svelte-1cspubq",!0)},i(t){s||(m(h,t),s=!0)},o(t){b(h,t),s=!1},d(t){t&&g(e),h&&h.d(t)}}}function P(e,o,s){let l,r;h(e,N,(t=>s(6,r=t)));let{$$slots:c={},$$scope:n}=o,{size:i="1rem"}=o,{color:a=r.text}=o,{attrs:u={}}=o;return e.$$set=t=>{"size"in t&&s(0,i=t.size),"color"in t&&s(1,a=t.color),"attrs"in t&&s(2,u=t.attrs),"$$scope"in t&&s(4,n=t.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&s(3,l=function(e){const o=t(e).luminance()<.01;return{sideColor:t.mix(e,o?"#333":"black",.3).hex(),bottomColor:t.mix(e,o?"#333":"black",.4).hex()}}(a))},[i,a,u,l,n,c]}class D extends o{constructor(t){super(),s(this,t,P,O,l,{size:0,color:1,attrs:2})}}function F(t){let e;return{c(){e=w("Click me!")},m(t,o){u(t,e,o)},d(t){t&&g(e)}}}function G(t){let e,o;return e=new D({props:{attrs:{style:"padding: 20px;"},$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){y(e.$$.fragment)},m(t,s){x(e,t,s),o=!0},p(t,o){const s={};1&o&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){v(e,t)}}}function J(t){let e,o,s,l,r,c,i,a;return i=new M({props:{baseColor:"#fc769f",$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){e=n("main"),o=n("img"),l=z(),r=n("h1"),r.textContent="Hello world!",c=z(),y(i.$$.fragment),L(o.src,s="./assets/svelte.d72399d3.png")||j(o,"src","./assets/svelte.d72399d3.png"),j(o,"alt","Svelte Logo"),j(o,"class","svelte-1j7qc6a"),j(r,"class","svelte-1j7qc6a"),j(e,"class","svelte-1j7qc6a")},m(t,s){u(t,e,s),q(e,o),q(e,l),q(e,r),q(e,c),x(i,e,null),a=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){a||(m(i.$$.fragment,t),a=!0)},o(t){b(i.$$.fragment,t),a=!1},d(t){t&&g(e),v(i)}}}new class extends o{constructor(t){super(),s(this,t,null,J,l,{})}}({target:document.getElementById("app")});
