
// Image array (replace with your own URLs or local paths)
const imageUrls = [
'https://picsum.photos/id/1015/800/450',
'https://picsum.photos/id/1016/800/450',
'https://picsum.photos/id/1018/800/450',
'https://picsum.photos/id/1020/800/450',

];

const slidesContainer = document.getElementById('slides');
let currentIndex = 0;

// Dynamically load images
imageUrls.forEach(url => {
const img = document.createElement('img');
img.src = url;
slidesContainer.appendChild(img);
});

function updateSlidePosition() {
slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
currentIndex = (currentIndex + 1) % imageUrls.length;
updateSlidePosition();
}

function prevSlide() {
currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
updateSlidePosition();
}

// Auto slide
let autoSlide = setInterval(nextSlide, 4000);

// Pause on hover
const slider = document.getElementById('slider');
slider.addEventListener('mouseover', () => clearInterval(autoSlide));
slider.addEventListener('mouseout', () => autoSlide = setInterval(nextSlide, 4000));
