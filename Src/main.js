export class Main {
    constructor(player, opponent) {
        this.player = player;
        this.opponent = opponent;

        this.player.__proto__.parent = this;
        this.opponent.__proto__.parent = this;

        this.executing = false;
    }
    start() {
        console.log("[" + this.player.name + ":%c" + this.player.startFlag + "%c, " + this.opponent.name + ":%c" + this.opponent.startFlag + "%c]", this.player.startFlag ? "color:yellowgreen" : "color:red", "", this.opponent.startFlag ? "color:yellowgreen" : "color:red", "");
        if (this.player.startFlag && this.opponent.startFlag) {
            this.player.startFlag = false;
            this.opponent.startFlag = false;
            this.execute();
        }
    }
    execute() {
        console.log("%cstart Succeed.", "color:yellowgreen");
        console.log(this.player.selectedDeck, this.opponent.selectedDeck);
        this.executing = true;
        findCardFunction.bind(this)("turnBegin").forEach(_E0 => _E0.parent == this.player ? _E0.turnBegin(this.player, this.opponent) : _E0.turnBegin(this.opponent, this.player));

        (function calc(limit) {
            console.log(this.player.selectedDeck, this.opponent.selectedDeck, limit);
            let selectedCard = [this.player.selectedDeck.splice(0, 1)[0], this.opponent.selectedDeck.splice(0, 1)[0]];
            selectedCard.map(_E0 => _E0 ? _E0.use() : undefined);

            let effectIterator = effectProcessIterator(selectedCard[0], selectedCard[1]);

            runEffectProcess.bind(this)(effectIterator.next(), "preEffect")

            runEffectProcess.bind(this)(effectIterator.next(), "calculate")

            runEffectProcess.bind(this)(effectIterator.next(), "postEffect")

            if (this.player.HP <= 0 || this.opponent.HP <= 0) return this.judge();

            this.player.damageExpectation = 0;
            this.opponent.damageExpectation = 0;

            if (limit - 1 > 0) window.setTimeout(calc.bind(this), 100, limit - 1);
        }).bind(this)(Math.max(this.player.selectedDeck.length, this.opponent.selectedDeck.length));

        findCardFunction.bind(this)("turnEnd").forEach(_E0 => _E0.parent == this.player ? _E0.turnEnd(this.player, this.opponent) : _E0.turnEnd(this.opponent, this.player));
        this.executing = false;

        //Functions -----------------------------
        function findCardFunction(timing) {
            let _T0 = (Target) => Target.filter(_E0 => _E0.has(timing));
            return [_T0(this.player.effects), _T0(this.opponent.effects)].flat();
        }

        function effectProcessIterator(myCard, oppCard) {
            let _T0 = [myCard, oppCard];
            let _T1 = target => {
                if (!target) return [new Array(), new Array(), new Array()];
                target = Array.from(target.effects); //Not Deep Copy----------------
                let priority = ["preEffect", "calculate", "postEffect"];
                target = [target.splice(0, restriction(target.findIndex(_E0 => _E0.type == "Action" && _E0.has(priority[1])), _E0 => _E0 != -1, Infinity)), target.splice(0, restriction(target.findIndex(_E0 => _E0.type == "Action" && _E0.has(priority[2])), _E0 => _E0 != -1, Infinity)), target];
                target.forEach((value, index) => value.forEach(_E0 => priority.filter(_E2 => priority.indexOf(_E2) != index).forEach(_E1 => _E0.type == "Action" && _E0.has(_E1) ? target[priority.indexOf(_E1)].push(_E0) : undefined)))
                return target;
            }
            let _T3 = [_T1(_T0[0]), _T1(_T0[1])];
            _T3.__proto__.next = () => [_T3[0].splice(0, 1)[0], _T3[1].splice(0, 1)[0]]
            return _T3;
        }

        function runEffectProcess(target, timing) {
            target.forEach(_E0 => _E0.forEach(_E1 => {
                if (_E1.type == "Action") {
                    _E1[timing](_E0.parent == this.player ? (this.player, this.opponent) : (this.opponent, this.player))
                } else {
                    _E1.accumulate(_E0.parent == this.player ? (this.player, this.opponent) : (this.opponent, this.player))
                }
            }))
        }

        function restriction(value, IF, replace) { //2 Sf Copy-------------
            return IF(value) ? value : replace;
        }
    }
    judge() {
        if (this.player.HP <= 0 && this.opponent.HP <= 0) {
            this.player.draw()
            this.opponent.draw()
        } else if (this.player.HP > 0 && this.opponent.HP <= 0) {
            this.player.win()
            this.opponent.lose()
        } else if (this.player.HP <= 0 && this.opponent.HP > 0) {
            this.player.lose()
            this.opponent.win()
        }
    }
}