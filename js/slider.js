const images = [
    
    'Images/pic1.png',
    'Images/pic2.jpg',
    'Images/pic3.jpg',
    'Images/pic4.jpg',
    'Images/pic5.jpg',
    'Images/pic6.png',
    'Images/pic7.jpg',
    'Images/pic8.jpg',
    'Images/pic9.jpg'

]
let imgIndex=0;
const imgElement = document.getElementById('slider-img')
setInterval(()=>{
    if(imgIndex === images.length){
        imgIndex =0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src',imgUrl)
 imgIndex++;

},1000)