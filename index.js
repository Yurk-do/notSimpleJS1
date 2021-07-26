// +++++++++++++ Task 1 ++++++++++++++.

// направление сортировки: UP - от меньшего к большему, DOWN - от большего к меньшему

const sortDirection = {
  UP: 1,
  DOWN: -1,
};

// условие сортировки в зависимости от ее направления

function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a > b ? sortDirection.UP : sortDirection.DOWN;
}

// Функция сортировки. Аргумент direction - по умолчанию предусматривает сортировку от меньшего к большему

function sortArray(arr, direction = sortDirection.UP) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (compare(arr[j], arr[j + 1]) === direction) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

// Проверка функции

const arr = [4, 5, 6, 6, 1, 2, 3];

sortArray(arr);
sortArray(arr, sortDirection.DOWN);

// ++++++++++++++ Task 2 +++++++++++++++++

function searchMinMax(arr) {
  let min = (max = arr[0]);
  for (let i = 1; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }
  console.log(
    `Минимальное значение массива: ${min},\nМаксимальное значение массива: ${max}`
  );
}

// Проверка функции

searchMinMax(arr);

// ++++++++++++++ Task 3 ++++++++++++++++

function checkPalindrome(str) {
  let result = true;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      result = false;
      break;
    }
  }
  console.log(result);
}

// Проверка функции

checkPalindrome("утоп в по ту");
checkPalindrome("утоп в поту");

// ++++++++++++++ Task 4 ++++++++++++++++

function makeFizzBuzz(n) {
  for (let i = 1; i < n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("fizzbuzz");
        break;
      case i % 3 === 0:
        console.log("fizz");
        break;
      case i % 5 === 0:
        console.log("buzz");
        break;
      default:
        console.log(i);
    }
  }
}

// Проверка функции
makeFizzBuzz(80);

// ++++++++++++++ Task 5 ++++++++++++++++

function checkAnagrams(string1, string2) {
  const template = /\W+/g; // Шаблон для извлечения проблелов и знаков препинания
  string1 = string1.replace(template, ""); // удаление пробелов и знаков препинания
  string2 = string2.replace(template, ""); // удаление пробелов и знаков препинания
  if (string1.length !== string2.length) {
    // проверка, равны ли строки по длине (количеству символов)
    console.log("They aren't anagrams");
  } else {
    string1 = string1.split("").sort().join(""); // перевод строки в массив букв, его сортировка и обратный перевод в строку
    string2 = string2.split("").sort().join(""); // перевод строки в массив букв, его сортировка и обратный перевод в строку
    console.log(
      string1 !== string2 ? "They aren't anagrams" : "The're anagrams"
    ); // проверка строк на идентичность
  }
}

// Проверка функции
checkAnagrams("abc def j", "jabcdef");
checkAnagrams("abc def j", "abc def");

// ++++++++++++++ Task 6 ++++++++++++++++

function countVowels(str) {
  const template = /[aeiou]/g; // Шаблон для гласных букв
  console.log(str.toLowerCase().match(template).length); // приведение строки к нижнему регистру, извлечение гласных в массив и вывод длины массива (подсчет гласных)
}

// Проверка функции
countVowels("agjksbceuhalk;lAI");

// ++++++++++++++ Task 7 ++++++++++++++++
function reverseNumbers(numbers) {
  let newArray = [];
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    newArray.push(numbers[i]);
  }
  console.log(newArray);
}

// Проверка функции
reverseNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ++++++++++++++ Task 8 ++++++++++++++++

function getAverage(numbers) {
  if (numbers.length === 0) {
    console.log("Sorry, array is empty");
  } else {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i];
    }
    console.log(sum / numbers.length);
  }
}

// Проверка функции
getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getAverage([]);

// ++++++++++++++ Task 9 ++++++++++++++++

function inArray(text, array) {
  let result = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === text) {
      result = true;
      break;
    }
  }
  console.log(result);
}

// Проверка функции
inArray("hello", ["where", "what", "how", "hello", "who"]);
inArray("hello", ["where", "what", "how", "who"]);

// ++++++++++++++ Task 10 ++++++++++++++++

function changePositions(str) {
  let array = str.split("");
  for (let i = 0; i < array.length; i += 2) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
  console.log(array.join(""));
}

// Проверка функции
changePositions("123456");

// ++++++++++++++ Task 11 ++++++++++++++++

function getDecade(day) {
  if (day < 11) {
    console.log("First decade");
  } else if (day < 21) {
    console.log("Second decade");
  } else {
    console.log("Third decade");
  }
}

// Проверка функции
getDecade(11);

// ++++++++++++++ Task 12 ++++++++++++++++

function getTimeOfYear(month) {
  switch (month) {
    case 1:
    case 2:
    case 3:
      console.log("winter");
      break;
    case 4:
    case 5:
    case 6:
      console.log("spring");
      break;
    case 7:
    case 8:
    case 9:
      console.log("summer");
      break;
    case 10:
    case 11:
    case 12:
      console.log("autumn");
      break;
  }
}

// Проверка функции
getTimeOfYear(11);
