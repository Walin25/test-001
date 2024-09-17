// // rafce
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'


// import {
//     remove,
//     create,
//     getdata

// } from '../functions/product'



// const FormProduct: React.FC = () => {
//     // javascript
//     const tam = 'tam roitai'
//     const [data, setData] = useState([])
//     const [form, setForm] = useState({})

//     useEffect(() => {
//         // code
//         loadData()

//     }, [])

//     const loadData = async () => {
//         getdata()
//             .then((res) => setData(res.data))
//             .catch((err) => console.log(err))
//     }
//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         create(form)
//             .then(res => {
//                 console.log(res.data)
//                 loadData()
//             })
//             .catch((err) => console.log(err))
//     }
//     const handleRemove = async (id) => {
//         remove(id)
//             .then((res) => {
//                 console.log(res)
//                 loadData()
//             })
//             .catch((err) => console.log(err))
//     }
//     return (
       
//     );
// }

// export default FormProduct