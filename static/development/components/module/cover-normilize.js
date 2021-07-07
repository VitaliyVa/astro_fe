document.addEventListener("DOMContentLoaded", function(){
    
    let normRatio = 1.5; // Співвідношення сторін в нормальної обкладинки
    let normHeight = document.querySelector(".book-cover img").offsetWidth * normRatio;
    let windowWidth = window.innerWidth;

    let covers = document.querySelectorAll(".book-cover img");

    covers.forEach((element) => { 
        let coverHeight = element.offsetHeight;
        if (coverHeight != normHeight) {
            element.style.height = normHeight + 'px';
            element.style.maxWidth = 'none';
        }
    });

    window.addEventListener('resize', function() {
        if( window.innerWidth != windowWidth)
            location.reload();
    });
});