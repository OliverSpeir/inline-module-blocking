const start = performance.now();
while (performance.now() - start < 3000) {}
document.querySelector("p").style.backgroundColor = "#fdccd4";
