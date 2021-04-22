import React from 'react'
import { Link } from 'react-router-dom';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';
// import { useSelector } from 'react-redux';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

export default function SimulasiResManusia() {
    
    // const alatDetail = useSelector( state => state.alatDetail)
    // const {loading, error, alat } = alatDetail

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
                                    {/* <ul>
                                        <label htmlFor="nilaiB">Nilai Berat : </label>
                                        <input
                                            id="nilaiB"
                                            type="text"
                                            placeholder="Masukkan Nilai Berat"
                                        ></input>
                                    </ul> */}
                                </div>
                            <p />2. Mengukur massa probandus perempuan yang akan melakukan percobaan sebelum melakukan aktivitas
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/beratcewe.gif"/>
                                </div>
                            <p />3. Mengisi gallon dengan air
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/respiro.gif"/>
                                </div>
                            <p />4.	Memberi tanda sebagai ukuran pada gallon pada setiap 100ml dengan menggunakan spidol
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/vaselin.gif"/>
                                </div>
                            <p />5.	Gallon dimasukan ke dalam ember dengan posisi terbalik, pastikan air tidak tumpah dan tidak ada udara yang masuk
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/pasang.gif"/>
                                </div>
                            <p />6.	Bernafas dengan cara menghirup nafas sedalam-dalamnya, dan mneghembuskan sekuat-kuatnya
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/eostin.gif"/>
                                </div>
                            <p />7.	Nafas dihembuskan dalam satu tarikan nafas
                            <p />8.	Catat hasil pengukuran  yang didapatkan.
                            <p />9.	Lakukakn hal tersebut pada probandus perempuan.
                            <p />10. Kemudian bandingkan hasil probandus laki-laki dan perempuan
                        </div>
                        <div className="judul">
                        <h2 />Praktikum B
                            <p />1. Mengukur masa probandus laki-laki yang akan melakukan percobaan setelah melakukan aktivitas berlari
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/timbangan.gif"/>
                                    <ul>
                                        <label htmlFor="nilaiB">Nilai Berat : </label>
                                        <input
                                            id="nilaiB"
                                            type="text"
                                            placeholder="Masukkan Nilai Berat"
                                        ></input>
                                    </ul>
                                </div>
                            <p />2. Mengukur massa probandus perempuan yang akan melakukan percobaan setelah melakukan aktivitas berlari
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/tetes.gif"/>
                                </div>
                            <p />3. Mengisi gallon dengan air
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/respiro.gif"/>
                                </div>
                            <p />4.	Memberi tanda sebagai ukuran pada gallon pada setiap 100ml dengan menggunakan spidol
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/vaselin.gif"/>
                                </div>
                            <p />5.	Gallon dimasukan ke dalam ember dengan posisi terbalik, pastikan air tidak tumpah dan tidak ada udara yang masuk
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/pasang.gif"/>
                                </div>
                            <p />6.	Bernafas dengan cara menghirup nafas sedalam-dalamnya, dan mneghembuskan sekuat-kuatnya
                                <div className="col-2-simulasi">
                                    <img src="../img/alat/eostin.gif"/>
                                </div>
                            <p />7.	Nafas dihembuskan dalam satu tarikan nafas
                            <p />8.	Catat hasil pengukuran  yang didapatkan.
                            <p />9.	Lakukakn hal tersebut pada probandus perempuan.
                            <p />10. Kemudian bandingkan hasil probandus laki-laki dan perempuan
                        </div>
                    </div>
                </div>
                <div className="btnArah">
                    <Link to="/"><DoubleLeftOutlined /></Link>
                </div>
            </div>
        </div>
    )
}