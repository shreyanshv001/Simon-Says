let gamesqn=[];
let usersqn=[];
let btns=["red","yellow","blue","purple"];

let start=false, level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start==false){
        console.log("Games started");
        start=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
} 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
} 

function levelUp(){
    usersqn=[];
    level++;

    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);    
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gamesqn.push(randomColor);
    console.log(gamesqn);
    gameFlash(randomBtn);
}


let body=document.querySelector("body");
function checkAns(idx){
    if(gamesqn[idx]==usersqn[idx]){
        if(usersqn.length==gamesqn.length){
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start`;
        body.style.backgroundColor="red";
        setTimeout( function()  {
            body.style.backgroundColor="rgb(84, 84, 84)";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    usersqn.push(userColor);
    
    checkAns(usersqn.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress); 
}

function reset(){
    start=false;
    level=0;
    gamesqn=[];
    usersqn=[];
}