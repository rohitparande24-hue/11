// =========================================
// TARGET DATE
// Change this to the birthday date
// Month: January = 0, July = 6
// =========================================
//const targetDate = new Date(Date.now() + 2000).getTime();
const targetDate = new Date(2026, 6, 26, 0, 0, 0).getTime();

// =========================================
// ELEMENTS
// =========================================

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const questionBox = document.getElementById("questionBox");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const hero = document.querySelector(".hero");
const surprise = document.getElementById("surprise");

const typing = document.getElementById("typing");

// =========================================
// COUNTDOWN
// =========================================

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    // Countdown Finished
    if(distance <= 0){

        clearInterval(timer);

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        document.getElementById("countdown").style.display="none";

        document.querySelector(".subtitle").style.display="none";

        questionBox.style.display="block";

        return;
    }

    days.innerHTML =
    Math.floor(distance/(1000*60*60*24));

    hours.innerHTML =
    Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    minutes.innerHTML =
    Math.floor((distance%(1000*60*60))/(1000*60));

    seconds.innerHTML =
    Math.floor((distance%(1000*60))/1000);

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);

// =========================================
// YES BUTTON
// =========================================
// ===============================
// OPEN SURPRISE
// ===============================

yesBtn.addEventListener("click", () => {
    // Start music
const music = document.getElementById("birthdayMusic");

music.volume = 0.7;

music.play().catch(error => {
    console.log("Music failed to play:", error);
});

    // Hide countdown page
    hero.style.display = "none";

    // Show surprise page
    surprise.style.display = "flex";

    // Wait a little before opening the letter
    setTimeout(() => {

    const letter = document.getElementById("letter");

    // Add open class
    letter.classList.add("open");

    // Start from closed
    letter.style.height = "0px";

    // Allow browser to update
    setTimeout(() => {

        // Expand exactly to content height
        letter.style.height = letter.scrollHeight + "px";

    },50);

},500);
    // After the letter is fully opened
    setTimeout(() => {

        document.getElementById("typing").classList.add("show");

        typeWriter();

    }, 2500);

    // Start fireworks forever
    startFireworks();

});// =========================================
// NO BUTTON RUNS AWAY
// =========================================

noBtn.addEventListener("mouseover",()=>{

    const x=Math.random()*300-150;

    const y=Math.random()*120-60;

    noBtn.style.transform=
    `translate(${x}px,${y}px)`;

});
// =========================================
// TYPEWRITER EFFECT
// =========================================

const message = `Happy Birthday Aruu ❤️

Today is all about you
Pn mla tula kahi tri sangaych aahe...sangaych as aahe ki mla tu khup avdtis br khup mhnje khup,pn mla ny express krt yet as ani mla kdhi jml mla ny mahit but i will try kdhi tri jml mla,
te jaude sgl tr important as aahe ki tula letter pahije hot na tr tya sathi he ek letter pn digital letter, ya digital  world mdhi tula letter deu shklo asto pn everytime in this  changing wrold we should also change mhnun ek letter tuzya  sathi tr tula happiest birthday mazya kdun khup khup happy wala birthday...
tu khup god aahes mhnje ekdam amras puri mla ny mahit mi ky boltoy but mi tuzya jvl ky pn bolu shkto na ani par ly khar bolayla mla ghavi lagl tya divshi sarkh mla ny avdt ghavyla but ata pasun avdl ka tr kon tr ani care krty mhnun pampering khup sarii ani ek tight hug sakal priynt it feels like the beautifull moment of the world, ts tr tuch ata maz world aahe but still it feel the best when you are with me i love you aruu...❤️
mazya mummy ntrun mi konala yevd jvl kel aahes tr ti tu aahe so be that person till the end. mla mummy ntrun sambhalun ghetl mhnun khup khup thank you and i know you will till the end. tuzya bdl mi ny bolu shkt kahi karn tuzya bdl boln tevd mla kmi pdl yevdi chan aahes g rani tu he letter mla khup moth ny bnvaych karn its all the digital world jr koni pahil tula ani mla sodl tr ugch tyachya sathi laughing time hoil pn konalach kln ki tu ani mich aahe he pn jaude bghu....
mi tr khup dreams bghtoy tuzya sobt ka ky mahit but i think ki mla tuzya sobtch pudh jaych aahe in life mhnun ki ky mahit ny but that are all with you so all are good. i think ki tula mi khup irritate krt asl ka ky mahit ny but its all my inner child ani sorry br ka ky tula vattl asl tr ani vattl asl tri gp bsach karn we togther better foe ever so tula ky vattl mazya or aplya bdl tr mlach yeun bol karn te tr mi or apn doghch clear kru shkto na ka ugch third person mla mahit kntala yeto mansala mla yeto kdhi kdhi pn mi vichar krto ki break gheu apn pn mla ata break pn tuzya sobtch ghyava lagel baki kon maz nahiye ek tu ani ek to dlindar maza mitr mayur mi tr ata mazya family mla pn maz smjt ny fkt tuch mazi family soham aahe but to mazi svabdar aahe so it all you karn ya navin bai ni mla lamb doghan pasun jaude ky boltoy mi mla tr tuzya sobt lifespend ani end kraychi aahe... 
ky vatt tula aplyala mulga hoil ki mulgi hoil te hoil pn tyala apn na as kona ekala attract ny kraych tyala apn doghana attract kraych mhnje to apla transmeter bnl fully msti tu tyala/tila bolshil are papa la sang jevn krayla upashi nst rahaych mg to yeil mazya kde papa mummy as as boli mg mi bol mummy la sang tech tula pn lagu hot mhnje as small transmeter pn aplya mdl tyala/tila pn nko ky jast sangayla why third person what if he/she are but not aslo he/she should??
promise me to stay together till the entire life mla ya birthday kahi tri special kraych hot pn mahit ny jml ka nahi te thodech divs urle aahet karn pn will try my best ani ata nahi ky zal tri mi krn next time ata khup kahi aahe je kraych url aahe ata tr fkt ekch gost ali aahe ajun khup kahi aahe yevdya chotya chotya gosti ni ky honar ny mla as kraych aahe je mazya bloodline mdhi konakde nsl kel so plzz ata mla adjust kr thod maza strugle time chalu aahe ani infact tuza pn aahe chalu tu pn mi pn we will grow together shevti aahech kon aplyala.
ani last but not the least sorry maz kdhi ky chukl asl tr mla sang clear, ani thankyou mazya sobt aahes tu mhnun ani mi khup bol mhnje tya divshi sarkh purn expresss zalto ts tr mla ekda prt ghyavi lagl heheheh
I love you the most and forver...❤️
enjoy kr khup.. 
May your smile always stay this beautiful,
your dreams become reality, and your heart always be filled with happiness.

Thank you for being such an beautifull women.

I hope this little surprise makes your day even more special.

Once again,

🎂 Happy Birthday ❤️
aloch cake🎂 gheun 

— Pillyaa ❤️`;

let index = 0;

function typeWriter() {

    typing.innerHTML = "";

    index = 0;

    const speed = 40;

    const interval = setInterval(() => {

        if(message.charAt(index) === "\n"){

    typing.innerHTML += "<br>";

}else{

    typing.innerHTML += message.charAt(index);

}

        const letter = document.getElementById("letter");
        letter.style.height = letter.scrollHeight + "px";

        index++;

        if (index >= message.length) {

            clearInterval(interval);

        }

    }, speed);

}

// =========================================
// FLOATING HEARTS
// =========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

}

setInterval(createHeart,80);

// =========================================
// FIREWORKS
// =========================================

const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

let particles = [];

function createExplosion(x,y){

    for(let i=0;i<180;i++){

        particles.push({

            x:x,

            y:y,

            dx:(Math.random()-0.5)*10,

            dy:(Math.random()-0.5)*10,

            life:100,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        const p = particles[i];

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle = p.color;

        ctx.fill();

        p.x += p.dx;

        p.y += p.dy;

        p.life--;

        if(p.life <= 0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
// =========================================
// START FIREWORKS
// =========================================

let fireworksStarted = false;

function startFireworks(){

    if(fireworksStarted) return;

    fireworksStarted = true;

    setInterval(()=>{

        createExplosion(

            Math.random()*canvas.width,

            Math.random()*(canvas.height/2)

        );

    },800);

}

// =========================================
// THANK YOU BUTTON
// =========================================



// =========================================
// EXTRA HEARTS AFTER OPENING SURPRISE
// =========================================

yesBtn.addEventListener("click",()=>{

    for(let i=0;i<30;i++){

        setTimeout(createHeart,i*120);

    }

});

// =========================================
// ESCAPE BUTTON (FUN EFFECT)
// =========================================

noBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    alert("😂 Nice try!\n\nThere is no escaping your birthday surprise!");

});

// =========================================
// DOUBLE CLICK ON TITLE
// =========================================

document.querySelector(".hero h1").addEventListener("dblclick",()=>{

    alert("❤️ Made with love by Pillyaa ❤️");

});

// =========================================
// END OF SCRIPT
// =========================================    