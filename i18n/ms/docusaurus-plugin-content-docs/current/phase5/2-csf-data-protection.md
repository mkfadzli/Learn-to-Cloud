# Topik 2: Perlindungan Data dan Pengurusan Rahsia

> ⏱️ **Anggaran masa:** 2-3 hari

Data adalah aset paling berharga dalam persekitaran cloud anda. Sebelum anda mengamankan data Journal API anda, anda perlu memahami asas enkripsi, pengurusan kunci, dan pengurusan rahsia.

---

## 📚 Laluan Pembelajaran

### Objektif Pembelajaran

Di akhir topik ini, anda akan memahami:

- Enkripsi semasa rehat vs enkripsi dalam perjalanan
- Enkripsi simetrik vs asimetrik
- Amalan terbaik pengurusan kunci
- Pengurusan rahsia dan mengapa ia penting
- Klasifikasi data dan tahap sensitiviti
- Kesilapan keselamatan data yang biasa dan cara mengelakkannya

## Sumber Pembelajaran Teras

### 1. Baca: Asas Enkripsi
Mulakan dengan sumber asas ini:

- [Encryption at Rest vs In Transit](https://cloud.google.com/security/encryption) - Panduan Google Cloud
- [AWS Key Management Service Concepts](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html)
- [Azure Key Vault Overview](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)

### 2. Tonton: Perlindungan Data di Cloud
- [Encryption in the Cloud Explained](https://www.youtube.com/watch?v=plv7EnY5QSo) (20 minit)
- [AWS KMS Deep Dive](https://www.youtube.com/watch?v=8Z0wsE2HoSo) (45 minit)
- [Secrets Management Best Practices](https://www.youtube.com/watch?v=pK1h7Leh_yI) (30 minit)

### 3. Belajar: Amalan Terbaik Keselamatan Data
- [OWASP Top 10 for APIs](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) - Fokus pada isu pendedahan data
- [NIST Cybersecurity Framework - Protect](https://www.nist.gov/cyberframework/protect)

## Konsep Utama yang Perlu Dikuasai

### Jenis Enkripsi

**Enkripsi Semasa Rehat**:
- Melindungi data yang disimpan dalam pangkalan data, sistem fail, atau storan objek
- Menggunakan enkripsi simetrik (kunci yang sama untuk enkripsi/nyahsulit)
- Diuruskan oleh pembekal cloud secara automatik dalam kebanyakan kes

**Enkripsi dalam Perjalanan**:
- Melindungi data yang bergerak antara sistem (panggilan API, sambungan pangkalan data)
- Menggunakan protokol TLS/SSL
- Penting untuk mana-mana aplikasi web

### Pengurusan Kunci

**Kunci Dikendalikan Pelanggan vs Kunci Dikendalikan Pembekal**:
- **Dikendalikan pembekal**: Pembekal cloud mengendalikan semua operasi kunci (lebih mudah)
- **Dikendalikan pelanggan**: Anda mengawal putaran kunci, dasar akses (lebih kawalan)

**Putaran Kunci**:
- Menukar kunci enkripsi secara berkala untuk mengehadkan pendedahan
- Boleh diautomasikan oleh perkhidmatan pengurusan kunci cloud
- Kritikal untuk keselamatan jangka panjang

### Pengurusan Rahsia

**Apakah Rahsia**:
- Kata laluan pangkalan data
- Kunci API
- Sijil
- Token OAuth
- Mana-mana data konfigurasi yang sensitif

**Mengapa Pengurusan Rahsia Penting**:
- Mengelakkan pengkodean keras kelayakan dalam kod
- Membolehkan putaran automatik
- Menyediakan jejak audit akses rahsia
- Memusatkan konfigurasi sensitif

### Klasifikasi Data

**Awam**: Tiada risiko jika didedahkan (bahan pemasaran)
**Dalaman**: Risiko rendah jika didedahkan (dokumentasi dalaman)
**Sulit**: Risiko sederhana jika didedahkan (data pelanggan)
**Terhad**: Risiko tinggi jika didedahkan (maklumat pembayaran, data peribadi)

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda. Berikut adalah contoh prompt:

1. "Quiz me on the difference between encryption at rest and encryption in transit"
2. "Ask me to explain symmetric vs asymmetric encryption with examples"
3. "Test my knowledge of when to use customer-managed vs provider-managed keys"
4. "Quiz me on secrets management best practices"
5. "Ask me about data classification levels and how to apply them"
6. "Test my understanding of key rotation and why it's important"
7. "Quiz me on common data security mistakes in cloud applications"
8. "Ask me about the difference between hashing and encryption"

## Sumber Tambahan (Pilihan)

### Dokumentasi Pembekal Cloud
- [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/)
- [Azure Information Protection](https://learn.microsoft.com/en-us/azure/information-protection/)
- [Google Cloud Data Loss Prevention](https://cloud.google.com/dlp/docs)

### Alatan dan Perkhidmatan Keselamatan
- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)
- [Azure Key Vault](https://docs.aws.amazon.com/secretsmanager/)
- [Google Secret Manager](https://cloud.google.com/secret-manager/docs)
- [HashiCorp Vault](https://www.vaultproject.io/) (pilihan sumber terbuka)

### Sumber Amalan
- [CryptoHack](https://cryptohack.org/) - Belajar kriptografi melalui cabaran
- [Over The Wire](https://overthewire.org/wargames/krypton/) - Permainan perang kriptografi

## Langkah Seterusnya

Setelah anda yakin dengan konsep perlindungan data, teruskan ke Topik 3.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami enkripsi semasa rehat vs dalam perjalanan
- [ ] Mempelajari enkripsi simetrik vs asimetrik
- [ ] Memahami amalan terbaik pengurusan kunci
- [ ] Mempelajari asas pengurusan rahsia
- [ ] Memahami tahap klasifikasi data
- [ ] Menyemak dokumentasi enkripsi pembekal cloud
