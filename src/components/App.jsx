import '../App.css';
import AnsattKort from './AnsattKort';

function App() {

  let ansatte = [
    {
      navn: "Kim Aleksander Persen",
      tlf: "12 34 56 78",
      epost: "kimppppp@gmail.com"
    },
    {
      navn: "Jon Pape Hallem",
      tlf: "62 94 73 94",
      epost: "jonpape@gmail.com"
    },
    {
      navn: "Roar Gjerde",
      tlf: "93 85 72 04",
      epost: "gjerde.roare@gmail.com"
    },
    {
      navn: "Bent Erik Hammernes",
      tlf: "93 75 26 17",
      epost: "bent.erik@gmail.com"
    },

    {
      navn: "Knut Eivind Brennhaug",
      tlf: "62 81 01 82",
      epost: "knuk.eb@gmail.com"
    }

  ];

  return (
    <>
    <h1 className=' text-center text-3xl text-red-600'>Hex-App</h1>
    <div className=" grid grid-cols-3">

      {ansatte.map(ansatte =>(
        <AnsattKort navn={ansatte.navn} tlf={ansatte.tlf} epost={ansatte.epost} />
      ))}

      {/* <AnsattKort navn="Kim Aleksander Persen" tlf="12 34 56 78" epost="kimppppp@gmail.com" />
      <AnsattKort navn="Jon Pape Hallem" tlf="62 94 73 94" epost="jonpape@gmail.com" />
      <AnsattKort navn="Roar Gjerde" tlf="93 85 72 04" epost="gjerde.roar@gmail.com" />
      <AnsattKort navn="Bent Erik Hammernes" tlf="93 75 26 17" epost="bent.erik@gmail.com" /> */}
    </div>
    </>
  )
}

export default App;
