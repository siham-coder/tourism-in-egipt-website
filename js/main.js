//typing effect
let title = document.querySelector('header .content .title');
let textArray = [['ROAM AROUND EGYPT AS IF YOU WERE AT HOME.'], ['EXPLORE THE ANCIENT HISTORY AND MONUMENTS OF EGYPT.'], ['MEET THE LOCALS AND SEE HOW THEY LIVE.']];

//select header-slider
let slider = document.querySelector("header .header-slider");
//get array of imgs
let imgArray = ["bg-img1.jpg", "bg-img2.jpg", "bg-img3.jpg"];
//variable to control the background interval
let backgroundInterval;
//set the start
let i = 0;
//function to randomize imgs
function randomizeImgs() {
    backgroundInterval = setInterval(() => {
        //reset i
        if (i === imgArray.length) {
            i = 0;
        }
        //chang background url
        title.textContent = textArray[i];
        slider.style.backgroundImage = 'url("imgs/' + imgArray[i] + '")';
        i++;
    }, 4000);
}
//sliding function
randomizeImgs();