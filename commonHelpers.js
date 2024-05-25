import{S as a}from"./assets/vendor-5af972a3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const l=document.querySelector(".search-form"),c=document.querySelector(".gallery");function f(t){t.preventDefault();const r=t.target.elements.searchQuery.value.trim();u(r).then(n=>{const o=p(n.hits);c.insertAdjacentHTML("beforeend",o),new a(".gallery a").refresh()})}l.addEventListener("submit",f);function u(t){const r="https://pixabay.com",n="/api",o=new URLSearchParams({key:"44024733-f77ed4f0ed7e81c67856c8782",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${o}`;return fetch(e).then(s=>s.json())}function m(t){return`
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
    `}function p(t){return t.map(m).join("")}
//# sourceMappingURL=commonHelpers.js.map
