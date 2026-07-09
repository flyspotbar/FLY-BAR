// ===============================
// FLY BAR
// script.js
// ===============================


// ===============================
// Анимация появления
// ===============================

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

    observer.observe(el);

});


// ===============================
// Переводы
// ===============================

const translations = {

pl:{

"Coffee":"Kawa",
"Breakfast":"Śniadania",
"Lunch":"Obiady",
"Soups":"Zupy",
"Salads":"Sałatki",
"Fast Food":"Fast Food",
"Cocktails":"Koktajle",
"Desserts":"Desery",
"Drinks":"Napoje",

"Bistro & Catering":"Bistro i Catering",
"MENU":"MENU",

"Espresso":"Espresso",
"Double Espresso":"Podwójne Espresso",
"Americano":"Americano",
"Cappuccino":"Cappuccino",
"Latte":"Latte",
"Flat White":"Flat White",

"Ice Americano":"Ice Americano",
"Ice Cappuccino":"Ice Cappuccino",
"Ice Latte":"Ice Latte",

"Caramel / Vanilla / Chocolate / Strawberry syrup":"Syrop karmelowy / waniliowy / czekoladowy / truskawkowy",
"Lactose Free Milk":"Mleko bez laktozy",
"Oat / Coconut / Almond Milk":"Mleko owsiane / kokosowe / migdałowe",

"Scrambled eggs (3 eggs)":"Jajecznica (3 jajka)",
"Scrambled eggs with bacon":"Jajecznica z boczkiem",
"English Breakfast":"Śniadanie angielskie",
"English Breakfast + Coffee":"Śniadanie angielskie + kawa",
"Toast with salami & cheese":"Tost z salami i serem",
"Syrniki with topping":"Syrniki z dodatkiem",
"Pancakes":"Pancakes",
"Avocado toast with smoked salmon & poached egg":"Tost z awokado, z łososiem i jajkiem w koszulce",

"Pork Cutlet":"Kotlet schabowy",
"Chicken Cutlet":"Kotlet z kurczaka",
"Grilled Chicken":"Pierś z kurczaka grillowana",
"Minced Meat Cutlet":"Kotlet mielony",
"Grilled Salmon":"Łosoś z grilla",
"Hungarian Potato Pancakes":"Placki ziemniaczane po węgiersku",
"Chicken & Mushroom Crepes":"Naleśniki z kurczakiem i pieczarkami",
"Spaghetti Bolognese":"Spaghetti Bolognese",

"Side dish: potatoes / fries / rice / buckwheat":"Dodatek: ziemniaki / frytki / ryż / kasza gryczana",
"Included":"W cenie",

"Chicken Broth":"Rosół",
"Ukrainian Borscht":"Barszcz ukraiński",

"Chicken Salad":"Sałatka z kurczakiem",
"Shrimp Salad":"Sałatka z krewetkami",
"Vegetarian Salad":"Sałatka wegetariańska",
  "Beef Burger with Fries":"Burger wołowy z frytkami",
"Hot Dog with Bacon & Fries":"Hot Dog z boczkiem i frytkami",
"Chicken Tortilla":"Tortilla z kurczakiem",
"Traditional Zapiekanka":"Tradycyjna zapiekanka",
"Ham Zapiekanka":"Zapiekanka z szynką",
"Gyros Zapiekanka":"Zapiekanka Gyros",

"French Fries (200 g)":"Frytki (200 g)",
"Chicken Nuggets (6 pcs)":"Nuggetsy z kurczaka (6 szt.)",
"Nuggets + Fries":"Nuggetsy + frytki",
"Chicken Strips (5 pcs)":"Stripsy z kurczaka (5 szt.)",
"Strips + Fries":"Stripsy + frytki",
"Cheese Sticks (6 pcs)":"Paluszki serowe (6 szt.)",
"Cheese Sticks + Fries":"Paluszki serowe + frytki",
"Chicken Wings (6 pcs)":"Skrzydełka z kurczaka (6 szt.)",
"Chicken Wings + Fries":"Skrzydełka + frytki",

"Sauces: Ketchup, Mayo, Mustard, BBQ, 1000 Islands, Curry, American, Garlic":"Sosy: Ketchup, Majonez, Musztarda, BBQ, 1000 Islands, Curry, American, Czosnkowy",

"Fly Energy":"Fly Energy",
"Mango Wave":"Mango Wave",
"Virgin Mojito":"Virgin Mojito",
"Apple Mint":"Apple Mint",

"Honey & Walnut Marlenka":"Marlenka miodowo-orzechowa",
"Honey & Cocoa Marlenka":"Marlenka miodowo-kakaowa",
"Jelly Dessert":"Deser galaretkowy",

"Tea":"Herbata",
"Orange Juice":"Sok pomarańczowy",
"Apple Juice":"Sok jabłkowy",
"Fresh Orange Juice":"Świeży sok pomarańczowy",
"Lemonade":"Lemoniada",
"Lipton Ice Tea":"Lipton Ice Tea",
"Oshee Isotonic":"Oshee Isotonic",
"Schweppes":"Schweppes",
"Oshee Vitamin":"Oshee Vitamin",
"Aqua Water":"Woda Aqua",
"King Water":"Woda King",
"Borjomi":"Borjomi",
"Jermuk":"Jermuk",
"Pepsi / Mirinda / 7UP":"Pepsi / Mirinda / 7UP",
"Pepsi Can":"Pepsi puszka",
"Pepsi Bottle":"Pepsi butelka",
"Red Bull":"Red Bull",
"Non-Alcoholic Beer":"Piwo bezalkoholowe",

"Opening Hours":"Godziny otwarcia",
"Monday":"Poniedziałek",
"Tuesday":"Wtorek",
"Wednesday":"Środa",
"Thursday":"Czwartek",
"Friday":"Piątek",
"Saturday":"Sobota",
"Sunday":"Niedziela",
"closed":"zamknięte"

},

en:{

"Godziny otwarcia":"Opening Hours",
"Poniedziałek":"Monday",
"Wtorek":"Tuesday",
"Środa":"Wednesday",
"Czwartek":"Thursday",
"Piątek":"Friday",
"Sobota":"Saturday",
"Niedziela":"Sunday",
"zamknięte":"closed"

}

  };


// ===============================
// Переключение языка
// ===============================

function setLanguage(lang){


    document.querySelectorAll("h1,h2,h3,p,span,a").forEach(el=>{

        if(!el.dataset.original){

            el.dataset.original = el.textContent.trim();

        }


        let original = el.dataset.original;


        if(lang === "pl"){
            console.log("Ищу перевод:", original);

            if(translations.pl[original]){

                el.textContent = translations.pl[original];

            }else{

                el.textContent = original;

            }

        }else{

            el.textContent = original;

        }

    });

}

// ===============================
// Кнопка наверх
// ===============================

const topButton = document.createElement("button");

topButton.id = "topButton";
topButton.innerHTML = "▲";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.opacity = "1";
        topButton.style.visibility = "visible";

    }else{

        topButton.style.opacity = "0";
        topButton.style.visibility = "hidden";

    }

});

topButton.onclick = ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};
// ===============================
// Кнопки языка
// ===============================



// Стартовый язык
setLanguage("pl");
