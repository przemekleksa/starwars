import Fetch from "../utils/fetch"

export const getPeopleRequest = (): any => {
    return Fetch.get('people')
}

export const getPersonDetails = (id:string): any => {
    return Fetch.get('people/'+id)
}