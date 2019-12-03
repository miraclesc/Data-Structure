/*
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
1代表柱子 0代表雨水
             1
     1 0 0 0 1 1 0 1
 1 0 1 1 0 1 1 1 1 1 1
示例:
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //用数组表示当前高度柱子的位置 如stack[3] = 7 即高度为3的柱子在第7位 默认初始化 stack[i] = -1
    var stack = [];
    var max = 0;
    for(var i = 0; i<height.length; i++){
        if(height[i] > max){
            max = height[i];
        }
    }
    for(var i=0; i<=max;i++){
        stack[i] = -1;
    }
    
    var result= 0;
    var targrt_height;
    for(var i = 0; i < height.length; i++){
        targrt_height = height[i];
        // 当前位置柱子的高度 如果柱子高度大于0 则查找前一个该高度的柱子的位置 并计算两者差值 累加该差值即为水量
        //修改原柱子位置为当前位置 柱子高度减1 重复操作直至柱子高度为0  
        while(targrt_height){
            if(stack[targrt_height]!=-1){
                result += i - stack[targrt_height] - 1;
            }
            stack[targrt_height--] = i;
        }   
    }
    return result;
};
trap([0,1,0,2,1,0,1,3,2,1,2,1])
