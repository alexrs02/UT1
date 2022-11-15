class pila{
    constructor(in_items){
        this.items = in_items || []
    }

    longitud(){
        return this.items.lengh
    }

    apliar(elem){
        this.items.push(elem)
    }

    desapliar(){
        return this.items.longitud()>0 ? this.items.pop():undefined
    }

}

class cola{
    constructor(in_items){
        this.items = in_items || []
    }

    longitud(){
        return this.items.lengh
    }

    encolar(elem){
        this.items.push(elem)
    }

    desncolar(){
        return this.longitud()>0 ? this.items.shift():undefined
    }
}


class listNode{
    constructor(data){
        this.data=data
        this.nexNode=null
    }
}

class linkList{
    constructor(head=null){
        this.head = head
    }

    getLast(){
        let lastNode = this.head
        if(lastNode){
            while(lastNode.nexNode){
                lastNode = lastNode.nexNode
            }
        }
    }

    size(){
        let count = 0
        let node = this.head
        while(node){
            count ++
            node = node.nexNode
        }
        return count
    }
}

let node1 = new listNode(2)
let node2 = new listNode(7)
nodo1.nexNode = node2
let lista = new linkList(node1)