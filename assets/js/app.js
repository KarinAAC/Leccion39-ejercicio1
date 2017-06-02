var slider = $('#slider');
var prev= $('#btn-prev');
var sig= $('#btn-next');

$('#slider section:last').insertBefore('#slider section:first');
slider.css('margin-left', '-'+100+'%')

function moverSiguiente() {
    slider.animate({"margin-left":'-' +200+'%'},700,function(){
      $('#slider section:first').insertAfter('#slider section:last');
      slider.css('margin-left', '-'+100+'%')

  });
}
sig.on('click', function () {
  moverSiguiente();
});

function moverPrevio() {
    slider.animate({"margin-left":0},700,function(){
      $('#slider section:last').insertBefore('#slider section:first');
      slider.css('margin-left', '-'+100+'%')

  });
}
prev.on('click', function () {
  moverPrevio();
});
