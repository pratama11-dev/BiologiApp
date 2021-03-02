import React from 'react'
import { Link } from 'react-router-dom'

export default function PrepareScreen(props) {

    const alat = alat.find((x) => x._id === props.match.params.id);
    
    if (!alat) {
        return <div> Product Not Found</div>;
    }
    
    return <>
        <div className="grid-container">
            <div className="btn">
                    <Link to="/choose">&larr;</Link>
            </div>
            <div className="container">
                <div className="tittle" data-aos={"fade-down"} key={alat._id}>
                    <h2>{alat.nama}</h2>
                </div>
                <div className="topik">
                    <div className="border"></div>
                    <div className="col-2">
                        <div className="judul" data-aos={"fade-left"}>
                            <h2>Tujuan</h2>
                            <p dangerouslySetInnerHTML={{__html:alat.tujuan}}></p>
                        </div>
                    </div>
                    <div className="judul" data-aos={"fade-up"}>
                        <h2>Alat dan Bahan</h2>
                    </div>
                    <div className="row" data-aos={"fade-down"}>
                        {alat.tools.map((tools) => <> 
                            <div className="col-3">
                                <img src={tools.img}/>
                                <p>{tools.desc}</p>                            
                            </div>
                        </>)}
                        {/* <div className="col-3">
                            <img src="../img/alat/nasal-spray.png"/>
                            <p>Eostin</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/pipette.png"/>
                            <p>Pipet</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/vaselin.png"/>
                            <p>Vaseline</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/flask.png"/>
                            <p>Kristal NaOH</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/chemistry.png"/>
                            <p>Respirometer</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/cricket.png"/>
                            <p>2 Jangkrik</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/weighing-machine.png"/>
                            <p>Timbangan</p>
                        </div>
                        <div className="col-3">
                            <img src="../img/alat/chronometer.png"/>
                            <p><i>Stopwatch</i></p>
                        </div> */}
                    </div>
                    <div className="judul" data-aos={"fade-down"}>
                        <h2>Langkah</h2>
                        <p dangerouslySetInnerHTML={{__html:alat.langkah}}></p>
                        {/* <p>1. Timbanglah masing-masing 2 ekor jangkrik tersebut
                            <br />2. Masukan Kristal NaOH / KOH ke dalam selapis kapas , lalu masukan ke dalam tabung
                                    respirometer
                            <br />3. Masukan jangkrik pertama ke dalam tabung respirometer
                            <br />4. Pasanglah tutup tabung respirometer yang mempunyai pipa kapiler berskala
                            <br />5. Lapisilah sambungan antara tutup dan tabung respirometer dengan vaselin
                            <br />6. Setelah itu, masukan setetes eosin pada kedua pipa kapiler berskala setiap 5 menit
                            <br />7. Catatlah hasil pengamatan dalam tabel
                            <br />8. Lakukan hal yang sama dengan jangkrik yang kedua.
                        </p> */}
                    </div>
                </div>
                   
                <div className="btn"data-aos={"fade-up"}>
                        <Link to={'/Simulation/'}>Simulasi →</Link>
                    </div>
            </div>
        </div>
    </>
}
