document.addEventListener('DOMContentLoaded', function() {
  // Получаем все ряды таблицы
  var rows = document.querySelectorAll('tr[data-href]');

  rows.forEach(function(row) {
    row.addEventListener('click', function() {
      window.location.href = this.dataset.href; // Перенаправляем на URL, указанный в атрибуте data-href
    });
  });
});