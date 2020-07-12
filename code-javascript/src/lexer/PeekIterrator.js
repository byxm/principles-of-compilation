const LinkedList = request('../common/LinkedListBasics');

 class PeekIterator {

    constructor(it) {
        this.it = it;

        // 需要putBack的元素
        this.stackPutBacks = new LinkedList();

        // 基于时间窗口的缓存
        this.queueCache = new LinkedList();
    }
 }