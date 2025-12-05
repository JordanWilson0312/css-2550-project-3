function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";
}
