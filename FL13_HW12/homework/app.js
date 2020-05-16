const root = document.getElementById('root');
const booksListWrapper = document.createElement('div');
const sectionNameList = document.createElement('h3');
const booksActionWrapper = document.createElement('div');
const sectionNameAction = document.createElement('h3');
let data, lib;

if (
  localStorage.getItem('informationAboutBookUpdated') &&
  localStorage.getItem('libraryUpdated')
) {
  data = JSON.parse(localStorage.getItem('informationAboutBookUpdated'));
  lib = JSON.parse(localStorage.getItem('libraryUpdated'));
} else {
  data = JSON.parse(localStorage.getItem('informationAboutBook'));
  lib = JSON.parse(localStorage.getItem('library'));
}

root.append(booksListWrapper, booksActionWrapper);
booksListWrapper.append(sectionNameList);
booksActionWrapper.append(sectionNameAction);

sectionNameList.innerHTML = 'A list of books';
sectionNameAction.innerHTML = 'Action for book';

booksListWrapper.classList.add('book-list');
booksActionWrapper.classList.add('book-action');

lib.forEach((bookName) => {
  const bookNode = document.createElement('div');
  const bookNodeName = document.createElement('p');
  bookNodeName.innerHTML = bookName;
  booksListWrapper.append(bookNode);
  bookNode.append(bookNodeName);
  bookNode.classList.add('book');
});

const bookCollection = document.getElementsByClassName('book');

for (let bookNode of bookCollection) {
  const editBookButton = document.createElement('button');
  editBookButton.innerHTML = 'Edit';
  bookNode.append(editBookButton);
  editBookButton.classList.add('edit-button');
}

const bookListPart = document.querySelector('.book-list');
const addBookListButton = document.createElement('button');
const activeBook = document.querySelectorAll('.book > p');

addBookListButton.innerHTML = 'Add';
bookListPart.append(addBookListButton);
addBookListButton.classList.add('add-button');

let indexURLBrowser, uidBrowser;

for (let book of activeBook) {
  book.addEventListener('click', (event) => {
    let indexURL = new URL(window.location.href);
    let bookName = event.target.childNodes[0].nodeValue;
    let uid = lib.findIndex((el) => el === bookName);
    uid++;
    uidBrowser = uid;
    if (indexURL.searchParams.get('id')) {
      indexURL.searchParams.delete('id');
    }
    indexURL.searchParams.append('id', uid);
    indexURL.hash = 'preview';
    indexURLBrowser = indexURL;
    window.history.pushState('', 'Preview mode', indexURL);
    clearPreview();
    clearEdit();
    preview(uid);
  });
}

if (window.location.hash === '#add') {
  add();
}

if (window.location.hash !== '#edit' && window.location.hash !==
  '#preview' && window.location.hash !== '' && window.location.hash !== '#add') {
  let index = window.location.pathname;
  window.location.replace(index);
}

if (window.location.hash === '#preview') {
  let book_1 = new URL(window.location.href);
  if (book_1.searchParams.get('id')) {
    book_1.searchParams.delete('id');
  }
  book_1.searchParams.append('id', 1);
  book_1.hash = 'preview';

  let book_2 = new URL(window.location.href);
  if (book_2.searchParams.get('id')) {
    book_2.searchParams.delete('id');
  }
  book_2.searchParams.append('id', 2);
  book_2.hash = 'preview';

  let book_3 = new URL(window.location.href);
  if (book_3.searchParams.get('id')) {
    book_3.searchParams.delete('id');
  }
  book_3.searchParams.append('id', 3);
  book_3.hash = 'preview';

  let book_4 = new URL(window.location.href);
  if (book_4.searchParams.get('id')) {
    book_4.searchParams.delete('id');
  }
  book_4.searchParams.append('id', 4);
  book_4.hash = 'preview';

  let book_5 = new URL(window.location.href);
  if (book_5.searchParams.get('id')) {
    book_5.searchParams.delete('id');
  }
  book_5.searchParams.append('id', 5);
  book_5.hash = 'preview';

  let book_6 = new URL(window.location.href);
  if (book_6.searchParams.get('id')) {
    book_6.searchParams.delete('id');
  }
  book_6.searchParams.append('id', 6);
  book_6.hash = 'preview';

  let book_7 = new URL(window.location.href);
  if (book_7.searchParams.get('id')) {
    book_7.searchParams.delete('id');
  }
  book_7.searchParams.append('id', 7);
  book_7.hash = 'preview';

  let book_8 = new URL(window.location.href);
  if (book_8.searchParams.get('id')) {
    book_8.searchParams.delete('id');
  }
  book_8.searchParams.append('id', 8);
  book_8.hash = 'preview';

  let book_9 = new URL(window.location.href);
  if (book_9.searchParams.get('id')) {
    book_9.searchParams.delete('id');
  }
  book_9.searchParams.append('id', 9);
  book_9.hash = 'preview';

  let book_10 = new URL(window.location.href);
  if (book_10.searchParams.get('id')) {
    book_10.searchParams.delete('id');
  }
  book_10.searchParams.append('id', 10);
  book_10.hash = 'preview';

  switch (window.location.href) {
    case book_1.href:
      clearPreview();
      preview(1);
      break;
    case book_2.href:
      clearPreview();
      preview(2);
      break;
    case book_3.href:
      clearPreview();
      preview(3);
      break;
    case book_4.href:
      clearPreview();
      preview(4);
      break;
    case book_5.href:
      clearPreview();
      preview(5);
      break;
    case book_6.href:
      clearPreview();
      preview(6);
      break;
    case book_7.href:
      clearPreview();
      preview(7);
      break;
    case book_8.href:
      clearPreview();
      preview(8);
      break;
    case book_9.href:
      clearPreview();
      preview(9);
      break;
    case book_10.href:
      clearPreview();
      preview(10);
      break;
    default:
      window.history.pushState(
        '',
        'Preview mode from browser',
        window.location.pathname
      );
  }
} else if (window.location.hash === '#edit') {
  let book_1e = new URL(window.location.href);
  if (book_1e.searchParams.get('id')) {
    book_1e.searchParams.delete('id');
  }
  book_1e.searchParams.append('id', 1);
  book_1e.hash = 'edit';

  let book_2e = new URL(window.location.href);
  if (book_2e.searchParams.get('id')) {
    book_2e.searchParams.delete('id');
  }
  book_2e.searchParams.append('id', 2);
  book_2e.hash = 'edit';

  let book_3e = new URL(window.location.href);
  if (book_3e.searchParams.get('id')) {
    book_3e.searchParams.delete('id');
  }
  book_3e.searchParams.append('id', 3);
  book_3e.hash = 'edit';

  let book_4e = new URL(window.location.href);
  if (book_4e.searchParams.get('id')) {
    book_4e.searchParams.delete('id');
  }
  book_4e.searchParams.append('id', 4);
  book_4e.hash = 'edit';

  let book_5e = new URL(window.location.href);
  if (book_5e.searchParams.get('id')) {
    book_5e.searchParams.delete('id');
  }
  book_5e.searchParams.append('id', 5);
  book_5e.hash = 'edit';

  let book_6e = new URL(window.location.href);
  if (book_6e.searchParams.get('id')) {
    book_6e.searchParams.delete('id');
  }
  book_6e.searchParams.append('id', 6);
  book_6e.hash = 'edit';

  let book_7e = new URL(window.location.href);
  if (book_7e.searchParams.get('id')) {
    book_7e.searchParams.delete('id');
  }
  book_7e.searchParams.append('id', 7);
  book_7e.hash = 'edit';

  let book_8e = new URL(window.location.href);
  if (book_8e.searchParams.get('id')) {
    book_8e.searchParams.delete('id');
  }
  book_8e.searchParams.append('id', 8);
  book_8e.hash = 'edit';

  let book_9e = new URL(window.location.href);
  if (book_9e.searchParams.get('id')) {
    book_9e.searchParams.delete('id');
  }
  book_9e.searchParams.append('id', 9);
  book_9e.hash = 'edit';

  let book_10e = new URL(window.location.href);
  if (book_10e.searchParams.get('id')) {
    book_10e.searchParams.delete('id');
  }
  book_10e.searchParams.append('id', 10);
  book_10e.hash = 'edit';

  switch (window.location.href) {
    case book_1e.href:
      clearEdit();
      edit(1);
      break;
    case book_2e.href:
      clearEdit();
      edit(2);
      break;
    case book_3e.href:
      clearEdit();
      edit(3);
      break;
    case book_4e.href:
      clearEdit();
      edit(4);
      break;
    case book_5e.href:
      clearEdit();
      edit(5);
      break;
    case book_6e.href:
      clearEdit();
      edit(6);
      break;
    case book_7e.href:
      clearEdit();
      edit(7);
      break;
    case book_8e.href:
      clearEdit();
      edit(8);
      break;
    case book_9e.href:
      clearEdit();
      edit(9);
      break;
    case book_10e.href:
      clearEdit();
      edit(10);
      break;
    default:
      window.history.pushState(
        '',
        'Preview mode from browser',
        window.location.pathname
      );
  }
}

window.addEventListener('popstate', () => {
  let backForward = new URL(window.location);

  if (backForward.hash === '') {
    clearEdit();
    clearPreview();
    window.history.pushState('', 'Initial state', backForward);
  }

  let uid = backForward.searchParams.get('id');
  let indexURLEdit = new URL(window.location.href);

  if (window.location.search) {
    if (backForward.hash === '#preview') {
      clearEdit();
      clearPreview();
      preview(uid);
    } else if (backForward.hash === '#edit') {
      clearEdit();
      clearPreview();
      edit(uid);
      let cancelButton = document.querySelector('.cancel');
      cancelButton.addEventListener('click', () => {
        if (window.confirm('Discard changes?')) {
          document.querySelector("input[name='editBookName']").value = data[uid - 1].book;
          document.querySelector("input[name='editAuthorName']").value =
            data[uid - 1].author;
          document.querySelector("input[name='editImgURL']").value = data[uid - 1].image;
          document.querySelector("input[name='editPlot']").value = data[uid - 1].plot;
          window.history.back(1);
          let backUrl = document.referrer;
          window.history.pushState('', 'Back mode', backUrl);
          clearEdit();
        }
      });

      let saveButton = document.querySelector('.save');
      saveButton.addEventListener('click', () => {
        let updatedBookName = document.querySelector(
          "input[name='editBookName']"
        ).value;
        let updatedAuthorName = document.querySelector(
          "input[name='editAuthorName']"
        ).value;
        let updatedImgURL = document.querySelector("input[name='editImgURL']")
          .value;
        let updatedPlot = document.querySelector("input[name='editPlot']")
          .value;

        lib.splice(uid - 1, 1, updatedBookName);
        localStorage.setItem('libraryUpdated', JSON.stringify(lib));

        data[uid - 1].book = updatedBookName;
        data[uid - 1].author = updatedAuthorName;
        data[uid - 1].image = updatedImgURL;
        data[uid - 1].plot = updatedPlot;
        localStorage.setItem(
          'informationAboutBookUpdated',
          JSON.stringify(data)
        );

        indexURLEdit.hash = 'preview';
        indexURLBrowser = indexURLEdit;
        window.history.pushState('', 'Edit mode', indexURLEdit);
        uid++;
        document.querySelector(`div:nth-child(${uid}) > p`).innerHTML =
          lib[uid - 2];
        uid--;

        clearEdit();
        preview(uid);

        setTimeout(() => {
          window.alert('Book successfully updated');
        }, 300);
      });
    }
  }
});

let editButton = document.querySelectorAll('.edit-button');

for (let button of editButton) {
  button.addEventListener('click', (event) => {
    let indexURLEdit = new URL(window.location.href);
    let bookName = event.target.previousSibling.innerHTML;
    let uid = lib.findIndex((el) => el === bookName);
    uid++;
    uidBrowser = uid;
    if (indexURLEdit.searchParams.get('id')) {
      indexURLEdit.searchParams.delete('id');
    }
    indexURLEdit.searchParams.append('id', uid);
    indexURLEdit.hash = 'edit';
    indexURLBrowser = indexURLEdit;
    window.history.pushState('', 'Edit mode', indexURLEdit);

    clearPreview();
    clearEdit();
    edit(uid);

    document
      .querySelector("input[name='editBookName']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        setInterval(() => {
          if (
            document.querySelector("input[name='editBookName']").value === ''
          ) {
            document
              .querySelector("input[name='editBookName']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        setInterval(() => {
          if (
            document.querySelector("input[name='editBookName']").value !== ''
          ) {
            document
              .querySelector("input[name='editBookName']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editAuthorName']").value !==
              '' &&
              document.querySelector("input[name='editImgURL']").value !== '' &&
              document.querySelector("input[name='editPlot']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    document
      .querySelector("input[name='editAuthorName']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        setInterval(() => {
          if (
            document.querySelector("input[name='editAuthorName']").value === ''
          ) {
            document
              .querySelector("input[name='editAuthorName']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        setInterval(() => {
          if (
            document.querySelector("input[name='editAuthorName']").value !== ''
          ) {
            document
              .querySelector("input[name='editAuthorName']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editBookName']").value !==
              '' &&
              document.querySelector("input[name='editImgURL']").value !== '' &&
              document.querySelector("input[name='editPlot']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    document
      .querySelector("input[name='editImgURL']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        setInterval(() => {
          if (document.querySelector("input[name='editImgURL']").value === '') {
            document
              .querySelector("input[name='editImgURL']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        setInterval(() => {
          if (document.querySelector("input[name='editImgURL']").value !== '') {
            document
              .querySelector("input[name='editImgURL']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editBookName']").value !==
              '' &&
              document.querySelector("input[name='editAuthorName']").value !==
              '' &&
              document.querySelector("input[name='editPlot']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    document
      .querySelector("input[name='editPlot']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        setInterval(() => {
          if (document.querySelector("input[name='editPlot']").value === '') {
            document
              .querySelector("input[name='editPlot']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        setInterval(() => {
          if (document.querySelector("input[name='editPlot']").value !== '') {
            document
              .querySelector("input[name='editPlot']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editBookName']").value !==
              '' &&
              document.querySelector("input[name='editAuthorName']").value !==
              '' &&
              document.querySelector("input[name='editImgURL']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    let saveButton = document.querySelector('.save');
    saveButton.addEventListener('click', () => {
      let updatedBookName = document.querySelector("input[name='editBookName']")
        .value;
      let updatedAuthorName = document.querySelector(
        "input[name='editAuthorName']"
      ).value;
      let updatedImgURL = document.querySelector("input[name='editImgURL']")
        .value;
      let updatedPlot = document.querySelector("input[name='editPlot']").value;

      lib.splice(uid - 1, 1, updatedBookName);
      localStorage.setItem('libraryUpdated', JSON.stringify(lib));

      data[uid - 1].book = updatedBookName;
      data[uid - 1].author = updatedAuthorName;
      data[uid - 1].image = updatedImgURL;
      data[uid - 1].plot = updatedPlot;
      localStorage.setItem('informationAboutBookUpdated', JSON.stringify(data));

      indexURLEdit.hash = 'preview';
      indexURLBrowser = indexURLEdit;
      window.history.pushState('', 'Edit mode', indexURLEdit);

      document.querySelector(`div:nth-child(${uid + 1}) > p`).innerHTML =
        lib[uid - 1];

      clearEdit();
      preview(uid);

      setTimeout(() => {
        window.alert('Book successfully updated');
      }, 300);
    });
  });
}

function clearPreview() {
  let removeNode = document.querySelector('div.preview-wrapper');
  if (removeNode) {
    removeNode.remove();
  }
}

function preview(uid) {
  let previewWrapper = document.createElement('div');
  let previewBookName = document.createElement('p');
  let previewAuthor = document.createElement('p');
  let previewImage = document.createElement('img');
  let previewPlot = document.createElement('div');

  booksActionWrapper.append(previewWrapper);
  previewWrapper.append(
    previewBookName,
    previewAuthor,
    previewImage,
    previewPlot
  );
  previewWrapper.classList.add('preview-wrapper');
  previewBookName.innerHTML = data[uid - 1].book;
  previewAuthor.innerHTML = data[uid - 1].author;
  previewImage.setAttribute('src', data[uid - 1].image);
  previewImage.setAttribute('alt', 'book image');
  previewImage.setAttribute('height', '250px');
  previewImage.setAttribute('width', '200px');
  previewPlot.innerHTML = data[uid - 1].plot;
}

function clearEdit() {
  let removeNode = document.querySelector('div.edit-wrapper');
  if (removeNode) {
    removeNode.remove();
  }
}

function edit(uid) {
  let editWrapper = document.createElement('div');
  editWrapper.classList.add('edit-wrapper');
  booksActionWrapper.append(editWrapper);

  let editWrapperInputBookName = document.createElement('form');
  editWrapperInputBookName.setAttribute('action', '#');
  editWrapperInputBookName.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputBookName);
  editWrapperInputBookName.classList.add('edit-book-name');

  let labelForEditBookName = document.createElement('label');
  labelForEditBookName.setAttribute('for', 'editBookName');
  labelForEditBookName.innerHTML = 'Book name:  ';
  editWrapperInputBookName.append(labelForEditBookName);

  let inputForEditBookName = document.createElement('input');
  inputForEditBookName.setAttribute('type', 'text');
  inputForEditBookName.setAttribute('name', 'editBookName');
  inputForEditBookName.setAttribute('required', '');

  inputForEditBookName.value = data[uid - 1].book;
  editWrapperInputBookName.append(inputForEditBookName);

  let editWrapperInputAuthorName = document.createElement('form');
  editWrapperInputAuthorName.setAttribute('action', '#');
  editWrapperInputAuthorName.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputAuthorName);
  editWrapperInputAuthorName.classList.add('edit-author-name');

  let labelForEditAuthorName = document.createElement('label');
  labelForEditAuthorName.setAttribute('for', 'editAuthorName');
  labelForEditAuthorName.innerHTML = 'Author name:  ';
  editWrapperInputAuthorName.append(labelForEditAuthorName);

  let inputForEditAuthorName = document.createElement('input');
  inputForEditAuthorName.setAttribute('type', 'text');
  inputForEditAuthorName.setAttribute('name', 'editAuthorName');
  inputForEditAuthorName.setAttribute('required', '');
  inputForEditAuthorName.value = data[uid - 1].author;
  editWrapperInputAuthorName.append(inputForEditAuthorName);

  let editWrapperInputImgURL = document.createElement('form');
  editWrapperInputImgURL.setAttribute('action', '#');
  editWrapperInputImgURL.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputImgURL);
  editWrapperInputImgURL.classList.add('edit-img-url');

  let labelForEditImgURL = document.createElement('label');
  labelForEditImgURL.setAttribute('for', 'editImgURL');
  labelForEditImgURL.innerHTML = 'Image URL:  ';
  editWrapperInputImgURL.append(labelForEditImgURL);

  let inputForEditImgURL = document.createElement('input');
  inputForEditImgURL.setAttribute('type', 'text');
  inputForEditImgURL.setAttribute('name', 'editImgURL');
  inputForEditImgURL.setAttribute('required', '');
  inputForEditImgURL.value = data[uid - 1].image;
  editWrapperInputImgURL.append(inputForEditImgURL);

  let editWrapperInputPlot = document.createElement('form');
  editWrapperInputPlot.setAttribute('action', '#');
  editWrapperInputPlot.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputPlot);
  editWrapperInputPlot.classList.add('edit-plot');

  let labelForEditPlot = document.createElement('label');
  labelForEditPlot.setAttribute('for', 'editPlot');
  labelForEditPlot.innerHTML = 'Plot:  ';
  editWrapperInputPlot.append(labelForEditPlot);

  let inputForEditPlot = document.createElement('input');
  inputForEditPlot.setAttribute('type', 'text');
  inputForEditPlot.setAttribute('name', 'editPlot');
  inputForEditPlot.setAttribute('required', '');
  inputForEditPlot.value = data[uid - 1].plot;
  editWrapperInputPlot.append(inputForEditPlot);

  let editButtonWrapper = document.createElement('div');
  editWrapper.append(editButtonWrapper);
  editButtonWrapper.classList.add('edit-button-wrapper');
  let editButtonSave = document.createElement('button');
  editButtonSave.innerHTML = 'Save';
  editButtonSave.classList.add('save');
  let editButtonCancel = document.createElement('button');
  editButtonCancel.innerHTML = 'Cancel';
  editButtonCancel.classList.add('cancel');

  editButtonWrapper.appendChild(editButtonSave);
  editButtonWrapper.appendChild(editButtonCancel);

  let cancelButton = document.querySelector('.cancel');
  cancelButton.addEventListener('click', () => {
    if (window.confirm('Discard changes?')) {
      document.querySelector("input[name='editBookName']").value = data[uid - 1].book;
      document.querySelector("input[name='editAuthorName']").value =
        data[uid - 1].author;
      document.querySelector("input[name='editImgURL']").value = data[uid - 1].image;
      document.querySelector("input[name='editPlot']").value = data[uid - 1].plot;
      window.history.back(1);
      let backUrl = document.referrer;
      window.history.pushState('', 'Back mode', backUrl);
      clearEdit();
    }
  });

  let saveButton = document.querySelector('.save');
  saveButton.addEventListener('click', () => {
    let updatedBookName = document.querySelector("input[name='editBookName']")
      .value;
    let updatedAuthorName = document.querySelector(
      "input[name='editAuthorName']"
    ).value;
    let updatedImgURL = document.querySelector("input[name='editImgURL']")
      .value;
    let updatedPlot = document.querySelector("input[name='editPlot']").value;

    lib.splice(uid - 1, 1, updatedBookName);
    localStorage.setItem('libraryUpdated', JSON.stringify(lib));

    data[uid - 1].book = updatedBookName;
    data[uid - 1].author = updatedAuthorName;
    data[uid - 1].image = updatedImgURL;
    data[uid - 1].plot = updatedPlot;
    localStorage.setItem('informationAboutBookUpdated', JSON.stringify(data));
    let indexURLEdit = new URL(window.location.href);
    indexURLEdit.hash = 'preview';
    indexURLBrowser = indexURLEdit;
    window.history.pushState('', 'Edit mode', indexURLEdit);

    document.querySelector(`div:nth-child(${uid + 1}) > p`).innerHTML =
      lib[uid - 1];

    clearEdit();
    preview(uid);

    setTimeout(() => {
      window.alert('Book successfully updated');
    }, 300);
  });
}

document.querySelector('button.add-button').addEventListener('click', () => {
  add();
});

let intervalBookNameEmpty, intervalBookNameNotEmpty,
  intervalAuthorNameEmpty, intervalAuthorNameNotEmpty,
  intervalURLEmpty, intervalURLNotEmpty,
  intervalPlotEmpty, intervalPlotNotEmpty;

function add() {
  clearEdit();
  clearPreview();
  let addURL = new URL(window.location);
  addURL = addURL.pathname + '#add';
  window.history.pushState('', 'Add mode', addURL);

  let editWrapper = document.createElement('div');
  editWrapper.classList.add('edit-wrapper');
  booksActionWrapper.append(editWrapper);

  let editWrapperInputBookName = document.createElement('form');
  editWrapperInputBookName.setAttribute('action', '#');
  editWrapperInputBookName.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputBookName);
  editWrapperInputBookName.classList.add('edit-book-name');

  let labelForEditBookName = document.createElement('label');
  labelForEditBookName.setAttribute('for', 'editBookName');
  labelForEditBookName.innerHTML = 'Book name:  ';
  editWrapperInputBookName.append(labelForEditBookName);

  let inputForEditBookName = document.createElement('input');
  inputForEditBookName.setAttribute('type', 'text');
  inputForEditBookName.setAttribute('name', 'editBookName');
  inputForEditBookName.setAttribute('required', '');
  editWrapperInputBookName.append(inputForEditBookName);

  let editWrapperInputAuthorName = document.createElement('form');
  editWrapperInputAuthorName.setAttribute('action', '#');
  editWrapperInputAuthorName.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputAuthorName);
  editWrapperInputAuthorName.classList.add('edit-author-name');

  let labelForEditAuthorName = document.createElement('label');
  labelForEditAuthorName.setAttribute('for', 'editAuthorName');
  labelForEditAuthorName.innerHTML = 'Author name:  ';
  editWrapperInputAuthorName.append(labelForEditAuthorName);

  let inputForEditAuthorName = document.createElement('input');
  inputForEditAuthorName.setAttribute('type', 'text');
  inputForEditAuthorName.setAttribute('name', 'editAuthorName');
  inputForEditAuthorName.setAttribute('required', '');
  editWrapperInputAuthorName.append(inputForEditAuthorName);

  let editWrapperInputImgURL = document.createElement('form');
  editWrapperInputImgURL.setAttribute('action', '#');
  editWrapperInputImgURL.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputImgURL);
  editWrapperInputImgURL.classList.add('edit-img-url');

  let labelForEditImgURL = document.createElement('label');
  labelForEditImgURL.setAttribute('for', 'editImgURL');
  labelForEditImgURL.innerHTML = 'Image URL:  ';
  editWrapperInputImgURL.append(labelForEditImgURL);

  let inputForEditImgURL = document.createElement('input');
  inputForEditImgURL.setAttribute('type', 'text');
  inputForEditImgURL.setAttribute('name', 'editImgURL');
  inputForEditImgURL.setAttribute('required', '');
  editWrapperInputImgURL.append(inputForEditImgURL);

  let editWrapperInputPlot = document.createElement('form');
  editWrapperInputPlot.setAttribute('action', '#');
  editWrapperInputPlot.setAttribute('method', 'GET');
  editWrapper.append(editWrapperInputPlot);
  editWrapperInputPlot.classList.add('edit-plot');

  let labelForEditPlot = document.createElement('label');
  labelForEditPlot.setAttribute('for', 'editPlot');
  labelForEditPlot.innerHTML = 'Plot:  ';
  editWrapperInputPlot.append(labelForEditPlot);

  let inputForEditPlot = document.createElement('input');
  inputForEditPlot.setAttribute('type', 'text');
  inputForEditPlot.setAttribute('name', 'editPlot');
  inputForEditPlot.setAttribute('required', '');
  editWrapperInputPlot.append(inputForEditPlot);

  let editButtonWrapper = document.createElement('div');
  editWrapper.append(editButtonWrapper);
  editButtonWrapper.classList.add('edit-button-wrapper');
  let editButtonSave = document.createElement('button');
  editButtonSave.innerHTML = 'Save';
  editButtonSave.classList.add('save');
  let editButtonCancel = document.createElement('button');
  editButtonCancel.innerHTML = 'Cancel';
  editButtonCancel.classList.add('cancel');

  editButtonWrapper.appendChild(editButtonSave);
  editButtonWrapper.appendChild(editButtonCancel);

  let cancelButton = document.querySelector('.cancel');
  cancelButton.addEventListener('click', () => {
    if (window.confirm('Discard changes?')) {
      document.querySelector("input[name='editBookName']").value = '';
      document.querySelector("input[name='editAuthorName']").value = '';
      document.querySelector("input[name='editImgURL']").value = '';
      document.querySelector("input[name='editPlot']").value = '';
      window.history.back(1);
      let backUrl = document.referrer;
      window.history.pushState('', 'Back mode', backUrl);
      clearEdit();
    }
  });

  let saveButton = document.querySelector('.save');
  saveButton.addEventListener('click', () => {
    let updatedBookName = document.querySelector("input[name='editBookName']").value;
    let updatedAuthorName = document.querySelector("input[name='editAuthorName']").value;
    let updatedImgURL = document.querySelector("input[name='editImgURL']").value;
    let updatedPlot = document.querySelector("input[name='editPlot']").value;

    lib.push(updatedBookName);
    localStorage.setItem('libraryUpdated', JSON.stringify(lib));

    let newBook = {};
    newBook.book = updatedBookName;
    newBook.author = updatedAuthorName;
    newBook.image = updatedImgURL;
    newBook.plot = updatedPlot;
    data.push(newBook);

    let uid = data.length;

    localStorage.setItem('informationAboutBookUpdated', JSON.stringify(data));
    let indexURLEdit = new URL(window.location.href);
    indexURLEdit.hash = 'add';
    indexURLBrowser = indexURLEdit;
    document.querySelector("input[name='editBookName']").value = '';
    document.querySelector("input[name='editAuthorName']").value = '';
    document.querySelector("input[name='editImgURL']").value = '';
    document.querySelector("input[name='editPlot']").value = '';

    const bookNode = document.createElement('div');
    const bookNodeName = document.createElement('p');
    const lastBookInList = document.querySelector(`.book-list > div:nth-child(${uid})`);
    bookNodeName.innerHTML = updatedBookName;
    bookNode.append(bookNodeName);
    bookNode.classList.add('book');
    lastBookInList.after(bookNode);

    let lastItem = JSON.parse(localStorage.getItem('libraryUpdated'));

    setTimeout(() => {
      document.querySelector(`.book-list > div:nth-child(${lastItem.length + 1}) > p`).addEventListener('click', () => {
        let indexURL = new URL(window.location.href);
        indexURL.hash = 'preview';
        if (indexURL.searchParams.get('id')) {
          indexURL.searchParams.delete('id');
        }

        let lastItemPreview = uid;
        indexURL.searchParams.append('id', lastItemPreview++);

        window.history.pushState('', 'new item preview from book list', indexURL);

        clearEdit();
        clearPreview();
        preview(uid);
      });
    }, 300);


    const editBookButton = document.createElement('button');
    editBookButton.innerHTML = 'Edit';
    bookNode.append(editBookButton);
    editBookButton.classList.add('edit-button');

    clearIntervalAdd();

    let indexURL = new URL(window.location.href);
    indexURL.hash = 'preview';
    if (indexURL.searchParams.get('id')) {
      indexURL.searchParams.delete('id');
    }
    indexURL.searchParams.append('id', uid);

    window.history.pushState('', 'new item preview', indexURL);

    clearIntervalAdd();
    clearEdit();
    preview(uid);

    document.querySelector(`.book-list div:nth-child(${lastItem.length + 1}) > button`)
      .addEventListener('click', () => {
        let indexURLEditLast = new URL(window.location);
        indexURLEditLast.hash = 'edit';
        if (indexURLEditLast.searchParams.get('id')) {
          indexURLEditLast.searchParams.delete('id');
        }
        let lastItemEdit = uid;
        indexURLEditLast.searchParams.append('id', lastItemEdit++);
        indexURLEditLast = indexURLEditLast.href;
        window.history.pushState('', 'edit new item', indexURLEditLast);
        clearPreview();
        clearEdit();
        edit(uid);
      });
  });

  if (document.querySelector("input[name='editBookName']") === '' ||
    document.querySelector("input[name='editAuthorName']").value === '' ||
    document.querySelector("input[name='editImgURL']").value === '' ||
    document.querySelector("input[name='editPlot']").value === '') {
    document.querySelector("input[name='editBookName']").classList.add('required');
    document.querySelector("input[name='editAuthorName']").classList.add('required');
    document.querySelector("input[name='editImgURL']").classList.add('required');
    document.querySelector("input[name='editPlot']").classList.add('required');
    saveButton.setAttribute('disabled', 'true');
  } else {
    saveButton.removeAttribute('disabled');
  }

  if (document.querySelector('.edit-wrapper')) {
    document
      .querySelector("input[name='editBookName']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        intervalBookNameEmpty = setInterval(() => {
          if (
            document.querySelector("input[name='editBookName']").value === ''
          ) {
            document
              .querySelector("input[name='editBookName']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        intervalBookNameNotEmpty = setInterval(() => {
          if (
            document.querySelector("input[name='editBookName']").value !== ''
          ) {
            document
              .querySelector("input[name='editBookName']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editAuthorName']").value !==
              '' &&
              document.querySelector("input[name='editImgURL']").value !== '' &&
              document.querySelector("input[name='editPlot']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    document
      .querySelector("input[name='editAuthorName']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        intervalAuthorNameEmpty = setInterval(() => {
          if (
            document.querySelector("input[name='editAuthorName']").value === ''
          ) {
            document
              .querySelector("input[name='editAuthorName']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        intervalAuthorNameNotEmpty = setInterval(() => {
          if (
            document.querySelector("input[name='editAuthorName']").value !== ''
          ) {
            document
              .querySelector("input[name='editAuthorName']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editBookName']").value !==
              '' &&
              document.querySelector("input[name='editImgURL']").value !== '' &&
              document.querySelector("input[name='editPlot']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    document
      .querySelector("input[name='editImgURL']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        intervalURLEmpty = setInterval(() => {
          if (document.querySelector("input[name='editImgURL']").value === '') {
            document
              .querySelector("input[name='editImgURL']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        intervalURLNotEmpty = setInterval(() => {
          if (document.querySelector("input[name='editImgURL']").value !== '') {
            document
              .querySelector("input[name='editImgURL']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editBookName']").value !==
              '' &&
              document.querySelector("input[name='editAuthorName']").value !==
              '' &&
              document.querySelector("input[name='editPlot']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });

    document
      .querySelector("input[name='editPlot']")
      .addEventListener('change', () => {
        let saveButton = document.querySelector('.save');
        intervalPlotEmpty = setInterval(() => {
          if (document.querySelector("input[name='editPlot']").value === '') {
            document
              .querySelector("input[name='editPlot']")
              .classList.add('required');
            saveButton.setAttribute('disabled', 'true');
          }
        }, 50);

        intervalPlotNotEmpty = setInterval(() => {
          if (document.querySelector("input[name='editPlot']").value !== '') {
            document
              .querySelector("input[name='editPlot']")
              .classList.remove('required');

            if (
              document.querySelector("input[name='editBookName']").value !==
              '' &&
              document.querySelector("input[name='editAuthorName']").value !==
              '' &&
              document.querySelector("input[name='editImgURL']").value !== ''
            ) {
              saveButton.removeAttribute('disabled');
            }
          }
        }, 100);
      });
  }
}

function clearIntervalAdd() {
  clearInterval(intervalBookNameEmpty);
  clearInterval(intervalBookNameNotEmpty);

  clearInterval(intervalAuthorNameEmpty);
  clearInterval(intervalAuthorNameNotEmpty);

  clearInterval(intervalURLEmpty);
  clearInterval(intervalURLNotEmpty);

  clearInterval(intervalPlotEmpty);
  clearInterval(intervalPlotNotEmpty);
}
