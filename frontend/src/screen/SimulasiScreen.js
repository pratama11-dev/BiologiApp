import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';
import ProgressBarVer from '../components/ProgressBarVer';
// import AnimatedNumber from 'react-animated-number';


export default function SimulasiScreen() {
    
    const toNumber = (num) => Number(num.toFixed(2));

    const [beratProA, setberatProA] = useState('');

    const [pertama, setPertama] = useState(0);
    const [kedua, setKedua] = useState(0);
    const [ketiga, setKetiga] = useState(0);
    
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValueA((oldValue) => {
                const newValue = toNumber(oldValue + 0.01);
                
                if (newValue >= pertama) {
                    clearInterval(interval);

                }
            return newValue;
          });
        }, 100);
    }, [pertama]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValueB((oldValue) => {
                const newValue = toNumber(oldValue + 0.01);
                
                if (newValue >= kedua) {
                    clearInterval(interval);

                }
            return newValue;
          });
        }, 100);
    }, [kedua]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValueC((oldValue) => {
                const newValue = toNumber(oldValue + 0.01);
                
                if (newValue >= ketiga) {
                    clearInterval(interval);

                }
            return newValue;
          });
        }, 100);
    }, [ketiga]);

    // const randomNumber =toNumber(Math.random());
    // const randomeNumber = toNumber(Math.random());

    return (
        <div className="container">
            <div className="container">
                <div className="tittle">
                    <h1>Percobaan Tingkat Respirasi pada Serangga</h1>
                </div>
                <div className="topik">
                    <div className="row">
                        <div className="judul">
                            <p />1. Timbanglah masing-masing jangkrik tersebut
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/timbangan.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Jangkrik: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratA"
                                            placeholder="Masukkan berat"
                                            value={beratProA}
                                            onChange={(e) => setberatProA(e.target.value)}
                                        ></input>
                                        <label> gram</label>
                                    </ul>
                                    {/* <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Jangkrik: </label>
                                        <p><b>{randomeNumber} gram</b></p>
                                        <label htmlFor="nilaiB">Nilai Berat Jangkrik 2: </label>
                                        <p><b>{randomNumber} gram</b></p>
                                    </ul> */}
                                </div>
                            <p />2. Masukan Kristal NaOH / KOH ke dalam selapis kapas , lalu masukan ke dalam tabung respirometer
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tetes.gif"/>
                                </div>
                            <p />3. Masukan jangkrik pertama ke dalam tabung respirometer
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/respiro.gif"/>
                                </div>
                            <p />4. Lapisilah sambungan antara tutup dan tabung respirometer dengan vaselin
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/vaselin.gif"/>
                                </div>
                            <p />5. Pasanglah tutup tabung respirometer yang mempunyai pipa kapiler berskala
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/pasang.gif"/>
                                </div>
                            <p />6. Setelah itu, masukan setetes eosin pada kedua pipa kapiler berskala setiap 5 menit
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/eostin.gif"/>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <ProgressBarVer 
                                            color={"#eee"} 
                                            value={valueA} 
                                            max={15}>
                                        </ProgressBarVer>
                                        <p /> Skala dalam 5 menit Pertama : 
                                        {/* <AnimatedNumber 
                                            value= {pertama}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setPertama(beratProA * 2)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                    <ul>
                                        <ProgressBarVer 
                                            color={"#eee"} 
                                            value={valueB} 
                                            max={15}>
                                        </ProgressBarVer>
                                        <p /> Skala dalam 5 menit Kedua : 
                                        {/* <AnimatedNumber 
                                            value= {kedua}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={2000}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKedua(pertama * 2 + 0.4)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                    <ul>
                                        <ProgressBarVer 
                                            color={"#eee"} 
                                            value={valueC} 
                                            max={15}>
                                        </ProgressBarVer>
                                        <p /> Skala dalam 5 menit Ketiga : 
                                        {/* <AnimatedNumber 
                                            value= {ketiga}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={2500}
                                        /> mL <br /> */}
                                            <button 
                                            onClick={() => setKetiga(kedua * 2 + 0.6)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                            <p />7. Hasil pengamatan dalam tabel
                            <div className="col-2-simulasi">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Probandus</th>
                                            <th>Berat</th>
                                            <th>Skala Pengukuran 1</th>
                                            <th>Skala Pengukuran 2</th>
                                            <th>Skala Pengukuran 3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jangkrik</td>
                                            <td>{beratProA} gram</td>
                                            <td>{pertama} mL</td>
                                            <td>{kedua} mL</td>
                                            <td>{ketiga} mL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnArah">
                    <Link to="/percobaan"><DoubleLeftOutlined /></Link>
                </div>
            </div>
        </div>
    )
}