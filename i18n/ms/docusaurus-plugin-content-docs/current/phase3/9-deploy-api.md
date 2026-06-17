# Topik 9: Projek Capstone Deployment Cloud

> ⏱️ **Anggaran masa:** 1 minggu

Deploy Journal API anda dari Capstone Fasa 2 ke seni bina cloud 2-tier yang selamat. Capstone ini mencabar anda untuk mengkaji, merekabentuk, dan melaksanakan persekitaran yang sedia untuk pengeluaran dengan rangkaian dan keselamatan yang betul.

---

## 📚 Laluan Pembelajaran

### Gambaran Keselamatan Cabaran

Cipta seni bina 2-tier yang selamat:
- **Tier 1**: Pelayan aplikasi FastAPI (boleh diakses dari internet)
- **Tier 2**: Pelayan pangkalan data PostgreSQL (persendirian, selamat)

## Objektif Pembelajaran

- Rekabentuk rangkaian cloud yang selamat dengan subnet awam/persendirian
- Laksanakan security group mengikuti prinsip keistimewaan terkecil
- Konfigurasi akses pangkalan data jarak jauh dengan selamat
- Deploy aplikasi multi-tier yang sedia untuk pengeluaran

## Prasyarat

- Menyiapkan Capstone Fasa 2 (Journal API dengan analisis AI berfungsi secara lokal)
- Akaun penyedia cloud dengan keizinan yang sesuai
- Pasangan kunci SSH untuk akses pelayan
- Kunci API LLM dari penyedia pilihan anda (OpenAI, Anthropic, Azure OpenAI, AWS Bedrock, atau GCP Vertex AI)

## Misi Anda

### 1. Rekabentuk Seni Bina Anda

Kaji dan rancang infrastruktur cloud anda:
- Bagaimanakah anda akan memisahkan sumber awam dan persendirian?
- Apakah komponen rangkaian yang anda perlukan?
- Bagaimanakah anda akan mengamankan komunikasi antara tier?

### 2. Deploy Pelayan API

Sediakan pelayan aplikasi anda di tier awam:
- Pilih sumber pengkomputeran yang sesuai
- Deploy aplikasi Journal API anda
- Konfigurasi akses dan rangkaian yang selamat

### 3. Deploy Pelayan Pangkalan Data

Sediakan PostgreSQL di tier persendirian:
- Pastikan ia tidak boleh diakses secara langsung dari internet
- Konfigurasi ia untuk menerima sambungan dari pelayan API anda
- Laksanakan langkah keselamatan yang sesuai

### 4. Uji Deployment Anda

Sahkan seni bina anda:
- Semua endpoint API berfungsi dengan betul
- Pangkalan data dilindungi dengan baik
- Data kekal antara restart

## Kriteria Kejayaan

Deployment anda berjaya apabila anda boleh menunjukkan:

- ✅ API boleh diakses dari internet
- ✅ Pangkalan data hanya boleh diakses dari pelayan API (bukan internet)
- ✅ Semua operasi CRUD berfungsi melalui endpoint API
- ✅ Endpoint analisis AI mengembalikan sentimen dan ringkasan
- ✅ Kunci API LLM disimpan dengan selamat (pemboleh ubah persekitaran, bukan dalam kod)
- ✅ Data kekal antara restart pelayan
- ✅ Keselamatan mengikuti prinsip keistimewaan terkecil

## Dokumentasikan Pembelajaran Anda

Cipta laporan teknikal yang merangkumi:
- Rekabentuk seni bina anda dan pemikiran di sebaliknya
- Keputusan keselamatan dan trade-off
- Cabaran yang dihadapi dan penyelesaiannya
- Pembelajaran utama tentang deployment cloud

Kongsikan perkembangan anda di [Perbincangan](https://github.com/learntocloud/learn-to-cloud-app/discussions)!

## Ingat

Ini adalah tentang memahami corak cloud, bukan mengikuti resipi. Kaji, bereksperimen, dan belajar daripada perjalanan. Setiap penyedia cloud mempunyai alat yang berbeza - cari apa yang paling sesuai untuk platform pilihan anda.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Merekabentuk seni bina 2-tier yang selamat
- [ ] Deploy pelayan API di tier awam
- [ ] Deploy PostgreSQL di tier persendirian
- [ ] Pangkalan data hanya boleh diakses dari pelayan API
- [ ] Semua operasi CRUD berfungsi melalui API
- [ ] Endpoint analisis AI mengembalikan keputusan
- [ ] Kunci API LLM disimpan dengan selamat
- [ ] Data kekal antara restart
- [ ] Keselamatan mengikuti prinsip keistimewaan terkecil
- [ ] Mencipta dokumentasi teknikal deployment anda
