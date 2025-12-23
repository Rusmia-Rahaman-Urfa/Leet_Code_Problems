import bisect

class Solution:
    def maxTwoEvents(self, events: list[list[int]]) -> int:
        # 1. Sort events by start time
        events.sort()
        n = len(events)
        
        # 2. Create a suffix maximum array
        # max_suffix[i] stores the highest value event from index i to the end
        max_suffix = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            max_suffix[i] = max(events[i][2], max_suffix[i + 1])
            
        max_sum = 0
        
        # 3. Iterate through each event and find the best non-overlapping pair
        for i in range(n):
            start, end, value = events[i]
            
            # Find the first event that starts AFTER the current event ends
            # We use bisect_right to search for the end time + 1
            idx = bisect.bisect_right(events, [end, float('inf'), float('inf')])
            
            # Calculate: current value + best available future value
            current_total = value + max_suffix[idx]
            max_sum = max(max_sum, current_total)
            
        return max_sum
