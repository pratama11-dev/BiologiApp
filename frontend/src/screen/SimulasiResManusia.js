import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';
import ProgressBar from '../components/ProgressBar';

// import { useSelector } from 'react-redux';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

export default function SimulasiResManusia() {

    // const toNumber = (num) => Number(num.toFixed(2));

    const [beratProA, setberatProA] = useState('');
    const [beratProB, setberatProB] = useState('');
    const [beratProC, setberatProC] = useState('');
    const [beratProD, setberatProD] = useState('');
    const [beratProE, setberatProE] = useState('');
    const [beratProF, setberatProF] = useState('');
    const [beratProG, setberatProG] = useState('');
    const [beratProH, setberatProH] = useState('');

    
    const [pertama, setPertama] = useState(0);
    const [kedua, setKedua] = useState(0);
    const [ketiga, setKetiga] = useState(0);
    const [keempat, setKeempat] = useState(0);
    const [kelima, setKelima] = useState(0);
    const [keenam, setKeenam] = useState(0);
    const [ketujuh, setKetujuh] = useState(0);
    const [kedelapan, setKedelapan] = useState(0);

    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);
    const [valueD, setValueD] = useState(0);
    const [valueE, setValueE] = useState(0);
    const [valueF, setValueF] = useState(0);
    const [valueG, setValueG] = useState(0);
    const [valueH, setValueH] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setValueA((oldValue) => {
                const newValue = oldValue + 1;
                
                if (newValue >= pertama) {
                    clearInterval(interval);
                    console.log(pertama)
                    console.log(beratProA)
                }
            return newValue;
          });
        }, 1);
    }, [pertama]); 
      
    useEffect(() => {
        const interval = setInterval(() => {
            setValueB((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= kedua) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [kedua]);   

    useEffect(() => {
        const interval = setInterval(() => {
            setValueC((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= ketiga) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [ketiga]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValueD((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= keempat) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [keempat]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValueE((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= kelima) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [kelima]); 
      
    useEffect(() => {
        const interval = setInterval(() => {
            setValueF((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= keenam) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [keenam]);   

    useEffect(() => {
        const interval = setInterval(() => {
            setValueG((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= ketujuh) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [ketujuh]);

    useEffect(() => {
        const interval = setInterval(() => {
            setValueH((oldValue) => {
                const newValue = oldValue + 1;
        
                if (newValue >= kedelapan) {
                clearInterval(interval);
                }
            return newValue;
          });
        }, 1);
    }, [kedelapan]);


    const volumeTidalLakiA = Math.floor(Math.random() * (500 - 450 + 1)) + 450;
    const volumeTidalLakiB = Math.floor(Math.random() * (500 - 450 + 1)) + 450;
    const volumeTidalPerempuanA = Math.floor(Math.random() * (380 - 330 + 1)) + 330;
    const volumeTidalPerempuanB = Math.floor(Math.random() * (380 - 330 + 1)) + 330;

    const volumeCadInsLakiA = Math.floor(Math.random() * (3100 - 3000 + 101)) + 3000;
    const volumeCadInsLakiB = Math.floor(Math.random() * (3100 - 3000 + 101)) + 3000;
    const volumeCadInsPerempuanA = Math.floor(Math.random() * (1900 - 1800 + 101)) + 1800;
    const volumeCadInsPerempuanB = Math.floor(Math.random() * (1900 - 1800 + 101)) + 1800;

    const volumeCadEksLakiA = Math.floor(Math.random() * (1200 - 1100 + 101)) + 1100;
    const volumeCadEksLakiB = Math.floor(Math.random() * (1200 - 1100 + 101)) + 1100;
    const volumeCadEksPerempuanA = Math.floor(Math.random() * (800 - 100 + 11)) + 100;
    const volumeCadEksPerempuanB = Math.floor(Math.random() * (800 - 100 + 11)) + 100;

    const volumeResLakiA = Math.floor(Math.random() * (1200 - 1100 + 121)) + 1100;
    const volumeResLakiB = Math.floor(Math.random() * (1200 - 1100 + 121)) + 1100;
    const volumeResPerempuanA = Math.floor(Math.random() * (1000 - 900 + 101)) + 900;
    const volumeResPerempuanB = Math.floor(Math.random() * (1000 - 900 + 101)) + 900;

    const kvLkA = volumeTidalLakiA + volumeCadInsLakiA + volumeCadEksLakiA;
    const kvLkB = volumeTidalLakiB + volumeCadInsLakiB + volumeCadEksLakiB;
    const kvPrA = volumeTidalPerempuanA + volumeCadInsPerempuanA + volumeCadEksPerempuanA;
    const kvPrB = volumeTidalPerempuanB + volumeCadInsPerempuanB + volumeCadEksPerempuanB;

    const totalLkA = volumeResLakiA + kvLkA;
    const totalLkB = volumeResLakiB + kvLkB;    
    const totalPrA = volumeResPerempuanA + kvPrA;
    const totalPrB = volumeResPerempuanB + kvPrB;

    // setelah aktivitas
    const volumeTidalLakiAA = Math.floor(Math.random() * (490 - 450 + 1)) + 450;
    const volumeTidalLakiBA = Math.floor(Math.random() * (490 - 450 + 1)) + 450;
    const volumeTidalPerempuanAA = Math.floor(Math.random() * (370 - 330 + 1)) + 330;
    const volumeTidalPerempuanBA = Math.floor(Math.random() * (370 - 330 + 1)) + 330;

    const volumeCadInsLakiAA = Math.floor(Math.random() * (3090 - 3000 + 101)) + 3000;
    const volumeCadInsLakiBA = Math.floor(Math.random() * (3090 - 3000 + 101)) + 3000;
    const volumeCadInsPerempuanAA = Math.floor(Math.random() * (1890 - 1800 + 101)) + 1800;
    const volumeCadInsPerempuanBA = Math.floor(Math.random() * (1890 - 1800 + 101)) + 1800;

    const volumeCadEksLakiAA = Math.floor(Math.random() * (1190 - 1100 + 101)) + 1100;
    const volumeCadEksLakiBA = Math.floor(Math.random() * (1190 - 1100 + 101)) + 1100;
    const volumeCadEksPerempuanAA = Math.floor(Math.random() * (790 - 100 + 11)) + 100;
    const volumeCadEksPerempuanBA = Math.floor(Math.random() * (790 - 100 + 11)) + 100;

    const volumeResLakiAA = Math.floor(Math.random() * (1190 - 1100 + 121)) + 1100;
    const volumeResLakiBA = Math.floor(Math.random() * (1190 - 1100 + 121)) + 1100;
    const volumeResPerempuanAA = Math.floor(Math.random() * (990 - 900 + 101)) + 900;
    const volumeResPerempuanBA = Math.floor(Math.random() * (990 - 900 + 101)) + 900;

    const kvLkAA = volumeTidalLakiA + volumeCadInsLakiAA + volumeCadEksLakiAA;
    const kvLkBA = volumeTidalLakiB + volumeCadInsLakiBA + volumeCadEksLakiBA;
    const kvPrAA = volumeTidalPerempuanA + volumeCadInsPerempuanAA + volumeCadEksPerempuanAA;
    const kvPrBA = volumeTidalPerempuanB + volumeCadInsPerempuanBA + volumeCadEksPerempuanBA;

    const totalLkAA = volumeResLakiAA + kvLkAA;
    const totalLkBA = volumeResLakiBA + kvLkBA;    
    const totalPrAA = volumeResPerempuanAA + kvPrAA;
    const totalPrBA = volumeResPerempuanBA + kvPrBA;



    return (
        <div className="container">
            <div className="container">
                <div className="tittle">
                    <h1>Kapasitas Vital Paru-Paru</h1>
                </div>
                <div className="topik">
                    <div className="row">
                        <div className="judul">
                            <h3 />Praktikum A
                            <p />1. Mengukur masa probandus laki-laki yang akan melakukan percobaan sebelum melakukan aktivitas
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratlaki.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Laki-Laki A: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratA"
                                            placeholder="Masukkan berat"
                                            value={beratProA}
                                            onChange={(e) => setberatProA(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratlaki.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Laki-Laki B: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratB"
                                            placeholder="Masukkan berat"
                                            value={beratProB}
                                            onChange={(e) => setberatProB(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                            <p />2. Mengukur massa probandus perempuan yang akan melakukan percobaan sebelum melakukan aktivitas
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratcewe.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Perempuan A: </label>
                                        {/* <p><b>{randomNumber} Kg</b></p> */}
                                        <input
                                            id="beratC"
                                            placeholder="Masukkan berat"
                                            value={beratProC}
                                            onChange={(e) => setberatProC(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratcewe.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Perempuan A: </label>
                                        {/* <p><b>{randomNumber} Kg</b></p> */}
                                        <input
                                            id="beratD"
                                            placeholder="Masukkan berat"
                                            value={beratProD}
                                            onChange={(e) => setberatProD(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                            <p />3. Mengisi gallon dengan air sebanyak 6.000 mL
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/isiair.gif"/>
                                </div>
                            <p />4.	Memberi tanda sebagai ukuran pada gallon pada setiap 100ml dengan menggunakan spidol
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/spidol.gif"/>
                                </div>
                            <p />5.	Gallon dimasukan ke dalam ember dengan posisi terbalik, pastikan air tidak tumpah dan tidak ada udara yang masuk
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tuang.gif"/>
                                </div>
                            <p />6.	Bernafas dengan cara menghirup nafas sedalam-dalamnya, dan mneghembuskan sekuat-kuatnya
                                <div className="col-2-simulasi">
                                    {/* <img src="../img/alat/eostin.gif"/> */}
                                </div>
                            <p />7.	Nafas dihembuskan dalam satu tarikan nafas sehingga galon terangkat ke atas
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueA} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Laki-laki A: 
                                        {/* <AnimatedNumber 
                                            value= {pertama}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setPertama(beratProA * 90 - 573)}
                                            className='btn'
                                        >
                                            {console.log(pertama)}
                                            {console.log(beratProA)}
                                            Start
                                        </button>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"}
                                        value={valueB} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Laki-laki B: 
                                        {/* <AnimatedNumber 
                                            value= {kedua}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKedua(beratProB * 70 - 563)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueC} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Perempuan A: 
                                        {/* <AnimatedNumber 
                                            value= {ketiga}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKetiga(beratProC * 90 - 447)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueD} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Perempuan B: 
                                        {/* <AnimatedNumber 
                                            value= {keempat}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKeempat(beratProD * 70 - 409)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                            <p />8.	Catat hasil pengukuran  yang didapatkan.

                        </div>
                        <div className="judul">
                            <h2 />Tabel hasil pengamatan
                            <p>Jika diketahui :</p>

                            <div className="row">
                                <div className="col-2">
                                    <p>Volume Tidal Laki-Laki A: <b>{volumeTidalLakiA}</b> mL</p>
                                    <p>Volume Tidal Laki-Laki B: <b>{volumeTidalLakiB}</b> mL</p>
                                    <p>Volume Tidal Perempuan A: <b>{volumeTidalPerempuanA}</b> mL</p>
                                    <p>Volume Tidal Perempuan B: <b>{volumeTidalPerempuanB}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Volume Cadangan Inspirasi Laki-Laki A: <b>{volumeCadInsLakiA}</b> mL</p>
                                    <p>Volume Cadangan Inspirasi Laki-Laki B: <b>{volumeCadInsLakiB}</b> mL</p>
                                    <p>Volume Cadangan Inspirasi Perempuan A: <b>{volumeCadInsPerempuanA}</b> mL</p>
                                    <p>Volume Cadangan Inspirasi Perempuan B: <b>{volumeCadInsPerempuanB}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Volume Cadangan Ekspirasi Laki-Laki A: <b>{volumeCadEksLakiA}</b> mL</p>
                                    <p>Volume Cadangan Ekspirasi Laki-Laki B: <b>{volumeCadEksLakiB}</b> mL</p>
                                    <p>Volume Cadangan Ekspirasi Perempuan A: <b>{volumeCadEksPerempuanA}</b> mL</p>
                                    <p>Volume Cadangan Ekspirasi Perempuan B: <b>{volumeCadEksPerempuanB}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Kapasitas Vital Laki-Laki A: <b>{kvLkA}</b> mL</p>
                                    <p>Kapasitas Vital Laki-Laki B: <b>{kvLkB}</b> mL</p>
                                    <p>Kapasitas Vital Perempuan A: <b>{kvPrA}</b> mL</p>
                                    <p>Kapasitas Vital Perempuan B: <b>{kvPrB}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Untuk mencari KV rumusnya : VT + VCI + VCE</p>
                                    <p>Untuk penghitungan kapasitas paru paru : KV + VR</p>
                                </div>
                            </div>

                            <p />Praktikum A
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Jenis Kelamin</th>
                                        <th>Kegiatan</th>
                                        <th>Masa Tubuh</th>
                                        <th>Volume Awal Galon</th>
                                        <th>Volume Akhir Galon</th>
                                        <th>Volume Kapasitas Paru-paru</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Probandus Laki-Laki A</td>
                                        <td>Sebelum melakukan aktifitas</td>
                                        <td>{beratProA} Kg</td>
                                        <td>6.000 mL</td>
                                        <td>{pertama} mL</td>
                                        <td>{totalLkA} mL</td>
                                    </tr>
                                    <tr>
                                        <td>Probandus Laki-Laki B</td>
                                        <td>Sebelum melakukan aktifitas</td>
                                        <td>{beratProB} Kg</td>
                                        <td>6.000 mL</td>
                                        <td>{kedua} mL</td>
                                        <td>{totalLkB} mL</td>
                                    </tr>
                                    <tr>
                                        <td>Probandus Perempuan A</td>
                                        <td>Sebelum melakukan aktifitas</td>
                                        <td>{beratProC} Kg</td>
                                        <td>6.000 mL</td>
                                        <td>{ketiga} mL</td>
                                        <td>{totalPrA} mL</td>
                                    </tr>
                                    <tr>
                                        <td>Probandus Perempuan B</td>
                                        <td>Sebelum melakukan aktifitas</td>
                                        <td>{beratProD} Kg</td>
                                        <td>6.000 mL</td>
                                        <td>{keempat} mL</td>
                                        <td>{totalPrB} mL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="judul">
                            <h2 />Praktikum B
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/larii.gif"/>
                                </div>
                            <p />1. Mengukur masa probandus laki-laki yang akan melakukan percobaan setelah melakukan aktivitas berlari sejauh 3km
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratlaki.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Laki-Laki A: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratE"
                                            placeholder="Masukkan berat"
                                            value={beratProE}
                                            onChange={(e) => setberatProE(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratlaki.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Laki-Laki B: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratF"
                                            placeholder="Masukkan berat"
                                            value={beratProF}
                                            onChange={(e) => setberatProF(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                            <p />2. Mengukur massa probandus perempuan yang akan melakukan percobaan setelah melakukan aktivitas berlari sejauh 2km
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratcewe.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Perempuan A: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratG"
                                            placeholder="Masukkan berat"
                                            value={beratProG}
                                            onChange={(e) => setberatProG(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratcewe.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat Probandus Perempuan A: </label>
                                        {/* <p><b>{randomeNumber} Kg</b></p> */}
                                        <input
                                            id="beratH"
                                            placeholder="Masukkan berat"
                                            value={beratProH}
                                            onChange={(e) => setberatProH(e.target.value)}
                                        ></input>
                                        <label> Kg</label>
                                    </ul>
                                </div>
                            <p />3. Mengisi gallon dengan air 6.000 mL
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/isiair.gif"/>
                                </div>
                            <p />4.	Memberi tanda sebagai ukuran pada gallon pada setiap 100ml dengan menggunakan spidol
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/spidol.gif"/>
                                </div>
                            <p />5.	Gallon dimasukan ke dalam ember dengan posisi terbalik, pastikan air tidak tumpah dan tidak ada udara yang masuk
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tuang.gif"/>
                                </div>
                            <p />6.	Bernafas dengan cara menghirup nafas sedalam-dalamnya, dan mneghembuskan sekuat-kuatnya
                                <div className="col-2-simulasi">
                                    {/* <img src="../img/alat/eostin.gif"/> */}
                                </div>
                            <p />7.	Nafas dihembuskan dalam satu tarikan nafas sehingga galon terangkat ke atas
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueE} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Laki-laki: 
                                        {/* <AnimatedNumber 
                                            value= {kelima}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button  
                                            onClick={() => setKelima(beratProE * 90 - 890)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueF} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Perempuan: 
                                        {/* <AnimatedNumber 
                                            value= {keenam}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKeenam(beratProF * 70 - 880)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueG} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Laki-laki: 
                                        {/* <AnimatedNumber 
                                            value= {ketujuh}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKetujuh(beratProG * 90 - 748)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tiup.gif"/>
                                    <ProgressBar 
                                        color={"#eee"} 
                                        value={valueH} 
                                        max={6000}>
                                    </ProgressBar>
                                </div>
                                <div className="col-2-tombol">
                                    <ul>
                                        <p /> Hasil Pengukuran Probandus Perempuan: 
                                        {/* <AnimatedNumber 
                                            value= {kedelapan}
                                            frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                            duration={1500}
                                        /> mL <br /> */}
                                        <button 
                                            onClick={() => setKedelapan(beratProH * 70 - 737)}
                                            className='btn'
                                        >
                                            Start
                                        </button>
                                    </ul>
                                </div>
                            <p />8.	Catat hasil pengukuran  yang didapatkan.
                        </div>
                    </div>
                    
                    <div className="judul">
                        <h2 />Tabel hasil pengamatan
                        <p>Jika diketahui :</p>

                            <div className="row">
                                <div className="col-2">
                                    <p>Volume Tidal Laki-Laki A: <b>{volumeTidalLakiAA}</b> mL</p>
                                    <p>Volume Tidal Laki-Laki B: <b>{volumeTidalLakiBA}</b> mL</p>
                                    <p>Volume Tidal Perempuan A: <b>{volumeTidalPerempuanAA}</b> mL</p>
                                    <p>Volume Tidal Perempuan B: <b>{volumeTidalPerempuanBA}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Volume Cadangan Inspirasi Laki-Laki A: <b>{volumeCadInsLakiAA}</b> mL</p>
                                    <p>Volume Cadangan Inspirasi Laki-Laki B: <b>{volumeCadInsLakiBA}</b> mL</p>
                                    <p>Volume Cadangan Inspirasi Perempuan A: <b>{volumeCadInsPerempuanAA}</b> mL</p>
                                    <p>Volume Cadangan Inspirasi Perempuan B: <b>{volumeCadInsPerempuanBA}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Volume Cadangan Ekspirasi Laki-Laki A: <b>{volumeCadEksLakiAA}</b> mL</p>
                                    <p>Volume Cadangan Ekspirasi Laki-Laki B: <b>{volumeCadEksLakiBA}</b> mL</p>
                                    <p>Volume Cadangan Ekspirasi Perempuan A: <b>{volumeCadEksPerempuanAA}</b> mL</p>
                                    <p>Volume Cadangan Ekspirasi Perempuan B: <b>{volumeCadEksPerempuanBA}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Kapasitas Vital Laki-Laki A: <b>{kvLkAA}</b> mL</p>
                                    <p>Kapasitas Vital Laki-Laki B: <b>{kvLkBA}</b> mL</p>
                                    <p>Kapasitas Vital Perempuan A: <b>{kvPrAA}</b> mL</p>
                                    <p>Kapasitas Vital Perempuan B: <b>{kvPrBA}</b> mL</p>
                                </div>
                                <div className="col-2">
                                    <p>Untuk mencari KV rumusnya : VT + VCI + VCE</p>
                                    <p>Untuk penghitungan kapasitas paru paru : KV + VR</p>
                                </div>
                            </div>
                            
                        <p />Praktikum B
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Jenis Kelamin</th>
                                    <th>Kegiatan</th>
                                    <th>Masa Tubuh</th>
                                    <th>Volume Awal Galon</th>
                                    <th>Volume Akhir Galon</th>
                                    <th>Volume Kapasitas Paru-paru</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Probandus Laki-Laki A</td>
                                    <td>Setelah melakukan aktifitas</td>
                                    <td>{beratProE} Kg</td>
                                    <td>6.000 mL</td>
                                    <td>{kelima} mL</td>
                                    <td>{totalLkAA} mL</td>
                                </tr>
                                <tr>
                                    <td>Probandus Laki-Laki B</td>
                                    <td>Setelah melakukan aktifitas</td>
                                    <td>{beratProF} Kg</td>
                                    <td>6.000 mL</td>
                                    <td>{keenam} mL</td>
                                    <td>{totalLkBA} mL</td>
                                </tr>
                                <tr>
                                    <td>Probandus Perempuan A</td>
                                    <td>Setelah melakukan aktifitas</td>
                                    <td>{beratProG} Kg</td>
                                    <td>6.000 mL</td>
                                    <td>{ketujuh} mL</td>
                                    <td>{totalPrAA} mL</td>
                                </tr>
                                <tr>
                                    <td>Probandus Perempuan B</td>
                                    <td>Setelah melakukan aktifitas</td>
                                    <td>{beratProH} Kg</td>
                                    <td>6.000 mL</td>
                                    <td>{kedelapan} mL</td>
                                    <td>{totalPrBA} mL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="btnArah">
                    <Link to="/percobaan"><DoubleLeftOutlined /></Link>
                </div>
            </div>
        </div>
    )
}