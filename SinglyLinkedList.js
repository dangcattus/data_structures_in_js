//LinkedList.js

//Each element points to the next. Data structure conisting of group of nodes which together
// represent a sequence.

function MyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.showLog = true;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

//a constructor for creating an empty list;
// an operation for testing whether or not a list is empty;
// an operation for prepending an entity to a list
// an operation for appending an entity to a list
// an operation for determining the first component (or the "head") of a list
// an operation for referring to the list consisting of all the components of a list except for its first (this is called the "tail" of the list.)

MyLinkedList.prototype = {
  constructor: MyLinkedList,
  isEmpty: function() {
    return this.head === null;
  },
  append: function(value) {
    var temp = new Node(value);
    if (this.isEmpty()) {
      this.head = temp;
      this.tail = temp;
    } else if (this.head === this.tail) {
      this.head.next = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    this.size++;
    if (this.showLog) console.log('Append: ' + value);
  },

  removeTail: function() {
    if (!this.isEmpty()) {
      var value = this.tail.data;
      if (this.head === this.tail) {
        //here only 1 node in LL
        this.head = null;
        this.tail = null;
      } else if (this.head.next === this.tail) {
        this.head.next = null;
        this.tail = this.head;
      } else {
        var iter = this.head;
        while (iter.next !== this.tail) {
          iter = iter.next;
        }
        iter.next = null;
      }
      this.size--;
    } else {
      value = -1;
    }
    if (this.showLog) console.log('Remove Tail: Value: ' + value);

    return value;
  },

  removeHead: function() {
    var value;
    if (!this.isEmpty()) {
      value = this.head.data;
      this.head = this.head.next;
      this.size--;
    } else {
      value = -1;
    }
    if (this.showLog) console.log('Remove Head: value: ' + value);
  },
  removeAtIndex: function(index) {
    //where index is like an array, 0 to length-1
    if (!this.isEmpty() && index < this.size) {
      var value;
      var temp = this.getHead();
      for (var i = 0; i < index - 1; ++i) {
        //index - 1 to accomodate the head
        if (temp.next != null) {
          temp = temp.next;
        }
      }
      value = temp.next.data;
      temp.next = temp.next.next;
      this.size--;
    } else {
      console.log('Cannot remove. Empty array!');
      value = -1;
    }
    if (this.showLog)
      console.log('Removed Value: ' + value + '; @Index: ' + index);
  },

  getHead: function() {
    return this.head;
  },
  getTail: function() {
    return this.tail;
  },
  getSize: function() {
    return this.size;
  },
  print: function() {
    var str = '';

    if (!this.isEmpty()) {
      var iterate = this.head;
      str += this.head.data;
      while (iterate.next != null) {
        iterate = iterate.next;
        str = str + ', ' + iterate.data;
      }
    }
    console.log('Print: ' + str);
  }
};

var SLL = new MyLinkedList();
SLL.append(12);

for (var i = 0; i < 5; i++) {
  SLL.append(i);
}
SLL.print();
var test = SLL.removeAtIndex(2);
SLL.print();
test = SLL.removeTail();
SLL.print();
test = SLL.removeHead();
SLL.print();
test = SLL.removeAtIndex(SLL.getSize()); //out of bounds
SLL.print();
test = SLL.removeAtIndex(SLL.getSize() - 1);
SLL.print();
