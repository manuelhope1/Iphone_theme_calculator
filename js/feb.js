

const toggleSwitch = document.querySelector('.theme-slider input[type="checkbox"]');
let answer = document.querySelector('.answer');



  
function switchTheme(e) {
    let plug = document.querySelector('.theme');
    let background = document.querySelector('body');
    let background1 = document.querySelector('.box');
    let themebox = document.querySelector('#themebox');
 
    if (e.target.checked) { 
        background.style.background = 'white';
        background1.style.background = '#e5e5e5';
        themebox.style.background = '#e5e5e5';
        themebox.style.color = 'black';
        answer.style.color = 'black';
        background.style.transition = '500ms';
        background1.style.transition = '500ms';
        themebox.style.transition = '700ms';
        themebox.style.transition = '700ms';
    }
  

     else {
        background.style.background = '#1C1C1C';
        background1.style.background = 'black';
        themebox.style.background = 'black';
        themebox.style.color = 'white';
        answer.style.color = 'white';
        background.style.transition = '500ms';
        background1.style.transition = '500ms';
        themebox.style.transition = '700ms';
        themebox.style.transition = '700ms';
    }
}
  
toggleSwitch.addEventListener('change', switchTheme,false);


let clear = document.querySelector('.ac');

clear.addEventListener('click', function() {
    answer.value = "";
});

function Key(keys) {
    answer.value += keys;
 };

 function Answer() {
    var equals = answer.value;
    var equalsfinal = eval(equals);
    answer.value = equalsfinal;
 }

 function Per(){
    var equals = answer.value;
    var finalle = equals/100;
    answer.value = finalle;
 }

 function Pm(){
    var equals = answer.value;
    var finalle = equals * -1;
    answer.value = finalle;
 };

