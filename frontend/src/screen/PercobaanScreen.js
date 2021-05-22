import React from 'react'
import { Link } from 'react-router-dom';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';

export default function PercobaanScreen() {
    return (
        <div className="container">
            <div className="container">
                <div className="tittle">
                    <h1>Macam-Macam Percobaan</h1>
                    <div className="border"></div>
                </div>
                <div className="topik">
                    <div>
                        <div className="tittle">
                            <h3>Tingkat Respirasi pada Serangga</h3>
                        </div>
                        <div className="btn">
                            <Link to={"/simulationSerangga/"}>
                                Coba Sekarang!
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="tittle">
                            <h3>Kapasitas Vital Paru-Paru</h3>
                        </div>
                        <div className="btn">
                            <Link to={"/simulationManusia/"}>
                                Coba Sekarang!
                            </Link>
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
