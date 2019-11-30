'''
下一个更大元素
给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

示例 1:

输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。

来源：力扣（LeetCode）
'''


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums2_dict = {}
        num2_stack = []
        for i in nums2:
            nums2_dict[i] = -1
        index = 0
        top = 0
        nums2_len = len(nums2)
        while index < nums2_len:
            if top == 0:
                num2_stack.append(nums2[index])
                top += 1
                index += 1
                continue
            if nums2[index] > num2_stack[top-1]:
                nums2_dict[num2_stack.pop(top-1)] = nums2[index]
                top -= 1
            else:
                num2_stack.append(nums2[index])
                top += 1
                index += 1
        result = []
        for j in nums1:
            result.append(nums2_dict[j])
        return result
