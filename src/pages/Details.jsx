import React from 'react'
import { useParams } from 'react-router-dom';

const Details = ({ data }) => {
    const { id } = useParams();
    return (
        <div className='mt-44'>

            {data
                .filter((item) => item.id === id)
                .map((item, index) => (
                    <div key={index} className="detailbox h-32 bg-black">
                        <div className="details text-6xl text-blue-500">{item.name}</div>
                    </div>
                ))}
        </div>
    )
}

export default Details