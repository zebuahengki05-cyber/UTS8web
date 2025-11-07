// ------------------------- LOGIN -------------------------
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let user = dataPengguna.find(u => u.email === email && u.password === pass);

    if (!user) {
        alert("Email atau password salah!");
        return;
    }
    alert("Login berhasil!");
    location.href = "dashboard.html";
}

// ------------------------- GREETING -------------------------
window.addEventListener("DOMContentLoaded", () => {
    let g = document.getElementById("greeting");
    if (g) {
        let jam = new Date().getHours();
        let sapaan = jam < 12 ? "Selamat Pagi" :
                      jam < 17 ? "Selamat Siang" :
                                 "Selamat Sore";
        g.innerText = sapaan + "!";
    }
});

// ------------------------- MODAL -------------------------
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// ------------------------- KATALOG CARD -------------------------
window.addEventListener("DOMContentLoaded", () => {
    let katalogGrid = document.getElementById("katalogGrid");
    if (katalogGrid) {
        dataKatalogBuku.forEach(b => {
            let card = document.createElement("div");
            card.className = "katalog-card";

            card.innerHTML = `
                <img src="${b.cover}" alt="${b.namaBarang}">
                <hr class="divider">
                <div class="katalog-title">${b.namaBarang}</div>
                <div class="katalog-harga">${b.harga}</div>
                <div class="katalog-jenis">Jenis: ${b.jenisBarang}</div>
                <div class="katalog-stok">Stok: ${b.stok}</div>
                <div class="katalog-stok">Edisi: ${b.edisi}</div>
                <div class="katalog-kode">Kode: ${b.kodeBarang}</div>

            `;

            katalogGrid.appendChild(card);
        });
    }
});



function tambahBukuCard() {
    let katalogGrid = document.getElementById("katalogGrid");

    let card = document.createElement("div");
    card.className = "katalog-card";

    card.innerHTML = `
        <img src="${cover.value}" alt="${nama.value}">
        <hr class="divider">
        <div class="katalog-title">${nama.value}</div>
        <div class="katalog-harga">${harga.value}</div>
        <div class="katalog-jenis">Jenis: ${jenis.value}</div>
        <div class="katalog-stok">Stok: ${stok.value}</div>
        <div class="katalog-stok">Edisi: ${edisi.value}</div>
        <div class="katalog-kode">Kode: ${kode.value}</div>
    `;

    katalogGrid.appendChild(card);

    alert("Buku baru berhasil ditambahkan!");
}


// ------------------------- PESANAN -------------------------
let daftarPesanan = [];

function tambahPesanan() {
    let namaBuku = namaPesanan.value;
    let jumlah = jumlahPesanan.value;

    daftarPesanan.push(`${namaBuku} (${jumlah})`);

    let list = document.getElementById("listPesanan");
    list.innerHTML = "";

    daftarPesanan.forEach(p => {
        let li = document.createElement("li");
        li.innerText = p;
        list.appendChild(li);
    });
}

// ------------------------- ISI DATALIST BUKU -------------------------
window.addEventListener("DOMContentLoaded", () => {
    let listBuku = document.getElementById("listBuku");
    if (listBuku && dataKatalogBuku) {
        dataKatalogBuku.forEach(b => {
            let option = document.createElement("option");
            option.value = b.namaBarang;
            listBuku.appendChild(option);
        });
    }
});

document.getElementById("namaPesanan").addEventListener("change", function() {
    let nama = this.value;

    let buku = dataKatalogBuku.find(b => b.namaBarang === nama);
    if (buku) {
        console.log("Harga buku:", buku.harga); 
        // Bisa kamu tampilkan ke form kalau mau
    }
});


// ------------------------- TRACKING -------------------------
function tracking() {
    let no = document.getElementById("noDO").value;
    let data = dataTracking[no];

    let box = document.getElementById("hasilTracking");

    if (!data) {
        box.innerHTML = "<p>Nomor tidak ditemukan.</p>";
        return;
    }

    let perjalananHTML = data.perjalanan.map(p => `
        <li>${p.waktu} — ${p.keterangan}</li>
    `).join("");

    box.innerHTML = `
        <h3>${data.nama}</h3>
        <p>Status: <b>${data.status}</b></p>
        <p>Ekspedisi: ${data.ekspedisi}</p>
        <p>Tanggal Kirim: ${data.tanggalKirim}</p>
        <p>Total: ${data.total}</p>

        <h4>Riwayat Perjalanan:</h4>
        <ul>${perjalananHTML}</ul>
    `;
}

// ------------------------- NAVIGATION -------------------------
function kembali() {
    // Fungsi ini akan membawa pengguna ke halaman sebelumnya
    window.history.back();
}
