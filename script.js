let qr;

function generateQR() {
  const qrText = document.getElementById("qrText").value.trim();
  const qrBox = document.getElementById("qrBox");
  const downloadBtn = document.getElementById("downloadBtn");

  qrBox.innerHTML = "";
  downloadBtn.style.display = "none";

  if (!qrText) {
    alert("Please enter text or URL.");
    return;
  }

  qr = new QRCode(qrBox, {
    text: qrText,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    downloadBtn.style.display = "inline-block";
  }, 300);
}

function downloadQR() {
  const img = document.querySelector("#qrBox img");
  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
  }
}
