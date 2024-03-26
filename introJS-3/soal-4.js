const getUsers = async (url, cb) => {
   let error = false;
   try {
      const response = await fetch(url);
      if (response?.status !== 200) {
         error = true;
      }
      const data = await response.json();
      cb(null, data);
   } catch (err) {
      error === true ? cb(new Error("Ada error saat fetching api..."), []) : "";
   }
};
const API = "https://jsonplaceholder.typicode.com/users";
const callback = (err, value) =>
   !err
      ? value?.map(({ name }) => {
           console.log(name);
        })
      : console.log(err?.message);
getUsers(API, callback);
