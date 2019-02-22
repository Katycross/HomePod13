

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


