const counter = document.querySelector(".counter");
let count = 0;
setInterval(() => {
 if(count == 92) {
  clearInterval(count);
 }else {
  count+=1;
  counter.textContent = count + "%";
 }
}, 42);

$(document).on('click', '#success', function(e) {
    document.getElementById("cashh").innerHTML = "$0";
    document.getElementById("cashh2").innerHTML = "$0";
    document.getElementById("cashh3").innerHTML = "$0";
    swal(
        'Başarılı',
        'Para belirttiğiniz IBAN adresine 1-5 iş günü içerisinde gelecektir.',
        'success'
    )
});

$(document).on('click', '#error', function(e) {
    swal(
        'Hata',
        'Şuanlık para gönderme servisimiz kullanılamıyor. En kısa sürede düzelecektir.',
        'error'
    )
});