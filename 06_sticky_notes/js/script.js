const containerElement=document.getElementById("container");
const btnAdd=document.getElementsByClassName("btn-add")[0];


function getAppStorage(){
  return JSON.parse(localStorage.getItem("joes-app") || "[]");
}

getAppStorage().forEach(element => {
  const textElement=createTextElement(element.id,element.content);
  containerElement.insertBefore(textElement,btnAdd);
});

function createTextElement(id,content){
const textElement=document.createElement('textarea');
textElement.classList.add('sticky');
textElement.value=content;
textElement.placeholder='Enter Your Notes';

textElement.addEventListener("change",()=>{
  updateNote(id,textElement.value);
});

textElement.addEventListener("dblclick",()=>{
  const check=confirm("Are You Sure to Delete ?");
  if(check){
    deleteNotes(id,textElement);
  }
});

return textElement;

}

//Add New Sticky Note
function addSticky(){
  const notes=getAppStorage();
  const noteObject={
    id:Math.floor(Math.random()*100000),
    content:""
  }
  const textElement= createTextElement(noteObject.id,noteObject.content);
  containerElement.insertBefore(textElement,btnAdd);
  notes.push(noteObject);
  saveNotes(notes);
}

btnAdd.addEventListener('click',()=>addSticky());


function saveNotes(notes){
  localStorage.setItem("joes-app",JSON.stringify(notes));
}

//Update Sticky Note
function updateNote(id,content){
  const notes=getAppStorage();
  const updateElement=notes.filter((note)=>note.id==id)[0];
  updateElement.content=content;
  saveNotes(notes);
}



function deleteNotes(id,textElement){
  const notes=getAppStorage().filter((note)=>note.id!=id);
  saveNotes(notes);
  containerElement.removeChild(textElement);
}