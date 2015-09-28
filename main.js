//start drag of element
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
//allow drop of element
function allowDrop(ev) {
    ev.preventDefault();
}
//drag of element
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//variable for generating unique task id
var randomId = 0;

//add a new task 
function addCard() {
    
    var title = document.getElementById('addtask').value;
    //verifying task description
    if(title.length>0){

        var itm = document.getElementById("item2");
        var cln = itm.cloneNode(true); 
        //cloning the card
        cln.id = "unique" + ++randomId;
        //generating unique id
        cln.childNodes[3].innerText = title;
        //attaching task to to do board
        document.getElementById('todo').appendChild(cln);
    }
    else{
         alert("Please Add Task");
    }
}
 //Deletion Of task 
function removeCard(removeCardId){
    var cardElement = removeCardId.parentNode.parentNode;
    cardElement.remove();
}
