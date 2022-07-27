class Node {
  constructor(key,val){
      this.key = key;
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}
//end means most recently used.
class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  
  //insert to end. end = most recently used.
  insert(key,val){
      //add to end
      let newNode = new Node(key,val);
      if (this.head === null){
          this.head = newNode;
          this.tail = this.head;
      } else {

          let node = this.head;
          while (node.next){
              node = node.next;
          }
          
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;

      }
      this.length++;
  }
  
  //remove from beginning
  remove(){
      let node = this.head;
      //if list is empty, return.
      if (this.length === 0) return;
      
      //if length is 1, set head and tail to null.
      if (this.length === 1){
          this.head = null;
          this.tail = null;
      } else {
          //remove from front.
          this.head = node.next;
          this.head.prev = null; //can only use ? on right hand
      } 
      this.length--;
  }
  
  //remove specific Key;
  removeKey(key){
      let node = this.head;
      let val = -1;
      
      //if key is found in head
      if (node?.key === key){ //added this
          this.head = node.next;
          this.length--;
          return node.val;
      }
      
      //if node is middle/end of ll
      while (node){
          if (node?.key === key){
              
              let curr = node;
              let prev = curr.prev;
              let next = curr.next;
              // node.prev = next;
              next.prev = prev;
              // if (prev?.next){
                  prev.next = next;
              // }
              curr.next = null;
              curr.prev = null;
              
              this.length--;
              return node.val;
          } else {
              node = node.next;
          }
      }
      // this.length--; //added this and now it works? why?
      // if (val === -1) this.remove();
      return val;
  }
  
//     get(key){
      
//         let node = this.head;
//         //find node that has the key.
//         while (node.key !== key){
//             node = node.next;
//         }
//         //remove from its place and add to the end.
//     }
}

var LRUCache = function(capacity) {
  this.size = capacity;
  this.remaining = capacity;
  this.list = new DoublyLinkedList(capacity);
  
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const val = this.list.removeKey(key);
  this.list.insert(key);
  console.log(this.list);
  return val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // if (this.remaining > 0){
      if (this.list.removeKey(key) === -1) this.remaining--;//if it is not -1, that means the node does exists. we are just updating.
      this.list.insert(key,value);
      // this.remaining--;
      //check if key exists in ll. if it does, then change the val. otherwise insert new 
  } else {
      //remove from beg of list.
      this.list.remove();
      //add to end.
      this.list.insert(key,value);
  }
  // this.list.removeKey(key) === -1 ? this.list.remove() : null;
  // this.list.insert(key,value)
  return;
  
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// 1 4 7 9 