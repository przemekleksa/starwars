import Fetch from "../utils/fetch"

export const getVehiclesRequest = (): any => {
    return Fetch.get('vehicles')
}
