import React, { useState } from 'react'

export default function LeadStatus() {
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    const [value, setValue] = useState('')
    const [comments, setComments] = useState('')
    const [status, setStatus] = useState('')
    const addData = (e) => {
        e.preventDefault()
        if (id, comments, value, status != '') {
            setData([
                ...data,
                { id, value, comments,status }
            ])
            setId('')
            setValue('')
            setComments('')
            setStatus('')
        }

        else {
            alert("Please enter all the fields!")
        }

    }
    return (
        <div>
            <div className="App">
                <form onSubmit={addData}>
                    <div className="input">
                        <label htmlFor="name" className="block text-md font-medium text-white">
                            Lead ID
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={id} onChange={(e) => setId(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="value" className="block text-md font-medium text-white">
                            Sale Value
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="value"
                                name="value"
                                id="value"
                                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={value} onChange={(e) => setId(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="email" className="block text-md font-medium text-white">
                            Comments
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={comments} onChange={(e) => setComments(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="status" className="block text-sm font-medium text-white">
                            Select Status
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <select
                                id="status"
                                name="status"
                                className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md" disabled selected value="">Select Current Status</option>
                                <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Closed</option>
                                <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Ongoing</option>
                                <option className="block w-full pl-1 mb-5 pr-1 sm:text-sm border-white bg-white rounded-md">Issue</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 submit">
                        <button
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update Lead Status
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-wrap justify-center">
                {data.map((data) => (
                    <div className="dip">
                        {data.id} <br />
                        {data.value} <br />
                        {data.comments} <br />
                        {data.status} <br />
                    </div>
                ))}
            </div>
        </div>

    );
}
