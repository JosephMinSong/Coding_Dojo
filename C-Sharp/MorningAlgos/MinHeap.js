/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
}

idxOfParent(i) {
    return Math.floor(i / 2)
}
idxOfLeftChild(i) {
    return i * 2
}
idxOfRightChild(i) {
    return i * 2 + 1
}


/**
 * Retrieves the top (minimum number) in the heap without removing it.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {?number} Null if empty.
 */
top() {
    if (this.heap.length > 1) {
    return this.heap[1];
    }
    return null;
}

/**
 * Inserts a new number into the heap and maintains the heaps order.
 * 1. Push new num to back then.
 * 2. Iteratively swap the new num with it's parent while it is smaller than
 *    it's parent.
 * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
 * - Space: O(1) constant.
 * @param {number} num The num to add.
 */
insert(num) {
    this.heap.push(num);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1) {
    const parentIndex = Math.floor(currentIndex / 2);
    if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
    } else {
        break;
    }
    }
}

/**
 * Extracts the min num from the heap and then re-orders the heap to
 * maintain order so the next min is ready to be extracted.
 * 1. Save the first node to a temp var.
 * 2. Pop last node off and set idx1 equal to the popped value.
 * 3. Iteratively swap the old last node that is now at idx1 with it's
 *    smallest child IF the smallest child is smaller than it.
 * - Time: O(log n) logarithmic due to shiftDown.
 * - Space: O(1) constant.
 * @returns {?number} The min number or null if empty.
 */

extract() {
    let min = this.heap.length > 1 ? this.heap[1] : null;

    if(this.heap.length == 2) return this.heap.pop();

    let current = this.heap.pop();

    let i = 1; 

    this.heap[i] = current; 

    let smallerIdx = this.minOfChildren(i); 

    while(current > this.heap[smallerIdx]){
        [this.heap[i] , this.heap[smallerIdx]] = [this.heap[smallerIdx] , this.heap[i]];
        i = smallerIdx;
        current = this.heap[i];
        smallerIdx = this.minOfChildren(i);
    }

    return min;
}

minOfChildren(i){
    let left = this.idxOfLeftChild(i);
    let right = this.idxOfRightChild(i);

    if(!this.heap[left]) return right
    if(!this.heap[right]) return left
    return this.heap[left] < this.heap[right] ? left : right;
}

/**
 * Logs the tree horizontally with the root on the left and the index in
 * parenthesis using reverse inorder traversal.
 */
printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
    return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
    " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
    `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
}
}

const testMinHeap = new MinHeap();
testMinHeap.insert(5);
testMinHeap.insert(4);
testMinHeap.insert(7);
testMinHeap.insert(3);
testMinHeap.insert(6);
testMinHeap.insert(10);
testMinHeap.insert(40);
testMinHeap.insert(15);
testMinHeap.insert(20);
testMinHeap.insert(35);
testMinHeap.insert(11);
testMinHeap.insert(42);
testMinHeap.insert(9);
testMinHeap.insert(25);
testMinHeap.insert(30);
testMinHeap.printHorizontalTree()
console.log("----------------------------------")
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log(testMinHeap.extract())
console.log("----------------------------------")
testMinHeap.printHorizontalTree()