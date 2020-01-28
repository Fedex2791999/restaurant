import React  from 'react';
import TextAreaElement from '../components/elements/TextAreaElement'
import BradcamElement from '../components/elements/BradcamElement'
import AlignAreaElement from '../components/elements/AlignAreaElement'

export default function Elements() {
    return (
     <div>
       <BradcamElement/>
       {/* <TextAreaElement/> */}
       <AlignAreaElement/>
     </div>
    );
  
}
