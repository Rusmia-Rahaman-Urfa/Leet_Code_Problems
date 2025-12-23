class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        # sum(..., ()) flattens the zipped tuples into one long tuple
        # We convert it back to a list to match the return type
        return list(sum(zip(nums[:n], nums[n:]), ()))
    
sol = Solution()
print(sol.shuffle([2, 5, 1, 3, 4, 7], 3)) # Output: [2, 3, 5, 4, 1, 7]
