/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */

// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

// Mencetak sebuah nilai dengan cara "console.log"
// Mencetak Sebuah teks data "string"
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ==="); //mencetak sebuah teks judul
console.log("Skrip app.js berhasil terhubung!"); // Teks untuk memastikan terhubung javascript dengan html

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

// 1
const NAMA_KEDAI = "allisa cafe"; // nama kedai yang sifat nya tetap

// 2
let namaKasir = "Kak cheline"; // nama kasir
let shiftKerja = "18.00 - 23.00"; // shift kerja

// 3
console.log("Nama kedai : " + NAMA_KEDAI);
console.log("Nama kasir : " + namaKasir);
console.log("Shift kerja : " + shiftKerja);

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

namaKasir = "Kak Marchel"; // mengubah nama kasir dengan nama kasir lain
console.log("Nama Kasir baru : " + namaKasir);

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

// 1
alert("Selamat Datang di Aplikasi Kedai Kopi TerLezat!!");

// 2
let namaPelanggan = prompt("HALO! Jangan lupa Masukkan Nama yaa:");

// 3

if (namaPelanggan) {
  //Jika namaPelanggan ada isi nya
  alert("Halo, " + namaPelanggan + "!! Yuk Mulai Memesan.");
  console.log("Pelanggan yang Aktif: " + namaPelanggan);
} else {
  //Jika namaPelanggan Kosong
  alert("Nama kamu kosong. allisa cafe akan memanggil kamu Pelanggan setia.");
  namaPelanggan = "Pelanggan Setia";
  console.log("Pelanggan yang Aktif: " + namaPelanggan);
}

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

// 1
let poinKopi = 50;
let poinMakanan = 25;
let poinMerchandise = 75;

// 2
let totalPoin = poinKopi + poinMakanan + poinMerchandise;

// 3
console.log("=== RINCIAN POIN: " + namaPelanggan + " ===");
console.log("Poin Kopi: " + poinKopi);
console.log("Poin Makanan: " + poinMakanan);
console.log("Poin Merchandise: " + poinMerchandise);

console.log("Total Poin: " + totalPoin);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

// 1
let tierMember = "";
let benefit = "";

// 2
if (totalPoin >= 100) {
  tierMember = "Platinum";
  benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70) {
  tierMember = "Gold";
  benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
  tierMember = "Silver";
  benefit = "Diskon 5% untuk menu minuman";
} else {
  tierMember = "Bronze";
  benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}

// 3
console.log("Tier Member: " + tierMember);
console.log("Benefit: " + benefit);

// 4
alert(
  "Nama : " +
    namaPelanggan +
    "\n" +
    "Total Poin : " +
    totalPoin +
    "\n" +
    "Tier : " +
    tierMember +
    "\n" +
    "Benefit : " +
    benefit,
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function hitungTotalPoin(p1, p2, p3) {
  let Jumlah = p1 + p2 + p3;
  return Jumlah;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function tentukanTierMember(poin) {
  if (poin >= 100) return "Platinum - Diskon 20% + Gratis 1 Minuman Signature";
  if (poin >= 70) return "Gold - Diskon 10% di setiap transaksi";
  if (poin >= 40) return "Silver - Diskon 5% untuk menu minuman";
  return "Bronze - Member Reguler (kumpulkan poin untuk naik tier)";
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

// 1
let poin_Pelanggan_B = hitungTotalPoin(35, 25, 20);
let tier_pelanggan_B = tentukanTierMember(poin_Pelanggan_B);

let poin_Pelanggan_c = hitungTotalPoin(15, 10, 5);
let tier_pelanggan_c = tentukanTierMember(poin_Pelanggan_c);

console.log("Data Pelanggan B");
console.log("Total Poin : " + poin_Pelanggan_B);
console.log("Tier : " + tier_pelanggan_B);

console.log("Data Pelanggan C");
console.log("Total Poin : " + poin_Pelanggan_c);
console.log("Tier : " + tier_pelanggan_c);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let menuRekomendasi = [
  "Ice Chocolate",
  "Ice Cream Vanila",
  "Croissant ",
  "Waffle",
  "Udang Asam Manis",
];
console.log("=== MENU REKOMENDASI UNTUK MEMBER ===");

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for (let i = 0; i < menuRekomendasi.length; i++) {
  console.log(i + 1 + ". " + menuRekomendasi[i]);
}
// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("-----------------------------------------------");
console.log("Total Menu Favorit: " + menuRekomendasi.length + " Menu");
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
