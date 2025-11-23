for (let i = 1; i <= 500; i++) {
  let firstH1 = document.createElement("h1");
  firstH1.textContent = i + " hello world";
  firstH1.style.color = "blue"
  document.body.appendChild(firstH1);
}
