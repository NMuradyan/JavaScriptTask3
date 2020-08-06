function addLine() {
    let addCountry = document.getElementById("newLine").value;
    let node = document.createElement('LI');
    console.log(addCountry);
    let textnode = document.createTextNode(addCountry);
    node.appendChild(textnode);
    document.getElementById("Country").appendChild(node);
}