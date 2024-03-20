const averageExam = (data) => {
   let grade = "";
   let average = 0;
   const nilai = data?.map(({ nilai }) => {
      return nilai;
   });
   if (nilai?.length < 4) {
      return "Harap inputkan semua data";
   }
   average = nilai?.reduce((a, b) => {
      return a + b;
   }, 0);
   average /= data?.length;
   grade =
      average >= 90 && average <= 100
         ? "A"
         : average >= 80 && average <= 89
         ? "B"
         : average >= 70 && average <= 79
         ? "C"
         : average >= 60 && average <= 69
         ? "D"
         : "E";

   return { average, grade };
};

const hasil = [
   {
      modul: "Matematika",
      nilai: 52,
   },
   {
      modul: "Bahasa Inggris",
      nilai: 40,
   },
   {
      modul: "Bahasa Indonesia",
      nilai: 60,
   },
   {
      modul: "IPA",
      nilai: 50,
   },
];

console.log(averageExam(hasil));
