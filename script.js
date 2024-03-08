let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let wincon=document.querySelector(".winner");


let turnA=true;

let winpatt=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        if(turnA){
            box.innerText="0";
            box.style.color="red";
            turnA=false;
        }
        else{
            box.innerText="X";
            box.style.color="purple";
            turnA=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const checkWinner=()=>{
    for(pattern of winpatt){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                disableboxes();
                showWinner(pos1);
            }
        }

    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations WINNER ${winner}`;
    wincon.classList.remove("hide");
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const resetgame=()=>{
    turnA=true;
    enableboxes();
    wincon.classList.add("hide");
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newgame.addEventListener("click",resetgame);

reset.addEventListener("click",resetgame);