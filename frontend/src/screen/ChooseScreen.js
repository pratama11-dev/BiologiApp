import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ChooseScreen() {

    const [alat, setAlat] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('api/alat');
            setAlat(data);
        }
        fecthData();
    }, []);

    return (
        <div className="gird-container">
            <div className="container">
                <div className="tittle">
                    <h1>Macam-Macam Percobaan</h1>
                    <div className="border"></div>
                </div>
                <div className="topik">
                    {alat.map((alat) => <>
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
