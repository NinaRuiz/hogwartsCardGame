window.$ = window.jQuery = require('jquery');

/**
 *
 * @type {{getLives: (function(): string), onAttackEnemy: battleEnemy.onAttackEnemy, addEventUpdate: battleEnemy.addEventUpdate, lives: number, livesEventUpdate: {}, enemy: null, updateLives: battleEnemy.updateLives}}
 */
var battleEnemy = {
    /**
     * Lives count
     */
    lives: 10,
    /**
     * Event listeners
     */
    livesEventUpdate: {},
    /**
     *
     */
    enemy: null,

    /**
     * Lives template
     *
     * @return {string}
     */
    getLives: function () {
        return `Vidas: ${this.lives}`;
    },

    /**
     * Update lives on events
     */
    updateLives: function () {
        for (let elementKey in this.livesEventUpdate) {
            this.livesEventUpdate[elementKey].innerText = this.getLives();
        }
    },

    /**
     * Add element to update on event
     * @param element
     */
    addEventUpdate: function (element) {
        let key = Object.keys(this.livesEventUpdate).length + 1;
        this.livesEventUpdate[key] = element;
    },
    /**
     *
     */
    onAttackEnemy: function () {

        if (this.lives > 0) {
            this.lives -= 1;
            this.updateLives();
        }
    }
};

/**
 *
 */
battleEnemy.addEventUpdate(document.getElementById('enemyLives'));

/**
 *
 */
battleEnemy.updateLives();

/**
 *
 * @type {HTMLElement}
 */
battleEnemy.enemy = document.getElementById('enemyLives');

/**
 *
 * @type {onclick}
 */
document.getElementById('ronaldButton').onclick = (function () {
    battleEnemy.onAttackEnemy();
});
