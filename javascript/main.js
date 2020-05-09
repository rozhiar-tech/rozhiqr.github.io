/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener("click", function () {
  //am function a bo awaya data y inputaka wargre
  var input = document.querySelector("input").value;
  searchGiphy(input);

  pushToDOM(input);
});

document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  var input = document.querySelector("input").value;
  searchGiphy(input);
  // amayan bo awaya agar enter ish bka har eshakaman bo bka
  if (e.which === 13) {
    pushToDOM(input);
  }
});

/* 2. do the data stuff with the API */
function searchGiphy(inputValue) {
  var url =
    "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + inputValue; // amayan linky api ayakaman war grtwaw la xwarishawa response y ajax akaman war grtwa

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", function (e) {
    var data = e.target.response;
    pushToDOM(data);
  });
}

/* 3. Show me the GIFs */

function pushToDOM(input) {
  var response = JSON.parse(input); //amayan boya data kan

  var imageUrls = response.data;

  imageUrls.forEach(function (image) {
    var src = image.images.fixed_height.url;
    console.log(src);

    var container = document.querySelector(".js-container");
    container.innerHTML += '<img src="' + src + '" class="container-image">';
  });
}
