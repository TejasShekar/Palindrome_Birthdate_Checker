const bday = document.querySelector('#bday');
const checkBtn = document.querySelector('#check-btn');

function reverseString(str){
    var revStr = str.split('').reverse().join('');
    console.log(revStr);
}

// checkBtn.addEventListener('click', reverseString(str));