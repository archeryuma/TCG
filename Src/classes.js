import {
    cards
} from "../Config/System/cards.js";
import {
    effects
} from "../Config/System/effect.js";


export class Character {
    constructor(characterData) {
        Object.keys(characterData).forEach(_E0 => this[_E0] = characterData[_E0]);
        this.HP = characterData.maxHP;
        this.CP = 0;
        this.name = characterData.name;
        this.startFlag = false;
        this.selectedDeck = [];
        this.times = [];
        this.effects = [];
        this.damageExpectation = 0;
        this.attackAccumulation = []

        this.deck = this.deck.map(_E0 => new Card(_E0, this));
    }
    damage() {}
    ready() {
        this.startFlag = !this.startFlag;
    }
    select(number) {
        if (this.parent.executing) return;
        if (!this.selectedDeck.includes(this.deck[number])) {
            this.deck[number].select();
        } else {
            this.deck[number].unSelect();
        }
    }
}

class Card {
    constructor(cardData, parent) {
        Object.keys(cardData).forEach(_E0 => this[_E0] = cardData[_E0]);
        Object.keys(cards.find(_E0 => _E0.name == this.name)).forEach(_E0 => this[_E0] = cards.find(_E0 => _E0.name == this.name)[_E0])
        this.parent = parent;

        this.effects = this.effects.map(_E0 => new Effect(_E0, this));
    }
    select() {
        this.count -= 1;
        this.parent.selectedDeck.push(this);
    }
    unSelect() {
        this.count += 1;
        this.parent.selectedDeck.splice(this.selectedDeck.indexOf(this.deck[number]), 1);
    }
    use() {
        this.parent.CP -= this.cost;
        if (this.parent.CP >= 0) return this;
        this.parent.CP = 0;
        return undefined;
    }
    unUse() {
        this.parent.CP += this.cost;
    }
}

class Effect {
    constructor(effectData, parent) {
        Object.keys(effects.find(_E0 => _E0.name == effectData)).forEach(_E0 => this[_E0] = effects.find(_E0 => _E0.name == effectData)[_E0])
        this.parent = parent;
    }
    accumulate() {
        if (this.type == "Buff") {
            this.parent.parent.attackAccumulation.push(this);
        } else if (this.type == "Calculate") {
            this.parent.parent.times.push(this);
        } else if (this.type == "Direct") {
            this.parent.parent.effects.push(this);
        }
    }
    has(target) {
        return this.hasOwnProperty(target);
    }
}