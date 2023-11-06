import axios, { AxiosResponse, AxiosError } from 'axios'

async function fetchEndpoints() {
    try {
        const axiosConfig = {
            url: '/',
            method: 'get',
            baseURL: 'https://rickandmortyapi.com/api',
            // data: {
            //     firstName: 'Fred',
            // },
            // headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }

        const response: AxiosResponse = await axios(axiosConfig)
        const result = response.data
        // console.log(result)
        return result
    } catch (err) {
        const axiosError = err as AxiosError
        throw axiosError.response?.status
    }
}

export { fetchEndpoints }
