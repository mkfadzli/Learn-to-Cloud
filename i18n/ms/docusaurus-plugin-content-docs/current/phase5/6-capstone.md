# Topik 6: Amankan Journal API Anda - Capstone

> ⏱️ **Anggaran masa:** 1 minggu

Sekarang masanya untuk melaksanakan semua yang telah anda pelajari! Projek capstone ini akan mengubah Journal API anda dari aplikasi asas kepada sistem selamat tahap perusahaan yang sedia untuk pengeluaran. Anda akan menerapkan semua konsep dari Topik 1-5 dalam pelaksanaan dunia sebenar yang menyeluruh.

---

## 📚 Laluan Pembelajaran

### Gambaran Keseluruhan Projek

Anda akan melaksanakan keselamatan komprehensif untuk Journal API anda dengan membina lima lapisan perlindungan:

1. **Keselamatan IAM**: Kawalan identiti dan akses (Topik 1)
2. **Perlindungan Data**: Enkripsi dan pengurusan rahsia (Topik 2)
3. **Keselamatan Rangkaian**: Penyambungan selamat dan pengasingan (Topik 3)
4. **Pemantauan Keselamatan**: Pengesanan dan pemberitahuan masa nyata (Topik 4)
5. **Tindak Balas Insiden**: Tindak balas ancaman automatik (Topik 5)

**Tidak mempunyai Journal API?** Gunakan mana-mana aplikasi web yang anda ada (aplikasi Flask, aplikasi Node.js, WordPress, atau walaupun tapak statik). Prinsip keselamatan terpakai untuk mana-mana aplikasi cloud.

## Apa Yang Anda Akan Bina

Di akhir capstone ini, aplikasi anda akan mempunyai:

- **Tiada rahsia yang dikodkan keras** - Semua kelayakan diuruskan dengan selamat
- **Enkripsi di mana-mana** - Data dilindungi semasa rehat dan dalam perjalanan
- **Pengasingan rangkaian** - Komponen aplikasi di(segmentasi)kan dengan betul
- **Pemantauan masa nyata** - Peristiwa keselamatan dikesan dalam beberapa minit
- **Tindak balas automatik** - Ancaman biasa dikendalikan secara automatik
- **Jejak audit lengkap** - Setiap tindakan dilog dan boleh dijejak
- **Buku main insiden** - Prosedur yang jelas untuk peristiwa keselamatan

Ini mewakili piawaian keselamatan yang dijangkakan dalam persekitaran pengeluaran.

## Persediaan Pra-Pelaksanaan

Sebelum anda mula, pastikan anda mempunyai:

1. **Aplikasi anda berjalan** - Journal API digunakan dan boleh diakses
2. **Akses pentadbiran** - Kebenaran penuh dalam akaun cloud anda
3. **Pemantauan kos** - Sediakan pemberitahuan pengebilan (sasaran: bawah $50/bulan)
4. **Templat dokumentasi** - Cipta folder untuk dokumentasi keselamatan anda

## Bahagian 1: Keselamatan Asas (IAM & Rangkaian)

### 1.1: Laksanakan Pengurusan Identiti dan Akses

**Reka strategi IAM anda:**
- Reka bentuk akaun perkhidmatan untuk aplikasi Journal API anda
- Cipta peranan IAM mengikut prinsip keistimewaan minimum
- Sediakan MFA untuk akaun pentadbiran anda
- Cipta matriks akses yang mendokumentasikan siapa yang boleh mengakses apa

**Senarai semak pelaksanaan:**
- [ ] Akaun perkhidmatan Journal API dicipta dengan kebenaran minimum
- [ ] Peranan akses pangkalan data berasingan dari peranan API
- [ ] Akaun perkhidmatan pemantauan untuk alatan keselamatan
- [ ] Akses pentadbiran memerlukan MFA
- [ ] Semua akses didokumentasikan dalam matriks IAM

**Uji IAM anda:**
- Cuba mengakses sumber dengan akaun perkhidmatan yang salah (sepatutnya gagal)
- Sahkan aplikasi anda berfungsi dengan kebenaran terhad yang baharu
- Uji keperluan MFA untuk akses pentadbiran

### 1.2: Amankan Seni Bina Rangkaian Anda

**Reka keselamatan rangkaian anda:**
- Cipta VPC dengan subnet awam dan peribadi
- Letakkan API anda di subnet peribadi, pengimbang beban di awam
- Konfigurasi kumpulan keselamatan dengan akses minimum yang diperlukan
- Sediakan titik akhir peribadi untuk sambungan pangkalan data

**Senarai semak pelaksanaan:**
- [ ] VPC dicipta dengan blok CIDR yang betul
- [ ] Subnet awam untuk pengimbang beban sahaja
- [ ] Subnet peribadi untuk aplikasi dan pangkalan data
- [ ] Kumpulan keselamatan hanya membenarkan port yang diperlukan
- [ ] Pangkalan data hanya boleh diakses dari subnet aplikasi
- [ ] Akses internet melalui NAT Gateway (jika diperlukan)

**Uji rangkaian anda:**
- Sahkan API anda tidak boleh diakses secara langsung dari internet
- Sahkan pangkalan data tidak boleh dicapai dari subnet awam
- Uji bahawa aplikasi anda masih boleh berfungsi dengan baik

## Bahagian 2: Perlindungan Data & Pemantauan

### 2.1: Laksanakan Perlindungan Data

**Amankan data anda:**
- Dayakan enkripsi semasa rehat untuk pangkalan data dan storan fail
- Konfigurasi TLS/SSL untuk semua komunikasi API
- Pindahkan semua rahsia ke perkhidmatan pengurusan rahsia
- Sediakan sandaran terenkripsi automatik

**Senarai semak pelaksanaan:**
- [ ] Enkripsi pangkalan data didayakan
- [ ] Enkripsi storan fail didayakan
- [ ] Sijil TLS dikonfigurasi (gunakan Let's Encrypt atau pembekal cloud)
- [ ] Kunci API dipindahkan ke pengurus rahsia
- [ ] Kunci API LLM (OpenAI, Anthropic, dll.) disimpan dalam pengurus rahsia
- [ ] Kata laluan pangkalan data dalam pengurus rahsia
- [ ] Sandaran harian automatik dikonfigurasi
- [ ] Enkripsi sandaran disahkan

**Uji perlindungan data anda:**
- Sahkan HTTPS sedang berfungsi (semak sijil dalam pelayar)
- Sahkan rahsia tidak lagi dalam kod atau fail konfigurasi
- Uji aplikasi berfungsi dengan rahsia dari pengurus rahsia
- Cuba akses sandaran dan sahkan ia terenkripsi

### 2.2: Gunakan Pemantauan Keselamatan

**Sediakan timbunan pemantauan anda:**
- Konfigurasi pengelogan audit untuk semua perkhidmatan
- Gunakan papan pemuka pemantauan keselamatan
- Cipta pemberitahuan untuk aktiviti yang mencurigakan
- Sediakan pengagregatan dan analisis log

**Senarai semak pelaksanaan:**
- [ ] CloudTrail/pengelogan audit didayakan untuk semua perkhidmatan
- [ ] Papan pemuka keselamatan digunakan (CloudWatch, Grafana, dll.)
- [ ] Pemberitahuan cubaan log masuk yang gagal dikonfigurasi
- [ ] Pemberitahuan corak akses API yang tidak biasa disediakan
- [ ] Pemantauan akses pangkalan data didayakan
- [ ] Pemberitahuan perubahan kumpulan keselamatan rangkaian
- [ ] Pemberitahuan pengubahsuaian sumber

**Uji pemantauan anda:**
- Jana cubaan log masuk yang gagal (sahkan pemberitahuan dipicu)
- Buat corak panggilan API yang tidak biasa (sahkan pengesanan)
- Ubah suai kumpulan keselamatan (semak pemberitahuan diterima)
- Semak log untuk memastikan semua aktiviti dirakamkan

## Bahagian 3: Keselamatan Lanjutan & Tindak Balas

### 3.1: Laksanakan Pengesanan Ancaman

**Bina pengesanan ancaman automatik:**
- Gunakan perkhidmatan keselamatan cloud (GuardDuty, Security Center, dll.)
- Konfigurasi analisis tingkah laku untuk aplikasi anda
- Sediakan suapan perisikan ancaman
- Cipta peraturan pengesanan ancaman khusus untuk aplikasi anda

**Senarai semak pelaksanaan:**
- [ ] Perkhidmatan pengesanan ancaman cloud didayakan
- [ ] Garis dasar tingkah laku ditetapkan untuk penggunaan API biasa
- [ ] Integrasi perisikan ancaman dikonfigurasi
- [ ] Peraturan pengesanan tersuai untuk corak aplikasi anda
- [ ] Integrasi dengan papan pemuka pemantauan anda

### 3.2: Cipta Sistem Tindak Balas Insiden

**Bina keupayaan tindak balas automatik:**
- Cipta aliran kerja tindak balas insiden
- Laksanakan pembaikan automatik untuk ancaman biasa
- Bina buku panduan untuk prosedur tindak balas manual
- Sediakan saluran komunikasi insiden

**Senarai semak pelaksanaan:**
- [ ] Tindak balas automatik terhadap kelayakan yang dikompromi
- [ ] Pengasingan automatik aktiviti rangkaian yang mencurigakan
- [ ] Aliran kerja eskalasi insiden ditakrifkan
- [ ] Buku panduan dicipta untuk setiap jenis insiden
- [ ] Pelan komunikasi untuk insiden keselamatan
- [ ] Jadual pengujian berkala untuk prosedur insiden

## Bahagian 4: Pengesahan & Dokumentasi

### 4.1: Pengujian Keselamatan

**Uji semua kawalan keselamatan anda:**

**Pengujian Pengesahan:**
- Cuba akses API tanpa kelayakan yang betul
- Cuba akses fungsi pentadbiran tanpa kebenaran
- Uji cubaan pintasan MFA

**Pengujian Keselamatan Rangkaian:**
- Cuba sambungan pangkalan data langsung dari internet
- Cuba akses pelayan aplikasi secara langsung
- Uji penguatkuasaan peraturan kumpulan keselamatan

**Pengujian Perlindungan Data:**
- Sahkan enkripsi semasa rehat berfungsi
- Sahkan TLS/SSL dikonfigurasi dengan betul
- Uji integrasi pengurusan rahsia

**Pengujian Pemantauan:**
- Jana peristiwa keselamatan dan sahkan pemberitahuan
- Uji automasi tindak balas insiden
- Sahkan pengumpulan dan analisis log

### 4.2: Cipta Dokumentasi Keselamatan

**Dokumentasikan pelaksanaan keselamatan lengkap anda:**

**Dokumentasi Seni Bina:**
- Gambar rajah seni bina keselamatan yang menunjukkan semua kawalan
- Topologi rangkaian dengan zon keselamatan ditandakan
- Gambar rajah aliran data yang menunjukkan titik enkripsi
- Struktur IAM dan laluan akses

**Dokumentasi Operasi:**
- Buku panduan tindak balas insiden untuk setiap jenis ancaman
- Panduan pengguna papan pemuka pemantauan keselamatan
- Prosedur sandaran dan pemulihan
- Proses pengurusan konfigurasi keselamatan

**Dokumentasi Pematuhan:**
- Matriks kawalan keselamatan
- Penilaian risiko dan strategi mitigasi
- Prosedur jejak audit dan pengelogan
- Analisis kos pelaksanaan keselamatan

## Kriteria Kejayaan

Capstone anda selesai apabila anda boleh mempamerkan:

- ✅ **Tiada rahsia dalam kod** - Semua kelayakan diuruskan melalui perkhidmatan rahsia
- ✅ **Pengasingan rangkaian berfungsi** - Pangkalan data tidak boleh diakses dari internet
- ✅ **Enkripsi di mana-mana** - Data dilindungi semasa rehat dan dalam perjalanan
- ✅ **Pemantauan berfungsi** - Peristiwa keselamatan dikesan dalam masa 5 minit
- ✅ **Tindak balas automatik** - Ancaman biasa dikendalikan tanpa campur tangan manual
- ✅ **Dokumentasi lengkap** - Orang lain boleh memahami dan meniru setup anda
- ✅ **Kos terkawal** - Kos bulanan kekal bawah $50 menggunakan lapisan percuma
- ✅ **Pengujian disahkan** - Semua kawalan keselamatan terbukti berfungsi

## Hantaran

Hantar perkara berikut:

1. **Gambar Rajah Seni Bina Keselamatan** - Perwakilan visual semua kawalan keselamatan
2. **Panduan Pelaksanaan** - Dokumentasi langkah demi langkah apa yang anda bina
3. **Buku Panduan Tindak Balas Insiden** - Prosedur untuk mengendalikan peristiwa keselamatan
4. **Keputusan Ujian** - Bukti bahawa kawalan keselamatan anda berfungsi seperti yang direka
5. **Analisis Kos** - Pecahan kos bulanan pelaksanaan keselamatan anda
6. **Pengajaran yang Dipelajari** - Refleksi tentang cabaran dan penyelesaian

## Hasil Projek

Selepas menyiapkan capstone ini, anda akan mempunyai:

- **Keselamatan Sedia untuk Pengeluaran** - Aplikasi anda memenuhi piawaian keselamatan perusahaan
- **Pengalaman Praktikal** - Pelaksanaan praktikal kawalan keselamatan yang digunakan dalam industri
- **Projek Portfolio Lengkap** - Pelaksanaan keselamatan komprehensif untuk ditunjukkan kepada majikan
- **Kemahiran Tindak Balas Insiden** - Keupayaan untuk mengesan, bertindak balas, dan pulih dari peristiwa keselamatan
- **Dokumentasi Keselamatan** - Dokumentasi dan prosedur tahap profesional

## Langkah Seterusnya

Capstone ini menunjukkan keupayaan anda untuk melaksanakan keselamatan cloud yang komprehensif. Anda kini mempunyai kemahiran untuk:

- **Mengamankan mana-mana aplikasi cloud** menggunakan kawalan tahap perusahaan
- **Melaksanakan pemantauan keselamatan** yang mengesan ancaman secara masa nyata
- **Mencipta prosedur tindak balas insiden** yang meminimumkan impak perniagaan

---

## ✅ Senarai Semak Topik

Sebelum melengkapkan, pastikan anda telah:

- [ ] Mereka bentuk dan melaksanakan strategi IAM dengan keistimewaan minimum
- [ ] Mengamankan seni bina rangkaian dengan subnet awam/peribadi
- [ ] Mendayakan enkripsi semasa rehat dan dalam perjalanan
- [ ] Memindahkan semua rahsia ke perkhidmatan pengurusan rahsia
- [ ] Menggunakan papan pemuka pemantauan keselamatan
- [ ] Mencipta pemberitahuan untuk aktiviti yang mencurigakan
- [ ] Melaksanakan perkhidmatan pengesanan ancaman
- [ ] Mencipta buku panduan tindak balas insiden
- [ ] Menguji semua kawalan keselamatan
- [ ] Mencipta dokumentasi dan gambar rajah keselamatan
- [ ] Menyiapkan analisis kos
