import axios from "axios"

    const basePoint = axios.create({
        baseURL: "http://localhost:8080"
    })

export default basePoint