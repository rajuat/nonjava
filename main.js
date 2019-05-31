class LinkedListNode {
    constructor(data){
        this.data =  data;
        this.next = null;
    }
 }
 
 var head = new LinkedListNode(1);
 head.next = new LinkedListNode(2);
 printList(head);
 
 
 function printList(n){
    while(n!=null){
        console.log(n.data);
        n = n.next;
    }
 }

