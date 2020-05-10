const data = [{
  folder: true,
  title: 'Pictures',
  children: [{
      title: 'logo.png'
    },
    {
      folder: true,
      title: 'Vacations',
      children: [{
        title: 'spain.jpeg'
      } ]
    }
  ]
},
{
  folder: true,
  title: 'Desktop',
  children: [{
    folder: true,
    title: 'screenshots',
    children: null
  } ]
},
{
  folder: true,
  title: 'Downloads',
  children: [{
      folder: true,
      title: 'JS',
      children: null
    },
    {
      title: 'nvm-setup.exe'
    },
    {
      title: 'node.exe'
    }
  ]
},
{
  title: 'credentials.txt'
}
];

const rootNode = document.getElementById('root');
let nodeToAttach;

function createFolderNode(parentNode, folderName) {
let folderNode = document.createElement('div');
parentNode.append(folderNode);
folderNode.classList.add('folder', 'toggle');

let folderText = document.createElement('span');
folderText.innerHTML = folderName;
folderNode.appendChild(folderText);
folderText.classList.add('folder');

nodeToAttach = folderNode

return nodeToAttach;
}

function createFileNode(parentNode, fileName) {
let fileNode = document.createElement('div');
parentNode.append(fileNode);
fileNode.classList.add('file');

let fileText = document.createElement('span');
fileText.innerHTML = fileName;
fileNode.appendChild(fileText);
fileText.classList.add('file');

nodeToAttach = fileNode;

return nodeToAttach;
}

function iconForNode(typeOfNode, nodeToAttach) {
let icon = document.createElement('i');
nodeToAttach.prepend(icon);
icon.classList.add('material-icons');
typeOfNode === 'folder' ?
  (icon.innerHTML = 'folder', icon.classList.add('folder')) :
  (icon.innerHTML = 'insert_drive_file', icon.classList.add('file'));
}

function renderTree(parentNode, array) {
array.forEach((node) => {
  node.folder ?
    (createFolderNode(parentNode, node.title),
      iconForNode('folder', nodeToAttach)) :
    (createFileNode(parentNode, node.title),
      iconForNode('file', nodeToAttach));

  if (node.children) {
    array = node.children;
    renderTree(nodeToAttach, array);
  }
});
}

renderTree(rootNode, data);

let folderElements = document.getElementsByClassName('folder');
for (let elem of folderElements) {
elem.addEventListener('click', toggleFolder);
}

function toggleFolder(event) {
event.stopPropagation();
if (event.target.classList.contains('folder')) {
  if (event.target.classList.contains('file')) {
    event.preventDefault();
  } else {
    event.target.tagName === 'DIV' ?
      event.target.classList.toggle('toggle') :
      event.target.parentNode.classList.toggle('toggle');
  }
}
let parentNode;
event.target.tagName === 'DIV' ?
  parentNode = event.target.children :
  parentNode = event.target.parentNode.children;
let arrayOfTags = [];
let folder = false;

for (let elem of parentNode) {
  arrayOfTags.push(elem.tagName);
  if (elem.tagName === 'I' && elem.classList.contains('folder')) {
    folder = true;
  }
}
if (folder && !arrayOfTags.includes('DIV')) {
  let emptyFolder = document.createElement('div');
  emptyFolder.innerHTML = 'Folder is empty';
  event.target.parentNode.append(emptyFolder);
  emptyFolder.classList.add('empty');
  event.target.classList.toggle('toggle');
}

let toggleFolderIcon;
event.target.tagName === 'DIV' ?
  toggleFolderIcon = event.target :
  toggleFolderIcon = event.target.parentNode;

if (toggleFolderIcon.classList.contains('folder')) {
  toggleFolderIcon.children[0].innerHTML === 'folder' ?
    toggleFolderIcon.children[0].innerHTML = 'folder_open' :
    toggleFolderIcon.children[0].innerHTML = 'folder';
}
}

let tree = rootNode.childNodes;

for (let elem of tree) {
elem.addEventListener('mouseover', addBackground);
elem.addEventListener('mouseout', removeBackground);
elem.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
}, false);
elem.addEventListener('contextmenu', contextMenu);
}

function addBackground(event) {
let toggleBackground;
event.target.tagName === 'DIV' ?
  toggleBackground = event.target :
  toggleBackground = event.target.parentNode;

if (toggleBackground.children[0]) {
  toggleBackground.children[0].classList.add('background');
  toggleBackground.children[1].classList.add('backgroundEnlargen');
}
}

function removeBackground(event) {
let toggleBackground;
event.target.tagName === 'DIV' ?
  toggleBackground = event.target :
  toggleBackground = event.target.parentNode;

if (toggleBackground.children[0]) {
  toggleBackground.children[0].classList.remove('background');
  toggleBackground.children[1].classList.remove('backgroundEnlargen');
}
}

function contextMenu(event) {
let positionX = `${event.clientX}px`;
let positionY = `${event.clientY}px`;

let menuWrapperExist = document.getElementById('menu-wrapper');

if (menuWrapperExist === null) {
  renderMenu(positionX, positionY);
} else {
  rootNode.removeChild(menuWrapperExist);
  renderMenu(positionX, positionY);
}

function renderMenu(positionX, positionY) {
  let contextMenuWrapper = document.createElement('div');
  contextMenuWrapper.classList.add('context-menu-wrapper');
  contextMenuWrapper.setAttribute('id', 'menu-wrapper')
  rootNode.append(contextMenuWrapper);

  let contextMenuItemEdit = document.createElement('div');
  contextMenuItemEdit.innerHTML = 'Edit';
  contextMenuWrapper.appendChild(contextMenuItemEdit);
  contextMenuItemEdit.classList.add('edit');

  let contextMenuItemDelete = document.createElement('div');
  contextMenuItemDelete.innerHTML = 'Delete';
  contextMenuWrapper.appendChild(contextMenuItemDelete);
  contextMenuItemDelete.classList.add('delete');

  contextMenuWrapper.style.left = positionX;
  contextMenuWrapper.style.top = positionY;
}
}

rootNode.addEventListener('click', removeContextMenu, true);

function removeContextMenu(event) {
let menuWrapperExist = document.getElementById('menu-wrapper');
if (event.button === 0) {
  if (menuWrapperExist) {
    rootNode.removeChild(menuWrapperExist);
  }
}
}

rootNode.addEventListener('mouseover', processItem, true);

function processItem(event) {
if (event.target.tagName === 'SPAN') {
  let currentNodeTree = event.target;
  currentNodeTree.addEventListener('contextmenu', (event) => {

    setTimeout(() => {
      let contextMenu = document.getElementById('menu-wrapper');
      let currentNode = event.target;
      currentNode.classList.add('backgroundEnlargen');
      contextMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit')) {
          currentNode.setAttribute('contenteditable', 'true');
        }
        if (event.target.classList.contains('delete')) {
          currentNode.parentNode.remove();
        }
      });
    }, 0);
  });
}
}
