let buttons = document.querySelectorAll('button');
let display = document.querySelector('.previous-number');
let solution = document.querySelector('.current-number')

for(i=0; i< buttons.length; i++) {
    buttons[i].addEventListener('click', (e)=> {
        currentNum = e.target.innerHTML
        if(currentNum === 'AC'){
           clear()
        } else if(currentNum === "=") {         
           solution.innerHTML = (eval(display.innerHTML)  ) 
        }else if(currentNum === 'DEL'){
            del()
           
        }
        else {
            console.log(typeof(display.innerHTML))
            display.innerHTML +=  currentNum 
        }
    })
};

// clear display
clear = () => {
    display.innerHTML = " " 
    solution.innerHTML = " "
};

//should delete last number entered
del = () => {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML - 1)
    console.log('del pressed')
};

