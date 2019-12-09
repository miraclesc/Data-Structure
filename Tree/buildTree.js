//前序与中序遍历序列构造二叉树 假设树中没有重复的元素

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
/**
 * @param {number[]} inorder        [3,9,20,15,7]
 * @param {number[]} postorder      [9,3,15,20,7]
 * @return {TreeNode}
    3
   / \
  9  20
    /  \
   15   7
 */
var buildTree = function(preorder, inorder) {
    var pre_index = 0;
    var helper = function(in_left, in_right){
        if(in_left == in_right){
            return null;
        }
        var target = preorder[pre_index++];
        var root = new TreeNode(target);
        var index = inorder.indexOf(target);
        root.left = helper(in_left, index);
        root.right = helper(index+1, in_right);
        return root;
    }
    return helper(0, inorder.length);
};
//后序与中序遍历序列构造二叉树时 pre_index从后序length-1开始 每次减1 先生成 root.right 再生成root.left  
