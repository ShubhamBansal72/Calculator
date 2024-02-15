let number = document.getElementsByClassName("btns");
let displayScreen = document.getElementById("display");
let clearBtn = document.getElementById("clear");
let calculate = document.getElementById('sum')

// print number 


for(let i = 0; i < number.length; i++){
    let clickedNumber = number[i]
    clickedNumber.addEventListener('click' , () => {
        if(clickedNumber.innerText != "="){
            if(clickedNumber.innerText === "x"){
                displayScreen.value += '*'
            }else{
                displayScreen.value += clickedNumber.innerText

            }
        }
    })
}


// clear functionality 


clearBtn.addEventListener('click' , () => {
    displayScreen.value = "";
})

// sum

calculate.addEventListener('click' , () => {
    let calNum = displayScreen.value
    try{
        displayScreen.value = eval(calNum)
    }
    catch{
        displayScreen.value = "Error !!!"
    }
})