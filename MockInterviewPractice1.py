# Introduction: 
# You're working on a secret team solving coded transmissions.

# Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. 
# The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

# Question:
# Write a function reverse_words() that takes a message as a list of characters and reverses the order of the words in place. 

# Tips: 
# When writing your function, it’s safe to assume the message contains only letters and spaces, and all words are separated by one space.
# a)  An in-place function modifies data structures or objects outside of its own stack frame (i.e.: stored on the process heap or in the stack frame of a calling function). 
# Working in-place is a good way to save time and space. You should only use an in-place algorithm if you're space constrained or you're positive you don't need the original 
# input anymore, even for debugging.

# Careful: "In-place" does not mean "without creating any additional variables!". Rather, it means "without creating a new copy of the input." 

# b) An out-of-place function doesn't make any changes that are visible to other functions. Usually, those functions copy any data structures or objects before 
# manipulating and changing them. Generally, out-of-place algorithms are considered safer because they avoid side effects. 

# Solution:
# We'll write a helper function reverse_characters() that reverses all the characters between a left_index and right_index. We use it to:

# Reverse all the characters in the entire message, giving us the correct word order but with each word backward.
# Reverse the characters in each individual word.
# [ ‘l’, ‘e’, ‘a’,’t’, ‘s’ ...

message = [ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ]

def reverse_words(message):
    # First we reverse all the characters in the entire message
    reverse_characters(message, 0, len(message)-1)

    # This gives us the right word order
    # but with each word backward

    # Now we'll make the words forward again
    # by reversing each word's characters

    # We hold the index of the *start* of the current word
    # as we look for the *end* of the current word
    current_word_start_index = 0

    for i in range(len(message) + 1):
        # Found the end of the current word!
        if (i == len(message)) or (message[i] == ' '):
            reverse_characters(message, current_word_start_index, i - 1)
            # If we haven't exhausted the message our
            # next word's start is one character ahead
            current_word_start_index = i + 1


def reverse_characters(message, left_index, right_index):
    # Walk towards the middle, from both sides
    while left_index < right_index:
        # Swap the left char and right char
        message[left_index], message[right_index] = message[right_index],     message[left_index]
        left_index  += 1
        right_index -= 1