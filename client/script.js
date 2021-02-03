// On send message click, insert message into app
$('#send').on('click', userSend);

// Enter key for send message
$('#message').on('keyup', function (event) {
  if (event.keyCode === 13) userSend();
});

function userSend () {
  const $inputField = $('#message');
  const inputText = $inputField.val();
  const message = new Message(true, inputText);
  if (inputText) insertMessage(message); // only send the message with input string, not empty string
  $inputField.val(''); // Clear input field on send
}


// Write an insert message function
function insertMessage (message) {
  // Get formatted timestamp
  const timeStamp = message.timeStamp;
  const date = `${timeStamp.getDate()}-${(timeStamp.getMonth() + 1)}-${timeStamp.getFullYear()}`;
  const time = ` ${timeStamp.getHours()}:${(timeStamp.getMinutes() + 1)}:${timeStamp.getSeconds()}`;
  const now = date + time;
  const $timeDiv = $(`<p class="time">${now}</p>`);
  // Create a new div
  let $div = $('<div>');
  $div.addClass('newMessageStyle');
  $div.text(message.content);
  $div.append($timeDiv);
  //$('#message').text();
  if (message.authorId) { // User sent message
    $div.addClass('userMessage');
    $('#sentMessages').prepend($div);
  } else { // API message
    $div.addClass('apiMessage');
    $('#apiMessages').prepend($div);
  }
}

// Call get message every five seconds
function callAPI () {
  setTimeout(function () {
    $.ajax('http://quotes.stormconsultancy.co.uk/random.json').then(data => insertMessage(new Message(false, data.quote)));
  }, 2000);
}

// When the document is ready, start calling the API and send messages to the user
$('document').ready(callAPI);


// Message class to create new message
class Message {
  constructor (authorId, content) {
    this.authorId = authorId;
    this.content = content;
    this.timeStamp = new Date();
  }
}


