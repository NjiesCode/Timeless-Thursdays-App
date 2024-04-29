import {useState} from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FaFax} from "react-icons/fa"
const Contact = () => {
const [detail , setDetail]=useState("")

const handleSubmit = (e)=>{
  e.preventDefault()
}
const handleChange = (e)=>{
setDetail(e.target.value)

}
  return (
    <div className='mainContactDiv'>


    <div>
        <form onSubmit={handleSubmit}>
          <label>Name:

          <input 
          type="text"
          value={detail}
          required ={true}
          name='name'
          onChange={handleChange}
          />
          </label>
          <label>Submit:
          <input type="submit" value="Submit" />
          </label>
        </form>
        <p>{detail}</p>
        </div>
        <div className='contactContainer'>
    <div><FaFax/> </div>
    <div>
    <BsFillTelephoneFill/>
    </div>
    <div>
    <MdEmail/>
    </div>
</div>
       </div>
  )
}

export default Contact