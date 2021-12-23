const headingInfo = document.querySelectorAll("h2");
const deks = document.querySelectorAll(".deskription");
const card = document.querySelectorAll("#sec-2 .col-xl-3");
const excessItem1 = document.querySelectorAll("#sec-3 .excess-item");
const excessItem2 = document.querySelectorAll("#sec-4 .excess-item");
const footer = document.querySelectorAll("#footer .col-lg-4");
const mision = document.querySelectorAll("#about-us .mision-item");
const imgProduct = document.querySelectorAll("#product img");
const imgEngineeringDesain = document.querySelectorAll("#engineering-desain img");
const imgFabrication = document.querySelectorAll("#fabrication img");
const imgService = document.querySelectorAll("#services-img img");


headingInfo.forEach((info, i) => {
    info.dataset.aos = "fade-right";
})

deks.forEach((info, i) => {
    info.dataset.aos = "fade-up-right";
    info.dataset.aosDuration = 1000;
})

card.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

excessItem1.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

excessItem2.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

footer.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

mision.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

imgProduct.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

imgEngineeringDesain.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

imgFabrication.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})

imgService.forEach((info, i) => {
    info.dataset.aos = "zoom-out-down";
    info.dataset.aosDelay = i * 100;
    info.dataset.aosDuration = 1000;
})



AOS.init({
    once: true,
});