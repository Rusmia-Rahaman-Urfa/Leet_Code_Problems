class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        # Join the list into a single string: "110111"
        # Split by '0': ["11", "111"]
        # Find the length of the longest string in the list
        
        # Using map(str, nums) converts each int to a string
        # "".join() combines them
        # .split('0') breaks them into groups of ones
        return max(len(s) for s in "".join(map(str, nums)).split('0'))