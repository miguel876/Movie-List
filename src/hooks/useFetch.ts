import { useEffect, useState } from 'react'
import properties from '../properties.json'

interface DataI {
    data: { 
        [key: string]: any,
    }, 
    loading: boolean, 
    error: any
}

const removeNullParams = (params: any) => {
    Object.keys(params).forEach((key) => params[key] === null && delete params[key]);

    return params
}

export const useGet = (url: string, params?: any, conditions?: any) => {
    const [{ data, loading, error }, setData ] = useState<DataI>({ data: {}, loading: false, error: {}})

    const getParams = () => params ? `?${new URLSearchParams(removeNullParams(params))}` : ''

    const getData = async () => {
        setData((prevData:DataI) => ({...prevData, loading: true}))

        try {
            const response = await fetch(`${properties.baseURL + url}${getParams()}`)
            const data = await response.json()
            setData((prevData:DataI) => ({...prevData, data }))
        } catch (error) {
            setData((prevData:DataI) => ({...prevData, error}))
        } finally {
            setData((prevData:DataI) => ({...prevData, loading: false}))
        }
    }

    useEffect(() => {
        getData();
    }, [url, conditions]);

  return ({
    data,
    loading,
    error
  })
}
