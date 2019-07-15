class SingleLinkedList {
  constructor () {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }
  addFirst (node) {
    if (this.head) {
      this.temp = this.head;
    }

    this.head = node;
    this.head.next = this.temp;
    this.count++;

    if (this.count == 1) {
      this.tail = this.head;
    }
  }

  addLast (node) {
    if (this.count == 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.count++;
  }

  removeLast () {
    if (this.count != 0) {
      if (this.count == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.current = this.head;
        while (this.current.next !== tail) {
          this.current = this.current.next;
        }
        this.current.next = null;
        this.tail = this.current;
      }
      count--
    }
  }

  removeFirst () {
    if (this.count != 0) {
      if (this.count == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      count--
    }
  }
};
