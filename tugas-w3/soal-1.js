const arr = ["Saya", "Belajar", "Javascript"];
const arr2 = [6, 5, 12, 3, 10];

// map => map adalah salah satu method untuk memanipulasi array dan mengembalikan array baru, contohnya:
const mapFunc = (arr) => {
   const results = arr?.map((item) => {
      return item;
   });
   return results;
};
console.log(mapFunc(arr));

//slice => slice adalah method array untuk memotong isi array berdasarkan index dari array tersebut, contohnya:
const sliceFunc = (arr) => {
   return arr?.slice(0, 2);
};
console.log(sliceFunc(arr));

/*find => find adalah method array untuk mencari isi dari dalam array yang sama dengan 
callback yang diinputkan pada method find
*/
const findFunc = (arr) => {
   return arr?.find((item) => item > 6);
};
console.log(findFunc(arr2));

//reduce => reduce adalah method untuk menjumlahkan seluruh number yang ada di dalam array, contohny:
const reduceFunc = (arr) => {
   return arr?.reduce((a, b) => {
      return a + b;
   }, 0);
};
console.log(reduceFunc(arr2));

/*includes => adalah sebuah method javascript untuk mencari value dalam array yang sesuai 
dengan callback, dan return yang dihasilkan adalah true/false
*/
const inclFunc = (arr) => {
   return arr?.includes("Saya");
};
console.log(inclFunc(arr));

//toLocalDateString => adalah sebuah method untuk memformat waktu saat ini yang sudah dihasilkan oleh method new Date
const dateFunc = () => {
   const today = new Date();
   return today.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
};
console.log(dateFunc());

//for in => adalah sebuah method javascript untuk memanipulasi sebuah object, contohnya

const obj = {
   name: "Dimas",
   class: "Web & Golang",
   batch: 2,
};
const forInObj = (obj) => {
   let results = "";
   for (const key in obj) {
      results += obj[key] + " ";
   }
   return results;
};
console.log(forInObj(obj));

/*push => adalah method javascript untuk menambahkan value baru kedalam array pada index terakhir,
 contohnya:
*/

const myPush = (arr) => {
   arr?.push("Di Pijar camp");
   return arr;
};
console.log(myPush(arr));

/*unshift => adalah method javascript untuk menambahkan value baru kedalam array pada index pertama,
 contohnya:
*/

const myUnshift = (arr) => {
   arr?.unshift("Sekarang");
   return arr;
};
console.log(myUnshift(arr));

/*pop => adalah method untuk menghapus value array pada index terakhir, contohnya*/
const myPop = (arr) => {
   arr?.pop();
   return arr;
};
console.log(myPop(arr));
