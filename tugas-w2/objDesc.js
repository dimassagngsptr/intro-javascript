let data = {
   id: 1,
   name: "Leanne Graham",
   username: "Bret",
   email: "Sincere@april.biz",
   address: {
      street: "Kulas Light",
      suite: "Apt.556",
      city: "Gwenborought",
      zipcode: "92998-3874",
   },
   phone: "1-770-736-8031 x56442",
   website: "hildegard.org",
};
//Soal A rubah data menggunakan spread operator
const rubahData = (newName, newEmail, hobby) => {
   let newData = { ...data };
   if (newName && newEmail) {
      newData.name = newName;
      newData.email = newEmail;
      newData.hobby = hobby;
   }
   return newData;
};
console.log(rubahData("Dimas", "dimas@gmail.com", "Memancing"));

const updateData = {
   newName: "Dimas",
   newEmail: "dimas@gmail.com",
   hobby: "Olahraga",
};

const myUpdateData = { ...data, ...updateData };
console.log(myUpdateData);

//Soal B ambil data menggunakan obj destructuring

const { street, city } = myUpdateData.address;
// console.log(street, city);
