let softwareDeveloper = document.querySelector("#software-box");
let dataScientist = document.querySelector("#data-box");
let educator = document.querySelector("#educator-box");

let expBlock1 = document.querySelector("#experience-block-1");
let expBlock2 = document.querySelector("#experience-block-2");
let expBlock3 = document.querySelector("#experience-block-3");
let expBlock4 = document.querySelector("#experience-block-4");
let expBlock5 = document.querySelector("#experience-block-5");
let expBlock6 = document.querySelector("#experience-block-6");
let expBlock7 = document.querySelector("#experience-block-7");

let softwareHighlight = document.querySelector("#software-highlight");
let dataHighlight = document.querySelector("#data-highlight");
let educatorHighlight = document.querySelector("#educator-highlight");

// SOFTWARE BLOCK ANIMATIONS

softwareDeveloper.addEventListener("mouseover", moveSoftwareBlocks);
softwareDeveloper.addEventListener("mouseout", moveSoftwareBlocksBack);

function moveSoftwareBlocks() {
    // console.log("test");
    document.body.style.cursor = "pointer";
    expBlock1.style.transition = "transform 0.2s ease-in-out"
    expBlock1.style.transform = "translateY(-25px)"

    expBlock6.style.transition = "transform 0.2s ease-in-out"
    expBlock6.style.transform = "translateY(25px)"

    softwareHighlight.style.transition = "opacity 0.2s ease-in-out"
    softwareHighlight.style.opacity = "90%"
}

function moveSoftwareBlocksBack() {
    // console.log("test2");
    document.body.style.cursor = "default";

    expBlock1.style.transition = "transform 0.2s ease-in-out"
    expBlock1.style.transform = "translateY(0px)";
    setTimeout(function(){expBlock1.style.transition = "width 0.2s ease-in"}, 200);

    expBlock6.style.transition = "transform 0.2s ease-in-out"
    expBlock6.style.transform = "translateY(50px)";
    setTimeout(function(){expBlock6.style.transition = "width 0.2s ease-in"}, 200);

    softwareHighlight.style.transition = "opacity 0.2s ease-in-out"
    softwareHighlight.style.opacity = "60%"
}

// DATA BLOCK ANIMATIONS

dataScientist.addEventListener("mouseover", moveDataBlocks);
dataScientist.addEventListener("mouseout", moveDataBlocksBack);

function moveDataBlocks() {
    document.body.style.cursor = "pointer";
    expBlock2.style.transition = "transform 0.2s ease-in-out"
    expBlock2.style.transform = "translateY(-55px)"

    expBlock3.style.transition = "transform 0.2s ease-in-out"
    expBlock3.style.transform = "translateY(-15px)"

    expBlock7.style.transition = "transform 0.2s ease-in-out"
    expBlock7.style.transform = "translateY(-25px)"

    dataHighlight.style.transition = "opacity 0.2s ease-in-out"
    dataHighlight.style.opacity = "90%"
}

function moveDataBlocksBack() {
    document.body.style.cursor = "default";

    expBlock2.style.transition = "transform 0.2s ease-in-out"
    expBlock2.style.transform = "translateY(-30px)";
    setTimeout(function(){expBlock2.style.transition = "width 0.2s ease-in"}, 200);

    expBlock3.style.transition = "transform 0.2s ease-in-out"
    expBlock3.style.transform = "translateY(10px)";
    setTimeout(function(){expBlock3.style.transition = "width 0.2s ease-in"}, 200);

    expBlock7.style.transition = "transform 0.2s ease-in-out"
    expBlock7.style.transform = "translateY(0px)";
    setTimeout(function(){expBlock7.style.transition = "width 0.2s ease-in"}, 200);

    dataHighlight.style.transition = "opacity 0.2s ease-in-out"
    dataHighlight.style.opacity = "60%"
}

// EDUCATOR ANIMATIONS

educator.addEventListener("mouseover", moveEducatorBlocks);
educator.addEventListener("mouseout", moveEducatorBlocksBack);

function moveEducatorBlocks() {
    document.body.style.cursor = "pointer";
    expBlock4.style.transition = "transform 0.2s ease-in-out"
    expBlock4.style.transform = "translateY(25px)"

    expBlock5.style.transition = "transform 0.2s ease-in-out"
    expBlock5.style.transform = "translateY(-25px)"

    educatorHighlight.style.transition = "opacity 0.2s ease-in-out"
    educatorHighlight.style.opacity = "90%"
}

function moveEducatorBlocksBack() {
    document.body.style.cursor = "default";

    expBlock4.style.transition = "transform 0.2s ease-in-out"
    expBlock4.style.transform = "translateY(50px)";
    setTimeout(function(){expBlock4.style.transition = "width 0.2s ease-in"}, 200);

    expBlock5.style.transition = "transform 0.2s ease-in-out"
    expBlock5.style.transform = "translateY(0px)";
    setTimeout(function(){expBlock5.style.transition = "width 0.2s ease-in"}, 200);

    educatorHighlight.style.transition = "opacity 0.2s ease-in-out"
    educatorHighlight.style.opacity = "60%"
}

// SHOW BLOCK TEXT
// let expBlock1Text = document.querySelector("#experience-description-1");

// function showBlock1Text() {
//     console.log("dsdfsdf")
//     setTimeout(function(){expBlock1Text.style.display = "block"}, 150);
// }

// function hideBlock1Text() {
//     expBlock1Text.style.display = "none";
// }

// expBlock1.addEventListener("mouseover", showBlock1Text);
// expBlock1.addEventListener("mouseout", hideBlock1Text);