/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        // Create a new node with the given data.
        const newHead = new DLLNode(data);

        // Check if the list is empty.
        if (this.isEmpty()) {
            // If the list is empty, set both the head and tail to the new node.
            this.head = newHead;
            this.tail = newHead;
        } else {
            // If the list is not empty:
            // - Set the old head as the next node of the new node.
            const oldHead = this.head;
            oldHead.prev = newHead;
            newHead.next = oldHead;
            // - Update the head to be the new node.
            this.head = newHead;
        }

        // Return the updated list.
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        // Create a new node with the given data.
        const newTail = new DLLNode(data);

        // Check if the list is empty.
        if (this.isEmpty()) {
            // If the list is empty, set both the head and tail to the new node.
            this.head = newTail;
            this.tail = newTail;
        } else {
            // If the list is not empty:
            // - Set the next reference of the current tail to the new node.
            this.tail.next = newTail;
            // - Set the prev reference of the new node to the current tail.
            newTail.prev = this.tail;
            // - Update the tail to be the new node.
            this.tail = newTail;
        }

        // Return the updated list.
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        // Check if there is only one node in the list.
        if (!this.isEmpty() && this.head === this.tail) {
            // If there is only one node, remove it by setting the head and tail to null.
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }

        // Create two runners, one starting from the head and the other from the tail.
        let forwardRunner = this.head;
        let backwardsRunner = this.tail;

        // Traverse the list towards the middle from both ends.
        while (forwardRunner && backwardsRunner) {
            // Check if the forward and backward runners have met at the same node (middle node).
            if (forwardRunner === backwardsRunner) {
                // Save the middle node reference.
                const midNode = forwardRunner;

                // Adjust the previous node's next reference to skip the middle node.
                midNode.prev.next = midNode.next;
                // Adjust the next node's previous reference to skip the middle node.
                midNode.next.prev = midNode.prev;

                // Return the data of the removed middle node.
                return midNode.data;
            }
            // Check if the forward runner's previous node is the same as the backward runner,
            // indicating that the runners have passed each other without stopping on the same node.
            // This occurs in even-length lists and indicates that there is no middle node.
            if (forwardRunner.prev === backwardsRunner) {
                return null;
            }
            // Move the forward runner one step forward.
            forwardRunner = forwardRunner.next;
            // Move the backward runner one step backward.
            backwardsRunner = backwardsRunner.prev;
        }
        // If no middle node is found, return null.
        return null;
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) { }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) { }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }

    /*
        * Retrieves the data from the nthLast node in this list.
        * The nthLast parameter specifies the position of the node 
        * to be retrieved from the end of the linked list. For example, if nthLast is 1,
        * it means we need to retrieve the last node; if nthLast is 2,
        * it means we need to retrieve the second-to-last node; and so on.
        * - Time: O(?).
        * - Space: O(?).
        * @param {number} nthLast Indicates the position from the back of the list.
        * @returns {any}
    */
    nthToLast(nthLast) {
        if(this.isEmpty()) return null

        let i = 1;
        let runner = this.tail;

        while(i <= nthLast && runner != null){
            runner = runner.prev;
            i++;
        }

        return runner 
    }

    /**
     * Determines if the node's data of this list forms a palindrome.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this list is a palindrome.
     */
    isPalindrome() {
        if(this.isEmpty()) return false

        let runner1 = this.head;
        let runner2 = this.tail;

        while(runner1.prev != runner2){
            if(runner1 == runner2 || runner1.data != runner2.data){
                return false
            }
            runner1 = runner1.next;
            runner2 = runner2.prev;
        }
        return true
    }

    /**
     * Determines if a given node in this list is in the left half of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node
     * @returns {boolean}
     */
    isNodeInLeftHalf(node) {
        if(this.isEmpty()) return false

        let runner1 = this.head;
        let runner2 = this.tail;

        while(runner1.prev != runner2){
            if(runner1 == node){
                return true
            }
            runner1 = runner1.next;
            runner2 = runner2.prev;
        }
        return false
    }

    getANode(placement){
        if(this.isEmpty()) return false
    
        let i = 1;
        let runner = this.head;

        while(i <= placement){
            runner = runner.next;
            i++;
        }
        return runner
    }   
}

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const emptyList = new DoublyLinkedList();
const singleNodeList = new DoublyLinkedList().insertAtFront(1);
const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const triNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2).insertAtBack(3);

const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([-5, -10, 4, -3, 6, 1, -7, -2]);
const palindromeList = new DoublyLinkedList().insertAtBackMany([1,2,3,3,2,1])
const newNodeWeMade = new DLLNode(-10);

// console.log(singleNodeList.toArray())
// console.log(biNodeList.toArray())
// console.log(triNodeList.toArray())

// console.log(biNodeList.removeMiddleNode())
// console.log(biNodeList.toArray())

// console.log(biNodeList.removeMiddleNode())
// console.log(biNodeList.toArray())

// console.log(triNodeList.removeMiddleNode())
// console.log(triNodeList.toArray())

// console.log(palindromeList.toArray());
// console.log(palindromeList.isPalindrome());

const lookingFor = unorderedList.getANode(2); // give us -10 node in memory
console.log(unorderedList.isNodeInLeftHalf(lookingFor));
console.log(unorderedList.isNodeInLeftHalf(newNodeWeMade));