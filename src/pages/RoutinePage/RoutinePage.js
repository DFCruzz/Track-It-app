import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import AddRoutines from "./styles/AddRoutines";
import AddRoutineBox from "./styles/AddRoutineBox";
import NoRoutinesWarning from "./styles/NoRoutinesWarning";
import SingleRoutine from "./styles/SingleRoutine";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Trashcan from "../../assets/Trashcan.png"
import { ThreeDots } from "react-loader-spinner";


const RoutinePage = ({ }) => {

    const { user, token } = useContext(AuthContext)

    const [showBox, setShowBox] = useState(true)
    const [routineList, setRoutineList] = useState([])
    const [selectedDays, setSelectedDays] = useState([])
    const [name, setName] = useState("")
    const dayArr = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [isLoading, setIsLoading] = useState(false)


    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    useEffect(() => {

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        request.then(e => {
            console.log(e.data)
            setRoutineList(e.data)
        })

        request.catch(e => {
            console.log(e.response.data.message)
        })
    }, [submitRoutine])

    function selectDays(event) {
        console.log(event)

        if (selectedDays.includes(event)) {
            setSelectedDays(selectedDays => selectedDays.filter(e => e !== event))
        }
        else {
            setSelectedDays([...selectedDays, event])
        }

        console.log(selectedDays)
    }

    function submitRoutine(e) {
        e.preventDefault()

        const body = {
            name: name,
            days: selectedDays,
        }

        setIsLoading(true)

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)

        request.then((e) => {
            console.log(e.data)
            setIsLoading(false)
            
        })

        request.catch((e) => {
            console.log(e.response.data)
            setIsLoading(false)
        })

        setSelectedDays([])
        setName("")
    }

    function deleteRoutine(e) {
        let message = "Deseja deletar esse hábito?"

            if (window.confirm(message) === true) {
            const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e}`, config)

            request.then(e => {
                console.log(e.data)
            })

            request.catch((e) => {
                console.log(e.response.data)
            })
        }

        else {
            console.log("")
        }
    }

    function closeBox() {
        setShowBox(false)
        setName("")
    }


    return (
        <>
            <Header />
            <PageContainer>
                <AddRoutines>
                    <p>Meus Hábitos</p>
                    <div data-test="habit-create-btn" onClick={() => setShowBox(true)}>+</div>
                </AddRoutines>
                <AddRoutineBox data-test="habit-create-container" onSubmit={submitRoutine} className={showBox || routineList.length == 0 ? null : "hidden"}>
                    <input data-test="habit-name-input" type="text" placeholder="nome do hábito" value={name} onChange={e => setName(e.target.value)} disabled={isLoading} required />
                    <div className="days">
                        {dayArr.map((a, index) =>
                            <div data-test="habit-day" key={index} onClick={() => selectDays(index)} className={selectedDays.includes(index) ? "selected" : null} disabled={isLoading}>{a}</div>
                        )}
                    </div>
                    <div className="buttons">
                        <button data-test="habit-create-cancel-btn" type="button" onClick={closeBox} className="cancel" disabled={isLoading}>Cancelar</button>
                        <button data-test="habit-create-save-btn" type="submit" className="save" disabled={isLoading}>{isLoading ? <ThreeDots color="#FFFFFF" /> : "Salvar"}</button>
                    </div>
                </AddRoutineBox>
                {routineList.map((a, index) =>
                    <SingleRoutine data-test="habit-container" id={a.id} key={index}>
                        <div className="routine-name">
                            <h3 data-test="habit-name">{a.name}</h3>
                            <img data-test="habit-delete-btn" onClick={() => deleteRoutine(a.id)} src={Trashcan} />
                        </div>
                        <div className="days">
                            {dayArr.map((b, index) =>
                                <div data-test="habit-day" key={index} className={a.days.includes(index) ? "selected" : null}>{b}</div>
                            )}
                        </div>
                    </SingleRoutine>
                )}
                <NoRoutinesWarning className={routineList.length == 0 ? null : "hidden"}>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoRoutinesWarning>
            </PageContainer>
            <Footer />
        </>
    )
}

export default RoutinePage