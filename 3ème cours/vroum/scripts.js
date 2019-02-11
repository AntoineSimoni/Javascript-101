'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg']; // On site les formats acceptable
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
const dropZone = document.querySelector('#js-drop-to'); // On défini la constante zone de drop
const filesList = document.querySelector('#js-file-list'); // ON défini la constante de fichier

dropZone.addEventListener('USE_CORRECT_EVENT_HERE', (e) => onDragOver(e)); // on rend draggable
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', (e) => onDrop(e)); // on rend droppable
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(true)); // on change l'état selon si c'est actif ou non
dropZone.addEventListener('USE_CORRECT_EVENT_HERE', () => changeDropZoneState(false)); // on change l'état selon si c'est actif ou non

function onDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
}

function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  filesList.innerHTML = '';
  const filesUploaded = Array.from(e.dataTransfer.files);
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
  changeDropZoneState(false);
}

function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) : // on avertit que l'upload du fichier a échoué
    filesList.appendChild(createListEl(file, index));
}

function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) { // on génère une erreur si la taille du fichier est supérieure a la taille max prévue
    return 'Your image is too big'; // on retourne un message indiquant l'erreur
  } else if (!ACCEPTED_FORMATS.includes(file.type)) { //on génère une erreur si le format envoyé n'est pas parmis les formats accéptés
    return 'Image of this format is not accepted'; // on retourne un message indiquant l'erreur
  } else {
    return;
  }
}