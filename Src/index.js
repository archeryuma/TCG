import {
    Character
} from "./classes.js";

import {
    Main
} from "./main.js";

import {
    player as playerData,
    sandBag as sandBagData,
} from "../Config/Character/character.js";

import {
    getElement
} from "./tools.js";

import {} from "../Config/System/effect.js"

(function startGame() {
    const player = new Character(playerData);
    const opponent = new Character(sandBagData);
    const main = new Main(player, opponent);

    (function () {
        let child = getElement("#myDeck")[0].children;
        for (let i = 0; i < child.length; i++) {
            child[i].dataset.num = i;
            child[i].addEventListener("click", player.select.bind(player, i));
        }
    })()

    console.log(main);
    getElement("#playButton")[0].addEventListener("click", () => {
        player.ready();
        main.start()
    });
    //BOT TEST-------
    getElement("#cpArea")[0].addEventListener("click", () => {
        opponent.ready();
        main.start()
    });

    opponent.select(4);
    opponent.select(5);
    opponent.select(6);
    opponent.select(7);

    opponent.ready();

    //PLAYER TEST--------
    player.select(0);
    player.select(1);
    player.select(2);
    player.select(3);
    player.select(4);
    player.select(5);

    player.ready();
    main.start()
})()