# Topik 5: API Generative AI

> ⏱️ **Anggaran masa:** 4-5 hari

Generative AI dan Large Language Models (LLMs) sedang mengubah cara kita membina aplikasi. Dalam topik ini, anda akan mempelajari cara mengintegrasikan API LLM ke dalam aplikasi Python anda. Kemahiran ini penting untuk kejuruteraan cloud moden kerana perkhidmatan AI semakin menjadi komponen teras platform cloud.

---

## 📚 Laluan Pembelajaran

### Memahami Asas API LLM

Sebelum mengod, fahami konsep teras ini:

1. **Format mesej**: LLM berfungsi dengan input bergaya perbualan
   - Mesej sistem: Menetapkan tingkah laku/personaliti
   - Mesej pengguna: Prompt/soalan anda
   - Mesej assistant: Respons AI

2. **Completions**: API menjana teks berdasarkan input anda

3. **Parameter**:
   - `temperature`: Mengawal rawak (0 = deterministik, 1 = kreatif)
   - `max_tokens`: Menghadkan panjang respons
   - `model`: Versi LLM yang mana untuk digunakan

4. **Output berstruktur**: Mendapatkan JSON dan bukan teks bebas

## Pembelajaran Hands-On: Demo OpenAI Python

Sebelum menyediakan sumber cloud, mulakan dengan latihan hands-on percuma menggunakan GitHub Models:

**Sumber:** [Python OpenAI Demos](https://aka.ms/python-openai-demos) ([Video Walkthrough](https://www.youtube.com/watch?v=_daw48A-RZI))

Repository ini mengajar anda OpenAI Python SDK melalui contoh yang semakin kompleks—SDK yang sama yang digunakan oleh Azure OpenAI. Anda boleh menjalankannya **sepenuhnya percuma** menggunakan GitHub Models dalam GitHub Codespaces.

**Tindakan:** Kerja melalui contoh ini mengikut urutan:

1. **Chat Completions** - Mulakan dengan `chat.py`, kemudian cuba `chat_stream.py` dan `chat_history.py`
2. **Structured Outputs** - Pelajari cara mendapatkan respons JSON dengan `structured_outputs_basic.py`
3. **Function Calling** - Lihat bagaimana LLM boleh memanggil kod anda dengan `function_calling_basic.py`

**Mengapa mulakan di sini?**
- ✅ Percuma (menggunakan GitHub Models, tidak perlu kad kredit)
- ✅ Berfungsi dalam pelayar (GitHub Codespaces)
- ✅ SDK yang sama yang akan anda gunakan dengan Azure OpenAI
- ✅ Membina kemahiran secara berperingkat

### Siri Video: Python + AI

Untuk pembelajaran lebih mendalam, lihat video ini dari **siri livestream Python + AI** ([Semua Sumber](https://aka.ms/pythonai/resources)):

| Topik | Slaid | Video |
|-------|--------|-------|
| LLM | [Slaid](https://aka.ms/pythonai/slides/llms) | [Tonton](https://aka.ms/PythonAI107-f) |
| Structured Outputs | [Slaid](https://aka.ms/pythonai/slides/structuredoutputs) | [Tonton](https://aka.ms/PythonAI1015-f) |

> **Pilihan:** Siri penuh merangkumi 9 topik termasuk RAG, AI Agents, dan lain-lain. Tonton semuanya jika anda mahu pemahaman mendalam tentang Python + AI.

## Memilih Penyedia Cloud Anda

Setelah anda selesai dengan demo di atas, aplikasikan kemahiran anda ke perkhidmatan AI penyedia cloud anda. Ini mengajar anda kemahiran khusus cloud seperti IAM, pengurusan sumber, dan pengebilan.

- **Azure OpenAI** - Jika anda memberi tumpuan kepada Azure (diakses melalui Azure AI Foundry)
- **AWS Bedrock** - Jika anda memberi tumpuan kepada AWS (menyokong Claude, Llama, dan model lain)
- **GCP Vertex AI** - Jika anda memberi tumpuan kepada Google Cloud (menyokong Gemini dan model lain)

**Tindakan:** Pilih penyedia yang sepadan dengan fokus cloud anda.

## Latihan Playground Penyedia

**PENTING:** Uji dalam playground SEBELUM menulis kod.

### Azure OpenAI
- Kaji: [Azure OpenAI Chat Completions Quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart)
- Tindakan: [Cipta resource Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/create-resource)
- Tindakan: [Gunakan Azure AI Foundry Chat playground](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?pivots=programming-language-studio)

### AWS Bedrock
- Kaji: [AWS Bedrock Getting Started](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html)
- Tindakan: [Gunakan AWS Bedrock Playground](https://docs.aws.amazon.com/bedrock/latest/userguide/playgrounds.html)
- Tindakan: Aktifkan akses model untuk model Claude atau Llama di rantau anda

### GCP Vertex AI
- Kaji: [Vertex AI Generative AI Overview](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview)
- Tindakan: [Gunakan Vertex AI Studio](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-text)
- Tindakan: Uji prompt dalam antara muka prompt teks Vertex AI Studio

## Latihan Playground

Dalam playground penyedia pilihan anda, uji prompt ini:

1. **Completion mudah**:
   ```
   Analisis sentimen teks ini: "I learned so much about Python today!"
   ```

2. **Output berstruktur**:
   ```
   Analisis sentimen entri jurnal ini dan balas dalam format JSON dengan medan: sentiment (positive/negative/neutral) dan summary (maksimum 2 ayat).

   Entri jurnal: "Today I struggled with async Python but finally got it working after 3 hours."
   ```

3. **Ujian mesej sistem**: Tambah mesej sistem:
   ```
   System: You are a helpful learning coach who analyzes student journal entries.
   User: Analyze this entry: "I'm frustrated with databases but making progress."
   ```

Ambil screenshot respons yang berjaya. Anda akan replikasi ini dalam kod seterusnya.

## Integrasi Python SDK

Kini laksanakan prompt yang sama dalam Python.

### Azure OpenAI SDK
- Tindakan: [Azure OpenAI Python Quickstart](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?pivots=programming-language-python)
- Pasang: `pip install openai`

### AWS Bedrock SDK
- Tindakan: [AWS Bedrock Python SDK Examples](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started-api.html)
- Pasang: `pip install boto3`

### GCP Vertex AI SDK
- Tindakan: [Vertex AI Python SDK Quickstart](https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal)
- Pasang: `pip install google-cloud-aiplatform`

## Konsep Utama untuk Dipelajari

Kerjakan melalui dokumentasi Python penyedia pilihan anda dan pastikan anda faham:

1. **Autentikasi**: API key, service principal, atau IAM role
2. **Membuat request**: Menghantar mesej ke LLM
3. **Mengendalikan respons**: Menganalisis teks completion
4. **Pengendalian ralat**: Had kadar (rate limit), masa tamat (timeout), request tidak sah
5. **Pemboleh ubah persekitaran**: Menyimpan API key dengan selamat (JANGAN commit key ke git!)
6. **Sokongan async**: Menggunakan async/await dengan API LLM

## Latihan Praktikal

Cipta skrip Python mudah `llm_test.py` yang:

1. Memuatkan kelayakan API dari pemboleh ubah persekitaran
2. Menghantar teks entri jurnal ke LLM pilihan anda
3. Meminta analisis sentimen (positive/negative/neutral)
4. Meminta ringkasan 2 ayat
5. Mencetak hasil dalam format yang kemas

Contoh entri jurnal untuk diuji:
```
"Today I learned about FastAPI and built my first endpoint. The automatic documentation is amazing! I struggled a bit with async functions but the official tutorial helped. Tomorrow I'll tackle database integration."
```

## Kesedaran Kos

API LLM adalah bayar-mengikut-penggunaan. Kos biasa untuk fasa ini:
- ~$0.50 - $3.00 untuk menguji dan menyelesaikan capstone
- Token dicas untuk kedua-dua input (prompt) dan output (respons)
- Prompt yang lebih panjang = kos lebih tinggi
- Model yang lebih besar (GPT-4o, Claude Sonnet) = kos lebih tinggi daripada model yang lebih kecil (GPT-4o-mini, Claude Haiku)

**Tip:** Gunakan model yang lebih kecil dan pantas untuk pembangunan dan pengujian. Tukar ke model yang lebih besar hanya apabila diperlukan.

---

## 🧪 Uji Pengetahuan Anda

Setelah anda selesai dengan tutorial, uji pengetahuan anda dengan pembantu AI. Berikut adalah beberapa contoh prompt:

1. Bolehkah anda jelaskan apa itu API LLM dan bagaimana ia berbeza daripada REST API tradisional?
2. Bolehkah anda jelaskan peranan mesej sistem, mesej pengguna, dan mesej assistant?
3. Bolehkah anda kuiz saya tentang apa yang dikawal oleh parameter temperature dalam API LLM?
4. Bolehkah anda jelaskan cara menyimpan API key dengan selamat dalam aplikasi Python?
5. Bolehkah anda meminta saya jelaskan perbezaan antara panggilan API LLM serentak dan tak serentak?
6. Bolehkah anda kuiz saya tentang cara mengendalikan ralat dan had kadar semasa memanggil API LLM?
7. Bolehkah anda jelaskan cara mendapatkan output JSON berstruktur dari LLM dan bukan teks biasa?

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Menyiapkan latihan Python OpenAI Demos
- [ ] Menguji prompt dalam playground penyedia cloud anda (Azure AI Foundry, AWS Bedrock, atau Vertex AI)
- [ ] Memahami format mesej (sistem, pengguna, assistant)
- [ ] Berlatih dengan output berstruktur (respons JSON)
- [ ] Mencipta skrip Python yang memanggil API LLM
- [ ] Menyimpan API key dengan selamat dalam pemboleh ubah persekitaran
- [ ] Memahami kesedaran kos dan harga token
