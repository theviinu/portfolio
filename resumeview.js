const openPdf = document.getElementById("openPdf");
const pdfModal = document.getElementById("pdfModal");
const closePdf = document.getElementById("closePdf");
const downloadPdf = document.getElementById("downloadPdf");
const pdfViewer = document.getElementById("pdfViewer");

openPdf.addEventListener("click", (e) => {
  e.preventDefault();
  pdfModal.style.display = "flex";
});

closePdf.addEventListener("click", () => {
  pdfModal.style.display = "none";
});

//Close when clicking outside the content container
pdfModal.addEventListener("click", (e) => {
  if (e.target === pdfModal) {
    pdfModal.style.display = "none";
  }
});

downloadPdf.href = pdfViewer.src;
