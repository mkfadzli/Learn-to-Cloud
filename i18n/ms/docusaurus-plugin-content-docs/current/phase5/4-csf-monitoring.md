# Topik 4: Pemantauan Keselamatan

> ⏱️ **Anggaran masa:** 2-3 hari

Pemantauan keselamatan adalah sistem amaran awal anda untuk mengesan ancaman dan memahami apa yang berlaku dalam persekitaran cloud anda. Sebelum melaksanakan pemantauan untuk Journal API anda, anda perlu memahami asas pengelogan, pemberitahuan, dan pemantauan.

---

## 📚 Laluan Pembelajaran

### Objektif Pembelajaran

Di akhir topik ini, anda akan memahami:

- Perkhidmatan pengelogan cloud dan peristiwa apa yang perlu dipantau
- Konsep Pengurusan Maklumat dan Peristiwa Keselamatan (SIEM)
- Cara mencipta pemberitahuan yang berkesan yang meminimumkan positif palsu
- Metrik keselamatan utama yang perlu dijejak
- Teknik analisis log dan pengesanan ancaman

## Sumber Pembelajaran Teras

### 1. Baca: Asas Pemantauan Cloud
Mulakan dengan dokumentasi pemantauan pembekal cloud anda:

**AWS**: [CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/) dan [CloudTrail User Guide](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/)
**Azure**: [Azure Monitor Overview](https://learn.microsoft.com/en-us/azure/azure-monitor/overview) dan [Activity Log](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log)
**GCP**: [Cloud Logging](https://cloud.google.com/logging/docs) dan [Cloud Monitoring](https://cloud.google.com/monitoring/docs)

### 2. Tonton: Pemantauan Keselamatan dalam Amalan
- [AWS Security Monitoring](https://www.youtube.com/watch?v=VhEhcWp-m8s) (35 minit)
- [Azure Sentinel Overview](https://www.youtube.com/watch?v=hwahlJy9Ibw) (25 minit)
- [SIEM Fundamentals](https://www.youtube.com/watch?v=G8PFCd2OhJ8) (40 minit)

### 3. Belajar: Amalan Terbaik Pemantauan Keselamatan
- [NIST Computer Security Incident Handling Guide](https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final)
- [SANS Security Monitoring Guide](https://www.sans.org/white-papers/35066/)

## Konsep Utama yang Perlu Dikuasai

### Sumber Log Penting
- **Log Pengesahan**: Siapa yang log masuk, bila, dan dari mana
- **Log Panggilan API**: Tindakan apa yang sedang dilakukan pada sumber anda
- **Log Rangkaian**: Corak trafik dan pencerobohan yang berpotensi
- **Log Aplikasi**: Peristiwa keselamatan yang relevan bagi aplikasi anda
- **Log Infrastruktur**: Perubahan pada sumber cloud anda

### Metrik Keselamatan yang Perlu Dijejak
- Cubaan pengesahan yang gagal
- Corak panggilan API yang tidak biasa
- Anomali trafik rangkaian
- Perubahan konfigurasi sumber
- Corak akses data

### Konsep SIEM
**Pengurusan Maklumat dan Peristiwa Keselamatan**:
- **Kumpul**: Kumpulkan log dari pelbagai sumber
- **Korelasikan**: Cari corak merentas sumber log yang berbeza
- **Maklumkan**: Maklumkan apabila corak yang mencurigakan dikesan
- **Siasat**: Sediakan alatan untuk menganalisis peristiwa keselamatan

### Prinsip Reka Bentuk Pemberitahuan
- **Nisbah Isyarat-ke-Hingar yang Tinggi**: Pemberitahuan seharusnya menunjukkan masalah sebenar
- **Boleh Bertindak**: Setiap pemberitahuan seharusnya mempunyai prosedur tindak balas yang jelas
- **Eskalasi**: Tahap keparahan yang berbeza dengan masa tindak balas yang sesuai
- **Konteks**: Berikan maklumat yang mencukupi untuk memahami isu

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda. Berikut adalah contoh prompt:

1. "Quiz me on the different types of logs I should monitor for security"
2. "Ask me about SIEM concepts and how they work together"
3. "Test my knowledge of creating effective security alerts"
4. "Quiz me on key security metrics for cloud applications"
5. "Ask me about the difference between logging and monitoring"
6. "Test my understanding of log correlation and analysis"
7. "Quiz me on common security monitoring mistakes"
8. "Ask me about incident response workflows for security events"


## Langkah Seterusnya

Setelah anda memahami konsep pemantauan keselamatan, teruskan ke Topik 5.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami pelbagai jenis log keselamatan
- [ ] Mempelajari konsep SIEM dan cara ia berfungsi
- [ ] Memahami prinsip reka bentuk pemberitahuan
- [ ] Mempelajari metrik keselamatan utama yang perlu dijejak
- [ ] Menyemak dokumentasi pemantauan pembekal cloud
