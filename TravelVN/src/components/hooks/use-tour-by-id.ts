import useSWR, { type SWRConfiguration } from "swr"
import type { Tour } from "../models"

export const useTourById = (id ?: string,options?:Partial<SWRConfiguration<Tour>>) =>{
    const {data : tour , mutate  , isLoading ,error} = useSWR<Tour>(id ? `/api/tour/${id}` :null,{...options})
    return {
        error,
        tour,
        isLoading,
        mutate,
    }
}
