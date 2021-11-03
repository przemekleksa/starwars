import Fetch from "../utils/fetch"

export const getFilmsRequest = (): any => {
    return Fetch.get('films')
}

export const getFilmDetails = (id:string): any => {
    return Fetch.get('films/' + id)
}