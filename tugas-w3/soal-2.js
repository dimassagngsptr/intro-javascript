const name = [
   "Abigail",
   "Alexandra",
   "Alison",
   "Amanda",
   "Angela",
   "Bella",
   "Carol",
   "Caroline",
   "Carolyn",
   "Deirdre",
   "Diana",
   "Elizabeth",
   "Ella",
   "Faith",
   "Olivia",
   "Penelope",
];

const searchName = (input, index, callback) => {
   const results = name?.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
   );
   if (results?.length < 1) {
      return "Nama tidak ditemukan";
   }
   return callback(results, index);
};
const sliceName = (value, index) => value?.slice(0, index);
console.log(searchName("an", 4, sliceName));
