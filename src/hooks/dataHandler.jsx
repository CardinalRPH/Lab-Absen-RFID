import useAxios from "axios-hooks"

const BASE_URL = "#"

export const usePost = (url, manual = true) => {
    const [{ data, loading, error }, execute] = useAxios(
        { url: `${BASE_URL}/${url}`, method: "POST" },
        { manual },
    )

    return { data, loading, error, execute }
}

export const usePut = (url, manual = true) => {
    const [{ data, loading, error }, execute] = useAxios(
        { url: `${BASE_URL}/${url}`, method: "PUT" },
        { manual },
    )

    return { data, loading, error, execute }
}

export const useGet = (url) => {
    const [{ data, loading, error }, execute] = useAxios({
        url: `${BASE_URL}/${url}`,
        method: "GET",
    })

    return { data, loading, error, execute }
}

export const useGetById = (url, manual = true) => {
    const [{ data, loading, error }, execute] = useAxios(
        { url: `${BASE_URL}/${url}`, method: "GET" },
        { manual },
    )

    return { data, loading, error, execute }
}
