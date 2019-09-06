import React from 'react'
import Image from '../components/image'


const Certificates = ({certificates}) =>(
    <div className="columns is-gapless is-multiline">
    {certificates.map((certificate) => {
        return <>
            <div className="column is-one-quarter">
                <Image name={`cer-${certificate}.png`} styleClass='certificate-img'/>
            </div>
        </>
    })}
    </div>
) 
    

export default Certificates