import React,{useState} from 'react'

export default function Leads() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')
    const addData = (e) => {
      e.preventDefault()
      if( name, email, phone, type != '')
      {
        setData([
          ...data,
          { name, email, phone, type }
        ])
        setName('')
        setEmail('')
        setPhone('')
        setType('')
      }

      else{
        alert("Please enter all the fields!")
      }

    }
    return (
      <div>
        <div className="App">
        <form onSubmit={addData}>
          <div className="input">
            <label htmlFor="name" className="block text-md font-medium text-white">
              Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="email" className="block text-md font-medium text-white">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="phone" className="block text-md font-medium text-white">
              Phone
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="input">
        <label htmlFor="type" className="block text-sm font-medium text-white">
          Type of Insurance
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <select
              id="type"
              name="type"
              className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={type} onChange={(e) => setType(e.target.value)}>
              <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" disabled selected value="">Select Your Insurance Type</option>
              <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Car</option>
              <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Bike</option>
              <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Home</option>
            </select>
          </div>
        </div>
          <div className="px-4 py-3 sm:px-6 submit">
            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap justify-center">
      {data.map((data) => (
                        <div className="dip"> 
                        {data.name} <br/>
                        {data.email} <br/>
                        {data.phone} <br/>
                        {data.type} <br/>
                      </div>
              ))}
      </div>
      </div>
      
    );
  }
