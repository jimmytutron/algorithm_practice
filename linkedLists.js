class Node {
    constructor(value, right, left){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = null;
        this.tail = null;
        this.init(value);
    }
    init(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = this.head;
    }
    addToHead(value) {
        const node = new Node(value);
        node.right = this.head;
        this.head.left = node;
        this.head = node;
        return this;
    }
    addToTail(value) {
        const node = new Node(value);
        node.left = this.tail;
        this.tail.right = node;
        this.tail = node;
        return this;
    }
    find(target){
        let currentNode = this.head;
        while (currentNode && (currentNode.value != target)){
            currentNode = currentNode.right;
        }
        return currentNode;
    }
    insertAfter(targetNode, newNode){
        targetNode = find(targetNode);
        newNode.left = targetNode;
        newNode.right = targetNode.right;
        targetNode.right = newNode;
        newNode.right.left = newNode;
    }
    insertBefore(targetNode, newNode){
        targetNode = find(targetNode);
        newNode.right = targetNode;
        
    }
    delete(node){
        previousNode = node.left;
        nextNode = node.right;
        previousNode.right = node.right;
        nextNode.left = node.left;
    }
}

const listOne = new LinkedList(8);
listOne
    .addToTail(9)
    .addToTail(10)
    .addToHead(7)
    .addToHead(6)
console.log(listOne);