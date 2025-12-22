class Solution:
    def getConcatenation(self, nums: list[int]) -> list[int]:
        return nums * 2

# Create an instance of the class
sol = Solution()

# Test it with an example
test_nums = [1, 2, 1]
result = sol.getConcatenation(test_nums)

# Print the result so you can see it in the terminal
print(result)