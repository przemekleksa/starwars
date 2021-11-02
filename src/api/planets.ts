import Fetch from "../utils/fetch"

export const getPlanetsRequest = (): any => {
    return Fetch.get('planets')
} 

export const getPlanetDetails = (id:string): any => {
    return Fetch.get(`planets/${id}`)
}