class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.result += num
        for i in nums:
            self.result += i
        return self
    def subtract(self, num, *nums):
        self.result -= num
        for i in nums:
            self.result -= i
        return self
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).add(2,1,2,5).subtract(10).add(7,12,15,9,4).subtract(8,5,4,3,2,1).result
print(x)	# should print 5
# run each of the methods a few more times and check the result!

