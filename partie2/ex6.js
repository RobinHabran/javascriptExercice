// fonction qui prend en parametre une image et qui lui change la source, afin de changer d'image
  function modifiedImg(image){
    image.src = image.id + '_2.jpg';
  }
// fonction qui permet de remettre l'image de base
  function modifiedImgBack(image){
    image.src = image.id + '.jpg';
  }

  function modifiedImgOnAndOut(image , event) {
    if (event.type = 'mouseover') {
      image.src = image.id + '_2.jpg';
    }else {
      image.src = image.id + '.jpg'
    }
  }
