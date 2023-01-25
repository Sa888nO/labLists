class Node {
  constructor(data) {
    this.Data = data
    this.Next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  addElement(value) {
    const node = new Node(value) 
    this.head === null ? this.head = node : this.tail.Next = node
    this.tail = node;
    this.count++;
  }

  deleteElement(value) {
    let current = this.head
    let previous = null
    while (current !== null) {
      if (current.Data === value) {
        if (previous !== null) {
          previous.Next === current.Next;
          if (current === null) {
            this.tail = previous
          }
        }
        else {
          this.head = this.head.Next
          if(this.head === null) {
            this.tail = null
          }
        }
        this.count--
        break
      }
      previous = current;
      current = current.Next
    }
  }
  clear() {
    this.head = null
    this.tail = null
    this.count = 0
  }
  hasListElement(value) {
    let current = this.head
    while(current !== null) {
      if(current.Data === value) {
        return true
      }
      current = current.Next
    }
    return false
  }
  getElementByIndex(index) {
    let current = this.head
    let counter = 0
    while (current !== null) {
      if(counter === index) {
        return current.Data
      }
      counter++
      current = current.Next
    }
    return false
  }
  swapElements(value1, value2) {
    let find1 = false;
    let find2 = false;
    let current = this.head
    let node1 = new Node 
    let node2 = new Node
    while(current !== null) {
      if (current.Data === value1) {
        node1 = current
        find1 = true
      }
      if (current.Data === value2) {
        node2 = current
        find2 = true
      }
      current = current.Next
    }
    if(find1 === true && find2 === true) {
      node1.Data = value2
      node2.Data = value1
    }
  }
  view() {
    let current = this.head
    while(current !== null){
      console.log(current.Data)
      current = current.Next
    }
  }
}

const list = new LinkedList() 
list.addElement('1')
list.addElement('2')
// list.deleteElement('1')
// list.deleteElement('2')
list.addElement('100')
console.log(list.getElementByIndex(0))
console.log(list)
list.view()
list.swapElements('1', '2')
list.view()
