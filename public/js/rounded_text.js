// Make rounded text btn 
const rounded_text = document.getElementById('rounded_text');
rounded_text.innerHTML = rounded_text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate($(i*15.5)deg)">${char}</span>`
).join("");
