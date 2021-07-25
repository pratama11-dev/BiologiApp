import mongoose from 'mongoose';

const alatSchema = new mongoose.Schema(
    {
        nama: {type: String, required: true, unique: true},
        tujuan: [String],
        masalah: [String],
        langkah: [String],
        tools:[{
            img: [String],
            desc: [String],
        }]
    },
    {
        timestamps:true
    }    
);

const Alat = mongoose.model('Alat', alatSchema);

export default Alat;