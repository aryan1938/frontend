import { useEffect, useState } from "react"
import Apiservices from "../Services/Apiservices"
import { BASE_IMG } from "../Services/Apiservices"

export default function All_user() {

    const [data, setData] = useState([{}])

    useEffect(() => {
        Apiservices.all_user().then(res => {
            console.log(res.data.data)
            setData(res.data.data)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])

    return (
        <>
            <table className="min-w-full border-collapse block md:table m-5">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">User Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">Email Address</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">Date</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">Pic</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">Status</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                    {
                        data?.map((e, index) => (
                            <tr key={index} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell sm:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>{e.Username}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell sm:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>{e.Email}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell sm:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Date</span>{e.RegistrationDate}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell sm:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Pic</span><img src={BASE_IMG+e?.ProfilePicture} className="h-5 w-10" alt={e?.ProfilePicture}/></td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell sm:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Status</span>{e.Status==true?"Active":"In-Active"}</td>
                                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell sm:table-cell">
                                    <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mx-2">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mx-2">Delete</button>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 border border-yellow-500 rounded">Status</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}