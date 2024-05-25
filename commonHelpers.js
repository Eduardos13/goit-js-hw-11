import{i as a,S as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".search-form"),u=document.querySelector(".gallery");function f(t){t.preventDefault();const s=t.target.elements.searchQuery.value.trim();if(!s){a.info({title:"No data",message:"Please enter a search query"});return}m(s).then(o=>{const n=d(o.hits);if(!o.hits.length){a.error({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!"});return}u.insertAdjacentHTML("beforeend",n),new l(".gallery a").refresh()})}c.addEventListener("submit",f);function m(t){const s="https://pixabay.com",o="/api",n=new URLSearchParams({key:"44024733-f77ed4f0ed7e81c67856c8782",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${o}?${n}`;return fetch(e).then(r=>r.json())}function p(t){return`
        <li class="gallery-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-item-image">
                <div class="info">
                    <p class="info-title">Likes:<span class="info-value">${t.likes}</span></p>
                    <p class="info-title">Views:<span class="info-value">${t.views}</span></p>
                    <p class="info-title">Comments:<span class="info-value">${t.comments}</span></p>
                    <p class="info-title">Downloads:<span class="info-value">${t.downloads}</span></p>
                </div>
            </a>
        </li>
    `}function d(t){return t.map(p).join("")}
//# sourceMappingURL=commonHelpers.js.map
