import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
    createAlat,
    listAlat,
    deleteAlat
} from '../actions/alatAction'
import { 
    ALAT_CREATE_RESET, 
    ALAT_DELETE_RESET 
} from '../constants/alatConstants';
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom';

export default function PenelitianListScreen(props) {

    const alatList = useSelector((state) => state.alatList);
    const { 
        loading, 
        error, 
        alat 
    } = alatList;

    const alatCreate = useSelector((state) => state.alatCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        alat: createdAlat,
    } = alatCreate;
    
    const alatDelete = useSelector((state) => state.alatDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = alatDelete;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: ALAT_CREATE_RESET });
            props.history.push(`/alat/${createdAlat._id}/edit`);
        }
        if (successDelete) {
            dispatch({ type: ALAT_DELETE_RESET });
        }
        dispatch(listAlat());
    }, [
        createdAlat,
        dispatch,
        props.history,
        successCreate,
        successDelete,
        userInfo._id,
    ]);

    const deleteHandler = (alat) => {
        if (window.confirm('Anda yakin ingin menghapus data?')) {
            dispatch(deleteAlat(alat._id));
        }
    };

    const createHandler = () => {
        dispatch(createAlat());
    };

    return <>
        <div className="container">
            <div className="tittle">
                <h1>Daftar Penelitian</h1>
            </div>
            <div className="btncreate">
                <button type="button" className="btn" onClick={createHandler}>
                    Create Product
                </button>
            </div>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>JUDUL PENELITIAN</th>
                                <th>TANGGAL</th>
                                <th>TANGGAL UPDATE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alat.map((alat) => (
                                <tr key={alat._id}>
                                    <td>{alat._id}</td>
                                    <td>{alat.nama}</td>
                                    <td>{alat.createdAt.substring(0, 10)}</td>
                                    <td>{alat.updatedAt.substring(0, 10)}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btnEdit"
                                            onClick={() =>
                                            props.history.push(`/alat/${alat._id}/edit`)
                                            }
                                        >
                                            <EditOutlined />
                                        </button>
                                        <button
                                            type="button"
                                            className="btnDelete"
                                            onClick={() => deleteHandler(alat)}
                                        >
                                            <DeleteOutlined />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn"
                                        >
                                            <Link to={'/prepare/' + alat._id}>
                                                <EyeOutlined />
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    </>
}
