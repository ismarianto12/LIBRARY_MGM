## Teknologi yang Digunakan
- **Frontend:** React.js
- **Backend:** Java Spring Boot
- **Database:** MySQL

## Instalasi

### Setup Backend (Spring Boot)
1. Masuk ke direktori backend:
   ```sh
   cd BACKEND/Schoollibrary
   ```
2. Pastikan Java dan Maven sudah terinstal:
   ```sh
   java -version
   mvn -version
   ```
3. Bangun backend menggunakan Maven:
   ```sh
   mvn clean install
   ```
4. Jalankan aplikasi Spring Boot:
   ```sh
   mvn spring-boot:run
   ```

### Setup Frontend (React.js)
1. Masuk ke direktori frontend:
   ```sh
   cd FRONTEND
   ```
2. Pastikan Node.js dan npm sudah terinstal:
   ```sh
   node -v
   npm -v
   ```
3. Instal dependensi:
   ```sh
   npm install
   ```
4. Jalankan server pengembangan React:
   ```sh
   npm start
   ```

## Setup Database
1. Impor skema SQL:
   - Temukan file `schoollibrary.sql`.
   - Buka MySQL dan jalankan skrip untuk membuat database dan tabel:
     ```sh
     mysql -u root -p < schoollibrary.sql
     ```

## Menjalankan Proyek
- Jalankan backend terlebih dahulu dengan menjalankan aplikasi Spring Boot.
- Kemudian, jalankan frontend menggunakan `npm start`.
- Akses frontend di `http://localhost:3000`.
- Backend API tersedia di `http://localhost:8080`.


