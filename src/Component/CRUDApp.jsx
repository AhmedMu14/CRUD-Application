import Add from '../assets/Add.png'
import Clear from '../assets/Clear.png'
import Delete from '../assets/Delete.png'
import { useState } from 'react'

const CRUDApp = () => {

    const [inputField, setInputField] = useState("");
    const [listitem, setListitem] = useState([]);
    const [editlist, setEditlist] = useState(null);

    const handelAdd = () => {
        if (!inputField.trim()) return;
        {
            setListitem([...listitem, inputField])
        }
        setInputField(" ");
    };

    const handelDelete = () => {
        setListitem(listitem.slice(0, -1))
    }

    const handelClear = () => {
        if (confirm("Are you sure youn want to Clear")) {
            setListitem([]);
            alert("Items are sucessfully deleted")
        }
    }

    const handelEdit = (index) => {
        setInputField(listitem[index])
        setEditlist(index)
    }

    const handelUpdate = () => {
        if (editlist !== null) {
            const edit = [...listitem]
            edit[editlist] = inputField;
            setListitem(edit);
            setEditlist(null);
        }
    }
    return (
        <>
            <div className='mx-auto my-52 bg-white w-3xl p-5'>

                <h1 className='text-center text-5xl font-bold mb-10'>CRUD Application</h1>

                <input type="text"
                    placeholder='Enter an item....'
                    value={inputField}
                    onChange={(e) => setInputField(e.target.value)}
                    className='flex gap-4 border-2 border-black p-1 w-full mb-10 text-lg font-semibold' />

                <div className='flex justify-center gap-4'>
                    <button onClick={handelAdd} className=' flex justify-center items-center gap-4 px-2 py-2 rounded-lg border-2 border-black cursor-pointer bg-red-500 text-xl font-semibold hover:bg-red-600'>Add <img src={Add} alt="Add" className='w-8' /> </button>
                    <button onClick={handelDelete} className=' flex justify-center items-center gap-4 px-2 py-2 rounded-lg border-2 border-black cursor-pointer bg-red-500 text-xl font-semibold hover:bg-red-600'>Delete <img src={Clear} alt="Clear" className='w-8' /> </button>
                    <button onClick={handelClear} className=' flex justify-center items-center gap-4 px-2 py-2 rounded-lg border-2 border-black cursor-pointer bg-red-500 text-xl font-semibold hover:bg-red-600'>Clear <img src={Delete} alt="Delete" className='w-8' /> </button>
                </div>

                <div className='max-h-96 mt-4 p-4 overflow-y-auto border-2 rounded-2xl border-black'>
                    <ul className='list-none flex flex-col gap-3'>
                        {listitem.map((item, index) => (
                            <li className='flex bg-[#f5f5f5] border rounded text-[#000] font-semibold p-1'
                                key={index} >
                                {item}
                                <button onClick={() => handelEdit(index)} className='m-2 p-2 w-20 h-10 flex justify-center items-center border-2 rounded-md border-black bg-red-500 cursor-pointer'>Edit</button>
                                <button onClick={handelUpdate} className='m-2 p-2 w-20 h-10 flex justify-center items-center border-2 rounded-md border-black bg-red-500 cursor-pointer'>Update</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CRUDApp