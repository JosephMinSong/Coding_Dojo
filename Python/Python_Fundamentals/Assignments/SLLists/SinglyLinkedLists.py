class SLList():
    def __init__(self):
        self.head = None

    def display_list(self):
        runner = self.head
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def add_to_front(self, value):
        new_node = SLNode(value)
        new_node.next = self.head
        self.head = new_node
        return self
    
    def add_to_last(self, value):
        new_node = SLNode(value)
        runner = self.head
        if runner.next == None:
            self.add_to_front(value)
        while runner.next != None:
            runner = runner.next
        runner.next = new_node
        return self
    
    def remove_from_front(self):
        if self.head != None:
            next_node = self.head.next
            self.head = next_node
        return self
    
    def remove_from_end(self):
        runner = self.head
        while runner.next != None:
            previous_runner = runner
            runner = runner.next
        
        if runner == self.head:
            self.remove_from_front()
        else:
            previous_runner.next = None

    def remove_val(self, value):
        runner = self.head
        while runner.value != value:
            previous_runner = runner
            runner = runner.next
        
        if previous_runner == self.head:
            self.remove_from_front()
        elif runner.next == None:
            self.remove_from_end()
        else: 
            previous_runner.next = runner.next


    def insert_after_value(self, newvalue, value):
        new_node = SLNode(newvalue)
        runner = self.head
        while runner.value != value:
            runner = runner.next
        
        if runner.next == None:
            self.add_to_last(value)
        else: 
            new_node.next = runner.next
            runner.next = new_node

        return self

    def insert_before_value(self, newvalue, value):
        new_node = SLNode(newvalue)
        runner = self.head
        while runner.value != value:
            previous_runner = runner
            runner = runner.next
        
        if runner == self.head:
            self.add_to_front(newvalue)
        else: 
            new_node.next = previous_runner.next
            previous_runner.next = new_node

        return self

class SLNode():
    def __init__(self, value):
        self.value = value
        self.next = None

my_sl_list = SLList()

# Testing adding to front and last
my_sl_list.add_to_front(10).add_to_front(15).add_to_front(20)
my_sl_list.add_to_last(11).add_to_last(12).add_to_last(13)

# Testing removing from front and last
my_sl_list.remove_from_front()
my_sl_list.remove_from_end()

# Testing inserting before and after values and removing values
my_sl_list.insert_after_value(99, 10)
my_sl_list.insert_before_value(77, 10)
my_sl_list.remove_val(99)

my_sl_list.display_list()
