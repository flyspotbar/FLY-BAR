// ===============================
// FLY BAR
// script.js
// ===============================


// Анимация появления

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




// ===============================
// ЯЗЫКИ
// ===============================


const translations = {

pl: {

"Coffee":"Kawa",
"Breakfast":"Śniadania",
"Main Dishes":"Dania główne",
"Soups":"Zupy",
"Salads":"Sałatki",
"Drinks":"Napoje",

"Chicken Broth":"Rosół",
"Ukrainian Borscht":"Barszcz ukraiński",

"Tea":"Herbata",
"Orange Juice":"Sok pomarańczowy",
"Apple Juice":"Sok jabłkowy",

"Scrambled eggs (3 eggs)":"Jajecznica (3 jajka)",
"Scrambled eggs with bacon":"Jajecznica z boczkiem",
"English Breakfast":"Śniadanie angielskie",

"Chicken Cutlet":"Kotlet drobiowy",
"Pork Cutlet":"Kotlet schabowy",

"Bistro & Catering":"Bistro i Catering"

},


en: {

"Kawa":"Coffee",
"Śniadania":"Breakfast",
"Dania główne":"Main Dishes",
"Zupy":"Soups",
"Sałatki":"Salads",
"Napoje":"Drinks",

"Rosół":"Chicken Broth",
"Barszcz ukraiński":"Ukrainian Borscht",

"Herbata":"Tea",
"Sok pomarańczowy":"Orange Juice",
"Sok jabłkowy":"Apple Juice",

"Jajecznica (3 jajka)":"Scrambled eggs (3 eggs)",
"Jajecznica z boczkiem":"Scrambled eggs with bacon",
"Śniadanie angielskie":"English Breakfast",

"Kotlet drobiowy":"Chicken Cutlet",
"Kotlet schabowy":"Pork Cutlet",

"Bistro i Catering":"Bistro & Catering"

}

};

function setLanguage(lang){

document.querySelectorAll("h1,h2,h3,p,span,a").forEach(el=>{


if(!el.dataset.original){

    el.dataset.original = el.textContent.trim();

}


let original = el.dataset.original;


if(lang === "pl"){

    if(translations.pl[original]){

        el.textContent = translations.pl[original];

    }

}


if(lang === "en"){

    el.textContent = original;

}


});


}

// сразу польский

document.addEventListener("DOMContentLoaded",()=>{

setLanguage("pl");

});




// ===============================
// Кнопка наверх
// ===============================


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
