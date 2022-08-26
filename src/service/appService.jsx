import axios from 'axios'

const AppService = {

    getUserProfil : () => {
        const userId= JSON.parse(localStorage.getItem('userId'))
        const jwtToken= JSON.parse(localStorage.getItem('token'))
        
    return new Promise((resolve, reject) => {
        axios
            .get(`http://localhost:5000/api/auth/myprofil/${userId}`,
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
    



}

    export default AppService;