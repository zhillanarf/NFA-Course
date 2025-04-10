import users from "./data.mjs";

// Fungsi untuk menampilkan semua data
const index = () => {
  console.log("Daftar Users:");
  users.map((user, index) => {
    console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

// Fungsi untuk menambahkan data baru
const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan.`);
};

// Fungsi untuk menghapus data terakhir
const destroy = () => {
  if (users.length > 0) {
    const deletedUser = users.pop();
    console.log(`Data ${deletedUser.nama} berhasil dihapus.`);
  } else {
    console.log("Tidak ada data yang dapat dihapus.");
  }
};

export { index, store, destroy };
