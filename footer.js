
// this footer js is only for home page to add footer

document.addEventListener("DOMContentLoaded", function () {
  
  // Include footer
 const footerPlaceholder = document.querySelector(".footer-placeholder");
  fetch(footerPlaceholder.getAttribute("data-include"))
      .then(response => response.text())
      .then(content => {
          footerPlaceholder.insertAdjacentHTML("afterbegin", content);
      });
});