document.addEventListener('DOMContentLoaded', function () {
    const dataKursi = { "Ekonomi": 50000, "Bisnis": 100000, "Eksekutif": 150000, "Premium": 200000 };
    const cmbKursi = document.querySelector("#kursi");
    const txtHarga = document.querySelector("#harga");
    const txtTotal = document.querySelector("#total");
    const btnHitung = document.querySelector("#hitung");
    const txtPenumpang = document.querySelector("#penumpang");

    // Initializing harga based on kursi selection
    txtHarga.value = dataKursi[cmbKursi.options[cmbKursi.selectedIndex].value];

    cmbKursi.addEventListener('change', function () {
        txtHarga.value = dataKursi[cmbKursi.value];
    });

    // Calculating total harga
    btnHitung.addEventListener('click', function () {
        const harga = parseInt(txtHarga.value);
        const jumlahPenumpang = parseInt(txtPenumpang.value) || 0; // Avoid NaN if value is empty
        const totalHarga = harga * jumlahPenumpang;
        txtTotal.value = totalHarga;
    });

    // Disable button if checkbox is not checked
    const btnPesan = document.querySelector('.btn-success');
    const chkAgree = document.querySelector('#agree');
    
    chkAgree.addEventListener('change', function () {
        btnPesan.disabled = !this.checked;
    });
});