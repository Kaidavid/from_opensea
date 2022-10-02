import { useEffect, useState } from 'react'
import axios from 'axios';

function APIRequest() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/?include_orders=false')
            .then(res => {
                setData(res.data)
            })
            .catch(console.error)
        }

        fetchData()
        
    }, [])
    return data
}

export default APIRequest
