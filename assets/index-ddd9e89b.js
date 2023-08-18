function _(t,e=0){return t.scrollTop<e}function A(t,e=0){return t.scrollTop>t.scrollHeight-t.offsetHeight-e}function h(t){return t.scrollHeight>t.clientHeight}function S(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function u(){return S()<800}function R(t){const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstChild}function f(t,e){return new Promise(n=>{const a=t();if(a.length===e)return n(a);const r=new MutationObserver(()=>{const c=t();c.length===e&&(n(c),r.disconnect())});r.observe(document.body,{childList:!0,subtree:!0})})}function T(t){(t.key==="Enter"||t.key===" ")&&t.target?.dispatchEvent(new MouseEvent("click",{...t,view:void 0}))}const{SC:L}=window,s={OPEN:"open",HIDDEN:"hidden",COLLAPSE_CARET:"collapse-caret",PLAYLIST_TITLE:"playlist-title",PLAYLIST_ITEMS:"playlist-items",TRANSFORM_TO_SC_ITEM:"transform-to-sc-item",TRACK_WRAPPER:"track-wrapper",TRACK_TITLE:"track-title",TRACK_GENRE_DESC:"track-genre-description",TRACK_ADDL_DESC:"track-addl-description",PRIVACY_POLICY_COVER:"privacy-policy-cover",SCROLL_ARROW:"scroll-arrow",SCROLL_ARROW_UP:"scroll-arrow-up",SCROLL_ARROW_DOWN:"scroll-arrow-down"};function p(t,e){const n=t.parentElement,a=n.getElementsByClassName(s.PLAYLIST_ITEMS)[0],r=n.getElementsByClassName(s.COLLAPSE_CARET)[0];e?(a.classList.add(s.HIDDEN),r.classList.remove(s.OPEN)):(a.classList.remove(s.HIDDEN),r.classList.add(s.OPEN))}function O(){const t=document.getElementsByClassName(s.PLAYLIST_TITLE);Array.from(t).forEach(e=>{e.setAttribute("tabIndex",String(0)),e.addEventListener("keypress",T);const n=document.createElement("span");n.classList.add("fa","fa-lg","fa-caret-down",s.COLLAPSE_CARET),e.appendChild(n),p(e,u()),e.addEventListener("click",()=>{const r=e.parentElement.getElementsByClassName(s.PLAYLIST_ITEMS)[0].classList.contains(s.HIDDEN);p(e,!r),r&&u()&&Array.from(t).forEach(c=>{c!==e&&p(c,!0)})})})}async function g(t){const e=document.getElementsByClassName(s.TRANSFORM_TO_SC_ITEM);Array.from(e).forEach(n=>t.oEmbed(n.getAttribute("data-sc-link"),{auto_play:!1,maxheight:150}).then(a=>{const r=n.getAttribute("data-title")??a.title.replaceAll(" by Special Ingredient","").replaceAll("[w TRACKLIST]","").replaceAll("[MASHUP]",""),c=n.getAttribute("data-genre-desc"),l=n.getAttribute("data-addl-desc"),m=l==="GET_FROM_SC"?a.description:l,i=document.createElement("div");if(i.classList.add(s.TRACK_WRAPPER),r){const o=document.createElement("p");o.classList.add(s.TRACK_TITLE),o.appendChild(document.createTextNode(r)),i.appendChild(o)}if(c){const o=document.createElement("p");o.classList.add(s.TRACK_GENRE_DESC),o.appendChild(document.createTextNode(c)),i.appendChild(o)}if(m){const o=document.createElement("p");o.classList.add(s.TRACK_ADDL_DESC),o.appendChild(document.createTextNode(m)),i.appendChild(o)}const E=R(a.html);E.title=r;const d=new URL(E.src);d.searchParams.set("auto_play",String(!1)),d.searchParams.set("hide_related",String(!1)),d.searchParams.set("show_comments",String(!0)),d.searchParams.set("show_user",String(!1)),d.searchParams.set("show_reposts",String(!0)),d.searchParams.set("show_teaser",String(!1)),d.searchParams.set("visual",String(!0)),d.searchParams.set("show_artwork",String(!0)),E.src=d.href,i.appendChild(E);const C=document.createElement("div");C.classList.add(s.PRIVACY_POLICY_COVER),i.appendChild(C),n.replaceWith(i)})),await f(()=>document.getElementsByClassName(s.TRACK_WRAPPER),e.length)}function P(){const t=document.getElementsByClassName(s.PLAYLIST_ITEMS);Array.from(t).forEach(e=>{if(!h(e))return;const n=150,a=[s.SCROLL_ARROW,"fa","fa-2x"],r=document.createElement("div");r.classList.add(...a,s.SCROLL_ARROW_UP,"fa-caret-up"),r.addEventListener("click",()=>{const l=e.scrollTop-n;e.scrollTo({top:l<40?0:l,behavior:"smooth"})});const c=document.createElement("div");c.classList.add(...a,s.SCROLL_ARROW_DOWN,"fa-caret-down"),c.addEventListener("click",()=>{const l=e.scrollTop+n;e.scrollTo({top:l,behavior:"smooth"})}),e.insertBefore(r,e.firstChild),e.appendChild(c),e.addEventListener("scroll",l=>{const m=l.target,i=m.getElementsByClassName(s.SCROLL_ARROW_UP)[0],E=m.getElementsByClassName(s.SCROLL_ARROW_DOWN)[0];i.style.display=_(m,50)?"none":"inherit",E.style.display=A(m,50)?"none":"inherit"})})}async function w(){Array.from(document.getElementsByTagName("a")).forEach(t=>{t.target="_blank",t.rel="noreferrer noopener"}),O(),L.initialize({client_id:"DgFeY88vapbGCcK7RrT2E33nmNQVWX82"}),await g(L),P()}w();
