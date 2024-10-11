// Khởi tạo chỉ số của slide hiện tại
let slideIndex = 0;

// Gọi hàm showSlides để bắt đầu trình chiếu
showSlides();

// Hàm để hiển thị các slide
function showSlides() {
    // Lấy tất cả các phần tử có lớp 'slide'
    let slides = document.querySelectorAll('.slide');

    // Ẩn tất cả các slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }

    // Tăng chỉ số của slide hiện tại
    slideIndex++;

    // Nếu chỉ số slide vượt quá số lượng slide hiện có, đặt lại chỉ số về 1 (slide đầu tiên)
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    

    // Hiển thị slide hiện tại
    slides[slideIndex-1].style.display = 'block';  

    // Gọi lại hàm showSlides sau 3000ms (3 giây) để tự động chuyển đổi slide
    setTimeout(showSlides, 3000);
}

// Hàm để di chuyển đến slide kế tiếp hoặc slide trước đó
function moveSlide(n) {
    // Lấy tất cả các phần tử có lớp 'slide'
    let slides = document.querySelectorAll('.slide');

    // Thay đổi chỉ số slide hiện tại theo tham số n (n có thể là 1 hoặc -1)
    slideIndex += n;

    // Nếu chỉ số slide vượt quá số lượng slide hiện có, đặt lại chỉ số về 1 (slide đầu tiên)
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    

    // Nếu chỉ số slide nhỏ hơn 1, đặt lại chỉ số về slide cuối cùng
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Ẩn tất cả các slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }

    // Hiển thị slide hiện tại
    slides[slideIndex-1].style.display = 'block';  
}