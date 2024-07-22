export default function EnigmaEdit({
    onClose,
    onSave,
    enigma,
    
}){

    const inputChangedHandler = (event) => {
        console.log(event.target.value)
        //const updatedKeyword = event.target.value;
        // May be call for search result
    }

    return (

<div className="overlay">
      <div className="backdrop"  onClick={onClose}></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit Enigma</h2>

          </header>
          <form onSubmit={onSave}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Enigma</label>
                <div className="input-wrapper">
                  <input id="enigma" name="enigma" type="text" value={enigma.enigma} onChange={(event)=>inputChangedHandler(event)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="date">Дата</label>
                <div className="input-wrapper">
                  <input id="date" name="date" type="date" value={enigma.date} onChange={(event)=>inputChangedHandler(event)}/>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="time">Начален час</label>
                <div className="input-wrapper">
                  <input id="time" name="time" type="time" value={enigma.time} onChange={(event)=>this.inputChangedHandler(event)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="content">Съобщение</label>
                <div className="input-wrapper">
                  <textarea id="content" name="content" onChange={(event)=>this.inputChangedHandler(event)}>{enigma.content}</textarea>
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