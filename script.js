let list = document.querySelector('.block--ul');
let items = list.children;
let infoMess = document.querySelector('.info--p');
let listElement = document.querySelector('.form--add');
let formInput = listElement.querySelector('.text--input');
let templet = document.querySelector('#temp--teg').content;
console.log(templet)
let inputTemp = templet.querySelector('.block--li');
let inputUl;

let message = function(){
    if(items.length === 0){
       infoMess.textContent = 'Новых задач нет'
        
    }else{
        infoMess.textContent = 'Нажми чтоб убрать задачу '
    }
}
let addCheck = function(item){
    let checkbox = item.querySelector('.checkbox');
    checkbox.addEventListener('change', function ()     {
       item.remove();
       message()
    })
}

for(let i = 0 ; i < items.length; i++){
    addCheck(items[i]);
  
}

listElement.addEventListener('submit', function(evt){
    evt.preventDefault();
    let textOut = formInput.value;
    let task = inputTemp.cloneNode(true)
    let tegSpan = task.querySelector('.block--span');
    tegSpan.textContent = textOut;

    addCheck(task);
    list.appendChild(task);
    message();
    formInput.value = '';
    
    
})




