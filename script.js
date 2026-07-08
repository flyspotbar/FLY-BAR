// ===============================
// FLY BAR
// script.js
// ===============================

// Плавное появление секций
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section,.item").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// -----------------------------
// Переключение языка
// -----------------------------

function setLanguage(lang){

    document.querySelectorAll("[data-pl]").forEach(el=>{

        if(lang==="pl"){
            el.innerHTML=el.dataset.pl;
        }else{
            el.innerHTML=el.dataset.en;
        }

    });

}

// -----------------------------
// Кнопка наверх
// -----------------------------

const topButton=document.createElement("button");

topButton.innerHTML="▲";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.opacity="1";
        topButton.style.visibility="visible";

    }else{

        topButton.style.opacity="0";
        topButton.style.visibility="hidden";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
