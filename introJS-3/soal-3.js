const cekBulan = (num) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
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
         if (num && typeof num === "number") {
            const results = month[num];
            resolve(results);
         } else {
            reject(new Error("Invalid date format"));
         }
      }, 1000);
   });
};

const month = new Date().getMonth();
cekBulan(month)
   .then((res) => {
      console.log(res);
   })
   .catch((err) => {
      console.log(err?.message);
   });

const getMovies = (keywords) => {
   return new Promise((resolve, reject) => {
      fetch(`https://www.omdbapi.com/?s=${keywords}&apikey=7df76970`)
         .then((response) => {
            if (!response?.ok) {
               throw new Error("Failed to fetch data");
            }
            return resolve(response?.json());
         })
         .catch((error) => {
            reject(error);
         });
   });
};

getMovies("Harry Potter")
   .then((res) => {
      res?.Search?.map(({ Title, Poster }) => {
         console.log(`
         ${Title}
         ${Poster}
         `);
      });
   })
   .catch((err) => {
      console.error(err?.message);
   });
