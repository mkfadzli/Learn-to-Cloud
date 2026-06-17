# Topik 3: Asas Rangkaian Cloud

> ⏱️ **Anggaran masa:** 3-4 hari

Pada topik sebelumnya, anda telah bekerja untuk deploy VM di cloud menggunakan konfigurasi lalai seperti VPC, Security Groups dan lain-lain. Fokus pada fasa ini adalah untuk mendalami pemahaman anda tentang konsep rangkaian cloud yang penting untuk deployment yang selamat.

---

## 📚 Laluan Pembelajaran

- Kaji

  - Memahami [AWS VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html), [Azure VNet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview), dan [GCP Virtual Private Network](https://cloud.google.com/vpc/docs/overview)
  - Apa itu [Subnetting](https://audrey01.hashnode.dev/subnets-ip-addresses-ip-address-classes-cidr-blocks): Subnet Awam vs. Persendirian, blok CIDR.
  - Gateway (IGW, NAT, VPN) untuk akses internet yang selamat untuk [AWS](https://docs.aws.amazon.com/vpc/latest/userguide/extend-intro.html), [Azure](https://learn.microsoft.com/en-us/azure/nat-gateway/nat-overview?source=recommendations) dan [GCP](https://cloud.google.com/nat/docs/overview)

---

## 🧪 Uji Pengetahuan Anda

Setelah selesai dengan sumber yang disediakan, tonton [what is an IP Address](https://www.youtube.com/watch?v=5WfiTHiU4x8). Semua di sini sepatutnya masuk akal bagi anda, jika tidak, anda belum bersedia untuk meneruskan.

Uji pengetahuan anda dengan pembantu AI, berikut adalah beberapa contoh prompt untuk menguji konsep rangkaian cloud anda:

1. Apakah tujuan Route Tables, dan bagaimana ia mempengaruhi trafik rangkaian?
2. Bagaimanakah route table mengawal aliran trafik dalam rangkaian cloud?
3. Bagaimanakah notasi CIDR mentakrifkan julat alamat IP dalam rangkaian cloud?
4. Bagaimanakah subnet awam dan persendirian berbeza, dan bilakah masing-masing harus digunakan?
5. Bagaimanakah trafik mengalir antara subnet awam dan persendirian dalam VPC?
6. Apakah kepentingan route 0.0.0.0/0 dalam route table?
7. Jelaskan perbezaan antara NAT Gateway dan Internet Gateway.

---

## 🛠️ Tugas Hands-on

- Sediakan Rangkaian Cloud pada mana-mana penyedia cloud.
- Cipta Dua Subnet (Persendirian dan Awam) dalam rangkaian cloud yang telah disediakan.
- Konfigurasi Akses Internet untuk routing yang betul.
- Kaitkan subnet dengan route table yang sesuai untuk aliran trafik yang terkawal
- Sediakan Security group.
- Deploy VM masing-masing dalam Subnet Awam dan Subnet Persendirian rangkaian cloud yang telah dicipta.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep VPC (AWS VPC, Azure VNet, GCP VPC)
- [ ] Mempelajari tentang subnetting dan blok CIDR
- [ ] Memahami perbezaan antara subnet awam dan persendirian
- [ ] Mempelajari tentang gateway (Internet Gateway, NAT Gateway)
- [ ] Mencipta VPC dengan subnet awam dan persendirian
- [ ] Mengkonfigurasi route table dengan betul
- [ ] Deploy VM di kedua-dua subnet awam dan persendirian
