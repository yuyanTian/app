export interface PlaceInfo {
   placeName: string
   address: string
   lat: number
   lng: number
   placeId: string;
}

export interface SelfPlaceDataProps{
   isLiked: string 
   self: {
      places: PlaceInfo[] 
   }
}

export interface brokersInfot {
   name: string
   agency: string
   phone: string
}

export interface AllListing {
   Latitude: string
   Longitude: string
   ListingID: string
   address: string
   brokers_info: object 
   available_spaces : brokersInfot
}

export interface getAllListing { 
   self: { 
      getAllListing: AllListing[]
   }
}
 