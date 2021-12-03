import Fetch from "../utils/fetch"

export const getVehiclesRequest = (): any => {
    return Fetch.get('vehicles')
}

export const getVehicleDetailsRequest = (id: string): any => {
    return Fetch.get(`vehicles/${id}`)
}