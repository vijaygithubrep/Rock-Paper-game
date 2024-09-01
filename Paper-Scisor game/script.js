let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".comp");
let you = document.querySelector(".you");
let pc = document.querySelector(".pc");
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
console.log(computer);
let play = document.querySelector(".play");
let random = Math.floor(Math.random()*3);
let triangle = document.querySelector(".triangle");
let score = JSON.parse(localStorage.getItem("sc"))
let scoreElem = document.getElementById("score");
let rulBtn = document.querySelector(".btn-rule");
let rulemodal = document.querySelector(".rule-modal");
let ruleinstruct = document.querySelector(".rule-instruct");
 let nextbutton = document.querySelector(".next-button");

 if(score) {
    scoreElem.innerText=score;
 }
 let count=0;

 let scorepc = JSON.parse(localStorage.getItem("scp"))
 let scoreElempc = document.getElementById("scorepc");
 if(scorepc) {
    scoreElempc.innerText=scorepc;
 }
 
con.forEach((element,index) => {
    element.addEventListener("click",() =>{
        you.style.opacity="1";
        triangle.style.display="none";  
        con.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add(("show"))      
        setTimeout(() => {
            pc.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display="block";
                computer[random].classList.add("right");
            }, 1000);
        }, 500);
        setTimeout(() => {
            if(random==index){
                winModal.style.display="grid";
                winner.innerText="TIE UP";
            } else if (index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                winModal.style.display="grid";               
                winner.innerText="YOU WIN";  
                nextbutton.style.display = 'inline-block';       
                count=score;
                count++;              
                scoreElem.innerText=count;
                localStorage.setItem("sc", JSON.stringify(count));
            } else {
                winModal.style.display="grid";
                winner.innerText="YOU LOST";
                count=scorepc;
                count++;
                scoreElempc.innerText=count;
                localStorage.setItem("scp", JSON.stringify(count));
            }
            },1500);
     })
});
play.addEventListener("click", ()=> {
    window.location.reload();
})
rulBtn.addEventListener("click", () =>{
    rulemodal.style.display="flex";
    setTimeout(()=>{
        ruleinstruct.style.transform="translateY(0)";
    }, 400);
})

let close=document.querySelector(".close");
close.addEventListener("click", ()=> {
    ruleinstruct.style.transform= "translate(0%)";
    setTimeout(() => {
        rulemodal.style.display="none";
    },200);
})
 
document.querySelector('.next-button').addEventListener('click', function() {
    window.location.href = 'nextpage.html'; // Redirect to the next page
});
