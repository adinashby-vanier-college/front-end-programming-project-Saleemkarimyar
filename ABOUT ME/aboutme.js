document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector(".text-section p");
  
    paragraph.addEventListener("mouseenter", () => {
      paragraph.style.backgroundColor = "#f0f0f0";
    });
  
    paragraph.addEventListener("mouseleave", () => {
      paragraph.style.backgroundColor = "transparent";
    });
  });
  