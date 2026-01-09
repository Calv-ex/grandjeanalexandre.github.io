const currentPath = window.location.pathname.replace(/\/$/, "");
const navLinks = document.querySelectorAll(".sidebar__nav-list a");

navLinks.forEach(link => {
  const linkPath = link
    .getAttribute("href")
    .replace(/\/$/, "");

  if (
    linkPath === currentPath ||
    (linkPath !== "" && currentPath.startsWith(linkPath))
  ) {
    link.parentElement.classList.add("active");
  }
});
