const devideAndSort = (number) => {
   if (!number && typeof number !== "number") {
      return "Please enter a number";
   }
   const results = number
      ?.toString()
      ?.split("0")
      ?.map((item) => {
         return item.split("")?.sort()?.join("");
      })
      .join("");
   return parseInt(results);
};

console.log(devideAndSort(5956560159466056));
