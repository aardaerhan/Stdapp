import { useState, useEffect } from "react";
import "./add.css";
import {Form, Button, Table} from 'react-bootstrap';


function Add() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [stdNum, setStdNum] = useState("");
    const [level, setLevel] = useState("");
    const [favLesson, setFavLesson] = useState("");
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);

    console.log(data);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSurname = (e) => {
        setSurname(e.target.value);
    };

    const handleStdNum = (e) => {
        setStdNum(e.target.value);
    };

    const handleLevel = (e) => {
        setLevel(e.target.value);
    };

    const handleFavLesson = (e) => {
        setFavLesson(e.target.value)
    }


    const add = () => {
        setData([...data, { name, surname, stdNum, level, favLesson }]);
    }

    useEffect(() => {localStorage.setItem("info", JSON.stringify(data))},[data]);

    return (

        <div className="Add">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>İsim</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Öğrencinin İsmini Giriniz"
                        value={name}
                        onChange={handleName}
                    />
                    <Form.Label>Soyisim</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Öğrencinin Soyismini Giriniz"
                        value={surname}
                        onChange={handleSurname}
                    />
                    <Form.Label>Öğrenci Numarası</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Öğrencinin Numarasını Giriniz"
                        value={stdNum}
                        onChange={handleStdNum}
                    />
                    <Form.Label>Öğrenci Sınıfı</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Öğrencinin Sınıfını Giriniz"
                        value={level}
                        onChange={handleLevel}
                    />
                    <Form.Label>Favori Ders</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Öğrencinin Favori Dersini Giriniz"
                        value={favLesson}
                        onChange={handleFavLesson}
                    />
                </Form.Group>
                <Button variant="primary" onClick={add} className="add_btn">
                    Öğrenci Bilgilerini Ekle
                </Button>
            </Form>
            
            <Button className="list_btn" onClick={() => setShowData(true)}>Öğrenci Bilgilerini Listele</Button>
            
            <Table>
            <thead>
                <tr>
                    <td className="title">İsim</td>
                    <td className="title">Soyisim</td>
                    <td className="title">Öğrenci Numarası</td>
                    <td className="title">Öğrenci Sınıfı</td>
                    <td className="title">Favori Dersi</td>
                </tr>
            </thead>
            <tbody>
                {showData && data.map((item) => {
                return (

                            
                                <tr className={item.stdNum}>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.stdNum}</td>
                                    <td>{item.level}</td>
                                    <td>{item.favLesson}</td>
                                </tr>
                )
            })}
            </tbody>
            </Table>
        </div>
    )
}

export default Add;