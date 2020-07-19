const LinkedList = require("linkedlist");

const CACHE_SIZE = 10000; // 缓存队列
class PeekIterator {
  constructor(it, endToken = null) {
    this.it = it; // 控制流的迭代器

    // 需要putBack的元素
    this.stackPutBacks = new LinkedList();

    // 基于时间窗口的缓存
    this.queueCache = new LinkedList();

    this.endToken = endToken;
  }

  peek() {
    // 如果putBack栈里面有值的话，直接返回头部元素
    if (this.stackPutBacks.length > 0) {
      return this.stackPutBacks.head;
    }
    const val = this.next();
    this.pubBack();
    return val;
  }

  pubBack() {
    if (this.queueCache.length > 0) {
      this.stackPutBacks.push(this.queueCache.pop());
    }
  }

  /**
   * 判断是否有
   */
  hasNext() {
    return this.endToken || !!this.peek();
  }

  next() {
    let val = null;

    if (this.stackPutBacks.length > 0) {
      val = this.stackPutBacks.pop();
    } else {
      val = this.it.next().value;
      if (val === undefined) {
        const tmp = this.endToken;
        this.endToken = null;
        return tmp;
      }
    }
    val = this.it.next().value;
    while (this.queueCache.length > CACHE_SIZE - 1) {
      // 当缓存队列超过上限就执行出队操作，处理缓存
      this.queueCache.shift();
    }
    this.queueCache.push(val);
    return val;
  }
}

module.exports = PeekIterator;
