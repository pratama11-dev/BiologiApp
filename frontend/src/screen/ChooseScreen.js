import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';

export default function ChooseScreen() {
    return (
        <div className="gird-container">
            <div className="container">
                <div className="tittle">
                    <h1>Macam-Macam Percobaan</h1>
                    <div className="border"></div>
                </div>
                <div className="topik">
                    {data.alat.map((alat) => <>
                        <div className="tittle" data-aos={"fade-down"} key={alat._id}>
                            <h2>{alat.nama}</h2>
                        </div>
                        <div className="btn" data-aos={"fade-right"}>
                            <Link to={"/prepare/" + alat._id}>
                                Coba Sekarang!
                            </Link>
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    )
}
