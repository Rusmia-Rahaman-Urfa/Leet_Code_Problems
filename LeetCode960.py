class Solution:
    def minDeletionSize(self, strs: list[str]) -> int:
        num_cols = len(strs[0])
        
        # dp[i] = the maximum number of columns we can keep 
        # ending at column i.
        dp = [1] * num_cols
        
        for i in range(1, num_cols):
            for j in range(i):
                # We can keep column i after column j ONLY if for EVERY row,
                # the character at i is >= character at j.
                if all(row[j] <= row[i] for row in strs):
                    dp[i] = max(dp[i], dp[j] + 1)
        
        # The minimum deletions = Total columns - Maximum columns we can keep
        return num_cols - max(dp)