export interface Position {
    lat: number
    lng: number
}

export interface StateProps {
    address: string
    city: string
    area: string
    state: string
    zoom: number
    height: number
    mapPosition: Position
    markerPosition: Position
}

export interface MapStateProps {
    mapPosition: Position
    markerPosition: Position
    address: string
}