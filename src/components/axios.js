import axios from "axios"

    const basePoint = axios.create({
        baseURL: "http://localhost:8080"
        // baseURL: "https://workers-back-vercel.vercel.app"
    })

export default basePoint