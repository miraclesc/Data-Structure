/*
 *给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 *为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 *说明：不允许修改给定的链表。
 *示例 1：
 *输入：head = [3,2,0,-4], pos = 1
 *输出：tail connects to node index 1
 *解释：链表中有一个环，其尾部连接到第二个节点。

 *来源：力扣（LeetCode）
 *链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var detectCycle = function(head) {
    if(head && head.next==null){
        return null;
    }
    //先使用快慢指针寻找交点 快指针每次移动2单位 慢指针每次移动1单位 若有环则必相交
    var fast = head, slow = head, distance = head;
    var index = 0;
    while(true){
        if(fast==null || fast.next == null){
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            break;
        }
    }

    //可数学计算得到 相交点到入环点 与 头结点到入环点 距离相等
    while(fast != distance){
        fast = fast.next;
        distance = distance.next;
        index++;
    }

    return fast;
};
