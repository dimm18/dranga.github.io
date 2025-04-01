document.addEventListener("DOMContentLoaded", function () {
  const alertButton = document.getElementById("alert-trigger");
  const alertBox = document.getElementById("example");

  alertButton.addEventListener("click", function () {
      alertBox.textContent = "Alerte déclenchée !";
      alertBox.setAttribute("role", "alert"); // Rendre l'alerte accessible
  });
});

