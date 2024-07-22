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
            <button className="btn close" onClick={onClose}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
              </svg>
            </button>
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