export class LinkedList {
    constructor(public start?: LinkedListNode) {}
  
    public appendToTail(value: number) {
      if (!this.start) {
        this.start = new LinkedListNode(value);
      } else {
        let node: LinkedListNode = this.start;
        while (node && node.getNext() !== undefined) {
          node = node.getNext()!;
        }
        node.setNext(new LinkedListNode(value));
      }
    }
  
    public print(): void {
      let node: LinkedListNode | undefined = this.start;
      let i = 1;
      while (node !== undefined) {
        console.log(`Elemento ${i}: `, node!.getData());
        node = node!.getNext();
        i++;
      }
    }
  }