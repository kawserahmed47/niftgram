import React, { useState, useEffect, useRef} from 'react'


export default function  NotFound () {



    const [mounted, setMounted] = useState(false)




    //component will count
    if(!mounted){

    }

    //component did mount
    useEffect(() => {

        setMounted(true)
    },[]);


        
    return (
        <div>
            <section style={{minHeight:"100vh", display: "flex", justifyContent:"center", alignItems:"center"}}>
                <div className='customContainer center-with-flex-column'>
                    <h1 style={{fontSize: "32px"}}>404 - Page Not Found!</h1>
                    <a href="/" style={{marginTop: "16px"}}>Go to Landing page</a>
                </div>
            </section>
        </div>
    )
}
