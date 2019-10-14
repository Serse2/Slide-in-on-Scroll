function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const slideIn = document.querySelectorAll('.slide-in')

function smooth(e){
    //loop over every img
    slideIn.forEach(slideIn =>{
      //metà dell'immagine
      const slideInAt = (window.scrollY + window.innerHeight) - slideIn.height / 2
      //fondo dell'immagine
      const slideBottom = slideIn.offsetTop + slideIn.height

      const isHalfShow = slideInAt > slideIn.offsetTop
      const isNotScrolledPast = window.scrollY < slideBottom

      if (isHalfShow && isNotScrolledPast){
        slideIn.classList.add('active')
      }else{
        slideIn.classList.remove('active')
      }

      console.log(slideInAt)
    })
}

//ad ogni scroll della pagina avvia la funzione smooth
window.addEventListener('scroll', debounce(smooth))