import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentEmail = {email:email};
       if(email){
           fetch(`http://localhost:5000/users/${email}`,{
               method: 'PUT',
               headers:{
                   'content-type':'application/json'
               },
               body: JSON.stringify(currentEmail)
           })
           .then(res=>res.json())
           .then(data=>{
               const accessToken = data.token;
               setToken(accessToken)
               localStorage.setItem('accessToken', accessToken)
           })
       }
    },[user])
    return [token]
}
export default useToken