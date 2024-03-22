const getUsers = async (url, cb) => {
   let error = false;
   try {
      const response = await fetch(url);
      if (response?.status !== 200) {
         error = true;
      }
      const data = await response.json();
      data?.map(({ name }) => {
         cb(name);
      });
   } catch (err) {
      error === true
         ? console.log(new Error("Ada error saat fetching api..."))
         : "";
   }
};
const API = "https://jsonplaceholder.typicode.com/users";
const callback = (value) => console.log(value);
getUsers(API, callback);
