document.getElementById('btn').addEventListener('click', registerUser);
// document.getElementById('btn').addEventListener('click', appendInList);




function registerUser(e){

    e.preventDefault();

    
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value


    let myObj = {
        'name' : name,
        'mail' : mail,
        'phone' : phone,
        'date' : date,
        'time' : time
    }



    let serialized = JSON.stringify(myObj);
    localStorage.setItem(mail, serialized)
    console.log(localStorage.getItem(mail));

    appendInList();          // if we do not want to use eventlistener again

    
    
}





function appendInList(e){

    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    let myObj = {
        'name' : name,
        'mail' : mail,
        'phone' : phone,
        'date' : date,
        'time' : time
    }

    // creating list-item
    let new_ele = document.createElement('li')
    new_ele.className = 'list-item';
    
    // creating text of list-item
    let textNode =  document.createTextNode(JSON.stringify(myObj));
    

    // appendChild works on node

    // creating delete button of list-item
    let delBtn = document.createElement('input')
    delBtn.type = 'button';
    delBtn.value = 'DELETE';
    delBtn.style.background = 'lightblue';
    
    delBtn.onclick = (obj) => {
        localStorage.removeItem(obj.mail)
        document.getElementById('list').removeChild(new_ele);
    }
   

    // new_ele.insertBefore(delNode, new_ele.lastChild.nextSibling)

    new_ele.appendChild(textNode)
    new_ele.appendChild(delBtn);
    document.getElementById('list').appendChild(new_ele);




}

























