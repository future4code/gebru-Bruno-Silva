const insertionSort = (array: number[]) => {
   
   for (let j = 1; j < array.length; j++) {
      const value = array[j];
      let i = j - 1;
      while (i >= 0 && array[i] >= value) {
         array[i + 1] = array[i];
         i--;
      }
      array[i + 1] = value
   }
};

const numbers = [
   8, 7, 6, 5, 4, 3, 2, 1,
]

insertionSort(numbers)

console.log(numbers);
