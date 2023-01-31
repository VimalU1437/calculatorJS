const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

const arr = ["1","2","3","4","5","6","7","8","9",".","0","=","+","/","-","C","*"];

for(let i = 0; i< arr.length;i++){
    const btn = document.createElement("button");
    btn.textContent = arr[i];
    btn.className = "btn";
    buttons.appendChild(btn);
}

const btn =Array.from(document.querySelectorAll(".btn"));

function calculate(e){
    let operation = e.target.textContent;

    switch(operation){
        case "C":{
            display.textContent = "";
            break;
        }
        case "=":{
            try{
                display.textContent = eval(display.textContent);
            }catch{
                display.textContent = "Err";
            }
            break;
        }
        default:{
            if(display.textContent === "Err"){
                display.textContent = operation;
            }else{
                display.textContent = display.textContent + operation;
            }
        }
    }
}

btn.map(clicked=>{
    clicked.onclick=(e)=>{
        calculate(e);
    }
})

