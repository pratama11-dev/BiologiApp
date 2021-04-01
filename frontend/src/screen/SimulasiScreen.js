import React from 'react'
import { useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SimulasiScreen() {
    
    const alatDetail = useSelector( state => state.alatDetail)
    const {loading, error, alat } = alatDetail

    return (
        <div className="container">
            {loading? (<LoadingBox></LoadingBox>)
            :
            error?(<MessageBox>{error}</MessageBox>)
            : (
                <div className="container">
                    <div className="tittle">
                        <h1>{alat.nama}</h1>
                    </div>
                    <div className="topik">
                        <div className="row">
                            <div className="judul">
                                <h2>Penelitian</h2>
                                <p />1. Timbanglah masing-masing jangkrik tersebut
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/cricket.png"/>
                                    <img src="../img/alat/weighing-machine.png"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat : </label>
                                        <input
                                            id="nilaiB"
                                            type="text"
                                            placeholder="Masukkan Nilai Berat"
                                        ></input>
                                    </ul>
                                </div>
                                <p />2. Masukan Kristal NaOH / KOH ke dalam selapis kapas , lalu masukan ke dalam tabung respirometer
                                    <div className="col-2-simulasi">
                                        <img src="../img/alat/flask.png"/>
                                        <img src="../img/alat/cotton.png"/>
                                    </div>
                                <p />3. Masukan jangkrik pertama ke dalam tabung respirometer
                                <p />4. Pasanglah tutup tabung respirometer yang mempunyai pipa kapiler berskala
                                <p />5. Lapisilah sambungan antara tutup dan tabung respirometer dengan vaselin
                                <p />6. Setelah itu, masukan setetes eosin pada kedua pipa kapiler berskala setiap 5 menit
                                <p />7. Catatlah hasil pengamatan dalam tabel
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
