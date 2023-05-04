class DLList:
    def __init__(self):
        self.head = None
        self.tail = None

    def display_list(self):
        runner = self.head
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def add_to_front(self, value):
        new_node = DLNode(value)

        # If the list is empty, then we simply set the head and tail to the new node
        if self.head == None and self.tail == None:
            self.head = new_node
            self.tail = new_node
        else: 
            new_node.next = self.head
            new_node.next.previous = new_node
            self.head = new_node
        
        return self
    
    def add_to_last(self, value):
        new_node = DLNode(value)

        # if the list if empty, then we simply set the head and tail to the new node
        if self.head == None and self.tail == None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.previous = self.tail
            new_node.previous.next = new_node
            self.tail = new_node
        
        return self
    
    def print_values_background(self):
        runner = self.tail
        while runner != None:
            print(runner.value)
            runner = runner.previous
        return self
    
    def insert_at(self, value, index):
        new_node = DLNode(value)
        if index == 0:
            self.add_to_front(value)
            return self
        
        count = 0

        runner = self.head
        while count != index:
            runner = runner.next
            count += 1
        
        if runner == None or runner.next == None:
            self.add_to_last(value)
            return self
        
        new_node.next = runner
        new_node.previous = runner

        runner.next.previous = new_node
        runner.previous.next = new_node

        return self


    """
    --------------------------------------------------------------------------------------
    How would you know if you have a circular linked list?

    You would know if the Node.next that the tail is pointing to is equal to the self.head attribute
    --------------------------------------------------------------------------------------
    """

    def check_if_circular_list(self):
        if self.tail.next == self.head:
            return True
        else: 
            return False
    
    """
    --------------------------------------------------------------------------------------
    How would you get to the middle of the linked list?

    Start at the head and tail using two runners. If the node.value is the same for both runners, 
    then you reached the middle of an odd length list. If the node.next of runner1
    is the same node as runner2, 
    then you also reached the middle of an even length list.
    --------------------------------------------------------------------------------------
    """

    def get_middle(self):
        runner1 = self.head
        runner2 = self.tail

        # Runners can't be the same object 
        # and the head runner's next node can't be equal to tail runner
        while runner1 != runner2 and runner1.next != runner2:
            runner1 = runner1.next
            runner2 = runner2.previous
        
        # Odd length = has true middle; both runners will give same value
        # Even length = had no true middle but will give you the two nodes that make up the middle
        print(runner1.value, runner2.value)

    """
    --------------------------------------------------------------------------------------
    How would you remove duplicate values in the list?

    Iterate through the linked list using a runner and store unique node.values using 'not in'.
    If you get to a node with a value already seen, remove it
    --------------------------------------------------------------------------------------
    """

    # For readability
    def remove_node(self, node):
        node.previous.next = node.next
        node.next.previous = node.previous

    def remove_duplicates(self):
        unique_values = []
        runner1 = self.head
        runner2 = self.tail

        while runner1 != runner2 and runner1.next != runner2:

            # The first value evaluated will never be a redundant case
            if runner1.value not in unique_values:
                unique_values.append(runner1.value)
            else: 
                self.remove_node(runner1)

            if runner2.value not in unique_values:
                unique_values.append(runner2.value)
            else:
                # theroetically, the tail could be the same value as the head
                if runner2.previous == None:
                    self.tail = runner2.next
                    runner2.next.previous = None
                else:
                    self.remove_node(runner2)

            runner1 = runner1.next
            runner2 = runner2.previous

        # if the list is odd length - they'll be the same so we just need to check one
        if runner1 == runner2:
            if runner1.value in unique_values:
                self.remove_node(runner1)

        # the while loop will get us to the two in the middle if it's an even length list
        # so we have to do the middle ones as well now but need to keep adding because
        # theoretically the middle two could be the only two same values in the list
        if runner1.value not in unique_values:
            unique_values.append(runner1.value)
        else: 
            self.remove_node(runner1)
        
        # this is the last thing we need to check so we don't need to keep adding
        if runner2.value in unique_values:
            self.remove_node(runner2)
        
        return self
    
    """"
    --------------------------------------------------------------------------------------
    How would you reverse the values in the list?

    First set the head to the tail and vice versa. Then, starting at the new head node, 
    iterate through the list with a runner. At every node, switch the previous and next nodes,
    until you get to a None node.
    --------------------------------------------------------------------------------------
    """

    def reverse_dl_list(self):
        head_node = self.head
        self.head = self.tail
        self.tail = head_node

        runner = self.head
        while runner != None:
            temp_next = runner.next
            runner.next = runner.previous
            runner.previous = temp_next

            runner = runner.next
        
        return self

class DLNode:
    def __init__(self, value):
        self.value = value
        self.previous = None
        self.next = None


my_dlList = DLList()

my_dlList.add_to_last(1).add_to_last(2).add_to_last(3).add_to_last(4).add_to_last(5).add_to_last(6).add_to_last(7)

my_dlList.add_to_front(90).add_to_front(70)

my_dlList.display_list()

my_dlList.insert_at(55, 9)

my_dlList.display_list()

