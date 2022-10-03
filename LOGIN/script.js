function login() {
    var n = document.getElementById('nama').value;
    var p = document.getElementById('password').value;
    var w = document.getElementById('wrong');

    if (n == 'fariz' && p == 'fariz') {
        window.location.href = "main.html";
    }
    else {
        w.innerText = "Anda gagal login, cek username dan password!";
    }
}