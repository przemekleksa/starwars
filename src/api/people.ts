import Fetch from "../utils/fetch"

export const getPeopleRequest = (): any => {
    return Fetch.get('people')
}

export const getPersonDetailsRequest = (id:string): any => {
    return Fetch.get('people/'+id)
}