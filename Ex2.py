#Write a Python Program to check whether a given number is even or odd.
#Method 2: (Using Bitwise Operator)

n = int(input("Enter a number: "))
 
if n & 1:
    print(n, "is an odd number.")
else:
    print(n, "is an even number.")