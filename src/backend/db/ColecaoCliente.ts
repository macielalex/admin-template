import firebase from "../../firebase/config";
import Cliente from "../../components/core/Cliente";
import ClienteRepositorio from "../../components/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                id: cliente.id,
                name: cliente.nome,
                email: cliente.email,
                active: cliente.active
                
            }
        
        },
        fromFirestore(snapshot : firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)            
            return new Cliente(snapshot?.id, dados.name, dados.email, dados.active )
        }
    }
    
    async salvar(cliente: Cliente): Promise<Cliente>{
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        }else{
            const docRef = await this.colecao().add(cliente)
            const doc =  await docRef.get()
            return doc.data()
        }
        return null
    }

    async ativar(cliente: Cliente): Promise<void>{
        return this.colecao().doc(cliente.id).update({'active': true})
    }

    async excluir(cliente: Cliente): Promise<void>{
        return this.colecao().doc(cliente.id).update({'active': false})
    }
    async obterTodos(): Promise<Cliente[]>{
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase
        .firestore().collection('users')
        .withConverter(this.#conversor)
    }
}