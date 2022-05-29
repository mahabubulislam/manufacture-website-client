import { useEffect, useState } from "react"

const useToken = user =>{
console.log(user?.user?.displayName);
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const userInfo = {
            email:email,
            name:user?.user?.displayName,
            img: user?.user?.photoURL
        };
       if(email){
           fetch(`https://murmuring-retreat-70420.herokuapp.com/users/${email}`,{
               method: 'PUT',
               headers:{
                   'content-type':'application/json'
               },
               body: JSON.stringify(userInfo)
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