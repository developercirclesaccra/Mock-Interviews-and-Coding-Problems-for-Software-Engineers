# Question:
# Write a function for reversing a linked list. Your function will have one input: the head of the list. Your function should return the new head of the list.

# ---------------------------------------------------------------------------------------------------------------------------------------------------------

# Bonus:
# How would you answer this in place?

# ----------------------------------------------------------------------------------------------------------------------------------------------------------

# Tips: 
# The most obvious edge cases are:
# the list has 0 elements
# the list has 1 element
# We can reverse the list by changing the next pointer of each node. Each node's next pointer should point to the previous node.
# a)  An in-place function modifies data structures or objects outside of its own stack frame (i.e.: stored on the process heap or in the stack frame of a 
# calling function). Working in-place is a good way to save time and space. You should only use an in-place algorithm if you're space constrained or you're 
# positive you don't need the original input anymore, even for debugging.

# Careful: "In-place" does not mean "without creating any additional variables!". Rather, it means "without creating a new copy of the input." 

# b) An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects 
# before manipulating and changing them. Generally, out-of-place algorithms are considered safer because they avoid side effects. 

# -----------------------------------------------------------------------------------------------------------------------------------------------------------

# Solution:
# In one pass from head to tail of our input list, we point each node's next pointer to the previous item. 

# The order of operations is important here! We're careful to copy current_node.next into next before setting current_node.next to previous_node. Otherwise 
# "stepping forward" at the end could actually mean stepping back to the previous_node!


class LinkedListNode(object):
    def __init__(self, value):
        self.value = value
        self.next  = None

def reverse(head_of_list):
    current_node = head_of_list
    previous_node = None
    next_node = None

    # Until we have 'fallen off' the end of the list
    while current_node:
        # Copy a pointer to the next element
        # before we overwrite current_node.next
        next_node = current_node.next

        # Reverse the 'next' pointer
        current_node.next = previous_node

        # Step forward in the list
        previous_node = current_node
        current_node = next_node

    return previous_node

# ------------------------------------------------------------------------------------------------------------------------------------------------

# Complexity:
# O(n) time and O(1) space. We pass over the list only once, and maintain a constant number of variables in memory
