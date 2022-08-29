document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    addTask(event.target.new_task_description.value);
    form.reset();
  })

//
  function addTask(event) {
  let list = document.createElement('li');
  list.innerText = event;
  let btn = document.createElement('button');
  btn.textContent = ' x';
  list.appendChild(btn);
  btn.addEventListener('click', removeTask);

  document.getElementById('tasks').appendChild(list);
  }
//
  function removeTask(event) {
    event.target.parentNode.remove();
  }
});
