import{a as i,S as p}from"./vendor-D94OL8Qp.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="49688172-7c7fef9085f6ac649bd6286a7",l="https://pixabay.com/api/",f=40;function d(){const r={searchQuery:"",page:1,PER_PAGE:f},s=async()=>{try{return(await i.get(l,{params:{key:u,q:r.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r.page,per_page:r.PER_PAGE}})).data}catch(o){throw console.error(o),new Error("Failed to fetch data")}},n=()=>{r.page+=1},a=()=>{r.page=1};return{fetchGallery:s,incrementPage:n,resetPage:a,getQuery:()=>r.searchQuery,setQuery:o=>{r.searchQuery=o,a()},getPage:o=>{r.page=o}}}const y=d();let h=new p(".photo-card a",{captions:!0,captionsData:"alt",captionDelay:250});export{y as a,h as l};
//# sourceMappingURL=lightbox-Bj5lCWii.js.map
