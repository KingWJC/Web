// 制造多个士兵
var 士兵们 = []
var 士兵
for (var i = 0; i < 6; i++) {
    士兵 = {
        ID: i, // ID 不能重复
        兵种: "美国士兵",
        攻击力: 5,
        生命值: 42,
        行走: function () {
            /*走俩步的代码*/
        },
        奔跑: function () {
            /*狂奔的代码*/
        },
        死亡: function () {
            /*Go die*/
        },
        攻击: function () {
            /*糊他熊脸*/
        },
        防御: function () {
            /*护脸*/
        }
    }
    士兵们.push(士兵)
}
console.log(士兵们);

/* 问题: 士兵的函数行为和属性都是一样的, 没必要创建多次, 没必要创建, 各自引用同一个函数或属性.
        因为每个士兵有自己的 ID 和生命值, 需要创建多次.
   改进: 用原型链可以解决重复创建的问题.
*/
var 士兵原型 = {
    兵种: "美国大兵",
    攻击力: 5,
    行走: function () {
        /*走俩步的代码*/
    },
    奔跑: function () {
        /*狂奔的代码*/
    },
    死亡: function () {
        /*Go die*/
    },
    攻击: function () {
        /*糊他熊脸*/
    },
    防御: function () {
        /*护脸*/
    }
}
var 大兵们 = []
var 大兵
for (var j = 0; j < 5; j++) {
    大兵 = {
        ID: j,
        生命值: 42
    }

    大兵.原型 = 士兵原型
    大兵们.push(大兵)
}
console.log(大兵们);

//让代码更优雅, 士兵的代码分散在两个地方很不优雅，于是我们用一个函数把这两部分联系起来：
function 优雅士兵(ID) {
    var 临时对象 = {} //1

    临时对象.__proto__ = 优雅士兵.原型 //2

    临时对象.ID = ID
    临时对象.生命值 = 42

    return 临时对象 //3
}

优雅士兵.原型 = { //4
    兵种: "美国优雅士兵",
    攻击力: 5,
    行走: function () {
        /*走俩步的代码*/
    },
    奔跑: function () {
        /*狂奔的代码*/
    },
    死亡: function () {
        /*Go die*/
    },
    攻击: function () {
        /*糊他熊脸*/
    },
    防御: function () {
        return '护脸'
    }
}
var 优雅士兵们 = []
for (var z = 0; z < 5; z++) {
    优雅士兵们.push(优雅士兵(z))
}
console.log(优雅士兵们[0].防御())

/*JS 之父创建了 new 关键字, 可以少写几行代码, 少做四件事情, 也就是所谓的语法糖
    不用创建临时对象，因为 new 会帮你做（你使用「this」就可以访问到临时对象）；
    不用绑定原型，因为 new 会帮你做（new 为了知道原型在哪，所以指定原型的名字为 prototype）；
    不用 return 临时对象，因为 new 会帮你做；
    不要给原型想名字了，因为 new 指定名字为 prototype。
*/
function 新士兵(ID) {
    this.ID = ID
    this.生命值 = 42
}
新士兵.prototype = {
    兵种: "美国大兵",
    攻击力: 5,
    行走: function () {
        /*走俩步的代码*/ },
    奔跑: function () {
        /*狂奔的代码*/ },
    死亡: function () {
        /*Go die*/ },
    攻击: function () {
        return '糊他熊脸' },
    防御: function () {
        /*护脸*/ }
}
var 新士兵们 = []
for (var x = 0; x < 100; x++) {
    新士兵们.push(new 新士兵(x))
}
console.log(新士兵们[0].攻击())

/* 注意 constructor 属性
    new 操作为了记录「临时对象是由哪个函数创建的」，
    所以预先给「士兵.prototype」加了一个 constructor 属性：
    如果你重新对「士兵.prototype」赋值，那么这个 constructor 属性就没了，
    所以你应该士兵.prototype里的部分属性或行为, 或给constructor 重新赋值
*/
士兵.prototype = {
  constructor: 士兵
}
// 重新对「士兵.prototype」赋值: 
士兵.prototype.兵种 = "美国大兵"
士兵.prototype.行走 = function(){ /*走俩步的代码*/}

士兵.prototype = {
  constructor: 士兵,
  兵种:"美国大兵",
  攻击力:5,
  行走:function(){ /*走俩步的代码*/},
  奔跑:function(){ /*狂奔的代码*/  },
  死亡:function(){ /*Go die*/    },
  攻击:function(){ /*糊他熊脸*/   },
  防御:function(){ /*护脸*/       }
}