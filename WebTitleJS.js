
var names = ["Hello", "Halo", "Bienvenue", "Privyet", "Hola", "Selamat Datang"]
var i = 0

function fs(){
    document.getElementById("HeadTitle").innerHTML = names[i % names.length]
    i += 1
    i %= names.length;
}

setInterval(fs, 3000)
