
import { Link, useNavigate, useParams } from "react-router-dom";
import './Edit.css'

import { formValidation } from "../../util/formValidation";
import { useForm } from "../../hooks/useForm";
import { useEditEnigma, useGetOneEnigmas } from "../../hooks/useEnigmas";
import { useMemo } from "react";

const initialValues = { enigma: '', date: '', time: '', freq: '', content: '' }

export default function Edit() {
    const navigate = useNavigate()
    const { enigmaId } = useParams()
    const [enigma] = useGetOneEnigmas(enigmaId)
    const initialFormValues=useMemo(()=> Object.assign(initialValues,enigma),[enigma])
    const edit = useEditEnigma()
    const editHandler = async (values) => {

        //console.log(values)
        const invalid = formValidation(values)
        if (invalid) {
            alert(invalid)
            return
        }
        console.log('nowata enigma:')
        console.log(values)
        try {
             await edit(values._id,values)
             navigate('/catalog')
         } catch (err) {
             alert (err.message)
         }
    }
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialFormValues, editHandler)




    return (
        <>

            <div className="edit-box">
                <h1>Редактиране на запис</h1>
                <form onSubmit={submitHandler}>
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
                                    onChange={changeHandler} />
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
                                    onChange={changeHandler} />
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
                                    onChange={changeHandler} />
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
                                    onChange={changeHandler} />
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