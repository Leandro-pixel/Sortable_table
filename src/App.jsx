
import SearchBar from './components/SearchBar'
import TableReader from './components/TableReader'
import TableRow from './components/TableRow'
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    { nome: "Ana", idade: 25, cargo: "Engenheira" },
    { nome: "João", idade: 30, cargo: "Desenvolvedor" },
    { nome: "Maria", idade: 22, cargo: "Designer" },
    { nome: "Carlos", idade: 40, cargo: "Gerente" },
    { nome: "Sofia", idade: 28, cargo: "Analista" },
  ]);

  const [searchTerm, setSearchTerm] = useState("")
  const [sortConfig, setSortConfig] = useState(null)

//[...algo] cria um array 'algo'
// .SORT() é uma função de array incorporada na linguagem JavaScript e é usada para ordenar os elementos de um array.
//sorte ja faz o trampo de ordenar por caracteres
  const sortedData = [...data].sort((a, b) => { 
    if(sortConfig !== null) {//Isso significa que a ordenação só será realizada se sortConfig não for nulo.
      if(a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      } //da a orden ascedente
      if(a[sortConfig.key] > b[sortConfig.key]) {//da ordem descendente
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const fillteredData = sortedData.filter(
    (row) =>
     row.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
     row.cargo.toLowerCase().includes(searchTerm.toLowerCase())
     );
  

  const onColumnClick = (key) => {
    let direction = "ascending"

    if(
      sortConfig && 
      sortConfig.key === key &&
       sortConfig.direction === "ascending"
       ) {
      direction = "descending"; //vem da direção ascendente e passa para descendente
    }

    setSortConfig({key, direction})
  }

  return (
    <div className="container">
      <h1>User's Table</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <table>
        <TableReader onColumnClick={onColumnClick}/>
        <tbody>
          {fillteredData.map((row, index) => (
            <TableRow key={index} row={row}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
