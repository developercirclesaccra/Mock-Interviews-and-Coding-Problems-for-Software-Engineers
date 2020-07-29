# Introduction: 
# In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

# Each order is represented by an "order id" (an integer).

# Question: 
# We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.

# Example:
# my_list     = [3, 4, 6, 10, 11, 15]
# alices_list = [1, 5, 8, 12, 14, 19]

# # Prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
# print(merge_lists(my_list, alices_list))

# Solution:
# First, we allocate our answer list, getting its size by adding the size of my_list and alices_list.
# We keep track of a current index in my_list, a current index in alices_list, and a current index in merged_list. So at each step, there's a "current item" in alices_list and in my_list. The smaller of those is the next one we add to the merged_list!

# But careful: we also need to account for the case where we exhaust one of our lists and there are still elements in the other. To handle this, we say that the current item in my_list is the next item to add to merged_list only if my_list is not exhausted AND, either:
# alices_list is exhausted, or
# the current item in my_list is less than the current item in alices_list

def merge_lists(my_list, alices_list):
    # Set up our merged_list
    merged_list_size = len(my_list) + len(alices_list)
    merged_list = [None] * merged_list_size

    current_index_alices = 0
    current_index_mine = 0
    current_index_merged = 0
    while current_index_merged < merged_list_size:
        is_my_list_exhausted = current_index_mine >= len(my_list)
        is_alices_list_exhausted = current_index_alices >= len(alices_list)
        if (not is_my_list_exhausted and
                (is_alices_list_exhausted or
                 my_list[current_index_mine] < alices_list[current_index_alices])):
            # Case: next comes from my list
            # My list must not be exhausted, and EITHER:
            # 1) Alice's list IS exhausted, or
            # 2) the current element in my list is less
            #    than the current element in Alice's list
            merged_list[current_index_merged] = my_list[current_index_mine]
            current_index_mine += 1
        else:
            # Case: next comes from Alice's list
            merged_list[current_index_merged] = alices_list[current_index_alices]
            current_index_alices += 1

        current_index_merged += 1

    return merged_list
