/*
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 示例 1:
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 示例 2:
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/reorder-list
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reorderList = function(head) {
    let temp = head, temp_half = head, temp_merge = head, mid;
    let reverse = new ListNode(0);
    var len_list = 0, half_list, index = 1;
    //统计链表长度
    while(temp){
        len_list++;
        temp = temp.next;
    }
    if(len_list <= 2){
        return 0;
    }

    //将链表一分为二
    half_list = Math.ceil(len_list / 2);
    while(index < half_list){
        index++;
        temp_half = temp_half.next;
    }
    mid = temp_half.next;
    temp_half.next = null;
    
    //将第二部分链表反转
    while(mid){
        temp = mid.next;
        mid.next = reverse.next;
        reverse.next = mid;
        mid = temp;
    }

    //将两个链表合并
    reverse = reverse.next;
    while(temp_merge){
        let temp_next = temp_merge.next;
        if(reverse){
            let reverse_next = reverse.next;
            temp_merge.next = reverse;
            reverse.next = temp_next;
            temp_merge = temp_next;
            reverse = reverse_next;
        }else{
            break;
        }
    }
};
