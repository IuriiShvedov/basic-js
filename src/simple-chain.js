const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [], 

  getLength() {
   return this.arr.length; 
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position <=0 || position>this.arr.length || isNaN(position)) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let showChain="";
    this.arr.forEach((element) => {showChain += `( ${element} )~~`;
    });
    this.arr = [];
    return showChain.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
