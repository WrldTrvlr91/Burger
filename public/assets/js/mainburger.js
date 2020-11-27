$(function() {

//Devour burger
$(".devour-burger").on("click", function(event) {
    let id = $(this).data("id");
    let justEaten = $(this).data("eatentime");
    
    let eatenState = {
        devoured: justEaten
    };
    console.log(justEaten);
    console.log(eatenState);
  
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});