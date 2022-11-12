import { makeVar } from "@apollo/client";
import { AuthState, SelfQueryDataProps } from "../types/auth";
import { MapStateProps } from "../types/map";

export const authStateVar = makeVar<AuthState>(AuthState.LOGIN)
export const userVar = makeVar<SelfQueryDataProps>(null)

export const mapStateVar = makeVar<MapStateProps>({
    address: "",
    mapPosition: {
        lat: 0,
        lng: 0
    },
    markerPosition: {
        lat: 0,
        lng: 0
    }
})