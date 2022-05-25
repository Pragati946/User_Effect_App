import React,{useEffect,useState} from 'react'

export const Timer = () => {
    const [timer, settimer] = useState(0);
    useEffect(()=>{
        let id=setInterval(()=>{
            if(timer>100){
                clearInterval(id);
            }
            else{
                settimer(timer+1);
            }
        },3000)
    return ()=>{
        clearInterval(id);
    }
},[timer])
  return (
    <div>
        Count Down :{timer}
    </div>
  )
}



