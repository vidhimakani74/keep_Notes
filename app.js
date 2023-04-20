let addNote=document.getElementById("addNote");

showNotes();

addNote.addEventListener('click',(e)=>{
    let inpTxt = document.getElementById('inpTxt');
    let inpTitle = document.getElementById('inpTitle');

    if(inpTxt.value==null || inpTitle.value==""){
        alert("Enter details of note");
    }
    else{
        let myTitle=localStorage.getItem("myTitle");
        let myNotes = localStorage.getItem("myNotes");

        if (myTitle == null) {
            titleObj = [];
        } 
        else {
            titleObj = JSON.parse(myTitle);
        }

        if (myNotes == null) {
            noteObj = [];
        } 
        else {
            noteObj = JSON.parse(myNotes);
        }

        titleObj.push(inpTitle.value);
        noteObj.push(inpTxt.value);

        localStorage.setItem('myTitle', JSON.stringify(titleObj));
        localStorage.setItem('myNotes', JSON.stringify(noteObj));

        inpTxt.value = "";
        inpTitle.value = "";
    }

    showNotes();
}
);

function showNotes(){

    let notes =document.getElementById("notes");

    let myTitle=localStorage.getItem("myTitle");
    let myNotes=localStorage.getItem("myNotes");

    if (myTitle == null) {
        titleObj = [];
    } 
    else {
        titleObj = JSON.parse(myTitle);
    }

    if (myNotes == null) {
        noteObj = [];
    } 
    else {
        noteObj = JSON.parse(myNotes);
    }

    let html = "";
    Object.keys(titleObj).forEach(function (element, key) {
        html += `
                    <div class="card mx-2 my-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${titleObj[element]}</h5>
                            <p class="card-text">${noteObj[element]}</p>
                            <button id="${noteObj[key]}" onclick="delNote(this.id);" class="btn btn-primary">Delete Note</button>
                        </div>
                   </div>
                `;
    });

    if (noteObj.length != 0) {
        notes.innerHTML = html;
    } else {
        notes.innerHTML = `Nothing to Show, Enter "Some Notes" To Show Content 📒`;
    }
}

function delNote(index){
    let myNotes = localStorage.getItem("myNotes");
    let myTitle = localStorage.getItem("myTitle");

    if (myNotes == null) {
        noteObj = [];
    } 
    else {
        noteObj = JSON.parse(myNotes);
    }

    if (myTitle == null) {
        titleObj = [];
    } 
    else {
        titleObj = JSON.parse(myTitle);
    }

    noteObj.splice(index, 1);
    titleObj.splice(index, 1);

    localStorage.setItem("myNotes", JSON.stringify(noteObj));
    localStorage.setItem("myTitle", JSON.stringify(titleObj));

    showNotes();
}

let inpSearch = document.getElementById('inpSearch');

inpSearch.addEventListener('input', () => {

    let inpValue = inpSearch.value.toLowerCase();
    let card = document.getElementsByClassName('card');

    Array.from(card).forEach((element) => {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inpValue)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });

});

