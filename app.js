function get(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

let isDark = false;
function darkToggle() {
    isDark = !isDark;
    document.body.classList.toggle("dark");
    let icon = document.querySelector("#dark-btn i");
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}


let diller = {
    en: {
        home: "Home", properties_menu: "Properties", services_menu: "Services", about_menu: "About", contact: "Contact Us",
        hero_text: "Easiest way to find your dream home", search_placeholder: "Your Zip Code or City. e.g New York", search_btn: "Search",
        popular: "Popular Properties", view_all: "View all properties",
        our_services: "Our Services",
        s1_title: "Our Properties", s1_text: "Explore our wide range of properties including apartments, villas, and commercial spaces in top locations.",
        s2_title: "Property for Sale", s2_text: "Find the perfect property for sale at the best price. We offer trusted deals with full legal support.",
        s3_title: "Real Estate Agent", s3_text: "Our experienced agents will guide you through every step of buying, selling, or renting a property.",
        s4_title: "House for Sale", s4_text: "Discover beautiful houses for sale in the most desirable neighborhoods across the country.",
        learn_more: "Learn More",
        customer_says: "Customer Says", prev: "Prev", next: "Next",
        about_title: "Let's find home that's perfect for you",
        about_desc: "We provide the best real estate services to help you find your dream property. Our team of experts is ready to assist you every step of the way.",
        f1_title: "2M Properties", f1_text: "Over 2 million verified properties available across the country for buying, selling or renting.",
        f2_title: "Top Rated Agents", f2_text: "Our agents are highly rated professionals with years of experience in the real estate market.",
        f3_title: "Legit Properties", f3_text: "Every listed property is verified and legitimate. We ensure safe and transparent transactions.",
        c1: "# of Buy Properties", c2: "# of Sell Properties", c3: "# of All Properties", c4: "# of Agents",
        cta_title: "Be a part of our growing real estate agents", cta_btn: "Apply for Real Estate agent",
        agents_title: "Our Agents", agents_desc: "Meet our professional team of real estate agents who are dedicated to helping you find the perfect property.",
        agent_role: "Real Estate Agent",
        a1_text: "Experienced agent specializing in luxury homes and commercial properties with over 10 years in the industry.",
        a1_name: "Frank Martin", a2_name: "Jarvis Stark", a3_name: "Sophia Paisley", a4_name: "Mrs Smith",
        a2_text: "Expert in residential properties and first-time home buyers. Known for excellent client relationships.",
        a3_text: "Top-performing agent with deep knowledge of the local market and investment properties.",
        a4_text: "Dedicated agent focused on helping families find their perfect home. Expert in suburban and urban properties.",
        partners_title: "Trusted by Leading Companies",
        footer_desc: "Your trusted partner in finding the perfect home. We make real estate simple, transparent and enjoyable.",
        col1: "Company", col2: "Services", col3: "Support",
        l1_1: "About Us", l1_2: "Our Team", l1_3: "Careers", l1_4: "Blog", l1_5: "Contact",
        l2_1: "Buy Property", l2_2: "Sell Property", l2_3: "Rent Property", l2_4: "Real Estate Agent",
        l3_1: "FAQ", l3_2: "Privacy Policy", l3_3: "Terms of Service", l3_4: "Help Center",
        copyright: "© 2026 — Redesign & Development by Matin Fatizada",
        inspired: "Inspired by ThemeWagon",
        beds: "beds", baths: "baths", see_details: "See details",
        title: "Property",
        brand: "Property",
    },
    az: {
        home: "Ana Səhifə", properties_menu: "Əmlaklar", services_menu: "Xidmətlər", about_menu: "Haqqımızda", contact: "Əlaqə",
        hero_text: "Xəyal etdiyiniz evi tapmağın ən asan yolu", search_placeholder: "Poçt kodu və ya şəhər. məs. Bakı", search_btn: "Axtar",
        popular: "Populyar Əmlaklar", view_all: "Bütün əmlakları gör",
        our_services: "Xidmətlərimiz",
        s1_title: "Əmlaklarımız", s1_text: "Ən yaxşı yerlərdə mənzillər, villalar və kommersiya sahələri daxil geniş əmlak seçimimizi kəşf edin.",
        s2_title: "Satılıq Əmlak", s2_text: "Ən yaxşı qiymətə mükəmməl satılıq əmlak tapın. Tam hüquqi dəstəklə etibarlı sövdələşmələr təklif edirik.",
        s3_title: "Daşınmaz Əmlak Agenti", s3_text: "Təcrübəli agentlərimiz alış, satış və ya icarə prosesinin hər addımında sizə rəhbərlik edəcək.",
        s4_title: "Satılıq Evlər", s4_text: "Ölkə üzrə ən arzuolunan məhəllələrdə gözəl satılıq evləri kəşf edin.",
        learn_more: "Ətraflı",
        customer_says: "Müştərilər deyir", prev: "Əvvəl", next: "Sonra",
        about_title: "Sizin üçün mükəmməl evi tapaq",
        about_desc: "Xəyal etdiyiniz əmlakı tapmağınıza kömək etmək üçün ən yaxşı daşınmaz əmlak xidmətlərini təqdim edirik.",
        f1_title: "2M Əmlak", f1_text: "Ölkə üzrə alış, satış və ya icarə üçün 2 milyondan çox təsdiqlənmiş əmlak mövcuddur.",
        f2_title: "Ən Yaxşı Agentlər", f2_text: "Agentlərimiz daşınmaz əmlak bazarında illərlə təcrübəyə malik yüksək reytinqli peşəkarlardır.",
        f3_title: "Təsdiqlənmiş Əmlaklar", f3_text: "Hər siyahıya alınmış əmlak yoxlanılmış və qanunidir. Təhlükəsiz və şəffaf əməliyyatlar təmin edirik.",
        c1: "Alınan Əmlaklar", c2: "Satılan Əmlaklar", c3: "Bütün Əmlaklar", c4: "Agentlər",
        cta_title: "Böyüyən daşınmaz əmlak agentlərimizin bir hissəsi olun", cta_btn: "Agent olmaq üçün müraciət edin",
        agents_title: "Agentlərimiz", agents_desc: "Sizə mükəmməl əmlak tapmaqda kömək etməyə həsr olunmuş peşəkar agent komandamızla tanış olun.",
        agent_role: "Daşınmaz Əmlak Agenti",
        a1_text: "Lüks evlər və kommersiya əmlakları üzrə 10 ildən artıq təcrübəyə malik təcrübəli agent.",
        a1_name: "Frank Martin", a2_name: "Jarvis Stark", a3_name: "Sophia Paisley", a4_name: "Mrs Smith",
        a2_text: "Yaşayış əmlakları və ilk ev alıcıları üzrə mütəxəssis. Əla müştəri münasibətləri ilə tanınır.",
        a3_text: "Yerli bazar və investisiya əmlakları haqqında dərin biliyə malik ən yaxşı agent.",
        a4_text: "Ailələrə mükəmməl ev tapmaqda kömək etməyə həsr olunmuş agent.",
        partners_title: "Etibarlı Tərəfdaşlarımız",
        footer_desc: "Mükəmməl evi tapmaqda etibarlı tərəfdaşınız. Daşınmaz əmlakı sadə, şəffaf və xoş edirik.",
        col1: "Şirkət", col2: "Xidmətlər", col3: "Dəstək",
        l1_1: "Haqqımızda", l1_2: "Komandamız", l1_3: "Karyera", l1_4: "Bloq", l1_5: "Əlaqə",
        l2_1: "Əmlak Al", l2_2: "Əmlak Sat", l2_3: "Əmlak İcarə", l2_4: "Daşınmaz Əmlak Agenti",
        l3_1: "FAQ", l3_2: "Gizlilik Siyasəti", l3_3: "Xidmət Şərtləri", l3_4: "Yardım Mərkəzi",
        copyright: "© 2026 — Mətin Fətizadə tərəfindən yenidən dizayn və inkişaf edilib",
        inspired: "ThemeWagon-dan ilhamlanıb",
        beds: "yataq", baths: "hamam", see_details: "Ətraflı bax",
        title: "Əmlak",
        brand: "Əmlak"
    },
    ru: {
        home: "Главная", properties_menu: "Недвижимость", services_menu: "Услуги", about_menu: "О нас", contact: "Контакты",
        hero_text: "Самый простой способ найти дом вашей мечты", search_placeholder: "Почтовый индекс или город. напр. Москва", search_btn: "Поиск",
        popular: "Популярная недвижимость", view_all: "Смотреть все",
        our_services: "Наши услуги",
        s1_title: "Наша недвижимость", s1_text: "Изучите наш широкий выбор недвижимости, включая квартиры, виллы и коммерческие помещения.",
        s2_title: "Продажа недвижимости", s2_text: "Найдите идеальную недвижимость по лучшей цене с полной юридической поддержкой.",
        s3_title: "Агент по недвижимости", s3_text: "Наши опытные агенты проведут вас через каждый этап покупки, продажи или аренды.",
        s4_title: "Дома на продажу", s4_text: "Откройте для себя красивые дома на продажу в самых желанных районах страны.",
        learn_more: "Подробнее",
        customer_says: "Отзывы клиентов", prev: "Назад", next: "Далее",
        about_title: "Найдём идеальный дом для вас",
        about_desc: "Мы предоставляем лучшие услуги в сфере недвижимости, чтобы помочь вам найти идеальную собственность.",
        f1_title: "2М Объектов", f1_text: "Более 2 миллионов проверенных объектов для покупки, продажи или аренды по всей стране.",
        f2_title: "Лучшие Агенты", f2_text: "Наши агенты — высококвалифицированные профессионалы с многолетним опытом на рынке.",
        f3_title: "Проверенные Объекты", f3_text: "Каждый объект проверен и легален. Мы обеспечиваем безопасные и прозрачные сделки.",
        c1: "Купленных объектов", c2: "Проданных объектов", c3: "Всего объектов", c4: "Агентов",
        cta_title: "Станьте частью нашей растущей команды агентов", cta_btn: "Подать заявку",
        agents_title: "Наши агенты", agents_desc: "Познакомьтесь с нашей профессиональной командой агентов по недвижимости.",
        agent_role: "Агент по недвижимости",
        a1_text: "Опытный агент, специализирующийся на элитной и коммерческой недвижимости с более чем 10-летним стажем.",
        a1_name: "Фрэнк Мартин", a2_name: "Джарвис Старк", a3_name: "София Пейсли", a4_name: "Миссис Смит",
        a2_text: "Эксперт по жилой недвижимости. Известен отличными отношениями с клиентами.",
        a3_text: "Лучший агент с глубоким знанием местного рынка и инвестиционной недвижимости.",
        a4_text: "Агент, помогающий семьям найти идеальный дом.",
        partners_title: "Нам доверяют ведущие компании",
        footer_desc: "Ваш надёжный партнёр в поиске идеального дома. Мы делаем недвижимость простой и прозрачной.",
        col1: "Компания", col2: "Услуги", col3: "Поддержка",
        l1_1: "О нас", l1_2: "Наша команда", l1_3: "Карьера", l1_4: "Блог", l1_5: "Контакты",
        l2_1: "Купить", l2_2: "Продать", l2_3: "Арендовать", l2_4: "Агент по недвижимости",
        l3_1: "FAQ", l3_2: "Политика конфиденциальности", l3_3: "Условия использования", l3_4: "Центр помощи",
        copyright: "© 2026 — Редизайн и разработка: Матин Фатизада",
        inspired: "Вдохновлено ThemeWagon",
        beds: "спален", baths: "ванных", see_details: "Подробнее",
        title: "Недвижимость",
        brand: "Недвижимость"
    }
};

function dilDeyis(dil) {
    let d = diller[dil];
    let menuLiler = document.querySelectorAll("#pc-menu ul li");
    let menuKeys = ["home", "properties_menu", "services_menu", "about_menu", "contact"];
    for (let i = 0; i < menuLiler.length; i++) {
        menuLiler[i].textContent = d[menuKeys[i]];
        menuLiler[i].onclick = function(){ get(menuIdler[i]); };
    }
    let leftLiler = document.querySelectorAll("#ulleftmenu li");
    for (let i = 0; i < leftLiler.length; i++) {
        leftLiler[i].textContent = d[menuKeys[i]];
        leftLiler[i].onclick = function(){ get(menuIdler[i]); menuclose(); };
    }
    document.querySelector("#mobile-txt p").textContent = d.hero_text;
    document.querySelector("#data-mobile input").placeholder = d.search_placeholder;
    document.querySelector("#data-mobile button").textContent = d.search_btn;
    document.querySelector("#hero2 p").textContent = d.popular;
    document.querySelector("#hero2 button").textContent = d.view_all;
    let kartlar = document.querySelectorAll(".card");
    for (let i = 0; i < kartlar.length; i++) {
        let icons = kartlar[i].querySelector(".card-icons");
        if (icons) {
            let beds = icons.querySelectorAll("p");
            beds[0].innerHTML = `<i class="fa-solid fa-bed"></i> ${yataqlar[i % yataqlar.length]} ${d.beds}`;
            beds[1].innerHTML = `<i class="fa-solid fa-bath"></i> ${hamamlar[i % hamamlar.length]} ${d.baths}`;
        }
        let btn = kartlar[i].querySelector(".card-btn");
        if (btn) btn.textContent = d.see_details;
    }
    document.querySelector(".services-title").textContent = d.our_services;
    let sCards = document.querySelectorAll(".service-card");
    let sKeys = [["s1_title","s1_text"],["s2_title","s2_text"],["s3_title","s3_text"],["s4_title","s4_text"]];
    for (let i = 0; i < sCards.length; i++) {
        sCards[i].querySelector("h3").textContent = d[sKeys[i][0]];
        sCards[i].querySelector("p").textContent = d[sKeys[i][1]];
        sCards[i].querySelector("a").textContent = d.learn_more;
    }
    document.querySelector(".testimonials-title").textContent = d.customer_says;
    document.querySelector(".prev-btn").innerHTML = `<i class="fa-solid fa-arrow-left"></i> ${d.prev}`;
    document.querySelector(".next-btn").innerHTML = `${d.next} <i class="fa-solid fa-arrow-right"></i>`;
    document.querySelector(".about-top h2").textContent = d.about_title;
    document.querySelector(".about-top p").textContent = d.about_desc;
    let fItems = document.querySelectorAll(".feature-item");
    let fKeys = [["f1_title","f1_text"],["f2_title","f2_text"],["f3_title","f3_text"]];
    for (let i = 0; i < fItems.length; i++) {
        fItems[i].querySelector("h3").textContent = d[fKeys[i][0]];
        fItems[i].querySelector("p").textContent = d[fKeys[i][1]];
    }
    let cItems = document.querySelectorAll(".counter-item p");
    let cKeys = ["c1","c2","c3","c4"];
    for (let i = 0; i < cItems.length; i++) { cItems[i].textContent = d[cKeys[i]]; }
    document.querySelector("#cta h2").textContent = d.cta_title;
    document.querySelector("#cta button").textContent = d.cta_btn;
    document.querySelector(".agents-top h2").textContent = d.agents_title;
    document.querySelector(".agents-top p").textContent = d.agents_desc;
    
    let aCards = document.querySelectorAll(".agent-card");
    let aTexts = ["a1_text","a2_text","a3_text","a4_text"];
    let aNames = ["a1_name","a2_name","a3_name","a4_name"];
    for (let i = 0; i < aCards.length; i++) {
        aCards[i].querySelector("span").textContent = d.agent_role;
        aCards[i].querySelector("h3").textContent = d[aNames[i]];
        aCards[i].querySelector("p").textContent = d[aTexts[i]];
    }
    document.querySelector(".partners-section h3").textContent = d.partners_title;
    document.querySelector(".footer-brand p").textContent = d.footer_desc;
    let fCols = document.querySelectorAll(".footer-col");
    let colKeys = ["col1","col2","col3"];
    let linkKeys = [["l1_1","l1_2","l1_3","l1_4","l1_5"],["l2_1","l2_2","l2_3","l2_4"],["l3_1","l3_2","l3_3","l3_4"]];
    for (let i = 0; i < fCols.length; i++) {
        fCols[i].querySelector("h3").textContent = d[colKeys[i]];
        let links = fCols[i].querySelectorAll("li a");
        for (let j = 0; j < links.length; j++) { links[j].textContent = d[linkKeys[i][j]]; }
    }
    let footerPs = document.querySelectorAll(".footer-bottom p");
    footerPs[0].textContent = d.copyright;
    footerPs[1].textContent = d.inspired;
    document.title = d.title;
    document.querySelector("#mobile-menu h2").textContent = d.brand;
}


const hero = document.getElementById('hero');
const img = [
    "https://themewagon.github.io/property/images/hero_bg_1.jpg",
    "https://themewagon.github.io/property/images/hero_bg_2.jpg",
    "https://themewagon.github.io/property/images/hero_bg_3.jpg",
];
let i = 0;
function changebg() {
    hero.style.backgroundImage = `url('${img[i]}')`;
    i = (i + 1) % img.length;
}
changebg();
setInterval(changebg, 3000);


const ulleftmenu = document.querySelector('#ulleftmenu');
const fabar = document.getElementById('fabar');
const faxmark = document.getElementById('faxmark');

let menuAdlar = ['Home', 'Properties', 'Services', 'About', 'Contact Us'];
let menuIdler = ['hero', 'properties', 'services', 'about', 'footer'];

let kod = '';
for (let mi = 0; mi < menuAdlar.length; mi++) {
    kod += `<li onclick="get('${menuIdler[mi]}'); menuclose();">${menuAdlar[mi]}</li>`;
}
ulleftmenu.innerHTML = kod;

function menuopen() {
    ulleftmenu.style.left = '0';
    fabar.style.display = 'none';
    faxmark.style.display = 'block';
}
function menuclose() {
    ulleftmenu.style.left = '-100%';
    fabar.style.display = 'block';
    faxmark.style.display = 'none';
}


const sekil1 = [
    "https://themewagon.github.io/property/images/img_1.jpg",
    "https://themewagon.github.io/property/images/img_2.jpg",
    "https://themewagon.github.io/property/images/img_3.jpg",
    "https://themewagon.github.io/property/images/img_4.jpg",
    "https://themewagon.github.io/property/images/img_5.jpg",
    "https://themewagon.github.io/property/images/img_6.jpg",
    "https://themewagon.github.io/property/images/img_7.jpg",
    "https://themewagon.github.io/property/images/img_8.jpg",
    "https://themewagon.github.io/property/images/img_1.jpg"
];
const pullar = ["$1,291,000","$820,000","$1,500,000","$650,000","$2,100,000","$930,000","$1,750,000","$480,000","$1,100,000"];
const adresler = ["5232 California Fake, Ave. 21BC","1234 Elm Street, Apt. 5A","7890 Oak Drive, Suite 12","4561 Pine Road, Unit 3B","3210 Maple Lane, Floor 2","6543 Cedar Blvd, Apt. 8C","9876 Birch Way, Suite 7","1472 Walnut Ave, Unit 11","8520 Spruce Ct, Apt. 4D"];
const olkeler = ["California, USA","New York, USA","Texas, USA","Florida, USA","Nevada, USA","Ohio, USA","Oregon, USA","Colorado, USA","Arizona, USA"];
const yataqlar = [2, 3, 4, 2, 5, 3, 4, 2, 3];
const hamamlar = [2, 2, 3, 1, 4, 2, 3, 1, 2];

function kartYarat(j) {
    return `
        <div class="card">
            <img src="${sekil1[j]}" alt="">
            <h2>${pullar[j]}</h2>
            <h6>${adresler[j]}</h6>
            <h4>${olkeler[j]}</h4>
            <div class="card-icons">
                <p><i class="fa-solid fa-bed"></i> ${yataqlar[j]} beds</p>
                <p><i class="fa-solid fa-bath"></i> ${hamamlar[j]} baths</p>
            </div>
            <button class="card-btn">See details</button>
        </div>
    `;
}

let kartlarHTML = '';
for (let j = 0; j < sekil1.length; j++) {
    kartlarHTML += kartYarat(j);
}
const groups = document.querySelectorAll('.group');
groups[0].innerHTML = kartlarHTML;
groups[1].innerHTML = kartlarHTML;

let carousel = document.querySelector(".carousel");
let group1 = document.querySelectorAll(".group")[0];
let group2 = document.querySelectorAll(".group")[1];
carousel.addEventListener("mouseenter", function () {
    group1.style.animationPlayState = "paused";
    group2.style.animationPlayState = "paused";
});
carousel.addEventListener("mouseleave", function () {
    group1.style.animationPlayState = "running";
    group2.style.animationPlayState = "running";
});


let serviceGrid = document.querySelector(".services-grid");
let serviceIcons = ["fa-solid fa-building","fa-solid fa-tag","fa-solid fa-user-tie","fa-solid fa-house"];
let serviceBasliqlar = ["Our Properties","Property for Sale","Real Estate Agent","House for Sale"];
let serviceMetn = [
    "Explore our wide range of properties including apartments, villas, and commercial spaces in top locations.",
    "Find the perfect property for sale at the best price. We offer trusted deals with full legal support.",
    "Our experienced agents will guide you through every step of buying, selling, or renting a property.",
    "Discover beautiful houses for sale in the most desirable neighborhoods across the country."
];
let serviceHTML = "";
for (let i = 0; i < serviceIcons.length; i++) {
    serviceHTML += `
        <div class="service-card" data-aos="fade-up" data-aos-delay="${i * 350}" data-aos-duration="800">
            <i class="${serviceIcons[i]}"></i>
            <h3>${serviceBasliqlar[i]}</h3>
            <p>${serviceMetn[i]}</p>
            <a href="#">Learn More</a>
        </div>
    `;
}
serviceGrid.innerHTML = serviceHTML;


let testimonialWrapper = document.getElementById("testimonials-wrapper");
let customerSekil = [
    "https://themewagon.github.io/property/images/person_1-min.jpg",
    "https://themewagon.github.io/property/images/person_2-min.jpg",
    "https://themewagon.github.io/property/images/person_3-min.jpg",
    "https://themewagon.github.io/property/images/person_4-min.jpg",
    "https://themewagon.github.io/property/images/person_5-min.jpg",
    "https://themewagon.github.io/property/images/person_6-min.jpg"
];
let customerAd = ["James Smith","Mike Houston","Cameron Webster","Sarah Johnson","Emily Davis","David Brown"];
let customerVezife = ["Designer, Co-founder","CEO, Tech Corp","Marketing Director","Product Manager","Lead Developer","UX Designer"];
let customerReview = [
    "Amazing service! They helped us find our dream home in just two weeks. Highly professional and supportive team.",
    "I sold my property through them and the process was incredibly smooth. Truly the best real estate experience.",
    "Their agents are knowledgeable and patient. They answered all my questions and found the perfect apartment for me.",
    "From start to finish, the experience was flawless. I would recommend them to anyone looking for property.",
    "Excellent communication and great deals. They made buying my first home stress-free and enjoyable.",
    "Very professional team with deep market knowledge. Found us a beautiful house within our budget."
];
let customerUlduz = [5, 5, 5, 4, 5, 4];
let testimonialHTML = "";
for (let i = 0; i < customerAd.length; i++) {
    let stars = "";
    for (let s = 0; s < customerUlduz[i]; s++) { stars += `<i class="fa-solid fa-star"></i>`; }
    testimonialHTML += `
        <div class="swiper-slide">
            <div class="testimonial-card" data-aos="fade-left" data-aos-delay="${i * 250}" data-aos-duration="800">
                <img src="${customerSekil[i]}" alt="">
                <div class="stars">${stars}</div>
                <h3>${customerAd[i]}</h3>
                <p>"${customerReview[i]}"</p>
                <span>${customerVezife[i]}</span>
            </div>
        </div>
    `;
}
testimonialWrapper.innerHTML = testimonialHTML;

let testimonialSwiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1, spaceBetween: 20, loop: true, speed: 600,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".next-btn", prevEl: ".prev-btn" },
    breakpoints: { 576: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
});


let aboutFeatures = document.getElementById("about-features");
let featureIcons = ["fa-solid fa-house","fa-solid fa-user","fa-solid fa-shield"];
let featureBasliq = ["2M Properties","Top Rated Agents","Legit Properties"];
let featureMetn = [
    "Over 2 million verified properties available across the country for buying, selling or renting.",
    "Our agents are highly rated professionals with years of experience in the real estate market.",
    "Every listed property is verified and legitimate. We ensure safe and transparent transactions."
];
let featureHTML = "";
for (let i = 0; i < featureIcons.length; i++) {
    featureHTML += `
        <div class="feature-item" data-aos="fade-right" data-aos-delay="${i * 250}" data-aos-duration="800">
            <div class="feature-icon"><i class="${featureIcons[i]}"></i></div>
            <div class="feature-text"><h3>${featureBasliq[i]}</h3><p>${featureMetn[i]}</p></div>
        </div>
    `;
}
aboutFeatures.innerHTML = featureHTML;


let countersGrid = document.getElementById("counters-grid");
let counterReqem = [3298, 2181, 9316, 7191];
let counterBasliq = ["# of Buy Properties","# of Sell Properties","# of All Properties","# of Agents"];
let counterHTML = "";
for (let i = 0; i < counterReqem.length; i++) {
    counterHTML += `<div class="counter-item"><h2 class="counter-number">0</h2><p>${counterBasliq[i]}</p></div>`;
}
countersGrid.innerHTML = counterHTML;

let h2ler = document.querySelectorAll(".counter-number");
let basladimi = false;
let current0 = 0, current1 = 0, current2 = 0, current3 = 0;
function saymayaBashla() {
    setInterval(function () {
        if (current0 < 3298) { current0 += 33; if (current0 > 3298) current0 = 3298; h2ler[0].textContent = current0; }
        if (current1 < 2181) { current1 += 22; if (current1 > 2181) current1 = 2181; h2ler[1].textContent = current1; }
        if (current2 < 9316) { current2 += 94; if (current2 > 9316) current2 = 9316; h2ler[2].textContent = current2; }
        if (current3 < 7191) { current3 += 72; if (current3 > 7191) current3 = 7191; h2ler[3].textContent = current3; }
    }, 20);
}
window.addEventListener("scroll", function () {
    let section = document.getElementById("counters");
    let top = section.getBoundingClientRect().top;
    if (top < window.innerHeight && !basladimi) { saymayaBashla(); basladimi = true; }
});


let agentsGrid = document.getElementById("agents-grid");
let agentSekil = [
    "https://deadline.com/wp-content/uploads/2025/02/jason-statham.jpg?w=1024",
    "https://www.themodestman.com/wp-content/uploads/2013/03/Robert-Downey-Jr..jpg",
    "https://www.rollingstone.com/wp-content/uploads/2024/12/madison-beer-interview.jpg",
    "https://s2.r29static.com/bin/entry/e75/x,80/1975318/image.jpg"
];
let agentAd = ["Frank Martin","Jarvis Stark","Sophia Paisley","Mrs Smith"];
let agentVezife = ["Real Estate Agent","Real Estate Agent","Real Estate Agent","Real Estate Agent"];
let agentMetn = [
    "Experienced agent specializing in luxury homes and commercial properties with over 10 years in the industry.",
    "Expert in residential properties and first-time home buyers. Known for excellent client relationships.",
    "Top-performing agent with deep knowledge of the local market and investment properties.",
    "Dedicated agent focused on helping families find their perfect home. Expert in suburban and urban properties."
];
let agentHTML = "";
for (let i = 0; i < agentAd.length; i++) {
    agentHTML += `
        <div class="agent-card" data-aos="fade-up" data-aos-delay="${i * 250}" data-aos-duration="800">
            <img src="${agentSekil[i]}" alt="">
            <h3>${agentAd[i]}</h3>
            <span>${agentVezife[i]}</span>
            <p>${agentMetn[i]}</p>
            <div class="agent-socials">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    `;
}
agentsGrid.innerHTML = agentHTML;


let footerSocials = document.getElementById("footer-socials");
let socialIcons = ["fa-brands fa-instagram","fa-brands fa-twitter","fa-brands fa-facebook","fa-brands fa-linkedin","fa-brands fa-pinterest"];
let socialHTML = "";
for (let i = 0; i < socialIcons.length; i++) { socialHTML += `<a href="#"><i class="${socialIcons[i]}"></i></a>`; }
footerSocials.innerHTML = socialHTML;


let footerLinks = document.getElementById("footer-links");
let sutunBasliq = ["Company","Services","Support"];
let sutunLinkler = [
    [{ad:"About Us",id:"about"},{ad:"Our Team",id:"agents"},{ad:"Careers",id:"cta"},{ad:"Blog",id:"testimonials"},{ad:"Contact",id:"footer"}],
    [{ad:"Buy Property",id:"properties"},{ad:"Sell Property",id:"properties"},{ad:"Rent Property",id:"properties"},{ad:"Real Estate Agent",id:"agents"}],
    [{ad:"FAQ",id:"footer"},{ad:"Privacy Policy",id:"footer"},{ad:"Terms of Service",id:"footer"},{ad:"Help Center",id:"footer"}]
];
let linksHTML = "";
for (let i = 0; i < sutunBasliq.length; i++) {
    linksHTML += `<div class="footer-col" data-aos="fade-up" data-aos-delay="${(i+1)*150}"><h3>${sutunBasliq[i]}</h3><ul>`;
    for (let j = 0; j < sutunLinkler[i].length; j++) {
        linksHTML += `<li><a href="#" onclick="get('${sutunLinkler[i][j].id}'); return false;">${sutunLinkler[i][j].ad}</a></li>`;
    }
    linksHTML += `</ul></div>`;
}
footerLinks.innerHTML = linksHTML;


let partnerAdlar1 = ["Zillow","Airbnb","Tripadvisor","Houzz","Booking.com"];
let partnerAdlar2 = ["Autodesk","Siemens","IKEA","ABB","Schneider Electric"];
let partnerAdlar3 = ["Samsung","LG","Bosch","Rakuten Kobo","Vestel"];
let partnerAdlar4 = ["Wizzair","HubSpot","Stripe","PayPal","Square"];
let partnerLogolar1 = ["https://cdn.simpleicons.org/zillow/fff","https://cdn.simpleicons.org/airbnb/fff","https://cdn.simpleicons.org/tripadvisor/fff","https://cdn.simpleicons.org/houzz/fff","https://cdn.simpleicons.org/bookingdotcom/fff"];
let partnerLogolar2 = ["https://cdn.simpleicons.org/autodesk/fff","https://cdn.simpleicons.org/siemens/fff","https://cdn.simpleicons.org/ikea/fff","https://cdn.simpleicons.org/abb/fff","https://cdn.simpleicons.org/schneiderelectric/fff"];
let partnerLogolar3 = ["https://cdn.simpleicons.org/samsung/fff","https://cdn.simpleicons.org/lg/fff","https://cdn.simpleicons.org/bosch/fff","https://cdn.simpleicons.org/rakutenkobo/fff","https://cdn.simpleicons.org/vestel/fff"];
let partnerLogolar4 = ["https://cdn.simpleicons.org/wizzair/fff","https://cdn.simpleicons.org/hubspot/fff","https://cdn.simpleicons.org/stripe/fff","https://cdn.simpleicons.org/paypal/fff","https://cdn.simpleicons.org/square/fff"];

function partnerHTMLyarat(adlar, logolar) {
    let html = "";
    for (let i = 0; i < adlar.length; i++) { html += `<div class="partner-item"><img src="${logolar[i]}" alt="${adlar[i]}"><span>${adlar[i]}</span></div>`; }
    return html;
}

let p1 = partnerHTMLyarat(partnerAdlar1, partnerLogolar1);
let p2 = partnerHTMLyarat(partnerAdlar2, partnerLogolar2);
let p3 = partnerHTMLyarat(partnerAdlar3, partnerLogolar3);
let p4 = partnerHTMLyarat(partnerAdlar4, partnerLogolar4);

document.getElementById("pg1").innerHTML = p1;
document.getElementById("pg2").innerHTML = p1;
document.getElementById("pg3").innerHTML = p2;
document.getElementById("pg4").innerHTML = p2;
document.getElementById("pg5").innerHTML = p3;
document.getElementById("pg6").innerHTML = p3;
document.getElementById("pg7").innerHTML = p4;
document.getElementById("pg8").innerHTML = p4;
