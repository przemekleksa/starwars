import Fetch from "../utils/fetch"

export const getPlanetsRequest = (): any => {
    return Fetch.get('planets') // tu moze byc pelen url jezeli w fetch bedzie pusty strong zamiast url
}; 

export const getPlanetDetailsRequest = (id:string): any => {
    return Fetch.get('planets/'+id)
}