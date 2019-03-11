import axios from 'axios'
axios.defaults.baseURL = 'https://reqres.in/api/';

export default {
    getUserInfos : async () => {  // 유저정보 가져오기   
        try {
            let response = await axios.get(`/users?page=1`)
            console.log(response.data.data)
            return response.data.data
        }
        catch(err) {
            console.log(err)
        }
    },
    getResourceInfos : async () => {  // 리소스정보 가져오기
        try {
            let response = await axios.get(`/unknown`)
            console.log(response.data.data)
            return response.data.data
        }
        catch(err) {
            console.log(err)
        }
    }
}