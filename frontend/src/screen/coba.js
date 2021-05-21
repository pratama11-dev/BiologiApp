import React from 'react'

export default function coba() {
  const [beratProA, setberatProA] = useState('');
  const [pertama, setPertama] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setValueA((oldValue) => {
            const newValue = oldValue + 1;
            if (newValue >= pertama) {
              clearInterval(interval);
              console.log(pertama)
              console.log(beratProA)
            }
        return newValue;
      });
    }, 1);
}, []); 

  return (
    <div>
      <ul>
        <label htmlFor="nilaiB">Nilai Berat Probandus Laki-Laki A: </label>
        {/* <p><b>{randomeNumber} Kg</b></p> */}
        <input
            id="beratA"
            placeholder="Masukkan berat"
            value={beratProA}
            onChange={(e) => setberatProA(e.target.value)}
        ></input>
        <label>Kg</label>
      </ul>
      <ul>
        <p /> Hasil Pengukuran Probandus Laki-laki A: 
        <button 
            onClick={() => setPertama(beratProA * 90 - 890)}
            className='btn'
        >
            Start
        </button>
      </ul>
    </div>
  )
}
