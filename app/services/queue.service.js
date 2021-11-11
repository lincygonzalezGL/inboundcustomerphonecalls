class Queue {
  constructor() {
    this.q = [];
  }

  push(item) {
    let right = this.q.length;
    let left = 0;

    while (left < right) {
      const mid = (right + left) >> 1;
      this.compare(this.q[mid], item) > 0 ? (left = mid + 1) : (right = mid);
    }

    this.q.splice(right, 0, item);
  }

  shift() {
    return this.q.shift();
  }

  compare(currentItem, newItem) {
    if (currentItem.priority > newItem.priority) {
      return 1;
    }
    return 0;
  }
}

export default new Queue();
