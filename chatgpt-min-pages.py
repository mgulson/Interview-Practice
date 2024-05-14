## ChatGPT min pages

def min_pages(pages, days):
    def can_finish(max_pages_per_day):
        # Check if it's possible to read the entire book in 'days' days
        # with the given 'max_pages_per_day' as the limit per day
        current_day_count = 0
        current_pages_sum = 0
        
        for pages_in_chapter in pages:
            if current_pages_sum + pages_in_chapter > max_pages_per_day:
                # We need to start a new day if adding this chapter would exceed the daily limit
                current_day_count += 1
                current_pages_sum = pages_in_chapter
                if current_day_count >= days:
                    # If we already need more days than allowed, return False
                    return False
            else:
                # Add the current chapter's pages to the day's total
                current_pages_sum += pages_in_chapter
        
        # If we finished the loop without exceeding the number of days, we need to count the last day
        return current_day_count + 1 <= days

    if days < len(pages):  # If we have fewer days than chapters, it's impossible
        return -1
    
    low, high = max(pages), sum(pages)
    
    while low < high:
        mid = (low + high) // 2
        if can_finish(mid):
            high = mid
        else:
            low = mid + 1
    
    return low

pages = [2,4,3]
days = 4
x = 3

print(min_pages(pages, days))