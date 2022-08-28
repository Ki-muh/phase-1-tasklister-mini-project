document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    addTask(event.target.new-task-description.value);
    form.reset();
  })

//
  function addTask(event) {
  li = document.createElement('li');
  li.innerText = event;

  document.getElementById('tasks').appendChild('li');
  li.remove();
  }
  let btn = document.createElement('button');
  li.appendChild(btn);
  removeTask(btn);
//
  function removeTask(event) {
    event.addEventListener('click', () => e.parentNode.remove());
  }
});
