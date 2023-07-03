
const button = document.getElementById('add_task');
button.addEventListener('click', addTask);
function addTask() {
    console.log(button);
    const input = document.getElementById('enter_task');
    console.log(input.value)
    const list = document.getElementById('list');
    console.log(list)
    const task = document.createElement('li');
    task.innerHTML = input.value;
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'remove';
    removeBtn.classList.add('remove');
    task.append(removeBtn);
    console.log(task);
    list.append(task);
    input.value = '';
}
const ul = document.getElementById('list');
ul.addEventListener('click', deleteTask);
function deleteTask(event) {
    const  el = event.target;
    if(el.classList.contains('remove')) {
        console.log(el);
        console.log(el.parentNode);
        el.parentNode.remove();
        console.log(el)
    }
    
}





