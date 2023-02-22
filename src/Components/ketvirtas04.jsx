// 4....Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage,
//  o antras bet koks tekstas kuris atvaizduojamas h2 tage.

function Dutekstai({ texth1, texth2 }) {
    return <div><h1>{texth1}</h1> <h2>{texth2}</h2></div>
}

export default Dutekstai