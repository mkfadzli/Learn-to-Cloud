# Topik 5: Asas CLI Linux

> ⏱️ **Anggaran masa:** 1 minggu

Anda perlu mempunyai kemahiran CLI Linux untuk bekerja dengan cloud. Kami mengesyorkan anda membaca dan mengerjakan [Linux Basics for Hackers](https://nostarch.com/linuxbasicsforhackers#content). Anda juga boleh menyenarai perintah di bawah dan mengkajinya secara individu, tetapi pada pendapat kami itu tidak akan memberikan anda konteks yang cukup tentang bagaimana perintah-perintah ini berfungsi.

---

## 📚 Laluan Pembelajaran

Untuk topik ini, kami mengesyorkan mengerjakan **Bab 1-8** buku tersebut, yang merangkumi kemahiran penting untuk kerja cloud:

1. Getting Started with the Basics
2. Text Manipulation
3. Analyzing and Managing Networks
4. Adding and Removing Software
5. Controlling File and Directory Permissions
6. Process Management
7. Managing User Environment Variables
8. Bash Scripting

**Pilihan tetapi berguna:** Bab 9-11 (Compressing/Archiving, Filesystem Management, dan Logging) memberikan konteks tambahan yang berguna.

## Perintah CTF

Anda akan menggunakan perintah berikut dalam cabaran CTF. Pastikan anda biasa dengan mereka sebelum meneruskan:

- `pwd`: Print working directory – menunjukkan lokasi semasa anda.
- `cd`: Change directory – navigasi antara folder.
- `ls`: Senaraikan kandungan direktori.
- `cat`: Paparkan kandungan fail.

## Cabaran 1: Penemuan Fail Tersembunyi

Pelajari perintah ini untuk mencari fail tersembunyi:

- `ls -a`: Senaraikan semua fail, termasuk yang tersembunyi.
- `ls -la`: Senarai terperinci termasuk fail tersembunyi.
- `find . -name ".*"`: Cari fail tersembunyi.

**Konsep utama:**

- Dalam Linux, fail tersembunyi bermula dengan titik (`.`).
- Fail tersembunyi tidak ditunjukkan secara lalai.
- Gunakan flag `-a` dengan `ls` untuk menunjukkan fail tersembunyi.

## Cabaran 2: Carian Fail Asas

Kuasai perintah carian fail ini:

- `find /path -name "pattern"`: Cari fail mengikut nama.
- `find /path -type f`: Cari fail biasa.
- `find ~ -name '*.txt' 2>/dev/null`: Cari fail teks dalam direktori home anda.
- `grep -r "text" /path`: Cari kandungan fail secara rekursif.

## Cabaran 3: Analisis Log

Perintah untuk menganalisis fail log:

- `ls -lh`: Senaraikan fail dengan saiz yangboleh dibaca manusia.
- `du -h`: Paparkan penggunaan cakera.
- `tail filename`: Lihat bahagian akhir fail.
- `tail -n 100 filename`: Lihat 100 baris terakhir.
- `find /path -type f -size +1M`: Cari fail yang lebih besar daripada 1MB.

**Konsep utama:**

- Fail log yang besar boleh menyembunyikan rahsia di bahagian akhir.
- Periksa `/var/log` untuk log sistem.
- Gunakan `tail` untuk melihat bahagian akhir fail besar dengan cekap.

## Cabaran 4: Siasatan Pengguna

Perintah untuk pengurusan pengguna:

- `id username`: Paparkan ID pengguna dan kumpulan.
- `cat /etc/passwd`: Lihat akaun pengguna.
- `getent passwd uid`: Dapatkan pengguna mengikut UID.
- `ls -l /home/`: Senaraikan direktori home.

**Memahami fail pengguna:**

- `/etc/passwd`: Maklumat akaun pengguna.
- `~/.profile` dan `~/.bashrc`: Fail konfigurasi shell.

## Cabaran 5: Analisis Kebenaran

Perintah untuk bekerja dengan kebenaran:

- `ls -l`: Lihat kebenaran fail.
- `stat filename`: Maklumat terperinci tentang fail.
- `find / -perm 777 2>/dev/null`: Cari fail dengan kebenaran tertentu.
- `chmod`: Ubah kebenaran fail.

**Konsep utama:**

- Cari fail dengan kebenaran yang tidak biasa (seperti 777).
- Kebenaran 777 bermaksud baca, tulis, dan laksana untuk semua orang.

## Cabaran 6: Penemuan Perkhidmatan

Perintah penyiasatan rangkaian:

- `netstat -tulpn`: Senaraikan port yang sedang mendengar.
- `ss -tulpn`: Alternatif moden kepada netstat.
- `lsof -i`: Senaraikan fail rangkaian yang terbuka.
- `curl localhost:port`: Uji kesambungan perkhidmatan HTTP.
- `nc -zv host port`: Uji sambungan TCP.

**Konsep utama:**

- Perkhidmatan berjalan pada port tertentu.
- Gunakan alat rangkaian untuk mengetahui apa yang sedang mendengar.

## Cabaran 7: Cabaran Pen Kodan

Perintah pemprosesan teks:

- `base64`: Kod atau decode teks.
- `base64 -d`: Decode teks yang dikod base64.
- `echo -n "text"`: Echo tanpa baris baru.
- Operator pipe (`|`) untuk merangkaikan perintah.

**Konsep utama:**

- Data boleh dikod beberapa kali.
- Gunakan `base64 -d` untuk decode, dan rantaikan perintah untuk pelbagai lapisan.

## Cabaran 8: Rahsia SSH

Perintah dan amalan terbaik SSH:

- `ls -la ~/.ssh/`: Senaraikan kandungan direktori SSH.
- `find ~/.ssh -type f`: Cari fail berkaitan SSH.
- `chmod 600`: Tetapkan kebenaran fail yang selamat untuk kekunci.
- `ssh-keygen`: Jana kekunci SSH.

**Amalan terbaik:**

- Pastikan kekunci peribadi anda selamat.
- Pastikan kebenaran fail yang betul (contohnya, 600 untuk kekunci).
- Teroka subdirektori dengan teliti - rahsia mungkin tersembunyi dalam folder bersarang.
- Semak fail `authorized_keys` anda.

## Cabaran 9: Penyelesaian Masalah DNS

Belajari bekerja dengan fail konfigurasi DNS:

- Kenali `/etc/resolv.conf` dan sandarannya.
- Berlatih menggunakan alat perbandingan fail untuk mengesan perbezaan.
- Periksa kandungan fail konfigurasi DNS dengan teliti.

## Cabaran 10: Pengesanan Muat Naik Jarak Jauh

Dalam cabaran ini, anda akan mencetuskan bendera dengan mencipta fail:

- Fahami bagaimana pemantauan fail berfungsi dengan alat seperti `inotifywait`.
- Pelajari cara mencipta fail dalam direktori tertentu.
- Bereksperimen dengan kaedah berbeza untuk mencipta fail (touch, echo, dll.).

## Cabaran 11: Konfigurasi Web

Cabaran ini melibatkan mengenal pasti port bukan standard pelayan web:

- Pelajari cara mencari dan menyemak fail konfigurasi (contohnya, untuk `nginx`).
- Periksa `/etc/nginx/sites-available/` untuk konfigurasi nginx.
- Kenali asas pengurusan perkhidmatan untuk memulakan semula atau memuat semula perkhidmatan.
- Fahami bagaimana tetapan konfigurasi mempengaruhi tingkah laku pelayan web.

## Cabaran 12: Analisis Trafik Rangkaian

Analisis trafik rangkaian untuk menemui mesej tersembunyi:

- Kenali `tcpdump` untuk penangkapan trafik rangkaian.
- Pelajari cara memeriksa kandungan paket untuk data tersembunyi.
- Lihat corak ping - data boleh disembunyikan dalam paket ICMP.
- Bereksperimen dengan alat analisis rangkaian.

## Cabaran 13: Pemburu Cron Job

Temui tugas berjadual pada sistem:

- `crontab -l`: Senaraikan cron job pengguna semasa.
- `cat /etc/crontab`: Lihat crontab sistem.
- `ls -la /etc/cron.d/`: Senaraikan fail cron job.
- `ls -la /etc/cron.daily/`: Senaraikan cron job harian.

**Konsep utama:**

- Cron job berjalan mengikut jadual yang ditakrifkan dalam fail crontab.
- Cron job keseluruhan sistem boleh ditemui di `/etc/cron.d/`.
- Periksa fail cron dengan teliti - komen boleh mengandungi rahsia.

## Cabaran 14: Persekitaran Proses

Siasat proses yang sedang berjalan dan persekitarannya:

- `ps aux`: Senaraikan semua proses yang sedang berjalan.
- `cat /proc/PID/environ`: Lihat pembolehubah persekitaran proses.
- `tr '\0' '\n' < /proc/PID/environ`: Format output environ supaya mudah dibaca.
- `pgrep processname`: Cari ID proses mengikut nama.

**Konsep utama:**

- Maklumat proses berada dalam `/proc`.
- Setiap proses mempunyai direktori dengan persekitarannya dalam `/proc/PID/environ`.
- Pembolehubah persekitaran boleh mengandungi rahsia.

## Cabaran 15: ahli Arkeologi Arkib

Bekerja dengan fail mampat dan arkib:

- `tar -xzf archive.tar.gz`: Ekstrak arkib tar yang digzip.
- `gunzip file.gz`: Nyahmampat fail gzip.
- `file filename`: Tentukan jenis fail.
- `tar -tzf archive.tar.gz`: Senaraikan kandungan tanpa mengekstrak.

**Konsep utama:**

- Arkib boleh bersarang (arkib dalam arkib).
- Gunakan perintah `file` untuk menentukan jenis fail sebenar.
- Ekstrak lapisan demi lapisan untuk mencari kandungan tersembunyi.

## Cabaran 16: Detektif Simbolik

Ikuti pautan simbolik untuk mencari fail tersembunyi:

- `ls -la`: Lihat pautan simbolik dan sasaran mereka.
- `readlink filename`: Tunjukkan ke mana pautan simbolik menunjuk.
- `readlink -f filename`: Ikuti semua pautan simbolik ke sasaran akhir.
- `file filename`: Semak sama ada fail adalah pautan simbolik.

**Konsep utama:**

- Pautan simbolik boleh berantai melalui pelbagai peringkat.
- Gunakan `readlink -f` untuk mencari destinasi akhir.
- Ikuti rantaian untuk menemui kandungan tersembunyi.

## Cabaran 17: Misteri Sejarah

Teroka fail sejarah perintah:

- `cat ~/.bash_history`: Lihat sejarah perintah anda.
- `history`: Tunjukkan sejarah perintah dalam sesi semasa.
- `ls -la /home/`: Semak direktori home pengguna lain.

**Konsep utama:**

- Bash menyimpan sejarah perintah dalam `~/.bash_history`.
- Pengguna lain mungkin mempunyai fail sejarah yang boleh dibaca.
- Fail sejarah boleh mengandungi maklumat sensitif.

## Cabaran 18: Detektif Cakera

Bekerja dengan imej cakera dan titik lekap:

- `file /path/to/image`: Kenal pasti fail imej cakera.
- `sudo mount -o loop image.img /mnt/point`: Lekapkan imej cakera.
- `sudo umount /mnt/point`: Nyah-lekap setelah selesai.
- `ls -la /mnt/point`: Teroka sistem fail yang dilekapkan.

**Konsep utama:**

- Imej cakera adalah fail yang mengandungi keseluruhan sistem fail.
- Lekapkan mereka dengan pilihan loop untuk meneroka kandungan mereka.
- Fail tersembunyi mungkin wujud dalam sistem fail yang dilekapkan.

## Petua Umum

1. Gunakan halaman `man` untuk memahami pilihan perintah.
2. Bereksperimen dengan pelbagai gabungan perintah dan teknik piping.
3. Selesaikan setiap cabaran untuk membina kefahaman anda secara berperingkat.
4. Gunakan `verify hint [number]` apabila tersekat pada cabaran.
5. Lencongkan ralat dengan `2>/dev/null` untuk membersihkan output perintah.

Ingat: Matlamatnya adalah untuk mempelajari perintah dan memahami bagaimana ia berfungsi. Luangkan masa untuk bereksperimen dengan setiap perintah dan meneroka pilihan serta tingkah lakunya.

---

## ✅ Senarai Semak Topik

Sebelum melangkah ke topik seterusnya, pastikan anda boleh menjawab "ya" untuk perkara berikut:

- [ ] Saya telah menyelesaikan Bab 1-8 Linux Basics for Hackers (atau setara)
- [ ] Saya memahami perintah navigasi asas (cd, ls, pwd)
- [ ] Saya boleh memanipulasi fail dan direktori dari baris perintah
- [ ] Saya memahami kebenaran fail dan cara mengubahnya
- [ ] Saya boleh menggunakan pipe dan lencongan untuk merantaikan perintah
- [ ] Saya memahami konsep pengaturcaraan bash asas
- [ ] Saya boleh bekerja dengan arkib dan fail mampat
- [ ] Saya memahami cara melekapkan imej cakera
- [ ] Saya boleh menyiasat proses dan persekitarannya
