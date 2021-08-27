export default  class Cliente {

    #id: string
    #nome: string
    #email: string
    #token: string

    constructor(id: string = null, nome: string, email:string , token: string = null){
        this.#id = id
        this.#nome = nome
        this.#email = email
        this.#token = token


    }


    static vazio(){
        return new Cliente('','','','')
    }

    get id(){
        return this.#id
    } 

    get nome(){
        return this.#nome
    } 

    get email(){
        return this.#email
    } 

    get token(){
        return this.#token
    } 
     

}