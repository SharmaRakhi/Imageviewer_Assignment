import React, { useState } from 'react'
import ImageData from './ImageData';
import "./img.css";

export default function Images() {
    const [img,setImage] = useState(ImageData[0].url);
    function fun(e){
        setImage(e.target.src);
    }
    return (
        <div className='main'>
            <section>
                <div className='largeImg'>
                    <img className='selected' src={img} alt='selected'/>
                </div>
            </section>
            <section>
                <div className='imgList'>
                    {
                        ImageData.map((e) => {
                            return (
                                <>
                                    <img key={e.id} className="images"  alt='selected'src={e.url} onMouseMove={(e)=>fun(e)} />
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
