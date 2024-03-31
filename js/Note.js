document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('add-note-btn').addEventListener('click', function() {
    document.querySelector('.notes-input').style.display = 'block'; // Показываем поля для ввода заметки
  });

  document.getElementById('save-note-btn').addEventListener('click', function() {
    var noteText = document.getElementById('note-text').value;
    if (noteText.trim() !== '') {
      var listItem = document.createElement('li');
      listItem.textContent = noteText;
      document.querySelector('.notes-list').appendChild(listItem);

      // Обновляем количество заметок
      var notesCount = document.querySelector('.notes-list').childElementCount;
      document.querySelector('.notes-count').textContent = notesCount;

      // Очищаем поле ввода и скрываем его
      document.getElementById('note-text').value = '';
      document.querySelector('.notes-input').style.display = 'none';
    }
  });
});


// Функция для добавления заметки
function addNote() {
  var noteText = document.getElementById('note-text').value;
  if (noteText.trim() === '') {
    alert('Please write something in the note.');
    return;
  }

  // Получаем текущий массив заметок или создаем новый, если он еще не существует
  var notes = JSON.parse(localStorage.getItem('notes')) || [];
  
  // Добавляем новую заметку
  notes.push(noteText);

  // Сохраняем обновленный массив обратно в localStorage
  localStorage.setItem('notes', JSON.stringify(notes));

  // Очищаем поле ввода
  document.getElementById('note-text').value = '';
  
  // Обновляем список заметок на странице
  displayNotes();
}

// Функция для отображения заметок
function displayNotes() {
  var notes = JSON.parse(localStorage.getItem('notes')) || [];
  var notesList = document.getElementById('notes-list');

  // Очищаем текущий список
  notesList.innerHTML = '';

  // Добавляем все заметки в список
  notes.forEach(function(note) {
    var li = document.createElement('li');
    li.textContent = note;
    notesList.appendChild(li);
  });
}

// Вызываем displayNotes при загрузке страницы, чтобы отобразить сохраненные заметки
document.addEventListener('DOMContentLoaded', displayNotes);

// Привязываем функцию addNote к кнопке добавления заметок
document.getElementById('add-note-btn').addEventListener('click', addNote);
