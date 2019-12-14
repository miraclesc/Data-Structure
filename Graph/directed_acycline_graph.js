/*
排课表
现在你总共有 n 门课需要选，记为 0 到 n-1。
在选修某些课程之前需要一些先修课程。 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示他们: [0,1]
给定课程总量以及它们的先决条件，返回你为了学完所有课程所安排的学习顺序。
可能会有多个正确的顺序，你只要返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

示例 2:
输入: 4, [[1,0],[2,0],[3,1],[3,2]]
输出: [0,1,2,3] or [0,2,1,3]
解释: 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
     因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/course-schedule-ii
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //先用邻接表(对象)表示图的结构 数组存储入度 用拓扑排序的方法填入课程顺序
    var adjacency = {};
    var indegree = new Array(numCourses);
    var flag=1,course = [];
    for(var i = 0; i < numCourses; i++){
        adjacency[i] = [];
        indegree[i] = 0;
    }
    for(var i = 0; i < prerequisites.length; i++){
        adjacency[prerequisites[i][1]].push(prerequisites[i][0]);
        indegree[prerequisites[i][0]]++; 
    }
    
    while(course.length < numCourses){
        flag = 1;
        for(var i = 0; i < numCourses; i++){
            if(indegree[i] == 0){
                for(var j = 0; j<adjacency[i].length; j++){
                    indegree[adjacency[i][j]]--;
                }
                course.push(i);
                indegree[i] = -1;
                flag = 0;
            }
        }
        if(flag){
            break;
        }
    }
    if(course.length == numCourses){
        return course;
    }else{
        return [];
    }
};
