let btns = Array.from(document.querySelectorAll('button'));
console.log(btns);
let display = document.querySelector(".results");


// function display() {
//     btns.forEach(button => {
//         content.textContent = 'hello'
//     });
// }

// btns.addEventListener("click", display);

btns.map( button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'del':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});