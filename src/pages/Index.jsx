import {useLoaderData} from 'react-router-dom'
import Client from '../components/Client';

export function loader(){
  const clients = [
    {
      id: 6,
      name: 'Maria',
      phone: 912345678,
      email: "maria@gmail.com",
      company: 'ABC Company'
    },
    {
      id: 7,
      name: 'Andres',
      phone: 934567890,
      email: "andres@hotmail.com",
      company: 'XYZ Company'
    },
    {
      id: 8,
      name: 'Carolina',
      phone: 956789012,
      email: "carolina@outlook.com",
      company: '123 Company'
    },
    {
      id: 9,
      name: 'Diego',
      phone: 978901234,
      email: "diego@gmail.com",
      company: 'XYZ Company'
    },
    {
      id: 10,
      name: 'Sofia',
      phone: 991234567,
      email: "sofia@yahoo.com",
      company: 'ABC Company'
    }
  ];
  
  return clients;
  }


const Index = () => {

  const clients = useLoaderData()
  console.log(clients)

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">
    Clients
    </h1>
    <p className="mt-3">Manage your clients</p>

    {clients.length ? (
      <table className='w-full bg-white shadow mt-5 table-auto'>
        <thead className='bg-blue-800 text-white'>
      <tr>
        <th className='p-2'>
        Client
        </th>
        <th className='p-2'>
        Information
        </th>
        <th className='p-2'>
        Actions
        </th>
      </tr>
      </thead>
      <tbody>
        {clients.map(client => (
         <Client
         client={client}
         key={client.id}/>
        ))}
      </tbody>
      
      </table>
    ) : (
      <p className="mt-3">No avaliable clients</p>
    )}
    </>
  )
}

export default Index