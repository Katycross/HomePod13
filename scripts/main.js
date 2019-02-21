

var albums = document.querySelectorAll('.Main__content__slider__item')


var count = 0

for (var i = 0; i < albums.length; i++) {
  
  var album = albums[i]
  
  albums[i].style.transform = 'translateX(-' +  count + 'vw)'
  
  moveAlbum (i)
}

window.setInterval(function() {
  console.log(count)
  if (count > 20 * albums.length / 1.8) {
    count = 0
  } else {
    count = count + 10
  }
}, 1000)

function moveAlbum (i) {
  window.setInterval(function() {
    albums[i].style.transform = 'translateX(-' +  count + 'vw)'
  }, 1000)
}






const list=document.querySelectorAll('.list')

for (let i = 0; i < list.length; i++) {
list[i].addEventListener(
  'click',
  function(){ //qd fait la fonctions fait les instructions suivantes
    if (this.classList.contains('is-open')){
      this.classList.remove('is-open')// element ou vous avais ms le is-open
    }
    else {
      let temp = document.querySelector('.is-open') //regarde si autre class is-open
      if (temp != null){ //different de null veut dire que il na ie trouvé qui est en is-open
        temp.classList.remove('is-open')
      }
      this.classList.add('is-open') //ajouter la classlist is-open a faqItem[i] // this = l'elelement en cours sur lequel il y a l'evenement (faqItem[i])
    }
  }
)
}