let addNote=document.getElementById("addNote");

addNote.addEventListener('click',(e)=>{
    let inpTxt = document.getElementById('inpTxt');
    let inpTitle = document.getElementById('inpTitle');

    if(inpTxt.value==null || inpTitle.value==""){
        alert("Enter details of note");
    }
    else{
        
    }
}
)