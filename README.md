# Sorting-Tutorial
Berikut ini merupakan salah satu project yang menjadi bagian dari seleksi asisten IRK 2018
## Latar Belakang
Salah satu penerapan algoritma yang paling mudah adalah sorting. Saat ini sudah banyak algoritma untuk sorting yang telah dikembangkan di seluruh dunia. Untuk membantu orang - orang memahami berbagai algoritma sorting, tercetuslah ide untuk membuat sebuah website yang memberikan pemahaman mengenai algoritma sorting. Harapannya, website ini dapat dikembangkan lebih lanjut untuk pembelajaran strategi algoritma yang lain seperti Divide & Conquer, Dynamic Programming, dll
## Framework yang Digunakan
1. React.js
2. Node.js
3. Sass

## Prasyarat
Untuk dapat menjalankan project ini secara lokal, perlu diperhatikan untuk menginstall beberapa hal berikut terlebih dahulu : 
1. Node.js versi terbaru
2. Browser
3. Yarn (opsional)

## Cara Menjalankan Project Local
Untuk menjalankan project ini secara lokal di komputer Anda, Anda dapat melakukan beberapa langkah berikut :
1. Clone repository ini
2. Buka cmd pada root direktori dari repo yang telah di clone
3. Install dependency untuk back end dengan command berikut : 
```
npm install
```
4. Pindah ke direktori client dari root direktori dan install dependency untuk front end dengan command berikut :
```
cd client
npm install
```
5. Setelah dependency untuk front end dan back end terinstall, kembali ke root direktori dan jalankan command berikut untuk menjalankan server :
```
cd ..
npm run dev
```
atau
```
cd ..
yarn dev
```
6. Project berhasil dijalankan dan browser akan langsung membuka halaman web dari project ini. Jika halaman web tidak terbuka secara otomatis, anda dapat membuka tab baru dan menuju ke 'localhost:3000'

## Website yang telah di deploy
Untuk melihat hasil project ini tanpa menjalankan project ini pada local computer, Anda dapat menuju ke situs berikut :
https://sorting-tutorial-yahya.herokuapp.com/

## Penyelesaian Bonus
Bonus berhasil diselesaikan dengan menggunakan docker dan deploy aplikasi ke heroku.
Dockerfile dan file docker-compose yang digunakan dapat dilihat pada root direktori.