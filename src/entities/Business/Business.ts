import { uuid } from "uuidv4"

export class Business {

    public readonly id: string

    name: string
    ownerId: string
    modified: Date
    created: Date

    constructor(props: Omit< Business, 'id'>, id?: string){

        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
        
    }
}