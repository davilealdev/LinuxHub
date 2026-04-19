document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    const currentDomain = window.location.hostname;

    links.forEach(link => {
        // Verifica se é um link externo e tem href
        if (link.href && !link.hostname.includes(currentDomain) && link.href.startsWith("http")) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer"); // Segurança
        }
    });
});

const selector = document.getElementById("themeSelector");

selector.addEventListener("change", () => {
  if (selector.value === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
});