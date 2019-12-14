/*
现在你总共有 n 门课需要选，记为 0 到 n-1。
在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]
给定课程总量以及它们的先决条件，判断是否可能完成所有课程的学习？
示例 1:
输入: 5,[[1,0],[2,1],[3,1],[0,3],[3,4]]
输出: false
解释: 3->1->0->3为环 不可能完成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/course-schedule
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //先用邻接表(对象)表示图的结构 数组存储入度 用拓扑排序的方法验证是否有环
    var adjacency = {};
    var indegree = new Array(numCourses);
    var flag=1, num=0;
    for(var i = 0; i < numCourses; i++){
        adjacency[i] = [];
        indegree[i] = 0;
    }
    for(var i = 0; i < prerequisites.length; i++){
        adjacency[prerequisites[i][0]].push(prerequisites[i][1]);
        indegree[prerequisites[i][1]]++; 
    }
    
    while(num < numCourses){
        flag = 1;
        for(var i = 0; i < numCourses; i++){
            if(indegree[i] == 0){
                for(var j = 0; j<adjacency[i].length; j++){
                    indegree[adjacency[i][j]]--;
                }
                indegree[i] = -1;
                num++;
                flag = 0;
            }
        }
        if(flag){
            break;
        }
    }
    if(num == numCourses){
        return true;
    }else{
        return false;
    }
};
