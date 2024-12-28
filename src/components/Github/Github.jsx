


// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"


function Github() {
  const data=useLoaderData();

  //second method which is traditional not efficient.
  // const [data, setdata] = useState([]);

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/afsar-hussai').then(res=>res.json()).then(data=>{
  //     console.log(data);
  //     setdata(data)
  //   })

  // },[])
  return (
    <>
    
    <div className="flex items-center flex-col">

      <div className="p-2 bg-green-500 text-white m-2">

      Followers:{data.followers}
      </div>
    
    <img className="rounded-full" src={data.avatar_url} alt="Avatar image" />
    </div>

    </>
  )
}

export default Github;



