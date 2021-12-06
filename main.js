const bday = document.querySelector("#bday");
const checkBtn = document.querySelector("#check-btn");

//reverse the date
function reverseString(str) {
  var revStr = str.split("").reverse().join("");
  return revStr;
}

//check if date is palindrome
function isPalindrome(str) {
  var revStr = reverseString(str);
  return str === revStr;
}

//if not palindrome, find the next palindrome date

//convert date from number to string and create a standard format
function getDateAsString(date) {
  var dateInStr = { day: "", month: "", year: "" };
  //day
  if (date.day < 10) {
    dateInStr.day = "0" + date.day;
  } else {
    dateInStr.day = date.day.toString();
  }
  //month
  if (date.month < 10) {
    dateInStr.month = "0" + date.month;
  } else {
    dateInStr.month = date.month.toString();
  }
  //year
  dateInStr.year = date.year.toString();
  return dateInStr;
}

//create date in all formats
function getDateInAllFormats() {
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month  + date.day;
  var ddmmyy = date.day + date.month + date.year.slice(2);
  var mmddyy = date.month + date.day + date.year.slice(2);
  var yyddmm = date.year.slice(2) + date.day + date.month;

  var arr = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  console.log(arr);
}

var date = { day: 10, month: 9, year: 2020 };

checkBtn.addEventListener("click", getDateInAllFormats);
