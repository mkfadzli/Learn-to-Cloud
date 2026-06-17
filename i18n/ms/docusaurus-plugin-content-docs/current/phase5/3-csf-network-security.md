# Topik 3: Keselamatan Rangkaian

> ⏱️ **Anggaran masa:** 2-3 hari

Keselamatan rangkaian di cloud adalah tentang membina sambungan yang selamat, mewujudkan pemisahan logik antara sumber, dan bertahan terhadap ancaman berasaskan rangkaian. Sebelum mengamankan rangkaian Journal API anda, anda perlu memahami asas rangkaian cloud.

---

## 📚 Laluan Pembelajaran

### Objektif Pembelajaran

Di akhir topik ini, anda akan memahami:

- Virtual Private Cloud (VPC) dan pengasingan rangkaian
- Kumpulan Keselamatan vs ACL Rangkaian dan bila menggunakan masing-masing
- Pengimbang beban dan pengurusan trafik yang selamat
- VPN dan pilihan penyambungan peribadi
- Kesilapan keselamatan rangkaian yang biasa dan cara mengelakkannya

## Sumber Pembelajaran Teras

### 1. Baca: Asas Rangkaian Cloud
Mulakan dengan dokumentasi rangkaian pembekal cloud anda:

**AWS**: [VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) - Baca bahagian tentang VPC, subnet, dan kumpulan keselamatan
**Azure**: [Virtual Network Overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) - Baca konsep dan ciri keselamatan
**GCP**: [VPC Network Overview](https://cloud.google.com/vpc/docs/vpc) - Baca konsep VPC dan keselamatan

### 2. Tonton: Keselamatan Rangkaian dalam Tindakan
- [AWS VPC Deep Dive](https://www.youtube.com/watch?v=fnxXNZdf6ew) (45 minit)
- [Azure Networking Explained](https://www.youtube.com/watch?v=5NMcM4zJPM4) (35 minit)
- [GCP Networking Fundamentals](https://www.youtube.com/watch?v=cNb4xzAyTiQ) (40 minit)

### 3. Belajar: Amalan Terbaik Keselamatan Rangkaian
- [NIST Network Security Guide](https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final)
- [Cloud Security Alliance Network Security](https://cloudsecurityalliance.org/research/working-groups/network-security/)

## Konsep Utama yang Perlu Dikuasai

### Virtual Private Cloud (VPC)
- **Pengasingan**: Rangkaian peribadi anda sendiri di cloud
- **Subnet**: Bahagikan VPC anda ke dalam segmen rangkaian yang lebih kecil
- **Jadual Laluan**: Kawal ke mana trafik rangkaian boleh pergi
- **Get Laluan Internet**: Benarkan akses internet di mana diperlukan

### Kumpulan Keselamatan vs ACL Rangkaian

**Kumpulan Keselamatan** (Stateful):
- Bertindak seperti firewall untuk instans individu
- Hanya membenarkan peraturan (nafi secara lalai)
- Stateful (trafik balasan dibenarkan secara automatik)
- Digunakan di tahap instans

**ACL Rangkaian** (Stateless):
- Bertindak seperti firewall untuk keseluruhan subnet
- Benarkan dan nafi peraturan
- Stateless (mesti membenarkan trafik balasan secara eksplisit)
- Digunakan di tahap subnet

### Segmentasi Rangkaian
- **Subnet Awam**: Untuk sumber yang memerlukan akses internet (pengimbang beban)
- **Subnet Peribadi**: Untuk pelayan aplikasi dan pangkalan data
- **Subnet Terpencil**: Untuk sumber yang sangat sensitif tanpa akses internet

### Pengimbang Beban dan Pengurusan Trafik
- **Application Load Balancers**: Mengendali trafik HTTP/HTTPS dengan ciri keselamatan
- **Network Load Balancers**: Mengendali trafik TCP/UDP dengan prestasi tinggi
- **Ciri Keselamatan**: Penamatan SSL, perlindungan DDoS, pengelogan akses

---

## 🧪 Uji Pengetahuan Anda

Gunakan pembantu AI untuk menguji kefahaman anda. Berikut adalah contoh prompt:

1. "Quiz me on the difference between Security Groups and Network ACLs"
2. "Ask me to explain VPC concepts like subnets and route tables"
3. "Test my knowledge of when to use public vs private subnets"
4. "Quiz me on load balancer types and their security features"
5. "Ask me about network segmentation best practices"
6. "Test my understanding of stateful vs stateless firewalls"
7. "Quiz me on VPN types and when to use them"
8. "Ask me about common network security mistakes in the cloud"

## Rangkaian Fizikal vs Keselamatan Rangkaian Cloud

Memahami perbezaan membantu merapatkan jurang konseptual:

| Komponen Rangkaian Fizikal | Setara Cloud | Perbezaan Utama |
|----------------------------|-------------------|-----------------|
| Penghala dan suis fizikal | Penghala maya, get VPC | Rangkaian ditakrifkan perisian melalui konsol/API |
| Firewall perkakasan | Kumpulan Keselamatan, NACL | Peraturan digunakan melalui antara muka cloud |
| Segmentasi rangkaian fizikal | Subnet, VPC, Kumpulan Keselamatan | Sempadan logik menggantikan sempadan fizikal |
| Kabel rangkaian | Sambungan maya, peering | Tiada sambungan fizikal untuk diurus |

## Sumber Tambahan (Pilihan)

### Dokumentasi Pembekal Cloud
- [AWS VPC Security Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
- [Azure Network Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/network-best-practices)
- [GCP VPC Security](https://cloud.google.com/vpc/docs/using-vpc)

### Alatan Keselamatan Rangkaian
- [AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/)
- [Azure Firewall](https://learn.microsoft.com/en-us/azure/firewall/)
- [GCP Cloud Firewall](https://cloud.google.com/firewall)

### Sumber Amalan
- [AWS VPC Workshop](https://catalog.workshops.aws/networking/en-US)
- [Azure Network Security Workshop](https://github.com/Azure/azure-network-security)

## Langkah Seterusnya

Setelah anda yakin dengan konsep keselamatan rangkaian, teruskan ke Topik 4.

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep VPC dan pengasingan rangkaian
- [ ] Mempelajari Kumpulan Keselamatan vs ACL Rangkaian
- [ ] Memahami segmentasi rangkaian (awam/peribadi/terpencil)
- [ ] Mempelajari tentang pengimbang beban dan pengurusan trafik
- [ ] Menyemak dokumentasi rangkaian pembekal cloud
- [ ] (Pilihan) Menyiapkan bengkel VPC/rangkaian
