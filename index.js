import{S as d,a as y,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const t=i.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:s,comments:m,downloads:p})=>`<li class="gallery-item">
  <a class="gallery-link" href="${l}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
    <ul class="gallery-info">
      <li class="info-item">
        <h3 class="title">Likes</h3>
        <p class="info">${r}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Views</h3>
        <p class="info">${s}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Comments</h3>
        <p class="info">${m}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Downloads</h3>
        <p class="info">${p}</p>
      </li>
    </ul>
  </a>
</li>
`).join("");u.insertAdjacentHTML("beforeend",t),g.refresh()}function c(){u.innerHTML=""}function b(){f.classList.add("visible")}function L(){f.classList.remove("visible")}const S="49785323-b36a5eef0b3f98d7012f38339",q=i=>{y.get("https://pixabay.com/api/",{params:{key:S,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=t.data.hits;h(o)}).catch(t=>{console.log(t),a.error({title:"Error",message:`${t}`,position:"topRight"})}).finally(()=>{L()})},$=document.querySelector(".inp");document.querySelector(".btn");const n=document.querySelector(".form");document.querySelector(".gallery");n.addEventListener("submit",function(i){i.preventDefault();const t=$.value.trim();if(t===""){a.warning({title:"Warning",message:"Search field cannot be empty.",position:"topRight"}),c(),n.reset();return}c(),b();try{q(t)}catch(o){console.error(o),a.error({title:"Error",message:`${o}`,position:"topRight"})}finally{n.reset()}});
//# sourceMappingURL=index.js.map
