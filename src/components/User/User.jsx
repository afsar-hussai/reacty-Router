import { useParams } from "react-router-dom"


function User() {
  const {userid}=useParams();
  return (
    <div className="bg-red-600 text-white p-3 m-4 text-center font-bold">
      User:{userid}
    </div>
  )
}

export default User
