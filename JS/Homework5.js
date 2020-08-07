window.onload = function changeColor() {
    let fruitArray = document.getElementsByTagName('li');
    for (let i = 0; i < fruitArray.length; i++) {
        if (i%2 == 0) {
            fruitArray[i].style.backgroundColor = 'red';
        } else {
            fruitArray[i].style.backgroundColor = 'green';
        }
        
    }
    console.log(fruitArray);
}