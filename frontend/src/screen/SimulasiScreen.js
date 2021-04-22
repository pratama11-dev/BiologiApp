import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';
import AnimatedNumber from 'react-animated-number'
// import { useSelector } from 'react-redux';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

export default function SimulasiScreen() {
    
    // const alatDetail = useSelector( state => state.alatDetail)
    // const {loading, error, alat } = alatDetail
    
    const toNumber = (num) => Number(num.toFixed(2));
    
    const [pertama, setPertama] = useState(0);
    const [kedua, setKedua] = useState(0);
    const [ketiga, setKetiga] = useState(0);

    const randomNumber =toNumber(Math.random());
    const randomeNumber = toNumber(Math.random());

    return (
        <div className="container">
            {/* {loading? (<LoadingBox></LoadingBox>)
            :
            error?(<MessageBox>{error}</MessageBox>)
            : ( */}
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
                                            <label htmlFor="nilaiB">Nilai Berat Jangkrik 1: </label>
                                            <p><b>{randomeNumber} gram</b></p>
                                            <label htmlFor="nilaiB">Nilai Berat Jangkrik 2: </label>
                                            <p><b>{randomNumber} gram</b></p>
                                            {/* <input
                                                id="nilaiB"
                                                type="text"
                                                placeholder="Masukkan Nilai Berat"
                                            ></input> */}
                                        </ul>
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
                                        <ul>
                                            <p /> Skala dalam 5 menit Pertama : 
                                            <AnimatedNumber 
                                                value= {pertama}
                                                frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                                duration={1500}
                                            /> ml <br />
                                            <button 
                                                onClick={() => setPertama(randomNumber)}
                                                className='btn'
                                            >
                                                Start
                                            </button>
                                            <p /> Skala dalam 5 menit Kedua : 
                                            <AnimatedNumber 
                                                value= {kedua}
                                                frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                                duration={2000}
                                            /> ml <br />
                                            <button 
                                                onClick={() => setKedua(pertama * 2)}
                                                className='btn'
                                            >
                                                Start
                                            </button>
                                            <p /> Skala dalam 5 menit Ketiga : 
                                            <AnimatedNumber 
                                                value= {ketiga}
                                                frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                                duration={2500}
                                            /> ml <br />
                                             <button 
                                                onClick={() => setKetiga(kedua * 2)}
                                                className='btn'
                                            >
                                                Start
                                            </button>
                                        </ul>
                                    </div>
                                <p />7. Catatlah hasil pengamatan dalam tabel
                            </div>
                        </div>
                    </div>
                    <div className="btnArah">
                        <Link to="/"><DoubleLeftOutlined /></Link>
                    </div>
                </div>
            {/* )} */}
        </div>
    )
}