var xhr = new XMLHttpRequest();

function getQuote() {
  var response;
  xhr.onload = function() {
    if (xhr.status === 200) {
      response = JSON.parse(xhr.responseText);
        $('#quote-div').text(response.value.joke);
    }
  }
  xhr.open('GET', 'https://api.icndb.com/jokes/random/?escape=javascript', true);
  xhr.send(null);
}

$('button').on('click', function() {
  getQuote();
});

getQuote();