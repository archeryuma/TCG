export const effects = [
    /**Template
     * {
     *  name:"",
        turnMax: undefined,
        type: undefined,
    
        turnBegin: function (world) {},
        preEffect: function (world) {},
        calculate: function (value) {},
        postEffect: function (world) {},
        turnEnd: function (world) {},
    
        add: function (player, opponent) {},
        delete: function (world) {}
    }*/
    {
        name: "attack",
        type: "Action",
        calculate: function (world) {}
    }, {
        name: "burn",
        type: "Buff",
        turnLimit: 3,
        turnEnd: function (world) {}
    }, {
        name: "attackAccelerate",
        type: "Calculate",
        turnLimit:1,
        amplify: function (number) {}
    },{
        name: "attackAccelerate2",
        type: "Calculate",
        turnLimit:10,
        amplify: function (number) {}
    }, {
        name: "attackAccelerate4",
        type: "Calculate",
        turnLimit:10,
        amplify: function (number) {}
    }, {
        name: "cpAccelerate",
        type: "Direct",
        turnEnd: function (world) {}
    }, {
        name: "disable",
        type: "Action",
        preEffect: function (world) {}
    }, {
        name: "heal2",
        type: "Action",
        calculate: function (world) {}
    }, {
        name: "poison",
        type: "Buff",
        turnLimit: 3,
        turnEnd: function (world) {}
    }, {
        name: "copy",
        type: "Action",
        preEffect: function (world) {}
    }, {
        name: "suckingBlood",
        type: "Buff",
        turnLimit: 3,
        postEffect: function (world) {}
    }, {
        name: "reset",
        type: "Action",
        turnBegin: function (world) {}
    }, {
        name: "heavyAttack",
        type: "Calculate",
        turnLimit:1,
        amplify: function (number) {}
    }
]