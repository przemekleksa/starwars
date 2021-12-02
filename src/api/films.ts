import Fetch from "../utils/fetch"

export const getFilmsRequest = (): any => {
    return Fetch.get('films')
}

export const getFilmDetailsRequest = (id:string): any => {
    return Fetch.get('films/' + id)
}