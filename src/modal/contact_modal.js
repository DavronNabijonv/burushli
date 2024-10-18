import React ,{useContext} from 'react'
import './contact_modal.scss'
import Aloqa_va_elon from '../page/aloqa_va_elon'
import { ContactModaltogle } from '../App'

export default function Contact_modal() {

    // useContext for hide show modal
    const {setModalTog} = useContext(ContactModaltogle)

  return (
    <div className='Contact_modal'>
        <div className='for_fixed' onClick={()=>{setModalTog(false)}} >
            <Aloqa_va_elon/>
        </div>
    </div>
  )
}
