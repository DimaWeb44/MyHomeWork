import axios from "axios"

export const RequestsAPI = {
    postChecked(checked: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,{success: checked})
            .then(response => response.data)
    }
}