import axios from 'axios'

const AppService = {

    getUserProfil : () => {
        const userId= JSON.parse(localStorage.getItem('userId'))
        const jwtToken= JSON.parse(localStorage.getItem('token'))
        
        return new Promise((resolve, reject) => {
            axios
                .get(`${process.env.REACT_APP_API_URL_USER}/myprofil/${userId}`,
                {headers: { Authorization : `Bearer ${jwtToken}`}})
                .then((res)=> {
                    resolve({data: res.data})
                })
                .catch((err)=>{
                    console.log(err)
                    reject(err)
                })
            })
    },

    getAllpost : () => {
        return new Promise((resolve, reject) => {
            axios
            .get(`${process.env.REACT_APP_API_URL_POST}`)
                .then((res)=> {
                    resolve({data: res.data})
                })
                .catch((err)=>{
                    console.log(err)
                    reject(err)
                })
            })
    },
    

    getOnepost : (postID) => {
        return new Promise((resolve, reject) => {
            axios
            .get(`${process.env.REACT_APP_API_URL_POST}/${postID}`)
                .then((res)=> {
                    resolve({data: res.data})
                })
                .catch((err)=>{
                    console.log(err)
                    reject(err)
                })
            })
    },
}


   export default AppService;