$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
      e.preventDefault();

      let taskName = $('#taskInput').val().trim();
      let taskStatus = $('#statusSelect').val();

      if (taskName !== '') {
        let taskCard = `<div class="card mb-2">
                        <div class="card-body">
                        <p class="card-text">${taskName}</p>
                        </div>
                        </div>`;

        $(`#${taskStatus}`).append(taskCard);

        $('#taskInput').val('');
      } else {
        alert("Please enter a task name.");
      }
    });
    $(document).on('dblclick', '.card', function() {
      $(this).remove();
    });
  });