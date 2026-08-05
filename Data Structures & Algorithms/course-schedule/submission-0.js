class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = new Map();
        for (let i = 0; i < numCourses; i++) {
            adjList.set(i, []);
        }
        for (let [crs, pre] of prerequisites) {
            adjList.get(crs).push(pre);
        }
        const visited = new Set();
        const canCompleteCourseDFS = (course) => {
        if (visited.has(course)) {
            return false;
        }
        if (adjList.get(course).length === 0) {
            return true;
        }
        visited.add(course);
        for (let pre of adjList.get(course)) {
            if (!canCompleteCourseDFS(pre)) {
                // cycle detected, course cannot be completed
                return false;
            }
        }
        // remove node (aka course) from hash and mark it as "able to take"
        visited.delete(course);
        adjList[course] = [];
        return true;
        };

        // evaluate all courses from 0 to numCourses - 1
        for (let course = 0; course < numCourses; course++) {
            if (!canCompleteCourseDFS(course)) {
                // cycle detected, course cannot be completed
                return false;
            }
        }
        return true;
    }
}
