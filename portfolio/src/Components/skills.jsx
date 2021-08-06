import React from 'react'
import './skills.css'

import { MediaCard1, MediaCard2,MediaCard3 ,MediaCard4,MediaCard5,MediaCard6} from './Card1'


export default function Skills(){
    return(

        <div style={{display:"grid",marginTop:40,
            
           }} >
        <div style={{display:"flex" ,justifyContent: "space-around"}} >
        <MediaCard1/>
        <MediaCard2/>
        </div>
        <div style={{display:"flex" ,justifyContent: "space-around",marginTop:20}} >
        <MediaCard3/>
        <MediaCard4/>
        </div>
        <div style={{display:"flex" ,justifyContent: "space-around",marginTop:20}} >
        <MediaCard5/>
        <MediaCard6/>
        </div>

        </div>
    )
}