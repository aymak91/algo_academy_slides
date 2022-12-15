class maxHeap {
    constructor() {
        this.data = [];
    }

    length() {
        return this.data.length();
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2);
    }

    getLeftChildIndex(i) {
        return i*2+1;
    }

    getRightChildIndex(i) {
        return i*2+2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    heapifyUp() {
        let currentIdx = this.data.length-1;
        
        while(this.data[currentIdx] > this.data[ this.getParentIndex(currentIdx)]) {
            this.swap(currentIdx,  this.getParentIndex(currentIdx));
            currentIdx =  this.getParentIndex(currentIdx);
        }
    }

    heapifyDown() {
        let currentIdx = 0;

        while (this.data[this.getLeftChildIndex(currentIdx)] !== undefined) {
            let biggestChildIdx = this.getLeftChildIndex(currentIdx);

            if (this.data[this.getRightChildIndex(currentIdx)] !== undefined && this.data[this.getRightChildIndex(currentIdx) > this.data[this.getLeftChildIndex(currentIdx)]] ) {
                biggestChildIdx = this.getRightChildIndex(currentIdx);
            }

            if (this.data[currentIdx] < this.data[biggestChildIdx]) {
                this.swap(currentIdx, biggestChildIdx);
                currentIdx = biggestChildIdx;
            } else {
                return;
            }
        }
    }

    push(val) {
        this.data[this.data.length] = val;
        this.heapifyUp();
    }

    heapify(nums) {
        for (let num of nums) {
            this.push(num);
        }
    }

    poll() {
        const maxValue = this.data[0];

        this.data[0] = this.data[this.data.length-1];
        this.data.pop();
        this.heapifyDown();

        return maxValue;
    }

}

// const heap = new maxHeap();
// console.log(heap);
// heap.push(25);
// heap.push(5);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);
// console.log(heap)

// a = [];
// a.push(heap.poll());
// a.push(heap.poll());
// a.push(heap.poll());
// a.push(heap.poll());
// a.push(heap.poll());
// console.log('top 5:', a);