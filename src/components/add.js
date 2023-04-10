import { useState, useEffect } from "react";
import "./add.css";

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

    const handleList = () => {
        
    }

    const add = () => {
        setData([...data, { name, surname, stdNum, level, favLesson }]);
    }

    useEffect(() => {localStorage.setItem("info", JSON.stringify(data))},[data]);

    return (
        <div className="Add">
            <input
                type="text"
                placeholder="İsim"
                value={name}
                onChange={handleName}
            />
            <input
                type="text"
                placeholder="Soyisim"
                value={surname}
                onChange={handleSurname}
            />
            <input
                type="number"
                placeholder="Öğrenci Numarası"
                value={stdNum}
                onChange={handleStdNum}
            />
            <input
                type="text"
                placeholder="Öğrenci Sınıfı"
                value={level}
                onChange={handleLevel}
            />
            <input
                type="text"
                placeholder="Favori Dersi"
                value={favLesson}
                onChange={handleFavLesson}
            />

            <button onClick={add}>Ekle</button>
            
            <button onClick={() => setShowData(true)}>Listele</button>
            {showData && data.map((item) => {
                return (
                    <div>
                        <table>
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
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.stdNum}</td>
                                    <td>{item.level}</td>
                                    <td>{item.favLesson}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )
            })}
        </div>
    )
}

export default Add;