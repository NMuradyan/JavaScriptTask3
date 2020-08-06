function changeColor() {
    let text = document.getElementById("favcolor").value;
    let para = document.getElementById("paragraph");
    para.style.backgroundColor = text;
}