// undo and redo

let drawingHistory =[];
let pathCount = 0;


const  undo = document.getElementById("undo");
const  redo = document.getElementById("redo");

undo.addEventListener("click",onUndo);
redo.addEventListener("click",onRedo);

function onUndo(){
    if(pathCount){
       drawingHistory.pop();
       pathCount--;
       if(pathCount == 0){
            canvas.clearRect(0,0,theCanvas.width,theCanvas.height);
       }else{
        canvas.putImageData(drawingHistory[pathCount-1],0,0);
       }
       
    }
}
function onRedo(){
    
}


// circle , square and eraser

const actions = {
    circle : false,
    rectangle : false,
    eraser : false,
}


const actionButtons = document.querySelectorAll("#actionButtons > .btn");
console.log(actionButtons);

function onActionClick(element){
    const actionName = element.id;
    actionButtons.forEach(btn => {
        // btn.classList.remove("active");
        if(btn.classList.contains("active") && btn.id !== actionName){
            btn.classList.remove("active");
        }
    })
    element.classList.toggle("active");
    actionButtons.forEach(btn => {
        const isActive = btn.classList.contains("active")
        actions[btn.id] = isActive;
    })
    console.log(actions);
}