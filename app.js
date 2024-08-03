let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#rst-btn");

let turn0 = true; //playerX  //playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
   box.addEventListener("click", ()=>{

    if(turn0 === true){ //PLAYER O
        box.innerText = "O";
        turn0 = false;
    }else{ //PLAYER X
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    Winner();
   })

});

function Winner(){
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("WINNER", val1);
                disablebtn();
            }
        }

    }
}


const disablebtn = ()=>{
   for(let box of boxes){
    box.disabled = true;
   }
}



const enablebtn = ()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
 }


btn.addEventListener("click", () =>{
    true0 = true;
    enablebtn();
    alert("Game has been Reset ");
});



