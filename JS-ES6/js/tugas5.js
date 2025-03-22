// ** Data Produk **
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 2000000 },
    { id: 5, nama: "Headphone", harga: 1500000 }
];

// ** Event Handler **
const eventHandler = {
    tambahProduk: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapusProduk: (id) => hapusProduk(id),
    tampilkanProduk: () => tampilkanProduk()
};

// ** Menambahkan Produk dengan Spread Operator **
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// ** Menghapus Produk dengan Rest Parameter **
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
    console.log(`Produk dengan ID ${id} berhasil dihapus.`);
}

// ** Menampilkan Produk dengan Destructuring **
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
}

// ** Contoh Penggunaan **
tampilkanProduk();
tambahProduk(6, "Monitor", 3000000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
