let inpTask=document.querySelector('#inptask');
let btnTask=document.querySelector('#btntasks');
let ul=document.querySelector('ul');

btnTask.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=inpTask.value;
    item.classList.add('li')


    let delBtns=document.createElement("button");
    delBtns.classList.add('delete');
    delBtns.innerText="X";
    item.appendChild(delBtns);
    ul.appendChild(item);
    inpTask.value="";
});

ul.addEventListener('click', function(event){        //event deligation 
    if(event.target.nodeName== "BUTTON"){
       let listItem=event.target.parentElement;
       listItem.remove();
      

    }
})