const harryButton = $('#harryButton');
const ronaldButton = $('#ronaldButton');
const hermioneButton = $('#hermioneButton');
const text = $('#show');

function showPlayer(p){
    text.text(p);
}

$(document).ready(function() {

    let choice;

    harryButton.click(function () {
        choice = "harry";
        harryButton.prop('disabled', true);
        ronaldButton.prop('disabled', true);
        hermioneButton.prop('disabled', true);
        showPlayer(choice);
    });

    ronaldButton.click(function () {
        choice = "ronald";
        harryButton.prop('disabled', true);
        ronaldButton.prop('disabled', true);
        hermioneButton.prop('disabled', true);
        showPlayer(choice);
    });

    hermioneButton.click(function () {
        choice = "hermione";
        harryButton.prop('disabled', true);
        ronaldButton.prop('disabled', true);
        hermioneButton.prop('disabled', true);
        showPlayer(choice);
    });

});
