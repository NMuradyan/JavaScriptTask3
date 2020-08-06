function getLink() {
    let newLink = document.getElementById("ourNewLink").value;
    console.log(newLink);
    let oldLink = document.getElementById("changeLink");
    oldLink.setAttribute("href", newLink);
}