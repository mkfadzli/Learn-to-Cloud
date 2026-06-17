# Topik 1: Pemkontaineran

> ⏱️ **Anggaran masa:** 3-4 hari

Pemkontaineran adalah pendekatan moden untuk menggunakan dan menguruskan aplikasi serta perkhidmatan di pelbagai persekitaran. Ia membolehkan anda membungkus perisian, alatan, dan dependensinya ke dalam unit ringan dan mudah alih yang dipanggil kontena.

**Manfaat utama termasuk:**

- Konsistensi merentas persekitaran pembangunan, pengujian, dan pengeluaran
- Penggunaan sumber yang cekap berbanding mesin maya
- Penggunaan dan penskalaan yang dipermudahkan
- Pengasingan antara aplikasi

Terdapat banyak alatan pemkontaineran yang tersedia seperti Docker, Podman, Containerd, dll.
Dalam topik ini, anda akan belajar cara menggunakan alatan seperti Docker untuk mewujudkan persekitaran terasing ini dan meneroka bagaimana platform cloud seperti AWS, Azure, dan GCP menyokong beban kerja terkontena.
Anda juga akan belajar cara memanfaatkan kontena untuk menjalankan pelayan MCP, yang membolehkan aplikasi berintegrasi dengan LLM dan alatan AI luaran.

---

## 📚 Laluan Pembelajaran

### Kajian

### Konsep Teras

- Apakah [Pemkontaineran?](https://github.com/resources/articles/devops/containerization)
- Perbezaan antara [Pemkontaineran dan Mayaization.](https://kodekloud.com/blog/virtualization-vs-containerization/)
- Apakah [Docker?](https://youtu.be/3c-iBn73dDE)
- Apakah [MCP? (Model Context Protocol)](https://modelcontextprotocol.io/docs/getting-started/intro)?

### Registrasi Kontena

- Apakah [Registrasi Kontena?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/)
- Cara mengkontenakan aplikasi dan menggunakan di pelbagai registrasi kontena:
  - [DockerHub](https://docs.docker.com/get-started/workshop/04_sharing_app/)
  - [AWS ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)
  - [Azure Container Registry](https://learn.microsoft.com/en-us/training/modules/deploy-use-azure-container-registry/)
  - [Google Container Registry](https://www.youtube.com/watch?v=D1_FC6pGutQ)

---

## 🛠️ Tugas Praktikal

### Projek Pemkontaineran Asas

1. Cipta aplikasi mudah (atau gunakan yang sedia ada)
2. Tulis Dockerfile untuk aplikasi tersebut
3. Bina imej Docker
4. Jalankan kontena secara tempatan dan uji fungsi
5. Cipta akaun di DockerHub atau registrasi kontena lain
6. Tandai dan tolak imej anda ke registrasi
7. Tarik dan jalankan imej anda di mesin lain untuk mengesahkan keboleh-alihan

### Jalankan Pelayan MCP GitHub Secara Tempatan sebagai Kontena

1. Pastikan anda mempunyai [Docker Desktop](https://www.docker.com/products/docker-desktop/) dan GitHub CoPilot dipasang
2. Pasang [Pelayan MCP GitHub](https://github.com/github/github-mcp-server) rasmi di Docker Desktop
3. Cipta GitHub Personal Access Token dan berikan kepada pelayan
4. Dayakan MCP Gateway di VSCode dengan `docker mcp gateway run` (Guna Command Palette)
5. Dayakan mod Agent di GitHub Copilot
6. Teroka dan Uji - Pertanyaan repos anda dan lakukan operasi GitHub

### Isu Biasa & Penyelesaian Masalah

- [Isu Biasa Docker & Penyelesaian](https://docs.docker.com/engine/reference/troubleshoot/)
- [Amalan Terbaik untuk Menulis Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda tentang pemkontaineran. Berikut adalah caranya:

1. Mulakan perbualan baharu dengan ChatGPT, Claude, atau Google Gemini
2. Gunakan prompt awal ini:

   ```txt
   I'm learning about containers and Docker. I'd like you to act as an interviewer:
   - Ask me questions one at a time about containerization concepts
   - Don't provide the answers immediately
   - Give me feedback on my responses
   - If I'm incorrect, guide me toward the right answer
   - Share relevant real-world examples after each answer
   Can we start?
   ```

3. Cuba jawab setiap soalan yang ditanya oleh AI. Topik utama yang anda perlu sedia untuk bincangkan:
   - Kontena vs Mesin Maya
   - Seni bina dan komponen Docker
   - Struktur dan amalan terbaik Dockerfile
   - Registrasi kontena dan pengurusan imej
   - Rangkaian dan storan kontena
   - Pertimbangan keselamatan

4. Selepas setiap jawapan:
   - Minta maklum balas tentang jawapan anda
   - Minta contoh dunia sebenar
   - Minta penjelasan jika perlu

:::tip
Petua pro: Kongsi konteks khusus anda: "I'm working with a Node.js application that I want to containerize using Docker. Please focus your questions around that scenario."
:::

Ingat: Matlamatnya adalah untuk menguji kefahaman anda, bukan untuk mendapatkan jawapan yang sempurna serta-merta.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep pemkontaineran vs mayaization
- [ ] Mempelajari asas dan seni bina Docker
- [ ] Menulis Dockerfile untuk aplikasi
- [ ] Membina dan menjalankan kontena secara tempatan
- [ ] Menolak imej ke registrasi kontena
- [ ] Menyediakan dan menguji Pelayan MCP GitHub
- [ ] Memahami rangkaian dan storan kontena
