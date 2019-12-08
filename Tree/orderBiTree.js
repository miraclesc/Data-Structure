//先序、中序、后序非递归遍历二叉树
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

//先序遍历
var preorderTraversal = function(root) {
    var node = [];
    var stack = [], top =0;
    stack.push(root)
    while(top!=-1){
        while(stack[top]){
            node.push(stack[top].val);
            stack.push(stack[top].left);
            top++;
        }
        stack.pop();
        top--;
        if(top!=-1){
            stack.push(stack.pop().right);
        }
    }
    return node;
};

//中序遍历
var inorderTraversal = function(root) {
    var node = [];
    var stack = [], top = 0, temp;
    stack.push(root);
    while(top!=-1){
        while(stack[top]){
            stack.push(stack[top].left);
            top++;
        }
        stack.pop();
        top--;
        if(top!=-1){
            temp = stack.pop();
            node.push(temp.val);
            stack.push(temp.right);
        }
    }
    return node;
};

//后序遍历
