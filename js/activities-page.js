const gallery = document.getElementById("gallery");
let imageNames = Array.from({ length: imgCount }, (_, i) => `${i + 1}.jpg`);
const modal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImg = document.getElementById("modalImg");

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    modalImg.src = "../rsc/"+folderName+"/" + imageNames[index];
    modal.show();
}

imageNames.forEach((img, index) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";
    col.innerHTML = `
        <img src="../rsc/${folderName}/${img}"
             class="img-fluid rounded shadow-sm gallery-img"
             onclick="showImage(${index})" />
      `;
    gallery.appendChild(col);
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageNames.length) % imageNames.length;
    modalImg.src = "../rsc/"+folderName+"/" + imageNames[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageNames.length;
    modalImg.src = "../rsc/"+folderName+"/" + imageNames[currentIndex];
});