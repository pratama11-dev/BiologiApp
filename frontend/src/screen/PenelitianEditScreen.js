import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailAlat, listAlat, updatedAlat } from '../actions/alatAction';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons'
import { ALAT_UPDATE_RESET } from '../constants/alatConstants';

export default function PrepareEditScreen(props) {
    const alatId = props.match.params.id;
    const [nama, setNama] = useState('');
    const [tujuan, setTujuan] = useState('');
    const [langkah, setLangkah] = useState('');
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    // const [img, setImg] = useState([{img:''}]);
    // const [desc, setDesc] = useState([{desc:''}]);
    const [toolss, setToolss] = useState([
        {img:'', desc:''},
    ]);

    
    // const handleChange = (e,editor)=>{
    //     setTujuan(editor.getData());
    // }

    const dispatch = useDispatch();

    const alatUpdate = useSelector((state) => state.alatUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = alatUpdate;

    const alatDetail = useSelector(state => state.alatDetail);
    const {loading, error, alat, tools} = alatDetail;

    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: dispatch update alat
        dispatch(
            updatedAlat({
                _id: alatId,
                nama,
                tujuan,
                langkah,
                img,
                desc,
            })
        );
    };

    const handleAddFields = () => {
        // const values = [...toolss];
        // values.push({img:'',desc:''});
        // setToolss(values);
        
        setToolss([...toolss, {img:'',desc:''}])
        
        // setImg([img])
        // setDesc([desc])
        
        // e.preventDefault();
        // setImg([img])
        // setDesc([desc])
    };

    const handleRemoveFields = index => {
        const values = [...toolss];
        values.splice(index, 1);
        setToolss(values);
    };

    const handleChangeInput = ( desc, event) => {
        const values = toolss.map(i => {
            if(desc === i.desc) {
                i[event.target.name] = event.target.value
            }
            return i;
        })
        // const {name, value} = event.target;
        // const values = [...toolss];
        // values[index][name] = value;

        // const values = [...toolss];
        // if(event.target.name === "desc"){
        //     values[index].desc = event.target.value;
        // } 

        // const values = [...toolss];
        // values[i][event.target.id] = event.target.value;
        
        setToolss(values);
    }

    useEffect(() => {
        if(successUpdate){
            props.history.push('/listpenelitian')
        }
        if(!alat || alat._id !== alatId || successUpdate){
            dispatch({type: ALAT_UPDATE_RESET});
            dispatch(detailAlat(alatId));
        }else{
            setNama(alat.nama);
            setTujuan(alat.tujuan);
            setLangkah(alat.langkah);
            // setImg({...alat,[tools]: {img}});
            // setDesc({...alat,[tools]: {desc}});
            setImg(alat.img);
            setDesc(alat.desc);
        }
        return () => {
            dispatch(listAlat())
        }
    },[
        alat,
        dispatch,
        alatId,
        tools,
        successUpdate,
        props.history
    ]);

    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const { data } = await axios.post('/api/uploads', bodyFormData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userInfo.token}`,
            },
            });
            setImg(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };

    return (
        <div className="form">
            <form className="content" onSubmit={submitHandler}>
                <div>
                    <h1>Edit {nama}</h1>
                </div>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
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
                                placeholder="Masukkan Judul Penelitian"
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
                                placeholder="Masukkan Tujuan Penelitian"
                                value={tujuan}
                                onChange={(e) => setTujuan(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <label htmlFor="langkah">Langkah Penelitian</label>
                            {/* <p dangerouslySetInnerHTML={{__html:alat.langkah}}></p> */}
                            <input
                                id="langkah"
                                type="text"
                                placeholder="Masukkan Langkah Penelitian"
                                value={langkah}
                                onChange={(e) => setLangkah(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            {alat.tools.map((tools) => <>
                                <label htmlFor="image">Gambar :</label>
                                <input
                                    id="img"
                                    type="text"
                                    placeholder="Masukkan Gambar"
                                    value={tools.img}
                                    onChange={(e) => setImg(e.target.value)}
                                ></input>
                                <label htmlFor="desc">Description :</label>
                                <input
                                    id="desc"
                                    type="text"
                                    placeholder="Masukkan Deskripsi Gambar"
                                    value={tools.desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                ></input>
                                {/* <button onClick={() => handleRemoveFields(img.id)}>
                                    <DeleteOutlined />
                                </button>
                                <button onClick={handleAddFields}>
                                    <PlusOutlined />
                                </button> */}
                            </>)}
                        </li>
                        <li>
                            <p>Tambah Data :</p>
                            {toolss.map((toolss) => <>
                                {/* <label htmlFor="image">Gambar :</label>
                                <input
                                    id="img"
                                    type="text"
                                    placeholder="Masukkan Gambar"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                ></input> */}
                                <label htmlFor="desc">Description</label>
                                <input
                                    name="desc"
                                    id="desc"
                                    type="text"
                                    placeholder="Masukkan Deskripsi Gambar"
                                    value={toolss.desc}
                                    onChange={ event => handleChangeInput(toolss.desc,event)}
                                    // onChange={(e) => setDesc(e.target.value)}
                                ></input>
                                <label htmlFor="imageFile">Gambar File</label>
                                <input
                                    type="file"
                                    id="imageFile"
                                    label="Pilih Gambar"
                                    onChange={uploadFileHandler}
                                ></input>
                                {loadingUpload && <LoadingBox></LoadingBox>}
                                {errorUpload && (
                                    <MessageBox variant="danger">{errorUpload}</MessageBox>
                                )}
                                <div className="col-2">
                                    <button className="btnDelete" onClick={() => handleRemoveFields(toolss.img)}>
                                        <DeleteOutlined />
                                    </button>
                                    <button className="btn" onClick={handleAddFields}>
                                        <PlusOutlined />
                                    </button>
                                </div>
                            </>)}
                        </li>
                        {/* <li>
                            <label htmlFor="desc">Description</label>
                            <input
                                id="desc"
                                type="text"
                                placeholder="Masukkan Deskripsi Gambar"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            ></input>
                        </li> */}
                        <li>
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
