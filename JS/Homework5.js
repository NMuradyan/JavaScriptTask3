window.onload = function changeColor() {
    let fruitArray = document.getElementsByTagName('li');
    for (let i = 0; i < fruitArray.length; i++) {
        if (i%2 == 0) {
            fruitArray[i].style.color = 'red';
        } else {
            fruitArray[i].style.color = 'green';
        }
        
    }
    console.log(fruitArray);
}