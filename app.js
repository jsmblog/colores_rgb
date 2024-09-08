const RED = document.getElementById('red')
const GREEN = document.getElementById('green')
const BLUE = document.getElementById('blue')
const TXT = document.getElementById('TXT')
const BTN_COPY = document.getElementById('btn-copy')
const txtred = document.getElementById('span-value-R')
const txtgreen = document.getElementById('span-value-G')
const txtblue = document.getElementById('span-value-B')
const DISPLAY_SMS = document.getElementById('display-sms')
let red = RED.value;
let green = GREEN.value;
let blue = BLUE.value;
document.body.style.backgroundColor = `rgb(${red},${green},${blue})` ;

txtred.innerText = red;
txtgreen.innerText = green;
txtblue.innerText = blue;

const refreshColor = (R,G,B) => {
    const color = `rgb(${R},${G},${B})`;
    document.body.style.backgroundColor = color ;
    BTN_COPY.style.backgroundColor = color ;
    if((red >= 200) && (green >= 200))BTN_COPY.style.color = 'rgb(0,0,0)'
    else BTN_COPY.style.color = 'rgb(211,211,211)'
    TXT.innerText = color;
}

RED.addEventListener('change',(e)=> {
  red =  e.target.value;
  txtred.innerText = red;
  refreshColor(red,green,blue);
});
GREEN.addEventListener('change',(e)=> {
    green =  e.target.value;
    txtgreen.innerText = green;
    refreshColor(red,green,blue);
  });
BLUE.addEventListener('change',(e)=> {
    blue =  e.target.value;
    txtblue.innerText = blue;
    refreshColor(red,green,blue);
  });
  BTN_COPY.addEventListener('click', () => {
    navigator.clipboard.writeText(TXT.innerText).then(() => {
    DISPLAY_SMS.innerText = `Color ${TXT.textContent} ¡ copiado con éxito ✌️​😁​ !`;
    DISPLAY_SMS.style.display = 'inline-block'
    DISPLAY_SMS.classList.add('slide-in-top');
    setTimeout(() => {
        DISPLAY_SMS.style.display = 'none' 
    }, 5000);
    }).catch(err => {
        console.error('Error al copiar el color: ', err);
    });
});