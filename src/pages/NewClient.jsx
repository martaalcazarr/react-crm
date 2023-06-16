import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formclient from "../components/Formclient";
import Error from "../components/Error";
import { addClient } from "../data/clients";

export async function action({request}) {
  const formData = await request.formData()
  const clientData = Object.fromEntries(formData)
  const email = formData.get('email')

  //validation
  const errors = []
  if(Object.values(clientData).includes('')){
    errors.push('All fields are mandatory')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errors.push('invalid email')
  }
  //return data if there's errors
  if(Object.keys(errors).length){
    return errors
  }
  await addClient(clientData)
  return redirect('/')
}

function NewClient() {
  const errors = useActionData()
  const navigate = useNavigate();

  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New client</h1>
      <p className="mt-3">
        Fill in all the fields of the form to register a new client
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-3 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-16">

        {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post"
        noValidate>
          <Formclient />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg text-white"
            value="Register Client"
          />
        </Form>
      </div>
    </>
  );
}

export default NewClient;
