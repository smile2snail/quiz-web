var quiz = [
  ["Who is the most beautiful lady in the world?", "mother"],
  ["What is the largest mammal in the world?", "blue whale"],
  ["What is the smallest nature number?", "0"]
]

var correctAnswer=0;
var question;
var answer;
var response;
var html;
var correctArray = [];
var wrongArray = [];
var conclu;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i=0; i<arr.length; i+=1) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
  listHTML += '</ol>';
  return listHTML;
}

for (var i=0; i < quiz.length; i+=1) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question);
  response = response.toLowerCase();
  if (response === answer) {
    correctAnswer+=1;
    correctArray.push(question);
  } else {
    wrongArray.push(question);
  }
}
html = 'You got ' + correctAnswer + ' questions correctly!'
html += '<h2> You got these questions correct:</h2>';
html += buildList(correctArray);
html += '<h2> You got these questions wrong:</h2>';
html += buildList(wrongArray);
print(html);
