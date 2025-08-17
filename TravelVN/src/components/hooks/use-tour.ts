import useSWR, { type SWRConfiguration } from "swr"
import type { Tour } from "../models"

export const useTour = (options?:Partial<SWRConfiguration<Tour[]>>) =>{
    const {data : tour , mutate  , isLoading} = useSWR<Tour[]>('/api/tour',{...options})
    return {
        tour,
        isLoading,
        mutate,
    }
}
