//先序、中序、后序、层次非递归遍历二叉树
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
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
var postorderTraversal = function(root) {
    var node = [];
    var stack = [], top = 0, r = null, temp;
    stack.push(root);
    while(top!=-1){
        while(stack[top]){
            stack.push(stack[top].left);
            top++;
        }
        stack.pop();
        top--;
        if(top!=-1){
            if(stack[top].right && stack[top].right!=r){
                stack.push(stack[top].right);
                top++;
            }else{
                r = stack.pop()
                node.push(r.val);
                stack.push(null);
            }
        }
    }
    return node;
};

//层次遍历 同层元素为一个列表如 [[3],[9,20],[15,7]]
var levelOrder = function(root) {
    var queue = [], node = [], temp = [],current, current_node, current_level;
    var num = 0, level = 1;
    if(root){
        queue.push([level,root]);
        num++;
    }
    while(num){
        temp = [];
        while(num && queue[0][0] == level){
            current = queue.shift();
            current_level = current[0];
            current_node = current[1];
            num--;
            temp.push(current_node.val);        
            if(current_node.left!=null){
                queue.push([current_level+1, current_node.left]);
                num++;
            }
            if(current_node.right!=null){
                queue.push([current_level+1, current_node.right]);
                num++;
            }
        }
        level++;
        node.push(temp);
    }
    return node;
};
