import { useState } from "react";
import MyModal from "../common/Modal";
import { Button } from "react-bootstrap";
function CharactersDetail({ obj, index }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Details
            </Button>
            {modalShow ?
                <MyModal show={modalShow} data={obj} onHide={() => setModalShow(false)} />
                : null
            }
        </>
    );
}

export default CharactersDetail