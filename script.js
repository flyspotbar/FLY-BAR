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



// ===============================
// Переключение языка
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

"Bistro & Catering":"Bistro i Catering",
"MENU":"MENU"

},


en: {

"Kawa":"Coffee",
"Śniadania":"Breakfast",
"Dania główne":"Main Dishes",
"Zupy":"Soups",
"Sałatki":"Salads",
"Fast Food":"Fast Food",
"Koktajle":"Cocktails",
"Desery":"Desserts",
"Napoje":"Drinks",

"Rosół":"Chicken Broth",
"Barszcz ukraiński":"Ukrainian Borscht",

"Herbata":"Tea",
"Sok pomarańczowy":"Orange Juice",
"Sok jabłkowy":"Apple Juice",
"Lemoniada":"Lemonade",

"Bistro i Catering":"Bistro & Catering",
"MENU":"MENU"

}

};



function setLanguage(lang){


document.querySelectorAll("h1,h2,h3,p,span,a").forEach(el=>{


let text = el.textContent.trim();


if(translations[lang][text]){

    el.textContent = translations[lang][text];

}


});


}




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
