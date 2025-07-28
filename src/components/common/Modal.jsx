import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { FcOk } from "react-icons/fc";
import { FaSkull } from "react-icons/fa";
import { useEffect, useState } from 'react';
import * as MainService from '../../services/main.service';
import { Table } from 'react-bootstrap';

export default function MyModal(props) {
    const [episodeList, setEpisodeList] = useState([]);
    console.log(props);

    useEffect(() => {
        let episodeNumber = [];
        if (props && props.data && props.data.episode.length > 0) {
            props.data.episode.forEach(ep => {
                let lastPart = ep.split('/').pop(); // The number of the episode
                episodeNumber.push(lastPart);
            });
        }
        if (episodeNumber.length > 0) {
            MainService.getEpisodesByValue(episodeNumber).then(res => {
                // If return one value the response is not an Array so we need to transform it
                if (res instanceof Array) {
                    setEpisodeList(res);
                } else {
                    setEpisodeList([res])
                }
            })
        }
    }, [props])

    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <>
                            {props.data && props.data.image ?
                                <img src={props.data.image} alt={props.data.name} className="img-fluid avatar" />
                                : null
                            }
                        </>
                        <h1 className='rickH' style={{ fontSize: '35px', float: 'right' }}>{props.data.name}</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Container>
                        <Row className="bg-picture" style={{ backgroundColor: '#00a384' }}>
                            <Col xs={12} md={8}>
                                <h1 className='modal-bold-text'>
                                    {
                                        props.data && props.data.status == 'Alive' ? <FcOk /> : <FaSkull />

                                    }
                                    &nbsp;{props.data.status}
                                </h1>

                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col xs={12} md={12}>
                                <label><strong>Species:</strong></label>
                                <span>&nbsp;{props.data.species}</span>
                            </Col>
                            <Col xs={12} md={12} className='mt-1'>
                                <label><strong>Gender:</strong></label>
                                <span>&nbsp;{props.data.gender}</span>
                            </Col>
                            <Col xs={12} md={12} className='mt-1'>
                                <label><strong>Location:</strong></label>
                                <span>&nbsp;{props.data.location.name}</span>
                            </Col>
                            <Col xs={12} md={12} className='mt-1'>
                                <label><strong>Episodes:</strong></label>
                                {<span>&nbsp;{props.data.episode.length}</span>}
                            </Col>
                            <Col xs={12} md={12} className='scroll-div mt-2'>
                                <label><strong>Episodes list:</strong></label>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ maxWidth: '180px' }}>Id</th>
                                            <th style={{ maxWidth: '180px' }}>Name</th>
                                            <th style={{ maxWidth: '180px' }}>Air date</th>
                                            <th style={{ maxWidth: '180px' }}>Episode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {episodeList && episodeList.length > 0 ?
                                            episodeList.map((obj, index) => (
                                                <tr key={index}>
                                                    <td>{obj.id}</td>
                                                    <td>{obj.name}</td>
                                                    <td>{obj.air_date}</td>
                                                    <td>{obj.episode}</td>
                                                </tr>
                                            )) : null
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}
