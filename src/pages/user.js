import { useEffect } from 'react';

export const User = () => {
    useEffect(()=>{
        document.getElementById('user').classList.add('act')
        document.getElementById('user').classList.remove('text-white')
    },[])
    return(
        <div>
            <h1>    tabel user</h1>
        </div>
    )
}