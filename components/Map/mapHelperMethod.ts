import Geocode from "react-geocode"

export const getInfoByLatLng = async (lat: number, lng: number) => {
        try {
            const data = await Geocode.fromLatLng(lat.toString(), lng.toString())
            return data
        } catch (err) {
            if (err) {
                console.log(err)
            }
            return null
        }
    }
