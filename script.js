const paragraph = document.getElementById('paragraph');
const form = document.forms['my-first-form'];
const entry = form.elements['user-entry'];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (entry.value.toLowerCase() === 'golf') {
    paragraph.textContent = 'Golf Cart Driver'
  } else {
    paragraph.textContent = 'Basket Weaver'
  }
})