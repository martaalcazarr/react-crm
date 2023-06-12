import {useLoaderData} from 'react-router-dom'

export function loader(){
  const clientes = [
    {
      id: 6,
      nombre: 'María',
      telefono: 912345678,
      email: "maria@gmail.com",
      empresa: 'Empresa ABC'
      },
      {
      id: 7,
      nombre: 'Andrés',
      telefono: 934567890,
      email: "andres@hotmail.com",
      empresa: 'Empresa XYZ'
      },
      {
      id: 8,
      nombre: 'Carolina',
      telefono: 956789012,
      email: "carolina@outlook.com",
      empresa: 'Empresa 123'
      },
      {
      id: 9,
      nombre: 'Diego',
      telefono: 978901234,
      email: "diego@gmail.com",
      empresa: 'Empresa XYZ'
      },
      {
      id: 10,
      nombre: 'Sofía',
      telefono: 991234567,
      email: "sofia@yahoo.com",
      empresa: 'Empresa ABC'
      }
];
  return clientes
}

const Index = () => {

  const clientes = useLoaderData()
  console.log(clientes)

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">
    Clients
    </h1>
    <p className="mt-3">Manage your clients</p>
    </>
  )
}

export default Index