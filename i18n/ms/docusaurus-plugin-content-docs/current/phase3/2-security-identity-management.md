# Topik 2: Keselamatan dan Pengurusan Identiti

> ⏱️ **Anggaran masa:** 2-3 hari

Bahagian ini memberi tumpuan kepada pengurusan identiti dan akses (IAM) untuk mengawal keizinan dan melindungi sumber cloud, serta mengamankan instance cloud menggunakan security group dan peraturan firewall.

---

## 📚 Laluan Pembelajaran

- Kaji

  - Konsep IAM: Pengguna, Kumpulan, Peranan, Dasar merentas [AWS](https://medium.com/%40MadhavPrajapati/getting-started-with-aws-iam-users-groups-policies-and-role-fee140ed1e93), [Azure](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal), dan [GCP](https://cloud.google.com/iam/docs/overview)

  - [AWS Security Groups](https://www.youtube.com/watch?v=uYDT2SsHImQ) vs. [Azure Network Security Groups](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview) vs. [GCP Firewall Rules](https://cloud.google.com/firewall/docs/firewalls)

---

## 🧪 Uji Pengetahuan Anda

Setelah mengkaji, uji pemahaman anda dengan prompt ini:

1. Apakah perbezaan antara IAM Users, Groups, dan Roles?
2. Bagaimanakah RBAC berbeza daripada ABAC dalam pengurusan identiti cloud?
3. Bagaimanakah dasar IAM mengawal akses kepada sumber cloud?
4. Apakah langkah-langkah yang boleh diambil untuk menguatkuasakan Prinsip Keistimewaan Terkecil (Least Privilege) dalam IAM?
5. Apakah perbezaan antara inbound rule dan outbound rule?
6. Apakah perbezaan antara security group dan firewall tradisional?
7. Bagaimanakah security group berbeza daripada network ACL dalam rangkaian cloud?
8. Apakah kepentingan peraturan stateful vs. stateless dalam keselamatan cloud?

---

## 🛠️ Tugas Hands-on

- Cipta pengguna dan kumpulan IAM dengan keizinan khusus dalam platform cloud.
- Laksanakan peranan IAM untuk pengurusan akses yang selamat
- Takrifkan dan gunakan dasar IAM untuk mengehadkan akses kepada sumber sensitif
- Cipta security group untuk instance VM
- Takrifkan inbound rule untuk membenarkan trafik tertentu (contoh, HTTP, SSH, RDP)
- Takrifkan outbound rule untuk mengawal komunikasi luaran.
- Gunakan peraturan security group pada VM dan sahkan sekatan akses.
- Uji aliran trafik dengan cuba menyambung dari alamat IP yang dibenarkan dan yang disekat.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep IAM (Users, Groups, Roles, Policies)
- [ ] Mempelajari tentang RBAC dan prinsip keistimewaan terkecil
- [ ] Mencipta pengguna dan kumpulan IAM dengan keizinan khusus
- [ ] Melaksanakan peranan IAM untuk akses yang selamat
- [ ] Mencipta dan mengkonfigurasi security group
- [ ] Menguji inbound rule dan outbound rule
- [ ] Mengesahkan sekatan akses berfungsi dengan betul
