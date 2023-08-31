## Dokumentasi Menjalankan Aplikasi TRPC dengan PNPM

### Persyaratan Prasyarat

Sebelum memulai, pastikan kamu memiliki hal-hal berikut:

1. **Node.js dan PNPM**: Pastikan Node.js telah terinstal di komputer kamu.
   Aplikasi ini menggunakan PNPM sebagai manajer paket. Kamu dapat menginstal
   PNPM dengan perintah berikut jika belum terinstal:

```
npm install -g pnpm
```

2. **Kode Sumber**: Pastikan kamu memiliki kode sumber aplikasi TRPC yang ingin
   dijalankan.

### Langkah-langkah

Berikut adalah langkah-langkah untuk menjalankan aplikasi TRPC menggunakan PNPM:

1. **Klon Repositori**: Klon repositori kode sumber aplikasi TRPC ke dalam
   direktori lokal menggunakan perintah berikut:

```
git clone <URL repositori>
cd <nama-direktori>

```

2. **Instalasi Paket**: Buka terminal dan navigasikan ke direktori kode sumber.
   Jalankan perintah berikut untuk menginstal semua paket yang diperlukan:

```
pnpm install
```

3. **Konfigurasi Port**: Pastikan untuk memeriksa dan mengonfigurasi port yang
   akan digunakan oleh server. Ini biasanya didefinisikan dalam file `env.js`
   atau di tempat lain dalam kode sumber.

4. **Jalankan Aplikasi**: Jalankan aplikasi dengan perintah berikut:

```
pnpm start
```

Ini akan menjalankan server TRPC dan membuatnya tersedia di port yang telah
dikonfigurasi.

5. **Uji Aplikasi**: Buka browser atau alat uji API (seperti
   [Postman](https://www.postman.com/)) dan akses endpoint yang telah
   didefinisikan dalam kode sumber. Misalnya, akses
   `http://localhost:<PORT>/trpc/hello` untuk menguji endpoint `hello`.

6. **Cek Keluaran**: Periksa keluaran di terminal tempat kamu menjalankan
   perintah `pnpm start` untuk melihat apakah server berjalan dengan sukses dan
   mendengarkan pada port yang benar.

7. **Penghentian Server**: Untuk menghentikan server, cukup tekan `Ctrl+C` dalam
   terminal tempat kamu menjalankan server.

### Kesimpulan

Sekarang kamu telah berhasil menjalankan aplikasi TRPC menggunakan PNPM!
Aplikasi ini akan menerima permintaan dan memberikan respons sesuai dengan
endpoint dan logika yang telah didefinisikan dalam kode sumber.

Selamat mencoba! Jika kamu memiliki pertanyaan lebih lanjut atau mengalami
masalah, jangan ragu untuk bertanya kepada tim pengembang atau merujuk ke
dokumentasi TRPC yang relevan.
