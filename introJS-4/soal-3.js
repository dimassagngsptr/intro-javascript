const devideAndSort = (number) => {
   return number
      .toString()
      .split("0")
      .map((item) => {
         return item.split("").sort().join("");
      })
      .join("");
      
};
console.log(devideAndSort(5956560159466056));
