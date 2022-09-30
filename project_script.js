//Swiper Function
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    //pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //Comment function
  function getComment(){
    var inputVal = document.getElementById("commentValue").value; // Selecting the input element and get its value 
    var commentDiv = document.getElementById("targetComment"); //Selecting the div of insertion

    if (inputVal === "") { // Prevent Empty String
      return
    } else {
      commentDiv.innerHTML = "<b>comment</b> " + inputVal; //Insert comment
    }
    

}

//Heart Function
function changeLikeButton() {
  var likeButton = document.getElementById("like-button") //Get heart element from id
  if (likeButton.getAttribute("src") === "https://res.cloudinary.com/dgiqi5urn/image/upload/v1659469019/Colored%20Bytes%20project/instagram-like_cjmxiy.png"){ //If the src atribute is equal to empty heart
    likeButton.setAttribute("src", "https://res.cloudinary.com/dgiqi5urn/image/upload/v1659490184/Colored%20Bytes%20project/solid-instagram-like_1_qmtfba.png") //Set solid heart src
    likeButton.classList.add("heart-anim"); //add animation class
    setTimeout(function (){ //timeout to finish the animation
      likeButton.classList.remove("heart-anim");
    }, 500)
  } else {
    likeButton.setAttribute("src", "https://res.cloudinary.com/dgiqi5urn/image/upload/v1659469019/Colored%20Bytes%20project/instagram-like_cjmxiy.png") //else, set src to empty heart

  }
  
}