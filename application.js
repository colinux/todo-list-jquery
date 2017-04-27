$(document).ready(function() {
  $("#new-task").on("keyup", function(event) {
    if (event.keyCode == 13) {
      var task = $("#new-task").val();

      var item = '<div class="item todo">'
        + '<i class="fa fa-square-o"></i>'
        + '<i class="fa fa-check-square"></i>'
        + ' <span class="task">' + capitalizeFirstLetter(task) + '</span>'
        + '<i class="fa fa-times pull-right"></i>'
      + '</div>';

      $("#todo-list").prepend(item);

      $("#new-task").val("");
    }
  });


  $("#todo-list").on("click", ".fa-square-o", function(event) {
    $(this)
      .parent()
      .removeClass("todo")
      .addClass("done")
      .remove()
      .appendTo($("#todo-list"));
  });

  $("#todo-list").on("click", ".fa-check-square", function(event) {
    $(this)
      .parent()
      .addClass("todo")
      .removeClass("done")
      .remove()
      .prependTo($("#todo-list"));
  });

  $("#todo-list").on("click", ".fa-times", function(event) {
    $(this)
      .parent()
      .remove();
  });

  // TODO : éditer le texte d'une task en double-cliquant sur le texte
  // TODO : utiliser une petite animation (slideDown ou animate)
  //        lorsqu'on insère une nouvelle tache
  // TODO : à chaque nouvelle task, envoyer *toutes* les tasks en AJAX
  //        à une mini-appli rails qui les sauvegardera dans un fichier
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
