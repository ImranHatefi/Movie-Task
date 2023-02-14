let basket = document.getElementById("basket");
let store = document.getElementById("store");
let hero = document.getElementById("hero-container");
let cash = document.getElementById("cash");

let movies = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    image:
      "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
    slogan: "Let The Magic Begin.",
    price: 25.95,
    oldprice: 36.99,
    count: 1,
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    image:
      "https://i.pinimg.com/originals/42/de/3e/42de3ec6745614f3d8796ce30467746b.jpg",
    slogan: "Something evil has returned to Hogwarts!",
    price: 24.85,
    oldprice: 59.99,
    count: 1,
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    image: "https://i.ebayimg.com/images/g/NvIAAOSwnL5iOALQ/s-l1600.jpg",
    slogan: "Everything will change.",
    price: 26.95,
    oldprice: 36.75,
    count: 1,
  },
  {
    id: 4,
    title: "The Lord of The Rings",
    image: "https://m.media-amazon.com/images/I/710XTe7ND-L.jpg",
    slogan: "One ring to rule them all",
    price: 25.69,
    oldprice: 69.99,
    count: 1,
  },
  {
    id: 5,
    title: "HIS DARK MATERIALS",
    image: "https://flxt.tmsimg.com/assets/p17378321_b_v13_ab.jpg",
    slogan: "I'll be looking for you",
    price: 19.99,
    oldprice: 38.25,
    count: 1,
  },
  {
    id: 6,
    title: "Spirited Away",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    slogan:
      "Nothing that happens is ever forgotten, even if you can't remember it",
    price: 30.95,
    oldprice: 74.99,
    count: 1,
  },
  {
    id: 7,
    title: "Howl's Moving Castle",
    image:
      "https://cdn.shopify.com/s/files/1/1057/4964/products/Howls-Moving-Castle-Vintage-Movie-Poster-Original-Japanese-B1-28x40-7059_1667b890-f78d-4ce9-b3a5-66e82553ecc5.jpg?v=1628737495",
    slogan: "A Heart's A Heavy Burden",
    price: 29.25,
    oldprice: 56.75,
    count: 1,
  },
  {
    id: 8,
    title: "My Neighbor Totoro",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    slogan: "Everybody, try laughing. Then whatever scares you will go away!",
    price: 27.95,
    oldprice: 44.99,
    count: 1,
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/I/71715eBi1sL.jpg",
    slogan: "Fear can hold you prisoner. Hope can set you free.",
    price: 12.99,
    oldprice: 19.99,
    count: 1,
  },
  {
    id: 10,
    title: "The Godfather",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    slogan: "An offer you can't refuse.",
    price: 14.99,
    oldprice: 24.99,
    count: 1,
  },
  {
    id: 11,
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/I/41HPNv+KcYL.jpg",
    slogan: "Why So Serious?",
    price: 18.99,
    oldprice: 29.99,
    count: 1,
  },
  {
    id: 12,
    title: "Schindler's List",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    slogan: "Whoever saves one life, saves the world entire.",
    price: 15.99,
    oldprice: 22.99,
    count: 1,
  },
  {
    id: 13,
    title: "The Lord of the Rings: The Return of the King",
    image:
      "https://cdn.europosters.eu/image/1300/posters/the-lord-of-the-rings-the-return-of-the-king-i104633.jpg",
    slogan: "The eye of the enemy is moving.",
    price: 20.99,
    oldprice: 34.99,
    count: 1,
  },
  {
    id: 14,
    title: "The Godfather Part II",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    slogan: "I knew it was you.",
    price: 14.99,
    oldprice: 24.99,
    count: 1,
  },
  {
    id: 15,
    title: "12 Angry Men",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    slogan: "Life is in their hands. Death is on their minds.",
    price: 10.99,
    oldprice: 16.99,
    count: 1,
  },
  {
    id: 16,
    title: "Pulp Fiction",
    image:
      "https://cdn.shopify.com/s/files/1/1416/8662/products/pulp_fiction_1994_teaser_linen_original_film_art.jpg?v=1610161503",
    slogan: "Just because you are a character doesn't mean you have character.",
    price: 16.99,
    oldprice: 27.99,
    count: 1,
  },
];

if (JSON.parse(localStorage.getItem("balance")) === null) {
  localStorage.setItem("balance", JSON.stringify(200));
  let defaultMoney = JSON.parse(localStorage.getItem("balance"));
  cash.innerHTML = defaultMoney;
} else {
  let defaultMoney = JSON.parse(localStorage.getItem("balance"));
  cash.innerHTML = defaultMoney;
}

if (JSON.parse(localStorage.getItem("basket")) === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

let getLocal = (e) => {
  let get = JSON.parse(localStorage.getItem(e));
  return get;
};

let setArrLocal = (old, item) => {
  let get = getLocal(old);
  localStorage.setItem(old, JSON.stringify([...get, item]));
  let getNew = getLocal(old);
  return getNew;
};

let setOne = (old, item) => {
  let setter = localStorage.setItem(old, JSON.stringify(item));
  return setter;
};

filmMountWriter();

basket.addEventListener("click", () => {
  store.style.display === "none"
    ? (store.style.display = "flex")
    : (store.style.display = "none");
});

function filmMountWriter() {
  movies.forEach((e) => {
    hero.innerHTML += `    
        <div class="main-container">
            <div class="poster-container">
                <a href="#"><img src="${e.image}" class="poster" /></a>
            </div>
            <div class="ticket-container">
                <div class="ticket__content">
                    <h4 class="ticket__movie-title">${e.title}</h4>
                    <p class="ticket__movie-slogan">
                        ${e.slogan}
                    </p>
                    <p class="ticket__current-price">$<span id="price">${e.price}</span></p>
                    <p class="ticket__old-price">${e.oldprice}</p>
                    <button onclick=addBasket(${e.id}) class="ticket__buy-btn">Buy now</button>
                </div>
            </div>
        </div> 
        `;
  });
}

function addBasket(e) {
  let myBalance = getLocal("balance");
  //balans cagirilir 
  let currentFilm = movies.find((item) => item.id === e);
// hal hazirki film cagirilir 
  let newBalance =
   ( myBalance - currentFilm.price >= 0
      ? myBalance - currentFilm.price
      : myBalance).toFixed(2);

//yeni balance = eger balans - gilm qiymeti boyukdurse 0 dan cixilir deyilse balans oldugu kimi qayidir 

  checkMoney(currentFilm);
// pul yoxlama funksiyasi ise dusur 
  setOne("balance", newBalance);
  //balance deyisdirilir 
  let defaultMoney = getLocal("balance");
  cash.innerHTML = defaultMoney;
  //ekrandaki balans da deyisdirilir 

  counter();
  //cart saygaci ise dusur 
  addcart();
  //cart html eleve eden funksiya ise dusur 
}

let checkMoney = (currentFilm) => {
  let defaultMoney = getLocal("balance");
  // balance cagirilir 
  defaultMoney >= currentFilm.price && addSimpleBasket(currentFilm);
  //balans coxdursa kino qiymetinden addsimplebasket ise dusur 
};

let addSimpleBasket = (y) => {
  let basket = getLocal("basket");
  // basket cagirilir 
  let checker = basket.find((x) => x.id === y.id);
  //secilen film basketde tapilir 

  if (checker === undefined) {
    setArrLocal("basket", y);
    //eger tapilmirsa film elave olunur 
  } else {
    let newArr = basket.map((z) => {
      if (z.id === y.id) {
        return { ...z, count: z.count + 1 };
      }
      return z;
    });
    setOne("basket", newArr);
    //tapilirsa yeni arr yaradilir ve filmin countuna +1 olur arr yenilenir 
  }
};

let count = document.getElementById("count");

function counter() {
  let imran1 = getLocal("basket");
  //basket cagirilir 
  count.textContent = imran1.length;
  //count elementinin daxili yazisi baskete element elave edende yaranan arr nin uzunluguna beraber edilir 
}

function addcart() {
  let imran = getLocal("basket");
  //arr cagirilir 
  store.innerHTML = "";
  //cart(store) html sifirlanir 
  imran.forEach((e) => {
    store.innerHTML += `
          <p>${e.title} <br/>
          Count: ${e.count}
          <span id='delete-btn' onclick='removecartp(${e.id})'>Remove</span>
          </p>
          `;
  });
  //baskete elave olunan her bir element ucun store a inner html yazilir 
}

function removecartp(x) {
  let imran = getLocal("basket");
  // basket cagirilir 
  let curretBalance = getLocal("balance");
  //hal hazirki balans
  let currentmovie = imran.find((e) => e.id == x);
  //secdiyimiz film 
  if (currentmovie.count > 1) {
    let newImran = imran.map((e) => {
      if (e.id == x) {
        return { ...e, count: e.count - 1 };
      }
      return e;
    });
    setOne("basket", newImran);
    //eger cartda film sayisi 1 den yuxaridirsa count -1 olur 
  } else {
    let newImran = imran.filter((e) => e.id !== x);
    setOne("basket", newImran);
  }
  // eger cartda film sayisi 1 dirse film cart arr sinden silinir filter vasitesile  
  let newBalance = (curretBalance + currentmovie.price).toFixed(2);
  setOne("balance", newBalance);
  // film silineneden sonra balans deyisir silinen filmin qiymeti elave olunur 
  let defaultMoney = getLocal("balance");
  cash.innerHTML = defaultMoney;
  // html gorunen balans yenisi ile evez olunur.
  counter();
  //cart uzerindeki counter reqemi deyisir 
  addcart();
  //add cart funksiyasi ise dusur ve arrni bir daha yoxlayir 
}
