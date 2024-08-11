


let imageVar = document.getElementById("image");
let imageArray = [ "slide20.jpg", "/slide21.jpg", "slide22.jpg", "slide23.jpg" ];

let imageIndex = 0;

function slideShow(){
    imageVar.setAttribute("src", imageArray[imageIndex]);
    imageIndex++

    if(imageIndex >= imageArray.length){
        //return
        imageIndex = 0;
    }

}


setInterval(slideShow, 5000);