
document.querySelector(".geek").addEventListener("mouseover",function(event){
    document.querySelector(".pill-1").style.transition = "330ms ease-in-out";
    document.querySelector(".pill-1").style.backgroundColor = "#373737";
    document.querySelector(".arrow-1").style.color = "#373737";
    document.querySelector(".arrow-1").style.transition = "330ms ease-in-out";
    document.querySelector(".portfolio-img").style.transform = "scale(1.01)";
})

document.querySelector(".geek").addEventListener("mouseout",function(event){
    document.querySelector(".pill-1").style.backgroundColor = "#1D1D1D";
    document.querySelector(".arrow-1").style.color = "#fff";
    document.querySelector(".portfolio-img").style.transform = "scale(1)";
})

document.querySelector(".luxury").addEventListener("mouseover",function(event){
    document.querySelector(".pill-2").style.transition = "330ms ease-in-out";
    document.querySelector(".pill-2").style.backgroundColor = "#373737";
    document.querySelector(".arrow-2").style.color = "#373737";
    document.querySelector(".arrow-2").style.transition = "330ms ease-in-out";
    document.querySelector(".portfolio-img-2").style.transform = "scale(1.01)";
})

document.querySelector(".luxury").addEventListener("mouseout",function(event){
    document.querySelector(".pill-2").style.backgroundColor = "#1D1D1D";
    document.querySelector(".arrow-2").style.color = "#fff";
    document.querySelector(".portfolio-img-2").style.transform = "scale(1)";
})

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("inputEmail4").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("floatingTextarea2").value;
    
    if(name && email && subject && message) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});



  window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  });




// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//       document.getElementById("second-line").style.visibility = "visible";
//     }, 2000); // Match this delay to the duration of the first typing animation
//   });
  

// document.querySelector(".partner").addEventListener("mouseover",function(event){
//     document.querySelector(".pill-3").style.transition = "330ms ease-in-out";
//     document.querySelector(".pill-3").style.backgroundColor = "#373737";
//     document.querySelector(".arrow-3").style.color = "#373737";
//     document.querySelector(".arrow-3").style.transition = "330ms ease-in-out";
//     document.querySelector(".portfolio-img-3").style.transform = "scale(1.01)";
// })

// document.querySelector(".partner").addEventListener("mouseout",function(event){
//     document.querySelector(".pill-3").style.backgroundColor = "#1D1D1D";
//     document.querySelector(".arrow-3").style.color = "#fff";
//     document.querySelector(".portfolio-img-3").style.transform = "scale(1)";
// })

// document.querySelector(".gallery").addEventListener("mouseover",function(event){
//     document.querySelector(".pill-4").style.transition = "330ms ease-in-out";
//     document.querySelector(".pill-4").style.backgroundColor = "#373737 ";
//     document.querySelector(".arrow-4").style.color = "#373737 ";
//     document.querySelector(".arrow-4").style.transition = "330ms ease-in-out";
//     document.querySelector(".portfolio-img-4").style.transform = "scale(1.01)";
// })

// document.querySelector(".gallery").addEventListener("mouseout",function(event){
//     document.querySelector(".pill-4").style.backgroundColor = "#1D1D1D";
//     document.querySelector(".arrow-4").style.color = "#fff";
//     document.querySelector(".portfolio-img-4").style.transform = "scale(1)";
// })