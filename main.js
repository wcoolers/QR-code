function generateQR() {
    document.getElementById("qr-image").style.display = 'block'
    let QRtext = document.getElementById("text").value
    

    if (!QRtext.trim().length) {
        document.querySelector(".error").textContent = "Please enter text in the box above"
        document.getElementById("img").style.display = "none"
    } else {
        let QRlink = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRtext
        document.getElementById("img").style.display = "block"
        document.querySelector(".error").textContent = ""
        document.querySelector("#qr-image a").href = QRlink
        document.getElementById("img").src = QRlink
    }
}

document.getElementById("btn").addEventListener("click", generateQR)