import { useEffect, useState } from "react"
import Apiservices from "../Services/Apiservices"
import { ToastContainer, toast } from 'react-toastify';


export default function Category() {

    const [data, setData] = useState([{}])
    const [id, setId] = useState()
    const [newcategoryName, setNewCategoryName] = useState()
    const [editingIndex, setEditingIndex] = useState(null);
    const [categoryName, setCategoryName] = useState('')
    const [categoryStatus, setCategoryStatus] = useState('')

    function handleForm(e) {
        e.preventDefault();

        let body = {
            CategoryName: categoryName
        }

        Apiservices.add_category(body).then(res => {
            if (res.data.success == true) {
                window.location.reload(true);
                toast.success(res.data.message)
            } else {
                window.location.reload(true);
                toast.error(res.data.message)
            }
        }).catch(err => {
            toast.error(res.data.message)
            console.log(err.message);
        })
    }


    function edit_cat(index) {
        setEditingIndex(index);
    }


    useEffect(() => {
        Apiservices.all_category().then(res => {
            console.log(res.data.data);
            setData(res.data.data)
        }).catch(err => {
            console.log(err.message);
        })
    }, [])




    const onUpdateCategory = (e) => {
        e.preventDefault()
        const body_id_categoryName = {
            _id: id,
            CategoryName: newcategoryName,
        }

        Apiservices.update_category(body_id_categoryName).then(res => {
            if (res.data.success == true) {
                toast.success(res.data.message)
                window.location.reload(true);
            } else {
                toast.error(res.data.message)
            }
        }).catch(err => {
            console.log(err.message);
            toast.error('something went wrong')
        })
    }


    // const changeStatus = () => {

    //     let status_category = {
    //         _id: id,
    //         status: categoryStatus
    //     }

    //     Apiservices.status_category(status_category).then(res => {
    //         console.log(res.data.data);
    //     }).catch(err => {
    //         console.log(err.message);
    //     })

    // }


    return (
        <>
            {/* <button onClick={changeStatus} className="btn bg-yellow-800">STATUS</button> */}
            <div className="grid lg:grid-cols-12 gap-5 not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 pt-5">
                <div className="lg:col-span-6 sm:col-span-12">
                    <form className="max-w-md mx-auto" onSubmit={handleForm}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={categoryName} onChange={(event) => { setCategoryName(event.target.value) }} placeholder=" " required />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Parent Category</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>

                </div>
                <div className="lg:col-span-6 sm:col-span-12 sm:mx-auto">
                    <div className="relative overflow-x-auto">
                        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Update
                                    </th>
                                    <th scope="col" className="px-16 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((e, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {
                                                    editingIndex === index ? <>
                                                        <form className="max-w-md mx-auto" onSubmit={onUpdateCategory}>
                                                            <div className="relative z-0 w-full mb-5 group"></div>
                                                            <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={e?.CategoryName} value={newcategoryName} onChange={(event) => { setNewCategoryName(event.target.value); console.log(event.target.value); setId(e._id) }} placeholder=" " required key={index} />
                                                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                                                            <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">click</button>
                                                        </form>
                                                    </> : e.CategoryName
                                                }
                                            </th>
                                            <td className="px-6 py-4">
                                                <span className="underline text-cyan-600 cursor-pointer" onClick={() => edit_cat(index)}>Edit</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => {
                                                    setCategoryStatus(e.target.value);
                                                    let status_category = {
                                                        _id: id,
                                                        status: categoryStatus
                                                    }

                                                    Apiservices.status_category(status_category).then(res => {
                                                        console.log(res.data.data);
                                                    }).catch(err => {
                                                        console.log(err.message);
                                                    })

                                                }}>
                                                    {/* <option selected>Choose a Category</option> */}
                                                    <option value="true" selected={categoryStatus == true ? 'true' : ''}>Active</option>
                                                    <option value="false" selected={categoryStatus == false ? 'true' : ''}>In-Active</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}