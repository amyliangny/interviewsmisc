// // https://leetcode.com/problems/lru-cache/discuss/617415/JavaScript-2-Solutions-(ES6-Map-vs-Doubly-linked-list)
// class Node {
//     constructor(key,val){
//         this.key = key;
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
    
//     push(key,val){
//         const newNode = new Node(key,val);
//         if (!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return newNode;
//     }
    
//     remove(node){
//         if (!node.next && !node.prev){ //if there's only 1 node
//             this.head = null;
//             this.tail = null;
//         } else if (!node.next){ //if the node is tail node
//             this.tail = node.prev;
//             this.tail.next = null;
//         } else if (!node.prev){ //if the node is head node
//             this.head = node.next;
//             this.head.prev = null;
//         }
//         this.length--;
//     }
// }

// //LRU = Least Recently Used
// //O(1)
// var LRUCache = function(capacity) {
//     this.DLL = new DoublyLinkedList();
//     this.map = {};
//     this.capacity = capacity;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// //if the key exists, return value. otherwise return -1
// LRUCache.prototype.get = function(key) {
//     if (!this.map[key]) return -1;
//     const value = this.map[key].val;
//     this.DLL.remove(this.map[key]);
//     this.map[key] = this.DLL.push(key,value);
//     return value;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// //if key exists, update value. otherwise add the pair. if # keys exceeds capacity, EVICT the LRU key
// LRUCache.prototype.put = function(key, value) {
//     if (this.map[key]) this.DLL.remove(this.map[([key]));
//     this.map[key] = this.DLL.push(key,value);
//     if (this.DLL.length > this.capacity){
//         const currKey = this.DLL.head.key;
//         delete this.map[currKey];
//         this.DLL.remove(this.DLL.head);
//     }
// };





DoublyLinkedList {
    head: <ref *1> Node {
      key: 1,
      val: 1,
      next: Node { key: 2, val: 2, next: [Node], prev: [Circular *1] },
      prev: Node { key: 2, val: 2, next: [Node], prev: [Circular *1] }
    },
    tail: <ref *2> Node {
      key: 1,
      val: undefined,
      next: null,
      prev: Node { key: 2, val: 2, next: [Circular *2], prev: [Node] }
    },
    length: 2
  }
  DoublyLinkedList {
    head: <ref *1> Node {
      key: 2,
      val: 2,
      next: Node { key: 1, val: undefined, next: [Node], prev: [Circular *1] },
      prev: Node { key: 1, val: undefined, next: [Node], prev: [Circular *1] }
    },
    tail: <ref *2> Node {
      key: 2,
      val: undefined,
      next: null,
      prev: Node { key: 3, val: 3, next: [Circular *2], prev: [Node] }
    },
    length: 2
  }
  DoublyLinkedList {
    head: <ref *1> Node {
      key: 1,
      val: undefined,
      next: Node { key: 3, val: 3, next: [Node], prev: [Circular *1] },
      prev: Node { key: 3, val: 3, next: [Node], prev: [Circular *1] }
    },
    tail: <ref *2> Node {
      key: 1,
      val: undefined,
      next: null,
      prev: Node { key: 4, val: 4, next: [Circular *2], prev: [Node] }
    },
    length: 2
  }
  DoublyLinkedList {
    head: Node {
      key: 1,
      val: undefined,
      next: Node { key: 3, val: 3, next: [Node], prev: [Node] },
      prev: Node { key: 3, val: 3, next: [Node], prev: [Node] }
    },
    tail: <ref *1> Node {
      key: 3,
      val: undefined,
      next: null,
      prev: Node { key: 1, val: undefined, next: [Circular *1], prev: [Node] }
    },
    length: 2
  }
  DoublyLinkedList {
    head: Node {
      key: 1,
      val: undefined,
      next: Node { key: 3, val: 3, next: [Node], prev: [Node] },
      prev: Node { key: 3, val: 3, next: [Node], prev: [Node] }
    },
    tail: <ref *1> Node {
      key: 4,
      val: undefined,
      next: null,
      prev: Node { key: 3, val: undefined, next: [Circular *1], prev: [Node] }
    },
    length: 2
  }