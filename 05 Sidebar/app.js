const toggleBtn = document.querySelector(".side-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

/* add eventlistener on click*/
toggleBtn.addEventListener('click', function(){
    console.log(sidebar.classList);
    sidebar.classList.toggle("show-sidebar");
});