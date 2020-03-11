export const cards = [
    /*Template
    {
        name:String,
        cost:Number,
        priority:Number (-1:下 0:中 1:上),
        count:Number,
        effects:[],
        log:String
    },{
        name: ,
        cost: ,
        priority: ,
        count: ,
        effects: [],
        log:
    }
    */
    {
        name: "cp加速",
        cost: 1,
        effects: ["cpAccelerate"],
        log: "次のターン始めにcp+2"
    }, {
        name: "攻撃力強化Lv2",
        cost: 2,
        effects: ["attackAccelerate2"],
        log: "*1.25*10*1"
    }, {
        name: "攻撃力強化Lv4",
        cost: 4,
        effects: ["attackAccelerate4"],
        log: "*1.55*10*1"
    }, {
        name: "火傷付与Lv2",
        cost: 2,
        effects: ["burn", "burn", "burn"],
        log: "火傷*3*3"
    }, {
        name: "火傷付与Lv3",
        cost: 3,
        effects: ["burn", "burn", "burn", "burn", "burn"],
        log: "火傷*3*5"
    }, {
        name: "攻撃",
        cost: 3,
        effects: ["attack"],
        log: "通常攻撃*1"
    }, {
        name: "無効化",
        cost: 3,
        effects: ["disable"],
        log: "対面カード無効化"
    }, {
        name: "回復Lv2",
        cost: 4,
        effects: ["heal2"],
        log: "通常回復*1"
    }, {
        name: "毒付与Lv4",
        cost: 4,
        effects: ["poison", "poison", "poison", "poison"],
        log: "毒*3*4"
    }, {
        name: "模倣",
        cost: 4,
        effects: ["copy"],
        log: "対面カードの効果"
    }, {
        name: "連続攻撃",
        cost: 6,
        effects: ["attack", "attack"],
        log: "通常攻撃*2"
    }, {
        name: "攻撃力強化+吸血付与",
        cost: 6,
        effects: ["attackAccelerate", "suckingBlood"],
        log: "吸血*3"
    }, {
        name: "リセット",
        cost: 6,
        effects: ["reset"],
        log: "対面カードを含むこのカードより後のカードの無効化"
    }, {
        name: "強攻撃",
        cost: 7,
        effects: ["heavyAttack", "attack"],
        log: "*1.75*0*1 通常攻撃*1"
    }, {
        name: "毒攻撃",
        cost: 9,
        effects: ["poison", "poison", "poison", "poison", "poison", "poison", "poison", "poison", "attack"],
        log: "毒*0*8 通常攻撃*1"
    }
]