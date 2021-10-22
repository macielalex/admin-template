export default  class Cliente {

    #id: string
    #name: string
    #email: string
    #active: boolean
    

    constructor(id: string = null, name: string, email:string, active:boolean ){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#active = active
        


    }


    static vazio(){
        return new Cliente('','','',true)
    }

    get id(){
        return this.#id
    } 

    get nome(){
        return this.#name
    } 

    get email(){
        return this.#email
    } 

    get activeDesc(){
        if(this.#active){

            return "Ativo"
        } 
        else if(this.#active == null){
            return "Nulo"
        }  
        else {

            return "Bloqueado"
        }
        
    } 
    get textFormatActive(){
        if(this.#active){

            return ``
        } 
        else if(this.#active == null){
            return ``
        }  
        else {

            return `line-through`
        }
        
        
    }

    get active(){
        if(this.#active){

            return true
        } 
        else if(this.#active == null){
            return true
        }  
        else {

            return false
        }
        
    } 



   
     

}