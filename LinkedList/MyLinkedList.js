/*
在链表类中实现这些功能：
get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
*/

/**
 * Initialize your data structure here.
 */
function Node(val){
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.headNode = new Node(null);
    this.tailNode = this.headNode;
    this.len = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index > this.len - 1){
        return  -1;
    }
    this.tempNode = this.headNode.next;
    this.begin = 0;
    while(this.begin < index){
        this.tempNode = this.tempNode.next;
        this.begin++;
    }
    return this.tempNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.targetNode = new Node(val);
    this.targetNode.next = this.headNode.next;
    this.headNode.next = this.targetNode;
    if(this.len == 0){
        this.tailNode = this.targetNode;
    }
    this.len++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    this.targetNode = new Node(val);
    this.targetNode.next = null;
    this.tailNode.next = this.targetNode;
    this.tailNode = this.targetNode;
    this.len++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.len){
        return;
    }
    if(index <= 0){
        this.addAtHead(val);
    }else if(index == this.len){
        this.addAtTail(val);
    }else{
        this.targetNode = new Node(val);
        this.tempNode = this.headNode.next;
        this.begin = 0;
        while(this.begin < index - 1){
            this.tempNode = this.tempNode.next;
            this.begin++;
        }
        this.targetNode.next = this.tempNode.next;
        this.tempNode.next = this.targetNode;
        this.len++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index > this.len - 1 || index < 0){
        return;
    }
    this.begin = -1;
    this.tempNode = this.headNode;
    
    while(this.begin < index - 1){
        this.tempNode = this.tempNode.next;
        this.begin++;
    }
    
    this.tempNode.next = this.tempNode.next.next;
    if(index == this.len - 1){
        this.tailNode = this.tempNode;
    }
    this.len--;
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
