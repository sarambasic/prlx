$( document ).ready(function() {
  var scene = document.getElementById('js-prlx');
  var input = document.getElementById('js-prlx-input');

  var parallax = new Parallax(scene, {
    hoverOnly: true,
    relativeInput: true,
    inputElement: input
  });
})