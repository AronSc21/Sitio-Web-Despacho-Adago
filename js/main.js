// ====== CONFIGURACIÓN: edita solo esta parte ======
const CONFIG = {
  whatsapp: "522282101367", // 52 + 10 dígitos, sin espacios ni signos
  mensaje: "Hola, me gustaría recibir información sobre los servicios de ADAGO.",
  instagram: "https://www.instagram.com/adago_/",
  facebook: "https://www.facebook.com/profile.php?id=61595029105712"
};
// ==================================================
const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensaje)}`;
document.querySelectorAll("[data-wa]").forEach(a => { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-ig]").forEach(a => a.href = CONFIG.instagram);
document.querySelectorAll("[data-fb]").forEach(a => a.href = CONFIG.facebook);
document.getElementById("yr").textContent = new Date().getFullYear();

const views = [...document.querySelectorAll(".view")];
const links = [...document.querySelectorAll("#nav a")];
function show() {
  const id = (location.hash || "#inicio").slice(1);
  const target = views.some(v => v.id === id) ? id : "inicio";
  views.forEach(v => v.hidden = v.id !== target);
  links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + target));
  window.scrollTo(0, 0);
}
addEventListener("hashchange", show);
show();

document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(x => x.classList.toggle("on", x === b));
  document.querySelectorAll(".exp").forEach(l => l.hidden = l.id !== b.dataset.y);
}));

// Menú de hamburguesa (celular)
const burger = document.getElementById("burger"), nav = document.getElementById("nav"), scrim = document.getElementById("scrim");
function menu(open) {
  [burger, nav, scrim].forEach(el => el.classList.toggle("open", open));
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () => menu(!nav.classList.contains("open")));
scrim.addEventListener("click", () => menu(false));
links.forEach(a => a.addEventListener("click", () => menu(false)));
addEventListener("keydown", e => e.key === "Escape" && menu(false));
addEventListener("resize", () => innerWidth >= 800 && menu(false));
