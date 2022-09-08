import React, { useState, useEffect } from "react";
import { get } from "../mockBackend/fetch";

//react-bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from 'react-bootstrap/Spinner';


export default function AppForecast() {
    const [data, setData] = useState();
    const [notes, setNotes] = useState({});
    const [forecastType, setForecastType] = useState("/daily");

    useEffect(() => {
        alert("Requested data from the server...");
        get(forecastType).then((response) => {
            alert("Response: " + JSON.stringify(response, "", 2));
            setData(response.data);
        });
    }, [forecastType]);

    const handleChange = (index) => ({ target }) =>
        setNotes((prev) => ({
            ...prev,
            [index]: target.value,
        }));

    if (!data) {
        return (
            <div className="spinner">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </div>
        )
    }
    else {
        return (
            <div>
                <Card>
                    <Card.Body><h6>My Weather Planner App</h6></Card.Body>
                </Card>
                <br />
                <ButtonGroup aria-label="">
                    <Button variant="primary" onClick={() => setForecastType("/daily")}>5-day</Button>
                    <Button variant="success" onClick={() => setForecastType("/hourly")}>Today</Button>
                </ButtonGroup>
                <br /><br />
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Summary</th>
                            <th>Avg Temp</th>
                            <th>Precip</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={item.id}>
                                <td>{item.summary}</td>
                                <td> {item.temp.avg}°C</td>
                                <td>{item.precip}%</td>
                                <td>
                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label="Type your notes here..."
                                        className="mb-3"
                                        value={notes[item.id] || ""}
                                        onChange={handleChange(item.id)}
                                    >
                                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}


