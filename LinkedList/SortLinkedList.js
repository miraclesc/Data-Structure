/**
 * 对链表进行插入排序。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/insertion-sort-list
 * @param {ListNode} head
 * @return {ListNode}
 */
 
function ListNode(val) {
    this.val = val;
    this.next = null;
 }
 
var insertionSortList = function(head) {
    if(head == null){
        return head;
    }
    var pre = new ListNode(0);
    pre.next = head;
    //temp指向当前要比较的结点 temp2指向下一个要比较的结点 max是当前尾结点
    var temp = head.next, max = head, temp2;
    var target;
    max.next = null;
    while(temp){
        temp2 = temp.next;
        target = temp.val;
        //比新链表尾结点还大
        if(target >= max.val){
            max.next = temp;
            max = temp;
            max.next = null;
        }else{
            if(target > head.val){
                while(target > head.next.val){
                    head = head.next;
                }
                temp.next = head.next
                head.next = temp;
                head = pre.next;
            }else{ //比新链表头结点还要小
                temp.next = head;
                head = temp;
                pre.next = head;
            }
        }
        temp = temp2;
    }
    return head;
};
