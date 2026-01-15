"""
Palindrome number in Python is a number that remains the same when its digits are reversed. 
It reads the same forwards and backwards. To check if a number is a palindrome, 
we compare it with its reverse. If they are equal, the number is a palindrome.

Example: Numbers like 121, 454, and 888 are all palindrome numbers as they read the same forwards and backwards.
"""


# Method 1: Palindrome Program in Python using While Loop

n=int(input("Enter number:"))
temp=n
rev=0
while(n>0):
    dig=n%10
    rev=rev*10+dig
    n=n//10
if(temp==rev):
    print("The number is a palindrome!")
else:
    print("The number isn't a palindrome!")