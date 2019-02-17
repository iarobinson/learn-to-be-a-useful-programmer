window.onload = init;
function init() {
  var listOfCollaborators = [
    "Delagulater88",
    "Burak Bayindirli",
    'Ian'
  ];

  console.log("Thanks to those who built this:")
  listOfCollaborators.forEach(function(ele) {
    console.log(ele);
  });
}
