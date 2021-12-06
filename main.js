const bday = document.querySelector("#bday");
const checkBtn = document.querySelector("#check-btn");

function reverseString(str) {
  var revStr = str.split("").reverse().join("");
  return revStr;
}

function isPalindrome(str) {
  var revStr = reverseString(str);
  return str === revStr;
}

function getDateAsString(date) {
    var dateInStr = { day:"",month:"",year:""};
    //day
    if(date.day<10){
        dateInStr.day="0"+date.day;
    }else{
        dateInStr.day = date.day.toString();
    }
    //month
    if(date.month<10){
        dateInStr.month="0"+date.month;
    }else{
        dateInStr.month = date.month.toString();
    }
    //year
    dateInStr.year = date.year.toString();
    console.log(dateInStr);
}

var date = { day: 14, month: 9, year: 2020 };

checkBtn.addEventListener("click", getDateAsString(date));
