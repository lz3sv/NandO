
import { Link, useNavigate } from "react-router-dom";
import './Create.css'

import { useAuthContext } from "../../context/AuthContext";
import { formValidation } from "../../util/formValidation";
import { useForm } from "../../hooks/useForm";
import { useCreateEnigma } from "../../hooks/useEnigmas";


const initialValues = { enigma: '', date: '', time: '', freq: '', content: '' }

export default function Create() {
     const navigate=useNavigate()
     const { userId, username,email } = useAuthContext()
    const create = useCreateEnigma()
    const createHandler = async (values) => {

        const creator= username + ' , '+ email
        //const formData = new FormData(values.currentTarget)
        // console.log('values')
        // console.log(values)

        const enigmaData = {
            ...values,
            creator: creator,
            likes: [],
            owner: userId
        }
        const invalid=formValidation(enigmaData)
        if(invalid){
          alert(invalid)
          return
        }
        // console.log('nowata enigma:')
        // console.log(enigmaData)
        try {
             await create(enigmaData)
             navigate('/')
         } catch (err) {
             alert (err.message)
         }
    }
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler)




    return (
        <>

            <div className="create-box">
                <h1>Създаване на нов запис</h1>
                <form onSubmit={submitHandler}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">Enigma</label>
                            <div className="input-wrapper">
                                <input 
                                    id="enigma" 
                                    name="enigma" 
                                    type="text" 
                                    onChange={changeHandler}
                                />
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
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Нач. час (UTC)</label>
                            <div className="input-wrapper">
                                <input 
                                    id="time" 
                                    name="time" 
                                    type="time" 
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="freq">Честота (kHz)</label>
                            <div className="input-wrapper">
                                <input 
                                    id="freq" 
                                    name="freq" 
                                    type='number' 
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Съобщение</label>
                            <div className="input-wrapper">
                                <textarea 
                                    id="content" 
                                    name="content"
                                    onChange={changeHandler}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div id="form-actions">
                    <button id="action-save" className="btn" type="submit" >ЗАПИШИ</button>
                    <Link to="/catalog" className='bold'>
                        <button id="action-cancel" className="btn" type="button" >
                            ОТКАЗ
                        </button>
                    </Link>
                </div>
                </form>



            </div>
        </>

    )
} 