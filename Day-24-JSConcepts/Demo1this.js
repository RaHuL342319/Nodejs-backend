/**
 * This keyword:
 */

/**
 * Example 1:
 * This keyword: In global, value of this is window.
 */
console.log(this);

/**
 * This keyword: In function, value of this is window.
 */
function fun() {
  console.log(this);
}
fun();

/**
 * This keyword: In method, value of this is object.
 */
var obj = {
  name: function () {
    console.log(this);
  },
  age: 25,
  email: "ab..z@gmail.com",
};
obj.name();

/**
 * This keyword: In function  inside method(es5), value of this is window.
 */
var obj2 = {
  sayName: function () {
    function childfnc() {
      console.log(this);
    }
    childfnc();
  },
};
obj2.sayName();
/**
 * This keyword: In function  inside method(es6), value of this is object.
 */
const obj3 = {
  sayName: function () {
    const child = () => {
      console.log(this);
    };
    child();
  },
  age: 23,
};

obj3.sayName();
/**
 * Inside Constructor function, the value of this is blank object.
 */
function add() {
  console.log(this);
}

const ans = new add(); // {}

/**
 * Inside event listener, the value of this is element which event listener depends.
 */
document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});
