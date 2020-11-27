$(function () {

  //On click update the devoured status to true
  $(".devour-burger").on("click", function (event) {
    const id = $(this).data("id");
    const justEaten = $(this).data("eatentime");

    const eatenState = {
      devoured: justEaten
    };

    // Send the PUT request
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //Add new burger on form submit
  $(".create-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#newBurgerName").val().trim(),
      devoured: "0"
    };

    // Send the POST request
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});