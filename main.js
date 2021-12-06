const bday = document.querySelector("#bday");
const checkBtn = document.querySelector("#check-btn");

//reverse a string
function reverseString(str) {
  var revStr = str.split("").reverse().join("");
  return revStr;
}

//check if string is palindrome
function isPalindrome(str) {
  var revStr = reverseString(str);
  return str === revStr;
}

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
function getDateInAllFormats(date) {
  var dates = getDateAsString(date);
  var ddmmyyyy = dates.day + dates.month + dates.year;
  var mmddyyyy = dates.month + dates.day + dates.year;
  var yyyymmdd = dates.year + dates.month + dates.day;
  var ddmmyy = dates.day + dates.month + dates.year.slice(2);
  var mmddyy = dates.month + dates.day + dates.year.slice(2);
  var yyddmm = dates.year.slice(2) + dates.day + dates.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

//check palindrome for all date formats obtained from above using isPalindrome fn.
function checkPalindrome(date) {
    var dateList = getDateInAllFormats(date);
    var palindromeList = [];
  
    for (var i = 0; i < dateList.length; i++) {
      var result = isPalindrome(dateList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }

//if none of the dates are palindrome
  //check for leap year
  function isLeapYear(year) {
    if (year % 400 === 0) return true;
  
    if (year % 100 === 0) return false;
  
    if (year % 4 === 0) return true;
  
    return false;
  }

  //
var date = { day: 10, month: 9, year: 2020 };

checkBtn.addEventListener("click", checkPalindrome(date));
