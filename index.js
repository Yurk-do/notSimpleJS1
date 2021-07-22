// +++++++++++++ Task 1 ++++++++++++++.

// направление сортировки: UP - от меньшего к большему, DOWN - от большего к меньшему 

const sortDirection = {
    UP: 1,
    DOWN: -1,
}

// условие сортировки в зависимости от ее направления  

function compare(a,b) {
    if (a === b) {
        return 0
    }
    return a > b ? sortDirection.UP : sortDirection.DOWN
}

// Функция сортировки. Аргумент direction - по умолчанию предусматривает сортировку от меньшего к большему 

function sortArray(arr, direction = sortDirection.UP) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (compare(arr[j], arr[j+1]) === direction) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}


// Проверка функции 

const arr = [4,5,6,6,1,2,3]

sortArray(arr);
sortArray(arr, sortDirection.DOWN);


// ++++++++++++++ Task 2 +++++++++++++++++

function searchMinMax(arr) {
    let min = max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = arr[i] <  min ? arr[i] : min
        max = arr[i] >  max ? arr[i] : max
    }
    console.log(`Минимальное значение массива: ${min},\nМаксимальное значение массива: ${max}`)
}

// Проверка функции 

searchMinMax(arr)



// ++++++++++++++ Task 3 ++++++++++++++++

function checkPalindrome(str) {
    let result = true;
    for (let i = 0; i < str.length -1; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            result = false;
            break;
            
    }
}
    console.log(result)
} 

// Проверка функции 

checkPalindrome("утоп в по ту");
checkPalindrome("утоп в поту");



