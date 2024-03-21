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

const searchName = (keywords, limit, callback) => {
   const results = name?.filter((item) =>
      item?.toLowerCase().includes(keywords.toLowerCase())
   );
   if (results?.length < 1) {
      return "Nama tidak ditemukan";
   }
   return callback(results, limit);
};
const sliceName = (value, limit) => value?.slice(0, limit);
console.log(searchName("an", 3, sliceName));
