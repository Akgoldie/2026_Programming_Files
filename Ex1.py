#Write a Python Program to check whether a given number is even or odd.
#Method 1: (Using if-else and Modulus Operator)

n = int(input("Enter a number: "))
 
if n % 2 == 0:
    print(n, "is an even number.")
else:
    print(n, "is an odd number.")