import{S as M,a as O,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-btn"),P=new M(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:l,comments:q,downloads:$})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
    />
    <ul class="gallery-info">
      <li class="info-item">
        <h3 class="title">Likes</h3>
        <p class="info">${o}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Views</h3>
        <p class="info">${l}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Comments</h3>
        <p class="info">${q}</p>
      </li>
      <li class="info-item">
        <h3 class="title">Downloads</h3>
        <p class="info">${$}</p>
      </li>
    </ul>
  </a>
</li>
`).join("");m.insertAdjacentHTML("beforeend",t),P.refresh()}function p(){m.innerHTML=""}function L(){g.classList.add("visible")}function v(){g.classList.remove("visible")}function E(){y.classList.add("btn-visible")}function c(){y.classList.remove("btn-visible")}const R="49785323-b36a5eef0b3f98d7012f38339",S=async(r,t)=>{const s=await O.get("https://pixabay.com/api/",{params:{key:R,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}}),i=s.data.totalHits;return{pictures:s.data.hits,total:i}},B=document.querySelector(".inp"),f=document.querySelector(".form"),x=document.querySelector(".load-btn");let u="",n=1,d,h,w;f.addEventListener("submit",function(r){if(r.preventDefault(),u=B.value.trim(),n=1,u===""){a.warning({title:"Warning",message:"Search field cannot be empty.",position:"topRight"}),p(),c(),f.reset();return}c(),p(),L(),S(u,n).then(({pictures:t,total:s})=>{if(t.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(b(t),E(),d=Math.floor(s/15),h=document.querySelector(".gallery-item"),w=h.getBoundingClientRect(),d===n||s<=15){a.info({title:"Oops",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c();return}}).catch(t=>{console.log(t),a.error({title:"Error",message:`${t}`,position:"topRight"})}).finally(()=>{v(),f.reset()})});x.addEventListener("click",async()=>{try{if(d===n){a.info({title:"Oops",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c();return}L();const{pictures:r,total:t}=await D();b(r),window.scrollBy({top:w.height*2,behavior:"smooth"})}catch(r){a.error({title:"Error",message:`${r}`,position:"topRight"}),console.log(r)}finally{v()}});async function D(){return n+=1,await S(u,n)}
//# sourceMappingURL=index.js.map
