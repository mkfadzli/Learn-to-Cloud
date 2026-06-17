# Topik 1: Pengurusan Identiti dan Akses (IAM)

> ⏱️ **Anggaran masa:** 3-4 hari

Pengurusan Identiti dan Akses (IAM) adalah barisan hadapan pertahanan anda untuk mengawal siapa yang boleh mengakses persekitaran cloud anda dan apa yang boleh mereka lakukan sekali mereka berada di dalamnya. Sebelum anda mengamankan Journal API anda, anda perlu memahami asas IAM.

---

## 📚 Laluan Pembelajaran

### Objektif Pembelajaran

Di akhir topik ini, anda akan memahami:

- Konsep IAM: pengguna, kumpulan, peranan, dan dasar
- Prinsip keistimewaan minimum dan cara melaksanakannya
- Akaun perkhidmatan dan identiti beban kerja
- Pengesahan pelbagai faktor (MFA) dan bila menggunakannya
- Kesilapan keselamatan IAM yang biasa dan cara mengelakkannya

## Sumber Pembelajaran Teras

### 1. Baca: Asas IAM
Mulakan dengan dokumentasi IAM pembekal cloud anda:

**AWS**: [IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) - Baca bahagian 1-3
**Azure**: [Azure RBAC Documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) - Baca gambaran keseluruhan dan konsep
**GCP**: [IAM Overview](https://cloud.google.com/iam/docs/overview) - Baca konsep dan amalan terbaik

### 2. Tonton: IAM dalam Tindakan
- [AWS IAM Tutorial](https://www.youtube.com/watch?v=Ul6FW4UANGc) (30 minit)
- [Azure RBAC Explained](https://www.youtube.com/watch?v=C7hJ3oGHrhM) (25 minit)
- [GCP IAM Deep Dive](https://www.youtube.com/watch?v=96HlT4f2AUU) (40 minit)

### 3. Belajar: Amalan Terbaik Keselamatan
Baca panduan keselamatan penting ini:
- [OWASP Cloud Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cloud_Security_Cheat_Sheet.html)
- [CIS Cloud Security Controls](https://www.cisecurity.org/controls/cloud-security-controls)

## Konsep Utama yang Perlu Dikuasai

### Komponen IAM
- **Pengguna**: Individu atau aplikasi
- **Kumpulan**: Koleksi pengguna dengan kebenaran yang serupa
- **Peranan**: Set kebenaran yang boleh diandaikan
- **Dasar**: Dokumen yang mentakrifkan kebenaran

### Prinsip Keistimewaan Minimum
Beri pengguna dan perkhidmatan hanya kebenaran minimum yang diperlukan untuk menjalankan tugas mereka. Ini mengurangkan impak jika kelayakan dikompromi.

### Akaun Perkhidmatan vs Akaun Pengguna
- **Akaun pengguna**: Untuk orang yang perlu mengakses sumber
- **Akaun perkhidmatan**: Untuk aplikasi dan perkhidmatan mengakses sumber

### Pengesahan vs Kebenaran
- **Pengesahan**: Siapakah anda? (log masuk, MFA)
- **Kebenaran**: Apa yang anda boleh lakukan? (kebenaran, dasar)

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda. Berikut adalah contoh prompt:

1. "Quiz me on the difference between IAM users, groups, and roles"
2. "Ask me to explain the principle of least privilege with examples"
3. "Test my knowledge of when to use service accounts vs user accounts"
4. "Quiz me on the difference between authentication and authorization"
5. "Ask me about common IAM security mistakes and how to prevent them"
6. "Test my understanding of IAM policies and how they work"
7. "Quiz me on when and why to use multi-factor authentication"
8. "Ask me about workload identity and why it's better than long-lived keys"

## Sumber Tambahan (Pilihan)

### Amalan Praktikal
- [AWS IAM Workshop](https://catalog.workshops.aws/general-immersionday/en-US/basic-modules/30-iam)
- [Azure RBAC Tutorial](https://learn.microsoft.com/en-us/azure/role-based-access-control/tutorial-role-assignments-user-powershell)
- [GCP IAM Tutorial](https://cloud.google.com/iam/docs/quickstart)

### Makmal Keselamatan
- [PwnedLabs - AWS IAM Enumeration](https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration)
- [PwnedLabs - IAM Breaches with CloudTrail](https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena)

### Dokumentasi Rujukan
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Azure Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)
- [GCP Security Best Practices](https://cloud.google.com/security/best-practices)

## Langkah Seterusnya

Setelah anda yakin dengan konsep IAM, teruskan ke Topik 2. Anda akan melaksanakan semua pengetahuan ini apabila anda mengamankan Journal API dalam projek capstone.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep IAM (pengguna, kumpulan, peranan, dasar)
- [ ] Mempelajari prinsip keistimewaan minimum
- [ ] Memahami akaun perkhidmatan vs akaun pengguna
- [ ] Mempelajari tentang MFA dan bila menggunakannya
- [ ] Menyemak dokumentasi IAM pembekal cloud
- [ ] (Pilihan) Menyiapkan bengkel IAM praktikal
