function displayDateTime() {
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var date = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

// Tambahkan angka 0 di depan jam, menit, dan detik jika kurang dari 10
hours = (hours < 10) ? '0' + hours : hours;
minutes = (minutes < 10) ? '0' + minutes : minutes;
seconds = (seconds < 10) ? '0' + seconds : seconds;

var time = hours + ':' + minutes + ':' + seconds;
document.getElementById('clock').textContent = time;
document.getElementById('date').textContent = date;
}

// Panggil fungsi displayDateTime setiap detik
setInterval(displayDateTime, 0);


// khusus yang di jadwal
document.addEventListener("DOMContentLoaded", function(event) {
  var date = new Date();
  var day = date.getDay();

  // Array kelas hari
  var dayClasses = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  // Mengubah warna teks dalam sel-sel tabel berdasarkan hari
  var currentDayClass = dayClasses[day];

  // Atur warna teks untuk semua sel dengan kelas yang sama
  var dayCells = document.getElementsByClassName(currentDayClass);
  for (var i = 0; i < dayCells.length; i++) {
    dayCells[i].style.color = "yellow"; // Ubah warna teks sesuai preferensi
  }
  for (var i = 0; i < dayCells.length; i++) {
  dayCells[i].style.backgroundColor = "red";
}

});
