const dragItems = document.querySelectorAll('.dragItem');
const dropZones = document.querySelectorAll('.dropZone');



dragItems.forEach(dragItem => {
   dragItem.addEventListener('dragstart', handleDragStart);
   dragItem.addEventListener('dragend', handleDragEnd);
   dragItem.addEventListener('drag', handleDrag);
});

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter', dragEnterHandler);
    dropZone.addEventListener('dragleave', dragLeaveHandler);
    dropZone.addEventListener('dragover', dragOverHandler);
    dropZone.addEventListener('drop', dropHandler);
});


function handleDragStart(event) {
    event.dataTransfer.setData("dragItem", this.getAttribute('id'));
    this.classList.add('dragItem_active');
}

function handleDragEnd(event) {
    this.classList.remove('dragItem_active');
}

function handleDrag(event) {

}


function dragEnterHandler(event) {
    event.preventDefault();
    this.classList.add('dropZone--active');
    //console.log('dragender', this);
}

function dragLeaveHandler(event) {
    this.classList.remove('dropZone--active');
    //onsole.log('dragleave', this);
}

function dragOverHandler(event) {
    event.preventDefault();
    //console.log('dragover', this);
}

function dropHandler(event) {
    let draggedElement = document.getElementById(event.dataTransfer.getData("dragItem"));
    this.appendChild(draggedElement);
    console.log('сбросили вот этот элемент ', draggedElement);
}

