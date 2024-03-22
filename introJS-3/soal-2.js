const getMonth = (callback) => {
   setTimeout(() => {
      let error = false;
      let month = [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December",
      ];
      !error
         ? callback(null, month)
         : callback(new Error("Sorry data not found"), []);
   }, 4000);
};
getMonth(function (err, month) {
   if (!err) {
      month?.map((item) => {
         console.log(item);
      });
   } else {
      console.log(err?.message);
   }
});
