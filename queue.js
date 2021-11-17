let collection = [];

// Write the queue functions below.

// Required stack functions:
//  - show all the items in the stack
//  - push an element in the stack
//  - pop an element in the stack
//  - show the top element in the stack
//  - return the size of the stack
//  - return if there are items in the stack or not
function print() {
    return collection;
}


function enqueue(toAdd) {
    collection[collection.length] = toAdd;
    return collection;
}

function dequeue(){
    let newCollection = [];
    for (let index = 1, index2 = 0; index < collection.length; index++, index2++) {
       newCollection[newCollection.length] = collection[index];
    }
    collection = newCollection;
    return newCollection
}

function front(){
    return collection[0];
}

function size(){
    return collection.length;
}

function isEmpty(){
    if(collection.length !== 0){return false}
}
module.exports = {
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};