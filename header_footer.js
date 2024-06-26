
document.addEventListener("DOMContentLoaded", function () {
    // Include header
    const headerPlaceholder = document.querySelector(".header-placeholder");
    fetch(headerPlaceholder.getAttribute("data-include"))
        .then(response => response.text())
        .then(content => {
            headerPlaceholder.insertAdjacentHTML("afterbegin", content);
        });
  
    // Include footer
   const footerPlaceholder = document.querySelector(".footer-placeholder");
    fetch(footerPlaceholder.getAttribute("data-include"))
        .then(response => response.text())
        .then(content => {
            footerPlaceholder.insertAdjacentHTML("afterbegin", content);
        });
  });
  