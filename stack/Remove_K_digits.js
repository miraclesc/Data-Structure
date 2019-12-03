/**
 * 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
 * 注意:
 * num 的长度小于 10002 且 ≥ k。
 * num 不会包含任何前导零。
 * 示例 1 :
 * 输入: num = "1432219", k = 3 
 * 输出: "1219"
 * 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
 * 来源：力扣（LeetCode）
**/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    //使当前位与后剩余k位比较 使当前位尽可能的小
    var index = 0;
    var stack = [];
    var stack_del = [];
    var current_index = 0;
    var flag = 0;
    var all = k;
    while(index < num.length && k > 0){
        flag = 0
        current_index = 0;
        current = num.charAt(index);
        stack.push(current);
        for(var i=1;i<=k;i++){
            if(num[index+i]<current){
                stack.pop();
                current = num[index+i];
                stack.push(num[index+i]);
                current_index = index+i;
                flag = 1;
            }
        }
        if(flag){
            k = all - (current_index + 1 - stack.length);
            index = current_index + 1;
        }else{
            index++;
        }
    }
    //未循环完 加入剩余部分
    while(index < num.length){
        stack.push(num[index++]);
    }
    //结尾单调导致数量过多未处理 如 123456789 这种情况
    while(k > 0){
        stack.pop();
        k--;
    }
    //去除0开头 
    while(stack[0] == '0'){
        stack.shift();
    }
    if(stack.length == 0){
        stack = ["0"];
    }
    return stack.join("");
};
removeKdigits("1432219"); //"1219"
