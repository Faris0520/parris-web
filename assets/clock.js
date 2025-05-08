setInterval(function () {
    var waktu = new Date();
    var jam = waktu.getUTCHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();
    if (detik < 10 ){
        detik = "0" + detik;
    }
    if (menit < 10 ){
        menit = "0" + menit;
    }
    var indo = jam + 7;
    if (indo < 10){
        indo = "0" + indo;
    }
    var clockTime = indo + ":" + menit + ":" + detik + " WIB";

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000)