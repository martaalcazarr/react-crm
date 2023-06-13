import { useNavigate } from "react-router-dom"
import Form from "../components/Form"

function NewClient() {
  const navigate = useNavigate()
  return (
    <>
     <h1 className="font-black text-4xl text-blue-900">
    New client
    </h1>
    <p className="mt-3">Fill in all the fields of the form to register a new client</p>

    <div className="flex justify-end">
    <button className="bg-blue-800 text-white px-3 py-3 font-bold uppercase"
    onClick={() => navigate('/')}>Return</button>
    </div>

    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-16">
      <form>
      <Form/>

<input type="submit"
className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg text-white" 
value="Register Client"
/>
      </form>
     
         </div>
    </>
  )
}

export default NewClient