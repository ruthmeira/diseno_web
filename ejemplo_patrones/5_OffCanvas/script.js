(function () {
  var mainPanel = document.getElementById("mainPanel");
  var sidePanel = document.getElementById("sidePanel");

  var hammerPanel = new Hammer(mainPanel);

  hammerPanel
    .on("swiperight", function () {
      sidePanel.classList.toggle("open");
    })
    .on("swipeleft", function () {
      sidePanel.classList.toggle("open");
    });
})();
