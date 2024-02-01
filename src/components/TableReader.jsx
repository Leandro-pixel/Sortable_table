import React from 'react'
//thead = tag de cabeçalho de tabela
//tr - troll- linha da tabela
//th - representa cada um dos nomes da coluna
const TableReader = ({onColumnClick}) => {
  return (
    <thead>
        <tr>
            <th onClick={() => onColumnClick("nome")}>Name</th>
            <th onClick={() => onColumnClick("idade")}>Age</th>
            <th onClick={() => onColumnClick("cargo")}>Title</th>
        </tr>
    </thead>
  )
}

export default TableReader