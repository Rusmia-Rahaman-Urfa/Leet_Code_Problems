class Solution:
    def numOfWays(self, n: int) -> int:
        MOD = 10**9 + 7
        
        # Initial combinations for n=1
        # aba: patterns where 1st and 3rd colors are same (6 ways)
        # abc: patterns where all 3 colors are different (6 ways)
        aba, abc = 6, 6
        
        for _ in range(1, n):
            # Transition logic based on color constraints:
            # New ABA can be formed in 3 ways from old ABA and 2 ways from old ABC
            # New ABC can be formed in 2 ways from old ABA and 2 ways from old ABC
            new_aba = (3 * aba + 2 * abc) % MOD
            new_abc = (2 * aba + 2 * abc) % MOD
            
            aba, abc = new_aba, new_abc
            
        return (aba + abc) % MOD
        