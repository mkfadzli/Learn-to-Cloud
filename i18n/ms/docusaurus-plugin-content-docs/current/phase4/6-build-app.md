# Topik 6: Projek Capstone DevOps

> ⏱️ **Anggaran masa:** 1 minggu

Sekarang anda telah mempelajari asas DevOps, masanya untuk mengamalkan amalan ini pada aplikasi Journal API yang anda bina dalam Fasa 2 dan gunakan dalam Fasa 3. Dalam capstone ini, anda akan mengkontenakan aplikasi, mengautomasikan penggunaannya, menguruskan infrastruktur sebagai kod, menyediakan pemantauan dan kebolehcerapan, serta mengorkestrakan kontena dengan Kubernetes — menunjukkan kemahiran DevOps hujung ke hujung anda.

---

## 📚 Laluan Pembelajaran

### Langkah Capstone

1. **Kontenakan Aplikasi**

    - Tulis `Dockerfile` untuk aplikasi FastAPI anda.
    - Bina dan jalankan kontena secara tempatan untuk mengesahkan ia berfungsi.
    - Pastikan kelayakan API LLM dihantar melalui pembolehubah persekitaran (bukan dibina ke dalam imej).
    - Tolak imej anda ke registrasi kontena (DockerHub, AWS ECR, Azure ACR, atau GCP GCR).

2. **Infrastruktur sebagai Kod**

    - Gunakan Terraform (atau alatan IaC lain) untuk mentakrif dan memperuntukkan:
        - Sumber pengkomputeran (perkhidmatan kontena)
        - Rangkaian (VPC, subnet, kumpulan keselamatan)
        - Pangkalan data (PostgreSQL, seperti dalam fasa sebelumnya)
    - Simpan kod IaC anda dalam kawalan versi.

3. **Talian Paip CI/CD**

    - Sediakan talian paip CI/CD (contoh: GitHub Actions, Azure DevOps, atau Jenkins) untuk:
        - Bina dan uji aplikasi anda pada setiap commit
        - Bina dan tolak imej Docker anda
        - Gunakan aplikasi anda secara automatik ke persekitaran cloud anda

4. **Orkestrasi Kontena dengan Kubernetes**

    - Tulis manifes Kubernetes (`Deployment`, `Service`, `ConfigMap`/`Secret`) untuk aplikasi dan pangkalan data anda.
    - Simpan kunci API LLM anda dalam Kubernetes `Secret` dan lekapkannya sebagai pembolehubah persekitaran.
    - Gunakan aplikasi dan pangkalan data anda ke kluster Kubernetes tempatan (Minikube/Kind) atau perkhidmatan terurus (EKS, AKS, GKE).
    - Dedahkan aplikasi FastAPI anda menggunakan Kubernetes `Service` (NodePort atau LoadBalancer).
    - (Pilihan) Gunakan Helm untuk membungkus dan menggunakan aplikasi anda.

5. **Pemantauan & Kebolehcerapan**

    - Gunakan Prometheus dan Grafana (menggunakan Docker atau manifes Kubernetes).
    - Instrumentasikan aplikasi FastAPI anda untuk mendedahkan metrik (contoh: menggunakan `prometheus_client` untuk Python).
    - Jejak panggilan API LLM: kelewatan, kadar ralat, dan penggunaan token untuk titik akhir `/analyze`.
    - Konfigurasi Prometheus untuk mengikis titik akhir metrik aplikasi anda.
    - Cipta papan pemuka Grafana untuk memaparkan metrik utama (contoh: bilangan permintaan, kadar ralat, kelewatan, prestasi API LLM).

6. **Dokumentasi**

    - Dokumentasikan proses persediaan dan penggunaan anda dalam `README.md`.
    - Sertakan gambar rajah atau tangkapan skrin talian paip CI/CD, setup Kubernetes, dan papan pemuka pemantauan anda.

---

## Struktur Projek Contoh

```
/journal-app
  /infra                # Konfigurasi Terraform atau IaC
  /k8s                  # Manifes Kubernetes (deployment, service, dll.)
  /app                  # Kod aplikasi FastAPI
  Dockerfile
  .github/workflows/    # Konfigurasi talian paip CI/CD
  README.md
```

---

## Pengujian & Pengesahan

- Buat perubahan kod dan tolak ke repo anda — sahkan talian paip membina, menguji, dan menggunakan aplikasi.
- Akses aplikasi yang digunakan dan sahkan ia berfungsi dengan pangkalan data.
- Lawati Grafana dan sahkan anda melihat metrik langsung dari aplikasi anda.
- Gunakan `kubectl` untuk mengesahkan aplikasi dan pangkalan data anda berjalan dalam kluster.

---

## Senarai Semak Kemahiran

- [ ] Dockerfile dan pemkontaineran
- [ ] Infrastruktur sebagai Kod (Terraform)
- [ ] Penyediaan talian paip CI/CD
- [ ] Manifes dan penggunaan Kubernetes
- [ ] Pemantauan dan kebolehcerapan (Prometheus + Grafana)
- [ ] Dokumentasi

---

## Langkah Seterusnya

Setelah anda menyelesaikan capstone ini, anda akan menunjukkan kemahiran DevOps praktikal dengan mengambil aplikasi dari kod ke pengeluaran dengan automasi, infrastruktur sebagai kod, orkestrasi kontena, dan pemantauan. Ini memberikan anda projek yang kukuh di bawah portfolio anda untuk ditunjukkan bagi permohonan kerja dan dibincangkan semasa temu duga!
