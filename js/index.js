document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, [
        
    ]);
    var elems2 = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems2, {
      direction:'bottom',
});
  });