class DoubleNode {
  constructor (value, left = null, right = null) {
    this._value = value;
    this._left = left;
    this._right = right;
  }

  set value (value) {
    this._value = value;
  }

  get value () {
    return this._value;
  }

  set left (node) {
    this._left = node;
  }

  get left () {
    return this._left;
  }

  set right (node) {
    this._right = node;
  }

  get right () {
    return this._right;
  }
};

module.exports = DoubleNode;