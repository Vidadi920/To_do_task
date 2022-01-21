let addText = document.getElementById('inpTask');
let buttonTask = document.getElementById('btnTask');
let newTask = document.getElementById('ulTask');

buttonTask.addEventListener('click',()=> {
    if (addText === '') 
    return 
    createDeleteElement(addText.value)
    addText.value = '';
} ); 

function createDeleteElement(value) {
    const li = document.createElement('li');
    li.className = 'li';
    li.textContent = value;
    const deleteButton = document.createElement('button');
    deleteButton.className = 'button';
    deleteButton.textContent = 'Удалить';
    li.append(deleteButton);
    deleteButton.addEventListener('click',()=>{
        newTask.removeChild(li);
    })
    li.addEventListener('click',()=>{
        li.classList.toggle('li-active');
    })
    newTask.append(li);
};

