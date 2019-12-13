/*
有 N 个花园，按从 1 到 N 标记。在每个花园中，你打算种下四种花之一。
paths[i] = [x, y] 描述了花园 x 到花园 y 的双向路径。
另外，没有花园有 3 条以上的路径可以进入或者离开。
你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。
以数组形式返回选择的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1, 2, 3, 4 表示。保证存在答案。
示例 1：
输入：N = 3, paths = [[1,2],[2,3],[3,1]]
输出：[1,2,3]
示例 2：
输入: N = 8, paths = [[7,4],[3,7],[1,5],[5,4],[7,1],[3,1],[4,3],[6,5]]
输出：[1,1,2,1,2,1,3,1]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flower-planting-with-no-adjacent
*/
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    var garden = {};
    var answer = new Array(N);
    for(var i = 1; i <= N; i++){
        garden[i] = [];
    }
    //只保存小于该结点编号的邻接结点编号
    for(var i = 0; i < paths.length; i++){
        if(paths[i][0] > paths[i][1]){
            garden[paths[i][0]].push(paths[i][1]); 
        }else{
            garden[paths[i][1]].push(paths[i][0]);
        }
    }
    answer[0] = 1;
    var temp,flag;
    for(var i = 2; i <= N; i++){
        if(garden[i].length == 0){
            answer[i-1] = 1;
        }else{
            temp = 1;
            flag = 1;
            while(flag){
                flag = 0;
                //判断存在最小的正整数，使得与相邻结点的编号不一致即可
                for(var j=0;j<garden[i].length;j++){
                    if(temp == answer[garden[i][j]-1]){
                        temp++;
                        flag = 1;
                    }
                }
            }
            answer[i-1] = temp;
        }
    }
    return answer;
};
