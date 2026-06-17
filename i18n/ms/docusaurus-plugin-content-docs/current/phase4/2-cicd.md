# Topik 2: Integrasi Berterusan dan Penggunaan Berterusan

> ⏱️ **Anggaran masa:** 3-4 hari

Satu cabaran yang akan anda hadapi selepas fasa sebelumnya adalah keperluan untuk menjalankan arahan bina semula dan tolak secara manual bagi setiap perubahan yang dibuat pada kod anda, yang boleh menjadi proses yang membosankan dan terdedah kepada kesilapan. Dalam topik ini, kami akan menerangkan cara mengautomasikan keseluruhan proses ini menggunakan Integrasi Berterusan (CI) dan Penggunaan Berterusan (CD). Talian paip ini membolehkan anda membina, menguji, dan menggunakan aplikasi secara automatik setiap kali perubahan dibuat, memastikan aliran kerja pembangunan yang lancar dan boleh dipercayai.

Terdapat pelbagai alatan CI/CD yang tersedia, seperti Jenkins, GitHub Actions, dan GitLab CI, yang mempermudahkan proses ini dengan melaksanakan tugas secara automatik dan menggunakan kod berdasarkan pencetus seperti kod commit, permintaan tarik (pull request), atau acara berjadual.

---

## 📚 Laluan Pembelajaran

### Kajian

- Apakah [Integrasi Berterusan (CI)](https://www.ibm.com/think/topics/continuous-integration) dan [Penghantaranan Berterusan (CD)](https://www.ibm.com/think/topics/continuous-delivery)?
- Apakah perbezaan antara [Integrasi Berterusan, Penghantaranan Berterusan, dan Penggunaan Berterusan](https://www.jetbrains.com/teamcity/ci-cd-guide/continuous-integration-vs-delivery-vs-deployment/)?
- Melaksanakan talian paip CI/CD dengan:
  - [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI)
  - [AWS CodePipeline](https://www.youtube.com/watch?v=zZt-LTY9hAE)
  - [Azure DevOps](https://www.youtube.com/watch?v=4BibQ69MD8c)
  - [GCP Cloud Build](https://www.youtube.com/watch?v=vCt5zMvgV5s)

---

## 🛠️ Tugas Praktikal

### Penyediaan Talian Paip CI/CD Asas

1. Sediakan talian paip CI/CD asas untuk aplikasi terkontena anda dari fasa sebelumnya
2. Gunakan GitHub Actions atau Jenkins untuk secara automatik:
   - Membina aplikasi anda
   - Menjalankan ujian
   - Membina imej Docker
   - Menolak imej ke registrasi kontena (contoh: DockerHub, AWS ECR, GCP GCR)
3. Konfigurasi talian paip untuk pencetus pada commit kod ke cawangan utama anda
4. Tambah sistem pemberitahuan mudah untuk memberi amaran tentang penggunaan yang berjaya atau kegagalan

### Cabaran Lanjutan (Pilihan)

Laksanakan talian paip penggunaan berbilang persekitaran yang menggunakan ke staging terlebih dahulu, menjalankan ujian, dan kemudian mempromosikan ke pengeluaran.

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda tentang konsep CI/CD. Berikut adalah caranya:

1. Mulakan perbualan baharu dengan ChatGPT, Claude, atau Google Gemini
2. Gunakan prompt awal ini:

    ```txt
    I'm learning about CI/CD pipelines. I'd like you to act as an interviewer:
    - Ask me questions one at a time about CI/CD concepts
    - Don't provide the answers immediately
    - Give me feedback on my responses
    - If I'm incorrect, guide me toward the right answer
    - Share relevant real-world examples after each answer
    Can we start?
    ```

3. Cuba jawab setiap soalan yang ditanya oleh AI. Topik utama yang anda perlu sedia untuk bincangkan:
   - Asas dan perbezaan CI/CD
   - Komponen dan peringkat talian paip
   - Integrasi kawalan versi
   - Gerbang kualiti dan pengujian
   - Strategi penggunaan
   - Pertimbangan keselamatan

4. Selepas setiap jawapan:
   - Minta maklum balas tentang jawapan anda
   - Minta contoh dunia sebenar
   - Minta penjelasan jika perlu

:::tip
Petua pro: Kongsi konteks khusus anda: "I'm practicing with a containerized Node.js app using GitHub Actions. Please focus your questions around that scenario."
:::

Ingat: Matlamatnya adalah untuk menguji kefahaman anda, bukan untuk mendapatkan jawapan yang sempurna serta-merta.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami asas dan perbezaan CI/CD
- [ ] Mempelajari komponen dan peringkat talian paip
- [ ] Menyediakan talian paip CI/CD asas (GitHub Actions atau yang serupa)
- [ ] Mengkonfigurasi bina automatik pada commit kod
- [ ] Melaksanakan pembinaan dan penolakan imej Docker
- [ ] Menambah pemberitahuan untuk kejayaan/kegagalan
- [ ] (Pilihan) Melaksanakan penggunaan berbilang persekitaran
