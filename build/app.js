(() => {
  // src/scripts/app.js
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".logo", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        // Trigger when top of section is 75% from top of viewport
        toggleActions: "play none none none"
      },
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power2.out"
    });
  });
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      gsap.to(window, { duration: 1.5, scrollTo: targetElement, ease: "power2.inOut" });
    });
  });
  var darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
})();
