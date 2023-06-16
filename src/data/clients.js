
export async function getClients(){

    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
  return result;
}

export async function addClient(clientData){
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(clientData),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    await response.json()
  } catch (error) {
    console.log(error)
  }
}