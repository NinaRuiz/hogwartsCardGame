const fs = require ('fs');

function newGame() {
        let data = {
            name: "asdsa",
        };
        let json = JSON.stringify(data);

        fs.writeFile('../../files/save', json, function (err) {
            if(err){
                console.log(err);
            }
        } );
    }

function saveGame() {

    }

function loadGame() {

    }

export {newGame, loadGame, saveGame};



