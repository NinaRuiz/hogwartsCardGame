const harryButton = document.getElementById('harryButton');
const ronaldButton = document.getElementById('ronaldButton');
const hermioneButton = document.getElementById('hermioneButton');
const text = document.getElementById('show');

function showPlayer(p){
    text.innerText = p;
}

window.$ = window.jQuery = require('jquery');

(function() {

    let choice;

    harryButton.onclick = (function () {
        console.log('harry button');
        choice = "harry";
        harryButton.setAttribute('disabled', true);
        ronaldButton.setAttribute('disabled', true);
        hermioneButton.setAttribute('disabled', true);
        showPlayer(choice);
    });

    ronaldButton.onclick = (function () {
        choice = "ronald";
        harryButton.setAttribute('disabled', true);
        ronaldButton.setAttribute('disabled', true);
        hermioneButton.setAttribute('disabled', true);
        showPlayer(choice);
    });

    hermioneButton.onclick = (function () {
        choice = "hermione";
        harryButton.setAttribute('disabled', true);
        ronaldButton.setAttribute('disabled', true);
        hermioneButton.setAttribute('disabled', true);
        showPlayer(choice);
    });

} )();
