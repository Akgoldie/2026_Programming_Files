#Method 3: Palindrome in Python using Recursion

def is_palindrome(n, temp, rev=0):
    if n == 0:
        if temp == rev:
            return "The number is a palindrome!"
        else:
            return "The number isn't a palindrome!"
    else:
        dig = n % 10
        rev = rev * 10 + dig
        n = n // 10
        return is_palindrome(n, temp, rev)
 
n = int(input("Enter number:"))
result = is_palindrome(n, n)
print(result)