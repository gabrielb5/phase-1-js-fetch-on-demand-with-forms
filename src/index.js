const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    

});

const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);