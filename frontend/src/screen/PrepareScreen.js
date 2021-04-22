import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailAlat } from '../actions/alatAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    DoubleLeftOutlined,
} from '@ant-design/icons';

export default function PrepareScreen(props) {

    const dispatch = useDispatch();
    const alatId = props.match.params.id;
    const alatDetail = useSelector( state => state.alatDetail)
    const {loading, error, alat } = alatDetail
    
    useEffect(() => {
        dispatch(detailAlat(alatId))
    }, [dispatch, alatId]);

    return <>
        {loading? (<LoadingBox></LoadingBox>)
        :
        error?(<MessageBox>{error}</MessageBox>)
        : (
            <div className="container">
                {/* <div className="btnArah">
                        <Link to="/choose"><DoubleLeftOutlined /></Link>
                </div> */}
                    <div className="container">
                        <div className="tittle">
                            <h1>{alat.nama}</h1>
                        </div>
                        <div className="topik">
                            <div className="border"></div>
                            <div className="col-2">
                                <div className="judul">
                                    <h2>Tujuan</h2>
                                    <p dangerouslySetInnerHTML={{__html:alat.tujuan}}></p>
                                </div>
                            </div>
                            <div className="judul">
                                <h2>Alat dan Bahan</h2>
                            </div>
                            <div className="row">
                                {alat.tools.map((tools) => <> 
                                    <div className="col-3" key={tools.id}>
                                        <img src={tools.img} alt=""/>
                                        <p>{tools.desc}</p>                            
                                    </div>
                                </>)}
                            </div>
                            {/* <div className="judul">
                                <h2>Langkah</h2>
                                <p dangerouslySetInnerHTML={{__html:alat.langkah}}></p>
                            </div> */}
                        </div>
                        
                        <div className="btn">
                            <Link to={'/percobaan/'}>Simulasi →</Link>
                        </div>
                    </div>
            </div>
        )}
    </>
}
