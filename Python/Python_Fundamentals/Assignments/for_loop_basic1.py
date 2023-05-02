#1 - Basic: print all integers from 0-150
for i in range(0, 151):
    print(i)

# #2 - Multiples of 5: print all multiples of 5 from 5-1000
for i in range(5,1001,5):
    print(i)

#3 - Counting, the Dojo Way: print integers 1-100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo"
for i in range(1, 101):
    if i%10 == 0:
        print("Coding Dojo")
    elif i%5 == 0:
        print("Coding")
    else:
        print(i)

#4 - Whoa. That sucker's huge: add odd integers from 0-500,000 and print the final sum
sum = 0
for i in range(0, 500000):
    if i%2 == 1:
        sum += i

print(sum)

#5 - Countdown by Fours: Print positive numbers starting at 2018, counting down by fours
x = 2018
while x > 0:
    print(x)
    x -= 4

#6 - Flexible Counter: Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, 
# print only the integers that are a multiple of mult. 
# For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

lowNum = 1
highNum = 100
mult = 11

for i in range(lowNum, highNum + 1):
    if (i%mult == 0):
        print(i)
