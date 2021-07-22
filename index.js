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

