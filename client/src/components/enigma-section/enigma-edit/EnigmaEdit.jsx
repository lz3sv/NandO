import { useState } from "react"

export default function EnigmaEdit({
    onClose,
    onUpdate,
    enigma,
    
}){

  const [setFormValues]= useState({
    enigma:'',
    date:'',
    time:'',
    content:'',



})



// const formSubmitHandler = (e) => {
//   e.preventDefault()
//   console.log('form submitted!')
// }

const changeHandler=(e)=>{
  //console.log(e.target.name)
  //console.log(e.target.checked)
  setFormValues(oldValues=>({
      ...oldValues,
     [e.target.name]: e.target.value //|| e.target.checked,
  }))
}
/*
    const changeHandler = (event) => {
        console.log(event.target.value)
        //const updatedKeyword = event.target.value;
        // May be call for search result
    }
*/
    return (

<div className="overlay">
      <div className="backdrop"  onClick={onClose}></div>
      <div className="modal">
        <div className="enigma-container">
          <header className="headers">
            <h2>Edit Enigma</h2>
          </header>

          <form onSubmit={onUpdate} >

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="recordId">Record Id </label>
                <div className="input-wrapper">
                  <input 
                    id="id" 
                    name="_id" 
                    type="text" 
                    defaultValue={enigma._id} 
                    readOnly={true}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="firstName">Enigma</label>
                <div className="input-wrapper">
                  <input 
                    id="enigma" 
                    name="enigma" 
                    type="text" 
                    defaultValue={enigma.enigma} 
                    onChange={changeHandler}/>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Дата</label>
                <div className="input-wrapper">
                  <input 
                    id="date" 
                    name="date" 
                    type="date" 
                    defaultValue={enigma.date} 
                    onChange={changeHandler}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="freq">Честота</label>
                <div className="input-wrapper">
                  <input 
                    id="freq" 
                    name="freq" 
                    type="number" 
                    defaultValue={enigma.freq} 
                    onChange={changeHandler}/>
                </div>
              </div>
            </div>
            

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="time">Начален час</label>
                <div className="input-wrapper">
                  <input 
                    id="time" 
                    name="time" 
                    type="time" 
                    defaultValue={enigma.time} 
                    onChange={changeHandler}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="content">Съобщение</label>
                <div className="input-wrapper">
                  <textarea 
                    id="content" 
                    name="content" 
                    onChange={changeHandler}
                    defaultValue={enigma.content}>
                    </textarea>
                </div>
              </div>
            </div>

            <div id="form-actions">
              <button id="action-save" className="btn" type="submit" >Save</button>
              <button id="action-cancel" className="btn" type="button"  onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> 



    )
}