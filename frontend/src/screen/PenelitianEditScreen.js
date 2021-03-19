import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailAlat } from '../actions/alatAction';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function PrepareEditScreen(props) {
    const alatId = props.match.params.id;
    const [nama, setNama] = useState('');
    const [tujuan, setTujuan] = useState('');
    const [langkah, setLangkah] = useState('');
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    
    // const handleChange = (e,editor)=>{
    //     setTujuan(editor.getData());
    // }

    const dispatch = useDispatch()

    const alatDetail = useSelector(state => state.alatDetail);
    const {loading, error, alat} = alatDetail

    useEffect(() => {
        if(!alat || alat._id !== alatId){
            dispatch(detailAlat(alatId))
        }else{
            setNama(alat.nama);
            setTujuan(alat.tujuan);
            setLangkah(alat.langkah);
            setImg(alat.img);
            setDesc(alat.desc);
        }
    },[
        alat,
        dispatch,
        alatId
    ])

    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: dispatch update product
    };

    return (
        <div className="form">
            <form className="content" onSubmit={submitHandler}>
                <div>
                    <h1>Edit {nama}</h1>
                </div>
                {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                <>
                    <ul className="form-container">
                        <li>
                            <label htmlFor="nama">Judul Penelitian</label>
                            <input
                                id="nama"
                                type="text"
                                placeholder="Enter name"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="tujuan">Tujuan Penelitian</label>
                            {/* <CKEditor name="tujuan" value={tujuan} id="tujuan" 
                                editor={ ClassicEditor }
                                data= {tujuan}
                                
                                // onChange={ ( e, editor ) => {
                                //    {handleChange(e,editor)}
                                // } }
                                
                            /> */}
                            <input
                                id="tujuan"
                                type="text"
                                placeholder="Enter tujuan"
                                value={tujuan}
                                onChange={(e) => setTujuan(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="langkah">Langkah Penelitian</label>
                            <input
                                id="langkah"
                                type="text"
                                placeholder="Enter langkah"
                                value={langkah}
                                onChange={(e) => setLangkah(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="img">Gambar</label>
                            <input
                                id="img"
                                type="text"
                                placeholder="Enter img"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="desc">Description</label>
                            <textarea
                                id="desc"
                                rows="3"
                                type="text"
                                placeholder="Enter description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            ></textarea>
                        </li>
                        <li>
                            <label></label>
                            <button className="btn" type="submit">
                                Update
                            </button>
                        </li>
                    </ul>
                </>
                )}
            </form>
        </div>
    )
}
