# Topik 5: Pemantauan dan Kebolehcerapan

> ⏱️ **Anggaran masa:** 3-4 hari

Pemantauan dan kebolehcerapan adalah amalan DevOps penting yang membantu anda memahami kesihatan, prestasi, dan kebolehpercayaan aplikasi serta infrastruktur anda. Dalam topik ini, anda akan belajar cara menyediakan pemantauan menggunakan [Prometheus](https://prometheus.io/) dan memaparkan metrik dengan [Grafana](https://grafana.com/). Anda kemudian akan meneroka ejen AI dengan n8n dan aliran kerja ejen yang membolehkan anda mengautomasikan tindak balas insiden bergantung sepenuhnya pada campur tangan manual.

---

## 📚 Laluan Pembelajaran

## Mengapakah pemantauan dan kebolehcerapan penting untuk aplikasi cloud-native?

Aplikasi cloud-native biasanya teragih, dinamik, dan berjalan merentas banyak perkhidmatan dan persekitaran. Pemantauan dan kebolehcerapan adalah kritikal kerana ia:

- Membantu mengesan dan menyelesaikan isu dengan cepat, meminimumkan masa henti.
- Memberikan kebolehlihatan ke dalam kesihatan sistem, prestasi, dan pengalaman pengguna.
- Membolehkan pemberitahuan proaktif dan penyelesaian masalah dalam persekitaran yang kompleks dan berubah dengan cepat.
- Menyokong kebolehskalaan dan kebolehpercayaan dengan mengenal pasti hambatan dan kegagalan.
- Membolehkan pasukan memahami kebergantungan dan interaksi antara perkhidmatan mikro.

Tanpa pemantauan dan kebolehcerapan yang berkesan, adalah sukar untuk mengekalkan, menyahpepijat, dan mengoptimumkan sistem cloud-native.

---

## Bagaimanakah ejen AI boleh meningkatkan sistem pemantauan anda?

Sistem pemantauan menjana aliran amaran yang berterusan. Secara tradisional, jurutera menyiasat dan membaiki setiap amaran secara manual. Dengan melengkapkan ejen AI dengan logik yang sesuai, anda membolehkan mereka untuk:

- Bertindak balas serta-merta terhadap amaran tanpa kelewatan manusia
- Menganalisis log dan metrik untuk mencari punca_root_ secara automatik
- Melaksanakan pembaikan (mulakan semula perkhidmatan, skalakan sumber, rollback penggunaan) secara bebas
- Belajar daripada insiden untuk meningkatkan tindak balas masa hadapan
- Membebaskan pasukan daripada penyelesaian masalah berulang untuk fokus pada kebolehpercayaan jangka panjang

---

## Kajian

- Apakah [Pemantauan](https://www.ibm.com/think/topics/observability-vs-monitoring) dan [Kebolehcerapan](https://www.ibm.com/think/topics/observability-vs-monitoring) dalam DevOps?
- [Gambaran Keseluruhan Prometheus](https://prometheus.io/docs/introduction/overview/)
- [Gambaran Keseluruhan Grafana](https://grafana.com/docs/grafana/latest/getting-started/what-is-grafana/)
- [Integrasi Prometheus + Grafana](https://grafana.com/docs/grafana/latest/datasources/prometheus/)
- Apakah [ejen AI?](https://aws.amazon.com/what-is/ai-agents/)
- Apakah [aliran kerja ejen?](https://www.ibm.com/think/topics/agentic-workflows)
- [Gambaran Keseluruhan n8n](https://n8n.io/features/)

---

## Konsep Utama

- **Metrik**: Data kuantitatif tentang sistem anda (CPU, memori, permintaan, dll.)
- **Pemberitahuan**: Pemberitahuan automatik berdasarkan ambang metrik
- **Papan Pemuka**: Perwakilan visual metrik untuk pandangan cepat
- **Instrumentasi**: Menambah kod atau pengeksport untuk mendedahkan metrik

---

## 🛠️ Tugas Praktikal

### 1. Sediakan Prometheus

- Cipta konfigurasi `prometheus.yml` minimum:
  ```yaml
  global:
    scrape_interval: 15s

  scrape_configs:
    - job_name: 'prometheus'
      static_configs:
        - targets: ['localhost:9090']
  ```

- Pasang Prometheus menggunakan Docker:
  ```sh
    docker run \
    -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
  ```

- Tambah titik akhir metrik aplikasi anda ke `static_configs` jika diperlukan.

### 2. Sediakan Grafana

- Pasang Grafana menggunakan Docker:
  ```sh
  docker run -d --name=grafana -p 3000:3000 grafana/grafana
  ```
- Akses Grafana di [http://localhost:3000](http://localhost:3000) (log masuk lalai: `admin` / `admin`)
- Tambah Prometheus sebagai sumber data (URL: `http://host.docker.internal:9090` atau `http://localhost:9090`)
- Tambah dan sambungkan metrik pembekal cloud anda jika berkenan (contoh: AWS CloudWatch, Azure Monitor)

### 3. Cipta Papan Pemuka

- Cipta papan pemuka baharu dan tambah panel menggunakan pertanyaan PromQL (contoh: `up`, `http_requests_total`)
- Paparkan metrik dari aplikasi atau infrastruktur anda

### 4. Instrumentasi Aplikasi Contoh

- Untuk Node.js: Gunakan [prom-client](https://github.com/siimon/prom-client) untuk mendedahkan metrik
- Untuk Python: Gunakan [prometheus_client](https://github.com/prometheus/client_python)
- Tambah titik akhir metrik ke konfigurasi Prometheus dan paparkan di Grafana

### 5. Bina ejen AI dengan n8n

- Pasang n8n menggunakan Docker:
```sh
docker run -d -p 5678:5678 --name n8n n8nio/n8n:latest
```
- Akses n8n di [http://localhost:5678](http://localhost:5678). Cipta log masuk anda.

**Bina ejen anda:**
1. Cipta pencetus Jadual (contoh: setiap 1-2 minit)
2. Pertanyaan API Prometheus anda untuk metrik tertentu
3. Tambah nod If untuk menyemak jika metrik melebihi ambang tertentu
4. Panggil LLM untuk menganalisis anomali dan cadangkan punca_root_ dan langkah pembaikan ([OpenAI API](https://platform.openai.com/docs/overview))
5. Hantar analisis melalui e-mel atau Slack
6. (Pilihan) Tambah langkah pembaikan automatik

**Uji:**
- Cucu secara sengaja trafik tinggi atau ralat pada aplikasi yang dipantau
- Sahkan ejen mengesan anomali, menganalisis punca_root_, dan mengambil tindakan

---

## 🧪 Uji Pengetahuan Anda

Gunakan prompt ini untuk menguji kefahaman anda:

1. Apakah perbezaan antara pemantauan dan kebolehcerapan?
2. Bagaimanakah Prometheus mengumpul metrik dari aplikasi?
3. Apakah PromQL dan bagaimanakah ia digunakan dalam papan pemuka Grafana?
4. Bagaimanakah anda akan menyediakan pemberitahuan untuk penggunaan CPU yang tinggi menggunakan Prometheus?
5. Apakah pengeksport dalam konteks Prometheus?
6. Bagaimanakah anda menambah sumber data baharu di Grafana?
7. Apakah amalan terbaik untuk reka bentuk papan pemuka?
8. Apakah komponen utama seni bina ejen AI?
9. Bagaimanakah LLM membantu ejen membuat keputusan?

---

## Sumber

- [Dokumentasi Prometheus](https://prometheus.io/docs/)
- [Dokumentasi Grafana](https://grafana.com/docs/)
- [Pemantauan Aplikasi Node.js dengan Prometheus & Grafana](https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana)
- [Pemantauan Aplikasi Python dengan Prometheus & Grafana](https://dev.to/ken_mwaura1/getting-started-monitoring-a-fastapi-app-with-grafana-and-prometheus-a-step-by-step-guide-3fbn)
- [Pemberitahuan Prometheus-hebat](https://samber.github.io/awesome-prometheus-alerts/)
- [Dokumentasi n8n](https://docs.n8n.io/)
- [Hos n8n sendiri](https://docs.n8n.io/hosting/installation/docker/#starting-n8n)

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep pemantauan vs kebolehcerapan
- [ ] Menyediakan Prometheus dengan konfigurasi asas
- [ ] Menggunakan Grafana dan disambungkan ke Prometheus
- [ ] Mencipta papan pemuka dengan pertanyaan PromQL
- [ ] Menginstrumenkan aplikasi contoh dengan metrik
- [ ] Membina ejen AI dengan n8n untuk tindak balas automatik
- [ ] Menguji pengesanan dan pemberitahuan ejen
