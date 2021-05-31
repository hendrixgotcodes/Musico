import Compare from '../utils/Comparator.js'
import MusicNode from './MusicNode.js'

class MusicList{

    constructor(){
        this.count = 0
        this.head = null
    }

    arrayToList(array){

        array.forEach(element => {

            if(element !== null){
                this.push(element)
            } 
            
        });

    }

    push(music){
        const newMusic = new MusicNode(music)
        let current

        if(this.head === null){
            this.head = current
        }else{
            current = this.head
            while (current.next !== null) {
                current = current.next                
            }
            current.next = music
        }
        this.count++
    }

    *next(){
        
    }

}