$(document).ready(function() {
  
  // Variables
  var correct = 0, incorrect = 0, unanswered = 0;
  var timeRemaining = 100;
  $('#seconds-left').text(timeRemaining);

  // Hide questions and results screen initially
  $('#page-2').hide();
  $('#page-3').hide();
  
  // Click start button
  $('#start-button').click(function() {
    $('#page-1').hide();
    $('#page-2').show();
    setTimeout(countdown, 1000);
  });

  // Click submit button
  $('#submit-answers').click(function() {
    calculateAnswers();    
    $('#page-2').hide();
    $('#page-3').show();
  });

  // Function for counting down remaining time
  function countdown() {
    if (timeRemaining === 0) {
      // Calculate answers and show results screen
      calculateAnswers();
      $('#page-2').hide();
      $('#page-3').show();
    } else {
      timeRemaining--;
      $('#seconds-left').text(timeRemaining);
      setTimeout(countdown, 1000);
    }
  }

  // Function for calculating answers
  function calculateAnswers() {

    // Question 1
    if ($('#question-1 .form-check-input:checked').length === 0) {
      unanswered++;
    } else if ($('#question-1 .form-check-input:checked').val() === "1") {
      correct++;
    } else {
      incorrect++;
    }

    // Question 2
    if ($('#question-2 .form-check-input:checked').length === 0) {
      unanswered ++;
    } else if ($('#question-2 .form-check-input:checked').val() === "1") {
      correct++;
    } else {
      incorrect++;
    }

    // Question 3
    if ($('#question-3 .form-check-input:checked').length === 0) {
      unanswered ++;
    } else if ($('#question-3 .form-check-input:checked').val() === "3") {
      correct++;
    } else {
      incorrect++;
    }

    // Question 4
    if ($('#question-4 .form-check-input:checked').length === 0) {
      unanswered ++;
    } else if ($('#question-4 .form-check-input:checked').val() === "2") {
      correct++;
    } else {
      incorrect++;
    }

    // Question 5
    if ($('#question-5 .form-check-input:checked').length === 0) {
      unanswered ++;
    } else if ($('#question-5 .form-check-input:checked').val() === "3") {
      correct++;
    } else {
      incorrect++;
    }

    // Set number of answers to html
    $('#correct-answers').text(correct);
    $('#incorrect-answers').text(incorrect);
    $('#unanswered-answers').text(unanswered);
  }

});