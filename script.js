function mincost(arr)
{ 
//write your code here
// return the min cost
	function mincost(arr) {
    // Convert the array to a min-heap
    buildMinHeap(arr);

    // Initialize the total cost
    let totalCost = 0;

    // Continue until there is only one rope left
    while (arr.length > 1) {
        // Extract the two smallest ropes
        const min1 = extractMin(arr);
        const min2 = extractMin(arr);

        // Connect the two ropes and add the cost to the total
        const cost = min1 + min2;
        totalCost += cost;

        // Insert the new rope back into the heap
        insertMin(arr, cost);
    }

    return totalCost;
}

function buildMinHeap(arr) {
    const n = arr.length;

    // Build a min-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function extractMin(arr) {
    const n = arr.length;

    if (n === 0) {
        return -1; // Indicating an error (heap is empty)
    }

    // Extract the minimum element (root of the heap)
    const root = arr[0];

    // Replace the root with the last element
    arr[0] = arr[n - 1];

    // Remove the last element
    arr.pop();

    // Heapify the root to maintain the heap property
    heapify(arr, n - 1, 0);

    return root;
}

function insertMin(arr, value) {
    // Insert a new element at the end of the heap
    arr.push(value);

    let i = arr.length - 1;

    // Fix the min-heap property by bubbling up the new element
    while (i > 0 && arr[parent(i)] > arr[i]) {
        // Swap the element with its parent
        [arr[i], arr[parent(i)]] = [arr[parent(i)], arr[i]];

        // Move to the parent
        i = parent(i);
    }
}

function heapify(arr, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Find the smallest element among the root, left child, and right child
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    // If the smallest element is not the root, swap them and continue heapifying
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

function parent(i) {
    return Math.floor((i - 1) / 2);
}

module.exports = mincost;

  
}

module.exports=mincost;
