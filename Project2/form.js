function toggleMenu() {
    var x = document.getElementById("nav-links");
    if (x.className === "show") {
        x.className = "";
    } else {
        x.className = "show";
    }
}
