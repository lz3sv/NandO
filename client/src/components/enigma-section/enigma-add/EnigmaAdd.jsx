
export default function EnigmaAdd({
  onClose,
  onSave,
}){


// const onClose=()=>{
//   const modal=document.getElementById('overlay')
//   modal.style.display = "none";

// }

// const onSave=()=>{

// }

    return (

<div className="overlay" id='overlay'>
      <div className="backdrop"  onClick={onClose}></div>
      <div className="modal" id='modal'>
        <div className="user-container">
          <header className="headers">
            <h2>Add Enigma</h2>
          </header>
          <form onSubmit={onSave}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Enigma</label>
                <div className="input-wrapper">
                  <input id="enigma" name="enigma" type="text" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Дата</label>
                <div className="input-wrapper">
                  <input id="date" name="date" type="date" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="time">Начален час</label>
                <div className="input-wrapper">
                  <input id="time" name="time" type="time" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="freq">Честота (kHz)</label>
                <div className="input-wrapper">
                  <input id="freq" name="freq" type='number' />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="content">Съобщение</label>
                <div className="input-wrapper">
                  <textarea id="content" name="content" ></textarea>
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