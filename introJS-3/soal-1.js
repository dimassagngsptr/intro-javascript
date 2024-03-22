const cekHariKerja = (day) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
         let cek = dataDay?.find((item) => {
            return item?.toLocaleLowerCase() === day?.toLocaleLowerCase();
         });
         cek ? resolve(cek) : reject(new Error("Hari ini bukan hari kerja"));
      }, 3000);
   });
};

//menggunakan then catch
cekHariKerja("minggu")
   .then((res) => {
      console.log(res);
   })
   .catch((err) => {
      console.log(err?.message);
   });

/*
penjelasan : then digunakan untuk menentukan tindakan yang akan diambil setelah Promise selesai atau berhasil.
            catch digunakan untuk menangkap kesalahan yang terjadi selama proses Promise.
            then catch tidak memerlukan blok kode/fungsi untuk menjalankan fungsi promise dan tidak menggunakan 
            async await
*/


//menggunakan try catch
const checkDays = async () => {
   try {
      const results = await cekHariKerja("selasa");
      console.log(results);
   } catch (error) {
      console.log(error?.message);
   }
};
checkDays();
/*
penjelasan : try/catch digunakan dalam blok try untuk mencoba menjalankan potongan kode dan menangkap kesalahan 
            yang terjadi.
            Jika terjadi kesalahan di dalam blok try, aliran program akan pindah ke blok catch untuk menangani error.
            try catch diharuskan menggunakan async await untuk menjalankan fungsinya
*/
