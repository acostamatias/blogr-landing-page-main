document.querySelector('#burger').addEventListener('click', function() {
  if (document.querySelector('#burger').className == 'icon-burger') {
    document.querySelector('#burger').className = 'icon-close'
    document.querySelector('#menu').className = 'bg-white visible'
  }else {
    document.querySelector('#burger').className = 'icon-burger'
    document.querySelector('#menu').className = 'none'
  }
})

const showMenu = (id) => {
  if (document.querySelector(`#colapse${id}`).className == 'none') {
    document.querySelector(`#colapse${id}`).className = 'visible'
    document.querySelector(`#arrow${id}`).className = 'arrow-up'
  }else {
    document.querySelector(`#colapse${id}`).className = 'none'
    document.querySelector(`#arrow${id}`).className = 'arrow-down'
  }
}
