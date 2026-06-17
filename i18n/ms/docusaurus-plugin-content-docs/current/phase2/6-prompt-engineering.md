# Topik 6: Kejuruteraan Prompt

> ⏱️ **Anggaran masa:** 2-3 hari

Kejuruteraan prompt adalah seni dan sains membina arahan yang berkesan untuk Large Language Models (LLMs). Prompt yang baik boleh meningkatkan kualiti, ketepatan, dan kegunaan output LLM dengan ketara. Kemahiran ini penting untuk mengintegrasikan AI ke dalam aplikasi dengan berkesan.

---

## 📚 Laluan Pembelajaran

### Apa itu Kejuruteraan Prompt?

Kejuruteraan prompt adalah merekabentuk input (prompt) yang membimbing LLM untuk menghasilkan output yang diingini. Berbeza dengan pengaturcaraan tradisional di mana anda menulis logik yang jelas, dengan LLM anda menerangkan apa yang anda mahukan dalam bahasa semulajadi.

**Contoh prompting tidak baik vs baik:**

❌ **Tidak baik**: "Analyze this"
✅ **Baik**: "Analyze the sentiment of this student's journal entry. Classify it as positive, negative, or neutral, and explain why in 2 sentences."

## Prinsip Teras

### 1. Jelas dan Spesifik

Prompt yang kabur menghasilkan keputusan yang kabur.

❌ **Kabur**: "Tell me about this journal entry"
✅ **Spesifik**: "Identify 3 key learning topics mentioned in this journal entry"

### 2. Berikan Konteks dan Peranan

Berikan LLM konteks tentang peranan dan tugasnya.

```
System: You are an experienced software engineering mentor analyzing student learning journals.

User: This student wrote: "I spent 4 hours debugging a SQL query today. Finally found the issue - a missing JOIN."

What learning patterns do you observe?
```

### 3. Gunakan Contoh (Few-Shot Prompting)

Tunjukkan LLM contoh apa yang anda mahukan.

```
Analyze these journal entries for sentiment:

Example 1:
Entry: "Python is so frustrating, nothing works!"
Sentiment: negative
Reason: Expresses frustration and defeat

Example 2:
Entry: "Finally got my API working! So satisfying."
Sentiment: positive
Reason: Expresses accomplishment and satisfaction

Now analyze this entry:
Entry: "Learned about async/await today. Still confused but making progress."
Sentiment: ?
```

### 4. Nyatakan Format Output

Beritahu LLM dengan tepat bagaimana untuk menstruktur responsnya.

```
Analyze this journal entry and respond in this JSON format:
{
  "sentiment": "positive" | "negative" | "neutral",
  "confidence": 0-100,
  "key_topics": ["topic1", "topic2"],
  "summary": "2 sentence summary"
}

Entry: "Today I deployed my first FastAPI app to the cloud!"
```

### 5. Kawal Kreativiti dengan Temperature

- **Temperature rendah (0.0 - 0.3)**: Deterministik, fokus, konsisten
  - Gunakan untuk: Klasifikasi, ekstraksi data berstruktur, analisis fakta

- **Temperature sederhana (0.4 - 0.7)**: Kreativiti dan keseimbangan yang seimbang
  - Gunakan untuk: Ringkasan, penjelasan, tugas umum

- **Temperature tinggi (0.8 - 1.0)**: Kreatif, pelbagai, penerokaan
  - Gunakan untuk: Sumbang saran, penulisan kreatif, cadangan pelbagai

## Corak Praktikal untuk Journal API

### Corak 1: Analisis Sentimen

```
System: You are a sentiment analyzer for student learning journals.

User: Classify the sentiment of this journal entry as positive, negative, or neutral. Be objective.

Entry: "{journal_text}"

Respond only with: positive, negative, or neutral
```

### Corak 2: Penjanaan Ringkasan

```
System: You are a learning coach who writes concise summaries.

User: Summarize this journal entry in exactly 2 sentences. Focus on what the student learned and any challenges they faced.

Entry: "{journal_text}"
```

### Corak 3: Ekstraksi Topik Utama

```
System: You are a learning analytics assistant.

User: Extract 3-5 key topics or technologies mentioned in this journal entry. Respond as a JSON array of strings.

Entry: "{journal_text}"

Example format: ["Python", "FastAPI", "databases"]
```

### Corak 4: Analisis Corak Pembelajaran

```
System: You are an experienced educator analyzing learning patterns.

User: Based on this journal entry, identify:
1. Primary learning focus
2. Challenges encountered
3. One recommendation for the student

Entry: "{journal_text}"

Format your response as JSON.
```

## Aliran Kerja Pengujian Prompt

Gunakan aliran kerja ini semasa membangunkan prompt:

1. **Mula di playground**: Uji prompt dalam antara muka web penyedia anda
2. **Ulang dengan cepat**: Cuba variasi, laraskan perkataan, tambah contoh
3. **Uji kes tepi**: Entri yang sangat pendek, sangat panjang, tidak jelas
4. **Ukur kualiti**: Adakah output konsisten? Tepat? Berguna?
5. **Laksanakan dalam kod**: Setelah stabil, pindahkan ke Python
6. **Pantau dalam pengeluaran**: Jejak kegagalan dan output yang tidak dijangka

## Latihan: Bangunkan Prompt Analisis Anda

Dalam playground penyedia pilihan anda, cipta prompt yang:

1. Mengambil entri jurnal sebagai input
2. Mengembalikan JSON dengan medan ini:
   - `sentiment`: positive/negative/neutral
   - `summary`: ringkasan 2 ayat
   - `topics`: array 2-4 topik utama yang disebut
   - `struggle_detected`: boolean (true jika pelajar menyatakan kesukaran)

Uji dengan entri sampel ini:

**Entri 1:**
```
"Today was amazing! I built my first REST API with FastAPI and all the endpoints work. The automatic documentation feature is so cool. Can't wait to deploy this to the cloud tomorrow."
```

**Entri 2:**
```
"Spent 5 hours trying to fix a bug in my database connection. Turns out I had the wrong port number in my .env file. Feeling frustrated but at least I learned about environment variables."
```

**Entri 3:**
```
"Continued learning Python today. Worked through the functions chapter."
```

Prompt anda sepatutnya mengendalikan ketiga-tiga kes dengan baik.

## Teknik Lanjutan

### Chain of Thought

Minta LLM menjelaskan proses pemikiran:

```
Analyze this journal entry step by step:

1. First, identify the main topic
2. Then, determine the sentiment
3. Finally, assess if the student is making progress

Entry: "{journal_text}"
```

### Tetapan Keterhad

Tetapkan sempadan yang jelas:

```
Summarize this journal entry. Rules:
- Maximum 2 sentences
- Use simple language
- Focus only on what was learned, not emotions
- Do not make assumptions beyond what's written

Entry: "{journal_text}"
```

### Gunakan Penanda Batas

Pisahkan bahagian berbeza prompt anda dengan jelas menggunakan penanda batas seperti tiga backtick, tag XML, atau sengkang. Ini amat penting semasa mengendalikan input pengguna:

```
Analyze the sentiment of the journal entry below.

---BEGIN ENTRY---
{journal_text}
---END ENTRY---

Respond with: positive, negative, or neutral
```

Penanda batas membantu mencegah *prompt injection* di mana input pengguna yang berniat jahat boleh mengatasi arahan anda.

### Berikan Model "Jalan Keluar"

Berikan fallback apabila model tidak dapat melengkapkan tugas. Ini mengurangkan halusinasi:

```
Extract the programming language mentioned in this journal entry.
If no specific programming language is mentioned, respond with "none detected".

Entry: "{journal_text}"
```

### Urutan Penting (Bias Keakhiran)

Model memberikan lebih perhatian kepada kandungan di bahagian awal dan akhir prompt. Letakkan arahan kritikal di kedua-dua lokasi:

```
IMPORTANT: Respond only in JSON format.

Analyze this journal entry for learning topics:
"{journal_text}"

Remember: Your response must be valid JSON only.
```

### Output Priming

Mulakan respons untuk model bagi membimbing formatnya:

```
Analyze this journal entry and list the key topics.

Entry: "Today I learned about Docker containers and wrote my first Dockerfile."

Key topics:
1.
```

Model akan menyambung dari tempat anda berhenti, memastikan format yang betul.

## Kesilapan Umum

❌ **Terlalu banyak prompt**: Terlalu banyak arahan boleh mengelirukan model
❌ **Kurang terperinci**: Terlalu kabur membawa kepada keputusan yang tidak konsisten
❌ **Mengabaikan panjang konteks**: Prompt yang sangat panjang kos lebih tinggi dan mungkin dipangkas
❌ **Tidak menguji variasi**: Percubaan prompt pertama jarang optimum
❌ **Risiko halusinasi**: LLM mungkin mencipta butiran yang tidak ada dalam input

## Sumber

- Kaji: [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- Kaji: [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- Kaji: [Azure OpenAI Prompt Engineering](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)

---

## 🧪 Uji Pengetahuan Anda

Setelah anda selesai dengan tutorial, uji pengetahuan anda dengan pembantu AI. Berikut adalah beberapa contoh prompt:

1. Bolehkah anda jelaskan apa itu kejuruteraan prompt dan mengapa ia penting?
2. Bolehkah anda kuiz saya tentang perbezaan antara zero-shot, one-shot, dan few-shot prompting?
3. Bolehkah anda jelaskan bagaimana temperature mempengaruhi output LLM dan bila menggunakan nilai berbeza?
4. Bolehkah anda meminta saya jelaskan apa itu mesej sistem dan bagaimana ia berbeza daripada mesej pengguna?
5. Bolehkah anda kuiz saya tentang teknik untuk mendapatkan output JSON berstruktur dari LLM?
6. Bolehkah anda jelaskan konsep prompting "chain of thought"?
7. Bolehkah anda meminta saya jelaskan kesilapan umum dalam kejuruteraan prompt dan cara mengelakkannya?

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami prinsip teras (jelas, spesifik, berikan konteks)
- [ ] Berlatih few-shot prompting dengan contoh
- [ ] Mencipta prompt yang mengeluarkan JSON berstruktur
- [ ] Menguji prompt untuk analisis sentimen, peringkasan, dan ekstraksi topik
- [ ] Bereksperimen dengan tetapan temperature
- [ ] Menggunakan prompting chain of thought
- [ ] Memahami kesilapan umum yang perlu dielakkan
