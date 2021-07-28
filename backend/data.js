import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'ADMIN',
            email:'admin@admin.com',
            password: bcrypt.hashSync('admin', 8),
            isAdmin: true
        },
        {
            name:'user',
            email:'user@user.com',
            password: bcrypt.hashSync('user1', 8),
            isAdmin: false
        }
    ],
    alat:[
        {
            nama:'Percobaan Tingkat Respirasi pada Serangga',
            tujuan:[
                "<br>1. Mengetahui banyaknya oksigen yang dibutuhkan oleh serangga</br>",
                "<br>2. Mengetahui factor-faktor yang mempengaruhi respirasi pada serangga</br>"
                ],
            langkah:["<br>1. Timbanglah masing-masing 2 ekor jangkrik tersebut</br>",
                    "<br>2. Masukan Kristal NaOH / KOH ke dalam selapis kapas , lalu masukan ke dalam tabung respirometer</br>",
                    "<br>3. Masukan jangkrik pertama ke dalam tabung respirometer</br>",
                    "<br>4. Pasanglah tutup tabung respirometer yang mempunyai pipa kapiler berskala</br>",
                    "<br>5. Lapisilah sambungan antara tutup dan tabung respirometer dengan vaselin</br>",
                    "<br>6. Setelah itu, masukan setetes eosin pada kedua pipa kapiler berskala setiap 5 menit</br>",
                    "<br>7. Catatlah hasil pengamatan dalam tabel</br>",
                    "<br>8. Lakukan hal yang sama dengan jangkrik yang kedua.</br>"],
            masalah:["<br>1. Bagaimana hubungan perbandingan berat pada jangkrik terhadap kecepatan pernapasan pada jangkrik ?</br>",],
            tools:[
                {
                    img:"../img/alat/cotton.png",
                    desc:'Kapas'
                },
                {
                    img:'../img/alat/nasal-spray.png',
                    desc:'Eostin'
                },
                {
                    img:'../img/alat/pipette.png',
                    desc:'Pipet'
                },
                {
                    img:'../img/alat/vaselin.png',
                    desc:'Vaseline'
                },
                {
                    img:'../img/alat/flask.png',
                    desc:'Kristal NaOH'
                },
                {
                    img:'../img/alat/resp.png',
                    desc:'Respirometer'
                },
                {
                    img:'../img/alat/cricket.png',
                    desc:'2 Jangkrik'
                },
                {
                    img:'../img/alat/weighing-machine.png',
                    desc:'Timbangan'
                },
                {
                    img:'../img/alat/chronometer.png',
                    desc:'Stopwatch'
                },
            ]
        },
        {
            nama:'Kapasitas Vital Paru-Paru',
            tujuan: [
                "1.	Untuk Menguji cobakan faktor-faktor yang mempengaruhi respirasi manusia diantaranya  perbedaan dari jenis kelamin dan juga perbedaan dari masa tubuh",
            ],
            langkah:[
                "<br>Praktikum A.</br>",
                "<br>1. Mengukur masa probandus laki-laki yang akan melakukan percobaan sebelum melakukan aktivitas</br>",
                "<br>2. Mengukur massa probandus perempuan yang akan melakukan percobaan sebelum melakukan aktivitas</br>",
                "<br>3. Mengisi gallon dengan air</br>",
                "<br>4.	Memberi tanda sebagai ukuran pada gallon pada setiap 100ml dengan menggunakan spidol</br>",
                "<br>5.	Gallon dimasukan ke dalam ember dengan posisi terbalik, pastikan air tidak tumpah dan tidak ada udara yang masuk</br>",
                "<br>6.	Bernafas dengan cara menghirup nafas sedalam-dalamnya, dan mneghembuskan sekuat-kuatnya</br>",
                "<br>7.	Nafas dihembuskan dalam satu tarikan nafas</br>",
                "<br>8.	Catat hasil pengukuran  yang didapatkan.</br>",
                "<br>9.	Lakukakn hal tersebut pada probandus perempuan</br>",
                "<br>10. Kemudian bandingkan hasil probandus laki-laki dan perempuan </br>",
                "<br>Praktikum B.</br>",
                "<br>1. Mengukur masa probandus laki-laki yang akan melakukan percobaan setelah melakukan aktivitas berlari</br>",
                "<br>2. Mengukur massa probandus perempuan yang akan melakukan percobaan setelah melakukan aktivitas berlari </br>",
                "<br>3. Mengisi gallon dengan air</br>",
                "<br>4.	Memberi tanda sebagai ukuran pada gallon pada setiap 100ml dengan menggunakan spidol</br>",
                "<br>5.	Gallon dimasukan ke dalam ember dengan posisi terbalik, pastikan air tidak tumpah dan tidak ada udara yang masuk</br>",
                "<br>6.	Bernafas dengan cara menghirup nafas sedalam-dalamnya, dan mneghembuskan sekuat-kuatnya</br>",
                "<br>7.	Nafas dihembuskan dalam satu tarikan nafas</br>",
                "<br>8.	Catat hasil pengukuran  yang didapatkan.</br>",
                "<br>9.	Lakukakn hal tersebut pada probandus perempuan</br>",
                "<br>10. Kemudian bandingkan hasil probandus laki-laki dan perempuan </br>",
            ],
            masalah:["<br>1. Bagaimana hubungan antara jenis kelamin dan perbedaan massa tubuh manusia terhadap kapasitas paru-paru manusia?</br>",
                    "<br>2. Bagaimana perbedaan antara kapasitas paru-paru manusia sebelum melakukan aktivitas dan sesudah melakukan aktivitas?</br>"],
            tools:[
                {
                    img:'../img/alat/weighing-machine.png',
                    desc:'Timbangan'
                },
                {
                    img:'../img/alat/selang.png',
                    desc:'Selang'
                },
                {
                    img:'../img/alat/galon.png',
                    desc:'Galon Bening'
                },
                {
                    img:'../img/alat/ember.png',
                    desc:'Ember'
                },
                {
                    img:'../img/alat/orang.png',
                    desc:'Prombandus Laki-laki dan Perempuan'
                },
                {
                    img:'../img/alat/spidol.png',
                    desc:'Spidol'
                }
            ]
        },
    ]
};
export default data;