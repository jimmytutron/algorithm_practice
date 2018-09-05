//Search Tree
class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(base = null){
        this.base = base;
    }
//breadth first
    breadthSearch(value){
        // start search at base of tree
        let current = this.base;
        // set queue to empty array that will store all children of the tree
        let queue = [];
        // while the current value is not equal to the value we are searching for...
        while(current.value !== value){
            // add the current children array to the queue
            queue.concat(current.children);
            // while the queue exists, set the current value to the first value within the queue
            if (queue.length > 0){
                current.queue.shift;
            }
            // after going through everything in the tree, and we haven't found our target value, value does not exist, set current to null.
            else {
                current = null;
                break;
            }
        }
        // return current as the target value
        return current;
    }
    //depth first
    depthSearch(value){
        let current = this.base;
        let stack = [];

        while(current.value !== value){
            for (let i = current.children.length -1; i > 0; i--){
                stack.push(current.children[i])
            }
            if (stack.length > 0){
                current.stack.pop();
            }
            else {
                current = null;
                break;
            }
        }
        return current;
    }
}

//Binary Search Tree

class BinarySearchTree {
    constructor(node){
        this.base = node;
        this.base.right = null;
        this.base.left = null;
    }
    insert(value){
        let current = this.base;
        let inserted = false;

        while(!inserted){
            if (value < current.value){
                if (!current.left){
                    current.left = new Node(value);
                    inserted = true;
                }
                else {
                    current = current.left;
                }
            }
            else {
                if (!current.right){
                    current.right = new Node(value)
                    inserted = true;
                }
                else {
                    current = current.right;
                }
            }
        }
    }
    find(value){
        let current = this.base;
        while (current && current.value !== value){
            if (value < current.value){
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return current;
    }
    balance(){
        array = toArray(this.base);
        this.base = arrayToTree(array);

        return this
    }
}

function toArray(node){
    let rightArray = [];
    let leftArray = [];

    if(node.left){
        leftArray = toArray(node.left);
    }
    if(node.right){
        rightArray = toArray(node.right);
    }
    return leftArray.concat([node.value]).concat(rightArray);
}

function arrayToTree(array){
    if (array.length === 0){
        return null;
    }

    let centerIndex = Math.floor(array.length/2);
    let leftArray = array.slice(0,centerIndex);
    let rightArray = array.slice(centerIndex + 1);
    
    node = new Node(array[centerIndex])

    node.left = arrayToTree(leftArray);
    node.right = arrayToTree(rightArray);

    return node;
}
