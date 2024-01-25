let faqHeaders = document.getElementsByClassName("faq-card-header");

Array.from(faqHeaders).forEach((header) => {
    header.addEventListener("click", () => {
        let faqCard = header.parentElement; 
        faqCard.classList.toggle("active");
    });
});

