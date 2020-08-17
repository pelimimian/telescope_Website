/*Its important to add Add External Scripts resources for jquery or other libraries for the functionalities to work*/

/*Don't add onClick inline javascript in the button type use below instead. This way it keeps HTML/CSS/JS seperatly. Plus, this works better too, its more responsive*/
/*The correct format for using document.getElementById('name of ID') DON'T ADD THE #! The javascript will not understand it.*/

/*When Contact Button is clicked on, the page will scroll down to the Email section*/
document.getElementById("Contact_Button").onclick = scrollWindow(
  "#Contact_Button",
  "#Email_Container"
);

/*When Telescope Button is clicked on, the page will scroll down to the telescopes section*/
document.getElementById("Telescope_Button").onclick = scrollWindow(
  "#Telescope_Button",
  "#Telescope_Products_Container"
);

/*When Video Button is clicked on, the page will scroll to video button section*/
document.getElementById("Video_Button").onclick = scrollWindow(
  "#Video_Button",
  "#Video_Description"
);

/*When Home Button is clicked on, the page will scroll to the top*/
document.getElementById("Home_Button").onclick = scrollToTheTop("#Home_Button");
/*Refactored scrolling functionality so instead of having mulitple click functions, now I can just have one*/
function scrollWindow(idTrigger, idDestination) {
  $(idTrigger).click(function() {
    $("html,body").animate(
      {
        scrollTop: $(idDestination).offset().top - 110
      },
      500
    );
  });
}

/*Scrolls to the top of the page*/
function scrollToTheTop(idTrigger) {
  $(idTrigger).click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });
}
