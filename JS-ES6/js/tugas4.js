class Kendaraan {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
        this.disewa = false; // Status penyewaan
    }

    getInfo() {
        return `${this.nama} (${this.tipe})`;
    }
}

// subclass mobil
class Mobil extends Kendaraan {
    constructor(nama, kapasitas) {
        super(nama, "Mobil");
        this.kapasitas = kapasitas;
    }
}

// subclass motor
class Motor extends Kendaraan {
    constructor(nama, cc) {
        super(nama, "Motor");
        this.cc = cc;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (kendaraan.disewa) {
            console.log(`Maaf, ${kendaraan.getInfo()} sudah disewa oleh pelanggan lain.`);
            return false;
        }
        this.kendaraanDisewa = kendaraan;
        kendaraan.disewa = true;
        return true;
    }

    getDetail() {
        return `Nama: ${this.nama}, No: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa ? this.kendaraanDisewa.getInfo() : "Tidak ada"}`;
    }
}

// class untuk mengelola pelanggan dan transaksi
class SistemTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    sewaKendaraan(pelanggan, kendaraan) {
        if (pelanggan.kendaraanDisewa) {
            console.log(`${pelanggan.nama} sudah menyewa kendaraan: ${pelanggan.kendaraanDisewa.getInfo()}`);
            return;
        }

        if (pelanggan.sewaKendaraan(kendaraan)) {
            this.pelangganList.push(pelanggan);
            console.log(`Transaksi berhasil! ${pelanggan.nama} menyewa ${kendaraan.getInfo()}.`);
        }
    }

    tampilkanPelanggan() {
        console.log("\nDaftar Pelanggan yang Sedang Menyewa Kendaraan:");
        if (this.pelangganList.length === 0) {
            console.log("Tidak ada pelanggan yang menyewa kendaraan.");
            return;
        }
        this.pelangganList.forEach((p, index) => {
            console.log(`${index + 1}. ${p.getDetail()}`);
        });
    }
}

// penggunaan sistem
const sistem = new SistemTransportasi();

// membuat kendaraan
const mobil1 = new Mobil("Toyota Avanza", 7);
const motor1 = new Motor("Yamaha NMAX", 155);

// membuat pelanggan
const pelanggan1 = new Pelanggan("Zhillan Arrafi", "08123456789");
const pelanggan2 = new Pelanggan("Resta Echa", "08987654321");

// mencatat transaksi penyewaan
sistem.sewaKendaraan(pelanggan1, mobil1);
sistem.sewaKendaraan(pelanggan2, motor1);

// menampilkan daftar pelanggan yang menyewa kendaraan
sistem.tampilkanPelanggan();
