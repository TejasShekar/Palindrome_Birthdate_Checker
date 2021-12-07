const bday = document.querySelector("#bday");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

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
function getDateInAllFormats(dates) {
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
  //console.log(palindromeList)
  return palindromeList;
}

//if none of the dates are palindrome, find the next palindrome date

//check for leap year
function isLeapYear(year) {
  if (year % 400 === 0) return true;

  if (year % 100 === 0) return false;

  if (year % 4 === 0) return true;

  return false;
}

//get the next day's date
function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month += 1;
      }
    } else {
      if (day > 28) {
        day = 1;
        month += 1;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month += 1;
    }
  }

  if (month > 12) {
    month = 1;
    year += 1;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

//get next palindrome date
function getNextPalindromeDate(date) {
  var nextDate = getNextDate(date);
  var dayCount = 0;

  while (1) {
    dayCount++;
    var dateStr = getDateAsString(nextDate);
    var resultList = checkPalindrome(dateStr);
    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [dayCount, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

//
function clickHandler() {
  var bdayStr = bday.value;

  if (bdayStr !== "") {
    var date = bdayStr.split("-");
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy),
    };

    var dateStr = getDateAsString(date);
    var list = checkPalindrome(dateStr);
    var isPalindrome = false;

    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        isPalindrome = true;
        break;
      }
    }
    if (!isPalindrome) {
      let [dayCount, nextDate] = getNextPalindromeDate(date);
      if (dayCount === 1) {
        output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${dayCount} day.`;
      } else {
        output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${dayCount} days.`;
      }
    } else {
      output.innerText = "Congratulations! Your birthday is palindrome!";
    }
  }
}

checkBtn.addEventListener("click", clickHandler);
