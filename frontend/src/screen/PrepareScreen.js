import React from 'react'
import { Link } from 'react-router-dom'

export default function PrepareScreen(props) {
    return <>
        <div className="grid-container">
            <div className="container">
                <div className="tittle">
                    <h2>Rate Of Respiration Experiment in Insect</h2>
                </div>
                <div className="topik">
                    <div className="border"></div>
                    <div className="col-2">
                        <div className="judul">
                            <h2>Purpose</h2>
                            <p>1. Knowing the amount of oxygen needed by insects
                            <br /> 2. Knowing the factors that influence respiration in insects</p>
                        </div>
                    </div>
                    <div className="judul">
                        <h2>Tools </h2>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="../img/alat/cotton.png"/>
                            <p>Cutton</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/nasal-spray.png"/>
                            <p>Eostin</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/pipette.png"/>
                            <p>Pipette</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/vaselin.png"/>
                            <p>Vaseline</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/flask.png"/>
                            <p>Crital NaOH</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/chemistry.png"/>
                            <p>Respirometer</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/cricket.png"/>
                            <p>2 Cricket</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/weighing-machine.png"/>
                            <p>Weighing Machine</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/chronometer.png"/>
                            <p>Stopwatch</p>
                        </div>
                    </div>
                    <div className="judul">
                        <h2>Steps</h2>
                        <p>1. Timbanglah masing-masing 2 ekor jangkrik tersebut
                            <br />2. Masukan Kristal NaOH / KOH ke dalam selapis kapas , lalu masukan ke dalam tabung
                                     respirometer
                            <br />3. Masukan jangkrik pertama ke dalam tabung respirometer
                            <br />4. Pasanglah tutup tabung respirometer yang mempunyai pipa kapiler berskala
                            <br />5. Lapisilah sambungan antara tutup dan tabung respirometer dengan vaselin
                            <br />6. Setelah itu, masukan setetes eosin pada kedua pipa kapiler berskala setiap 5 menit
                            <br />7. Catatlah hasil pengamatan dalam tabel
                            <br />8. Lakukan hal yang sama dengan jangkrik yang kedua.
                        </p>
                    </div>
                </div>
                <div className="btn">
                        <Link to={'/Allscreen'}>Simulation Page →</Link>
                    </div>
            </div>
        </div>
    </>
}
