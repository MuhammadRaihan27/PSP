const headingInfo = document.querySelectorAll("h2");
const deks = document.querySelectorAll(".deskription");
const card = document.querySelectorAll("#sec-2 .col-xl-3");
const excessItem1 = document.querySelectorAll("#sec-3 .excess-item");
const excessItem2 = document.querySelectorAll("#sec-4 .excess-item");
const excessItem = document.querySelectorAll("#sec-1 .excess-item .heading");
const imgSec1 = document.querySelectorAll("#sec-1 img");
const imgSecEpc = document.querySelectorAll("#epc img");
const footer = document.querySelectorAll("#footer .col-lg-4");
const mision = document.querySelectorAll("#about-us .mision-item");
const imgProduct = document.querySelectorAll("#product img");
const imgEngineeringDesain = document.querySelectorAll("#engineering-desain img");
const imgEngineering = document.querySelectorAll("#engineering img");
const imgFabrication = document.querySelectorAll("#fabrication img");
const imgOperation = document.querySelectorAll("#operation img");
const imgService = document.querySelectorAll("#services-img img");
const imgService1 = document.querySelectorAll("#services img");
const ourProduct = document.querySelectorAll("#our-product .container");
const aboutUs = document.querySelectorAll("#about-us h3");
const vision = document.querySelectorAll("#about-us .vision");
const mission = document.querySelectorAll("#about-us .mission");
const footerOurSupport = document.querySelectorAll("#footer .mb-5");
const imgBox = document.querySelectorAll("#engineering .box-img");


if (window.innerWidth > 450) {
    headingInfo.forEach((info, i) => {
        info.dataset.aos = "fade-right";
    })

    footerOurSupport.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
    })

    excessItem.forEach((info, i) => {
        info.dataset.aos = "fade-right";
    })

    aboutUs.forEach((info, i) => {
        info.dataset.aos = "fade-right";
    })

    vision.forEach((info, i) => {
        info.dataset.aos = "zoom-out-up";
    })

    mision.forEach((info, i) => {
        info.dataset.aos = "zoom-out-up";
    })

    imgBox.forEach((info, i) => {
        info.dataset.aos = "zoom-out-up";
        info.dataset.aosDuration = 1000;
    })

    imgSec1.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
        info.dataset.aosDuration = 1000;
    })

    imgOperation.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
        info.dataset.aosDuration = 1000;
    })

    imgEngineering.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
        info.dataset.aosDuration = 1000;
    })

    imgService1.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
        info.dataset.aosDuration = 1000;
    })

    imgSecEpc.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
        info.dataset.aosDuration = 1000;
    })

    ourProduct.forEach((info, i) => {
        info.dataset.aos = "zoom-out-down";
        info.dataset.aosDuration = 1000;
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

}