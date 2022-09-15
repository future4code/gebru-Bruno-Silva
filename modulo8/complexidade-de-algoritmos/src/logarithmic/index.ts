const binarySearch = (arr: number[], n: number) => {

   let start = 0, end = arr.length - 1;

   while (start <= end) {
      console.count();

      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === n) return n;

      else if (arr[mid] < n)
         start = mid + 1;
      else
         end = mid - 1;
   }
}

const item = binarySearch(
   [
      1, 2, 3, 4, 5, 6, 7, 8,
   ], 
   9
)

console.log(item);