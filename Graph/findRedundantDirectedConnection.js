/* 
冗余连接
在本问题中，有根树指满足以下条件的有向图。该树只有一个根节点，所有其他节点都是该根节点的后继。每一个节点只有一个父节点，除了根节点没有父节点。
输入一个有向图，该图由一个有着N个节点 (节点值不重复1, 2, ..., N) 的树及一条附加的边构成。附加的边的两个顶点包含在1到N中间，这条附加的边不属于树中已存在的边。
结果图是一个以边组成的二维数组。 每一个边 的元素是一对 [u, v]，用以表示有向图中连接顶点 u and v和顶点的边，其中父节点u是子节点v的一个父节点。
返回一条能删除的边，使得剩下的图是有N个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。

示例 1：
输入: [[1,2], [2,3], [3,4], [4,1], [1,5]]
输出: [4,1]
解释: 给定的有向图如下:
5 <- 1 -> 2
     ^    |
     |    v
     4 <- 3
示例 2:
输入: [[2,1],[3,1],[4,2],[1,4]]
输出: [2,1]
解释: 给定的有向图如下:
     2 -> 1 <- 3
     ^    |
     |    v
     4 <-   
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/redundant-connection-ii
*/

var hasRing = function(node, outNode, inNode){
    var temp = JSON.parse(JSON.stringify(node));
    temp[inNode][0]--;
    for(var i =0; i<temp[outNode][1].length; i++){
        if(temp[outNode][1][i] == inNode){
            temp[outNode][1][i] = "";
        }
    }
    var flag;
    for(var i in temp){
        if(temp[i][0]>=2){
            return false;
        }
    }
    while(JSON.stringify(temp) !== '{}'){
        flag = 1;
        for(var i in temp){
            if(temp[i][0]<=0){
                for(var j = 0; j<temp[i][1].length; j++){
                    if(temp[i][1][j] in temp){
                        temp[temp[i][1][j]][0]--;
                    }
                }
                delete temp[i];
                flag = 0;
            }
        }
        if(flag){
            break;
        }
    }
    if(JSON.stringify(temp) !== '{}'){
        return false;
    }else{
        return true;
    }
}
var add_degree = function(degree,x,y){
    if(!(x in degree)){
        degree[x] = [];
        degree[x][0] = 0;
        degree[x][1] = [];
    }
    degree[x][1].push(y);
    if(!(y in degree)){
        degree[y] = [];
        degree[y][0] = 0;
        degree[y][1] = [];
    }
    degree[y][0]++;
    return degree;
}
var findRedundantDirectedConnection = function(edges) {
    //循环第一遍记录整个图的连接列表 第二遍循环 逐个拆除 若拆除该边后为无环图
    //且图中不存在入度大于2的点，则该边为结果, 返回最后一个可拆除的结果
    var degree = {};
    for(var i = 0; i < edges.length; i++){
        degree =  add_degree(degree, edges[i][0], edges[i][1]);
    }
    //console.log(degree);
    var result = [];
    for(var i = 0; i < edges.length; i++){
        if(hasRing(degree, edges[i][0], edges[i][1])){
            result.push(edges[i]);
        }
    }
    return result[result.length-1];
};
