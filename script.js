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
"Fast Food":"Fast Food",
"Cocktails":"Koktajle",
"Desserts":"Desery",
"Drinks":"Napoje",

"Espresso":"Espresso",
"Double Espresso":"Podwójne Espresso",
"Americano":"Americano",
"Cappuccino":"Cappuccino",
"Latte":"Latte",
"Flat White":"Flat White",

"Chicken Broth":"Rosół",
"Ukrainian Borscht":"Barszcz ukraiński",

"Tea":"Herbata",
"Orange Juice":"Sok pomarańczowy",
"Apple Juice":"Sok jabłkowy",
"Lemonade":"Lemoniada",

"Scrambled eggs (3 eggs)":"Jajecznica (3 jajka)",
"Scrambled eggs with bacon":"Jajecznica z boczkiem",
"English Breakfast":"Śniadanie angielskie",
"Pancakes":"Naleśniki",

"Chicken Cutlet":"Kotlet drobiowy",
"Pork Cutlet":"Kotlet schabowy",
"Grilled Chicken":"Kurczak z grilla",
"Grilled Salmon":"Łosoś z grilla",

"Beef Burger with Fries":"Burger wołowy z frytkami",
"Chicken Tortilla":"Tortilla z kurczakiem",
"French Fries (200 g)":"Frytki (200 g)",

"Fly Energy":"Fly Energy",
"Mango Wave":"Mango Wave",

"Honey & Walnut Marlenka":"Marlenka miodowo-orzechowa",

"Bistro & Catering":"Bistro i Catering",
"MENU":"MENU"

}

};



function setLanguage(lang){

document.querySelectorAll("h1,h2,h3,p,span,a").forEach(el=>{


let text = el.textContent.trim();


for(let key in translations.pl){


if(lang==="pl" && text.includes(key)){


el.textContent = text.replace(
key,
translations.pl[key]
);


}


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
