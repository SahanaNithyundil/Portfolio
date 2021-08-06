import React from 'react'
import { MCard1,MCard2,MCard3 } from './Card2'


export default function Projects(){
    return(

        <div style={{display:"grid",marginTop:40,gridColumnGap: 20, }} >
			
			<div style={{display:"flex" ,justifyContent: "space-between" , }} >
				<MCard2/>
				<MCard1/>
				
        </div>
		<div style={{display:"flex" ,justifyContent: "space-between",marginTop:20}} >
        <MCard3 />
        
		</div>

        </div>
    )
}