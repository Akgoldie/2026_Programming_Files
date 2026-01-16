# Palindrome Program in Python using Built-in Function
 
def is_palindrome(n):
    return str(n) == ''.join(reversed(str(n)))
 
# Get the number from the user
n = int(input("Enter number: "))
 
# Check if the number is a palindrome
if is_palindrome(n):
  print("The number is a palindrome!")
else:
  print("The number is not a palindrome.")