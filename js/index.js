const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//header

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((element, i) => {
  element.textContent = Object.values(siteContent.nav)[i];
});

navLinks.forEach( (element) => {
  element.style.color = "green";
});



//cta

const headerText = document.querySelector('.cta-text h1');
headerText.textContent = siteContent.cta["h1"];

const btnText = document.querySelector('.cta-text button');
btnText.textContent = siteContent.cta["button"];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

//main content
const topContH = document.querySelectorAll('.top-content .text-content h4');
topContH[0].textContent = siteContent["main-content"]["features-h4"];
topContH[1].textContent = siteContent["main-content"]["about-h4"];

const topContP = document.querySelectorAll('.top-content .text-content p');
topContP[0].textContent = siteContent["main-content"]["features-content"];
topContP[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const botContH = document.querySelectorAll('.bottom-content .text-content h4');
botContH[0].textContent = siteContent["main-content"]["services-h4"];
botContH[1].textContent = siteContent["main-content"]["product-h4"];
botContH[2].textContent = siteContent["main-content"]["vision-h4"];

const botContP = document.querySelectorAll('.bottom-content .text-content p');
botContP[0].textContent = siteContent["main-content"]["services-content"];
botContP[1].textContent = siteContent["main-content"]["product-content"];
botContP[2].textContent = siteContent["main-content"]["vision-content"];

//contact
const contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

//footer
const footP = document.querySelector('footer p');
footP.textContent = siteContent.footer.copyright;
