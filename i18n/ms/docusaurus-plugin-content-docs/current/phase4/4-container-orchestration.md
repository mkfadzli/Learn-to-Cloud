# Topik 4: Orkestrasi Kontena - Kubernetes

> ⏱️ **Anggaran masa:** 4-5 hari

Kita telah belajar tentang Kontena di awal fasa ini, sekarang mari lihat bagaimana kita boleh mengorkestrakan kontena tersebut. Di sinilah Kubernetes digunakan, sering disingkat sebagai K8s, iaitu platform orkestrasi kontena sumber terbuka yang mengautomasikan penggunaan, penskalaan, dan pengurusan aplikasi terkontena. Ia digunakan secara meluas dalam persekitaran cloud-native moden untuk memastikan aplikasi mempunyai ketersediaan tinggi, boleh diskalakan, dan berdaya tahan.

---

## 📚 Laluan Pembelajaran

### Mengapa Kubernetes?

Apabila aplikasi bertambah kompleks, pengurusan kontena secara manual menjadi mencabar. Kubernetes menyediakan:

- **Penggunaan dan Penskalaan Automatik**: Menggunakan dan menskalakan kontena secara automatik berdasarkan penggunaan sumber atau metrik tersuai.
- **Pemulihan Sendiri**: Memulakan semula kontena yang gagal, menggantikan yang tidak responsif, dan menjadualkan semula kontena pada nod yang sihat.
- **Imbangan Beban**: Mengagihkan trafik merentas kontena untuk memastikan ketersediaan tinggi.
- **Penemuan Perkhidmatan**: Menetapkan nama DNS dan IP secara automatik kepada perkhidmatan.
- **Konfigurasi Deklaratif**: Menggunakan manifes YAML atau JSON untuk mentakrifkan keadaan yang diingini bagi aplikasi anda.

## Konsep Teras

Memahami Kubernetes memerlukan kefahaman tentang komponen terasnya:

### 1. **Kluster**
Kluster Kubernetes terdiri daripada:
- **Nod Master**: Menguruskan kluster dan menjadualkan beban kerja.
- **Nod Pekerja**: Menjalankan aplikasi terkontena.

### 2. **Pod**
- Unit penggunaan terkecil dalam Kubernetes.
- Pod boleh mengandungi satu atau lebih kontena yang berkongsi storan, rangkaian, dan satu alamat IP.

### 3. **Perkhidmatan**
- Mendedahkan aplikasi anda kepada rangkaian.
- Jenis perkhidmatan termasuk:
  - **ClusterIP**: Akses dalaman dalam kluster.
  - **NodePort**: Mendedahkan perkhidmatan pada port tertentu setiap nod.
  - **LoadBalancer**: Berintegrasi dengan pembekal cloud untuk mendedahkan perkhidmatan secara luaran.

### 4. **Deployment**
- Menguruskan keadaan yang diingini bagi aplikasi anda secara deklaratif.
- Mengendali kemas kini bergilir, rollbacks, dan penskalaan.

### 5. **ConfigMap dan Secret**
- **ConfigMap**: Menyimpan data konfigurasi sebagai pasangan kunci-nilai.
- **Secret**: Menyimpan data sensitif seperti kata laluan dan kunci API secara selamat.

## Menyediakan Kubernetes

### 1. **Setup Tempatan**
Untuk pembangunan tempatan, anda boleh menggunakan alatan seperti:
- [Minikube](https://minikube.sigs.k8s.io/docs/): Menjalankan kluster Kubernetes satu nod secara tempatan.
- [Kind](https://kind.sigs.k8s.io/): Menjalankan kluster Kubernetes dalam kontena Docker.

### 2. **Pembekal Cloud**
Kebanyakan pembekal cloud menawarkan perkhidmatan Kubernetes terurus:
- **AWS**: [Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/)
- **Azure**: [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/)
- **Google Cloud**: [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)

Berikut adalah contoh cepat menyediakan [kluster k8s minimum di Azure AKS menggunakan Terraform.](https://youtu.be/J_aInEIBzE0?si=vTdvDp-6Id7IzGzx)

## Arahan Asas

Berikut adalah beberapa arahan penting Kubernetes:

```bash
# Lihat maklumat kluster
kubectl cluster-info

# Senaraikan semua nod dalam kluster
kubectl get nodes

# Gunakan aplikasi
kubectl apply -f deployment.yaml

# Lihat pod yang berjalan
kubectl get pods

# Lihat log pod
kubectl logs <pod-name>

# Padamkan sumber
kubectl delete -f deployment.yaml
```

---

## 🛠️ Latihan Praktikal

1. Pasang Minikube atau Kind pada mesin tempatan anda.
2. Cipta deployment Kubernetes mudah menggunakan fail YAML berikut:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

3. Gunakan deployment tersebut:
`kubectl apply -f deployment.yaml`

4. Sahkan pod sedang berjalan:
`kubectl get pods`

5. Dedahkan deployment sebagai perkhidmatan:
`kubectl expose deployment nginx-deployment --type=NodePort --port=80`

6. Akses aplikasi di pelayar anda menggunakan NodePort.

---

## 🧪 Uji Pengetahuan Anda

Gunakan soalan-soalan ini untuk menguji kefahaman anda tentang konsep Kubernetes:

1. Apakah Kubernetes, dan mengapa ia digunakan dalam pembangunan aplikasi moden?
2. Apakah komponen utama kluster Kubernetes?
3. Apakah pod dalam Kubernetes, dan bagaimana ia berbeza dari kontena?
4. Bagaimanakah perkhidmatan Kubernetes membolehkan komunikasi antara pod dan pelanggan luaran?
5. Apakah tujuan Deployment dalam Kubernetes?
6. Bagaimanakah Kubernetes mengendalikan pemulihan sendiri untuk aplikasi?
7. Apakah ConfigMap dan Secret, dan bagaimana ia digunakan dalam Kubernetes?
8. Apakah perbezaan antara `kubectl apply` dan `kubectl create`?
9. Bagaimanakah anda boleh menskalakan deployment dalam Kubernetes?
10. Apakah manfaat menggunakan perkhidmatan Kubernetes terurus seperti EKS, AKS, atau GKE?

Soalan-soalan ini akan membantu mengukuhkan kefahaman anda tentang Kubernetes dan konsep terasnya.

## Sumber Tambahan

- [Dokumentasi Rasmi Kubernetes](https://kubernetes.io/docs/concepts/)
- [Kubernetes the Hard Way oleh Kelsey Hightower](https://github.com/kelseyhightower/kubernetes-the-hard-way)

---

## ✅ Senarai Semak Topik

Sebelum meneruskan, pastikan anda telah:

- [ ] Memahami konsep teras Kubernetes (Pod, Perkhidmatan, Deployment)
- [ ] Memasang Minikube atau Kind secara tempatan
- [ ] Mencipta dan menggunakan Kubernetes deployment
- [ ] Mendedahkan deployment sebagai perkhidmatan
- [ ] Menggunakan arahan kubectl untuk pengurusan kluster
- [ ] Memahami ConfigMap dan Secret
- [ ] (Pilihan) Meneroka perkhidmatan Kubernetes terurus (EKS, AKS, GKE)
