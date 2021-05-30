class MusicNode{

    constructor(node=null, nextNode=null){
        this.musicObject = node
        this.next = nextNode
    }

    setMusic(node){
        this.musicObject = node
    }

    setNext(nextNode){
        this.next = nextNode
    }

}

export default MusicNode