
function currentDate () { 
    // dom öğemizi seçiyoruz
    let clock = document.querySelector("#myClock"); 
    let today = new Date (); // saat ayarlamak için
    // default olarak günler sayı olarak geliyor bu yüzden yeni array oluşturdum
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
    let day = days[today.getDay()]; // oluşturduğum arrayden gün çekecek
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ` ${day}` // saat, dakika, saniye, gün şeklinde ayarlıyoruz

    let currentTime = `${time}`
    clock.innerHTML = currentTime // currentTime değerini html'e yazdırıyoruz

    // dinamik saniye bilgisi için
    setTimeout(currentDate, 1000) 

}

currentDate ();
