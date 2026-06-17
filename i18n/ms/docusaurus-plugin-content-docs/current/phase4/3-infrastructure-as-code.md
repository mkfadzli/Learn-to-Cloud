# Topik 3: Infrastruktur sebagai Kod (IaC)

> ⏱️ **Anggaran masa:** 3-4 hari

Infrastruktur sebagai Kod (IaC) adalah amalan DevOps utama yang membolehkan anda mengurus dan memperuntukkan infrastruktur menggunakan kod, bukannya proses manual, seperti menggunakan konsol. Ia memastikan konsistensi, kebolehan berulang, dan kebolehskalaan dalam menguruskan sumber cloud.

---

## 📚 Laluan Pembelajaran

### Kajian

- Apakah [Infrastruktur sebagai Kod](https://www.hashicorp.com/resources/what-is-infrastructure-as-code)?
- Memandangkan Terraform adalah tidak bergantung pada platform cloud tertentu (bermaksud anda boleh menggunakan sumber ke mana-mana pembekal cloud), ia sangat popular. Oleh itu, kami mengesyorkan [Terraform](https://developer.hashicorp.com/terraform/intro).
- Pelajari asas Terraform:
  - [Terraform init](https://developer.hashicorp.com/terraform/cli/commands/init)
  - [Terraform plan](https://developer.hashicorp.com/terraform/cli/commands/plan)
  - [Terraform apply](https://developer.hashicorp.com/terraform/cli/commands/apply)
  - [Terraform destroy](https://developer.hashicorp.com/terraform/cli/commands/destroy)
- Teroka pembekal Terraform khusus cloud:
  - [Pembekal AWS](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
  - [Pembekal Azure](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
  - [Pembekal GCP](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

---

## 🛠️ Tugas Praktikal

### Projek IaC Asas

1. Pasang Terraform pada sistem anda:
   - [Pasang Terraform](https://developer.hashicorp.com/terraform/install)
2. Tulis fail konfigurasi Terraform untuk:
   - Cipta mesin maya di platform cloud pilihan anda.
   - Konfigurasi kumpulan keselamatan untuk membenarkan akses SSH.
   - Atau gunakan tapak statik ke pembekal cloud pilihan anda.
3. Pelajari cara menggunakannya dengan Terraform:
   - Jalankan `terraform init` untuk menyediakan direktori kerja.
   - Jalankan `terraform plan` untuk pratonton perubahan.
   - Jalankan `terraform apply` untuk mencipta sumber.
5. Sahkan sumber di platform cloud anda.
6. Musnahkan sumber:
   - Jalankan `terraform destroy` untuk pembersihan.

### Cabaran Lanjutan (Pilihan) - Reka Bentuk Modular Terraform dengan GitHub Copilot

Gunakan apa yang anda pelajari dalam Fasa 2 - Berkolaborasi dengan GitHub Copilot untuk mereka bentuk konfigurasi Terraform modular yang menyokong aplikasi berbilang tingkat:

1. Susun infrastruktur anda ke dalam modul yang boleh digunakan semula.
   - VPC — subnet awam dan peribadi, laluan routing
   - Tingkat pelayan web — pengkomputeran, imbangan beban
   - Tingkat pangkalan data - pangkalan data terurus, konfigurasi sandaran
   - Keselamatan - kumpulan keselamatan, peranan IAM, enkripsi
2. Gunakan pembolehubah untuk memparametrakan konfigurasi anda.
3. Cipta output modul untuk komunikasi antara modul.
4. Laksanakan pengurusan status backend.
5. Gunakan dan sahkan sumber anda.
6. Musnahkan sumber apabila selesai.

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda tentang konsep IaC. Berikut adalah beberapa contoh prompt:

1. Apakah manfaat menggunakan Infrastruktur sebagai Kod?
2. Bagaimanakah Terraform memastikan idempotensi dalam pengurusan sumber?
3. Apakah tujuan fail `terraform state`?
4. Bagaimanakah anda menguruskan data sensitif seperti kunci API dalam Terraform?
5. Apakah perbezaan antara `terraform plan` dan `terraform apply`?
6. Apakah modul terraform dan mengapa/bagaimanakah anda perlu menggunakannya?
7. Apakah amalan terbaik untuk terraform?
8. Apakah manfaat menggunakan pembantu penjanaan kod untuk menjana templat IaC?
9. Bagaimanakah anda memastikan kualiti dan keselamatan apabilausing IaC yang dijana AI?

## Sumber

- [Dokumentasi Terraform](https://developer.hashicorp.com/terraform/docs)
- [Amalan Terbaik Terraform](https://www.terraform-best-practices.com/)
- [Contoh AWS Terraform](https://youtu.be/P4A62b1dkJE?si=-Lsed7_wyvbXv0RI)
- [Contoh Azure Terraform](https://youtu.be/HdMB2YCtVr4?si=zRkEGPLy7zhRKPAX)
- [Contoh GCP Terraform](https://youtu.be/VCayKl82Lt8?si=wWZ5DuabFPaZEDsY)

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep Infrastruktur sebagai Kod
- [ ] Memasang Terraform pada sistem anda
- [ ] Mempelajari arahan asas Terraform (init, plan, apply, destroy)
- [ ] Menulis konfigurasi Terraform untuk VM atau tapak statik
- [ ] Menggunakan dan mengesahkan sumber di platform cloud anda
- [ ] Memusnahkan sumber untuk pembersihan
- [ ] (Pilihan) Mencipta reka bentuk modular Terraform dengan GitHub Copilot
