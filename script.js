const buttons = document.querySelectorAll(".div2>button");
const action = document.querySelector(".div1");
const error = document.querySelector(".div3");
let count = 0;
function increDecre(action1){
    if(count===0 && action1==="decre"){
        error.innerText="Error : Cannot go below 0";
        return;
    }
    else{
        error.innerText="";
    }
    if(action1==="decre"){
        action.innerText=`Your Current Count : ${--count}`;
    }
    else{
        action.innerText=`Your Current Count : ${++count}`;
    }
}
buttons[0].addEventListener("click",()=>{
    increDecre("decre");
})
buttons[1].addEventListener("click",()=>{
    increDecre("incre");
})
buttons[2].addEventListener("click",()=>{
    count=0;
    action.innerText=`Your Current Count : ${count}`;
})