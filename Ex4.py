#Write a Python Program to check whether a given number is even or odd.
#Method 4: (Using Lambda Function)

check_number = lambda num: "even" if num % 2 == 0 else "odd"
 
number = int(input("Enter a number: "))
result = check_number(number)
 
print(number, "is an", result, "number.")