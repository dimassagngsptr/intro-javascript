const seleksiNilai = (nilaiAwal, nilaiAkhir, ...dataArray) => {
   if (nilaiAwal > nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal";
   }
   if (dataArray?.length <= 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5";
   }
   const results = dataArray?.filter((item) => {
      return item >= nilaiAwal && item <= nilaiAkhir;
   });
   if (results?.length < 1) {
      return "Nilai tidak ditemukan";
   }
   return results?.sort((a, b) => a - b);
};

console.log(seleksiNilai(5, 20, 2, 25, 4, 14, 17, 30, 8));
