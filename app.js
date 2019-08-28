const button = document.querySelector('#click-me');
button.addEventListener('click', event => {
    event.target.innerText = 'Do not click';
    console.log(event);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })