# Topik 3: FastAPI

> ⏱️ **Anggaran masa:** 3-4 hari

FastAPI ialah framework web moden, pantas (berprestasi tinggi) untuk membina API dengan Python 3.6+ berdasarkan type hint standard Python. Ia adalah framework yang kami gunakan untuk membina aplikasi L2C Journal dan apa yang akan anda gunakan juga.

---

## 📚 Laluan Pembelajaran

**Kaji:** [Tutorial rasmi FastAPI](https://fastapi.tiangolo.com/tutorial/) oleh FastAPI

---

## 🧪 Menguji Aplikasi FastAPI

Anda telah mempelajari asas pytest dalam Python Crash Course—kini mari kita gunakan untuk menguji API! Dalam projek capstone, anda akan menjalankan suite ujian komprehensif untuk mengesahkan pelaksanaan anda berfungsi dengan betul.

**Kaji:** [Tutorial Pengujian FastAPI](https://fastapi.tiangolo.com/tutorial/testing/) - Pelajari asas-asas menguji aplikasi FastAPI.

**Kaji:** [Dokumen httpx AsyncClient](https://www.python-httpx.org/async/) - Capstone menggunakan ujian async dengan `httpx.AsyncClient` untuk prestasi yang lebih baik.

Konsep utama yang perlu difahami:
- Menggunakan `httpx.AsyncClient` untuk menguji endpoint API async
- **Fixture dalam `conftest.py`** - Persediaan ujian berkongsi (test client, data sampel, pembersihan pangkalan data)
- Menguji pelbagai method HTTP (GET, POST, PATCH, DELETE)
- Menyemak status code respons dan kandungan JSON
- Menguji pengesahan model Pydantic (contohnya, menggunakan `pytest.raises(ValidationError)`)
- Menggunakan `pytest.skip()` untuk melangkau ujian bagi ciri yang belum dilaksanakan

### Menjalankan Ujian

Dalam projek capstone, anda akan menjalankan ujian dengan:
```bash
pytest
```

Untuk menjalankan fail ujian tertentu:
```bash
pytest tests/test_api.py
pytest tests/test_models.py
```

---

## 🧪 Uji Pengetahuan Anda

Uji pengetahuan anda dengan pembantu AI menggunakan prompt ini:

1. Bolehkah anda meminta saya jelaskan apa itu FastAPI dan bagaimana ia berfungsi?
2. Bolehkah anda kuiz saya tentang cara mencipta aplikasi FastAPI dan mentakrifkan endpoint?
3. Bolehkah anda meminta saya jelaskan cara mengendalikan model request dan response dalam FastAPI?
4. Bolehkah anda meminta saya jelaskan cara menggunakan path parameter dan query parameter dalam FastAPI?
5. Bolehkah anda kuiz saya tentang cara menggunakan dependency injection dalam FastAPI?
6. Bolehkah anda meminta saya jelaskan cara menggunakan model Pydantic dalam FastAPI?
7. Bolehkah anda meminta saya jelaskan cara menggunakan FastAPI dengan kod asynchronous?
8. Bolehkah anda kuiz saya tentang cara fixture pytest berfungsi dan apakah fungsi `conftest.py`?
9. Bolehkah anda meminta saya cara menguji bahawa model Pydantic mengeluarkan ValidationError untuk data tidak sah?

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda boleh menjawab "ya" untuk perkara-perkara ini:

- [ ] Saya boleh mencipta aplikasi FastAPI dengan endpoint asas
- [ ] Saya faham path parameter dan query parameter
- [ ] Saya boleh menggunakan model Pydantic untuk pengesahan request/response
- [ ] Saya faham dokumentasi automatik FastAPI (Swagger UI)
- [ ] Saya faham cara fixture pytest dan `conftest.py` berfungsi
- [ ] Saya boleh menjalankan ujian dengan `pytest` dan mentafsir hasilnya
