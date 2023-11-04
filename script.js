let images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
  "./img/img6.jpg",
  "./img/img7.jpg",
  "./img/img8.jpg",
  "./img/img9.jpg",
  "./img/img10.jpg",
  "./img/img11.jpg",
  "./img/img12.jpg",
  "./img/img13.jpg",
  "./img/img14.jpg",
  "./img/img15.jpg",
  "./img/img16.jpg",
  "./img/img17.jpg",
  "./img/img18.jpg",
];

function load() {
  for (let i = 0; i < images.length; i++) {
    document.getElementById("images").innerHTML += /*html*/ `
        <img onclick="loadImage(${i})" src="${images[i]}" class="image-pic">
        `;
  }
}

function loadImage(i) {
  document.getElementById("img-click").classList.remove("d-none");
  document.getElementById("img-click").innerHTML = /*html*/ `
<div id="img-click-close" class="img-click" onclick="closeImg()">
  <div class="img-load-head">
    <img src="./img/icons/cross.png" alt="close image" class="close-img" id="closeimg"/>
</div>
<div class="img-load">
    <div class="content-flex">
      <img src="./img/icons/prev.png" alt="previous image" class="img-load-arrows" onclick="loadPrevImg(${i})"/>
      <img src="${images[i]}" class="img-load-content" id="imageToLoad" />
      <img src="./img/icons/next.png" alt="next image" class="img-load-arrows" onclick="loadNextImg(${i})"/>
    </div>
</div>
</div>; `;
}

function closeImg() {
  document.getElementById("img-click-close").classList.add("d-none");
  document.getElementById("img-click").classList.add("d-none");
}

function loadNextImg(i, event) {
  if (i == 17) {
    i = 0;
  } else {
    i++;
  }
  loadImage(i);
  event.stopPropagation();
}

function loadPrevImg(i) {
  if (i == 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  loadImage(i);
  event.stopPropagation();
}
