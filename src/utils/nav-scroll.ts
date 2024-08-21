(function toggleNavClassOnScroll() {
  const sections = (document.querySelectorAll(".link-section") ??
    []) as NodeListOf<HTMLElement>;
  const navItems = (document.querySelectorAll(".nav-item") ??
    []) as NodeListOf<HTMLElement>;
  const offset = 300;

  console.log("sections", sections, navItems);

  window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
      let currentPosition = window.scrollY + offset;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
          navItems.forEach((item) => item.classList.remove("active"));
          navItems[index].classList.add("active");
        }
      });
    });
  });
})();
