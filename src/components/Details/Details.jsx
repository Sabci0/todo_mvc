import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

import moment from "moment";
import {deleteTaskApi, getTaskApi} from "../../helpers/api";


function Details(props) {
    const [task, setTask] = useState({})
    const [modal, setModal] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getTaskApi(id).then(setTask);
    }, [])

    function toggleModal(){
        setModal(!modal)
    }

    async function handleDeleteTask(){
        await deleteTaskApi(task.id);
        navigate('/')
    }


    return (
        <div>
            { modal ? (
                <div>
                    <h2>{task.name} u sure?</h2>
                    <button onClick={toggleModal}>Cancel</button>
                    <button onClick={handleDeleteTask}>Confirm Delete</button>
                </div>
            ) : (
                <>
                    <h1>{task.name} {id}</h1>
                    <span>Created at: {moment(new Date(task.createdAt)).startOf('minute').fromNow()}</span><span>{task.status}</span>
                    <p>{task.description}</p>
                    <Link to={`/details/${id}/edit`}>Edit</Link>
                    <button onClick={() => setModal(true)}>Delete</button>
                </>
                )
        }
        </div>
    );
}

export default Details;