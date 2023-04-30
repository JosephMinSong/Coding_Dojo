#1 Countdown
def countdown(x):
    while x >= 0:
        print(x)
        x -= 1

#2 Print and Return
def printAndReturn(arr):
    print(arr[0])
    return arr[1]

#3 First plus length
def firstPlusLength(arr):
    return arr[0] + len(arr)

#4 Values greater than second
def valuesGreaterThanSecond(arr):
    if len(arr) < 3:
        return False
    else:
        count = 0
        newArr = []
        for value in arr:
            if value > arr[1]:
                count += 1
                newArr.append(value)
        print(count)
        return newArr
    
#5 This length, that value
def thisLengthThatValue(a, b):
    result = []
    while a > 0:
        result.append(b)
        a -= 1
    return result