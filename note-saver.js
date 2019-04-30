const notes = [
  'note one',
  'note two',
  'note three'
];


document.querySelector('#add-note').addEventListener('click', function () {
  notes.push({
  title: '',
  text: ''
  });
});

document.getElementById('note-list').innerHTML = notes

// Note DOM Structure
const generateNoteDOM = function (note) {
  const noteElement = document.createElement('div')
  const textElement = document.createElement('span')
  const button = document.createElement('button')

  if (note.title.length > 0) {
    noteElement.textContent = note.title
  } else {
    textElement.textContent = 'Unnamed Note'
  }
  noteElement.appendChild(textElement)

  return noteElement
}
