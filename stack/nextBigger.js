/*
 *根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 *0 来代替。
 *例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 *来源：力扣（LeetCode）
 *链接：https://leetcode-cn.com/problems/daily-temperatures
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
 
//使用单调栈的方法寻找下一个更大的元素
//stack 栈中 每个元素为一个数组 [在列表中的位置，在该位置的值]
var dailyTemperatures = function(T) {
    var hash = T.map(function(){return 0});
    var stack = [];
    var top = 0, index = 0;
    while(index < T.length){
        if(top == 0){
            stack.push([index,T[index]]);
            top++;
            index++;
        }
        while(top > 0 && stack[top-1][1] < T[index]){
            hash[stack[top-1][0]] = index - stack[top-1][0];
            stack.pop();
            top--;
        }
        stack.push([index,T[index]]);
        top++;
        index++;
    }
    return hash;
};
