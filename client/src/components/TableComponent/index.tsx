import * as React from 'react';

const columns = ["ID", "STATUS", "NAME", "START", "END"]
const values = [
  {id: 1, status: "closed", name: "Votação teste 1", start: "2024-06-11 11:45", end:"2024-06-11 18:00"},
  {id: 2, status: "open", name: "Votação teste 2", start: "2024-06-12 09:00", end:"2024-06-12 17:30"},
  {id: 3, status: "in progress", name: "Votação teste 3", start: "2024-06-13 08:00", end:"2024-06-13 16:00"},
  {id: 4, status: "closed", name: "Votação teste 4", start: "2024-06-14 10:00", end:"2024-06-14 19:00"},
  {id: 5, status: "open", name: "Votação teste 5", start: "2024-06-15 12:00", end:"2024-06-15 20:00"},
  {id: 6, status: "closed", name: "Votação teste 6", start: "2024-06-16 11:30", end:"2024-06-16 17:45"},
  {id: 7, status: "in progress", name: "Votação teste 7", start: "2024-06-17 09:15", end:"2024-06-17 18:15"},
  {id: 8, status: "open", name: "Votação teste 8", start: "2024-06-18 10:30", end:"2024-06-18 16:45"},
  {id: 9, status: "closed", name: "Votação teste 9", start: "2024-06-19 13:00", end:"2024-06-19 19:30"},
  {id: 10, status: "open", name: "Votação teste 10", start: "2024-06-20 08:45", end:"2024-06-20 15:45"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
  {id: 11, status: "closed", name: "Votação teste 11", start: "2024-06-21 14:00", end:"2024-06-21 20:00"},
];

const TableComponent: React.FC = () => {

  const getColor = (status: string) => {
    switch(status){
      case "closed": return "text-red-500";
      case "open": return "text-green-500";
      case "in progress": return "text-yellow-500";
    }
  }


  return (
    <div className='w-full mt-4 rounded border border-zinc-800'>
      <table className='w-full'>
        <thead className='overflow-scroll'>
          <tr>
            {columns.map((text, index) => (
              <th key={index} className='p-4 text-left' style={{color: "#a1a1aa"}}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody className='overflow-scroll'>
        {values.map((value, index) => {
        const response = getColor(value.status);

        return (
          <tr className='text-white font-medium border-t border-zinc-800 cursor-pointer hover:bg-zinc-900' key={index}>
            <td className={"p-4 "}>{value.id}</td>
            <td className={"p-4 " + response}>{value.status}</td>
            <td className={"p-4 "}>{value.name}</td>
            <td className={"p-4 "}>{value.start}</td>
            <td className={"p-4 "}>{value.end}</td>
          </tr>
        )
      } 
      )}
      </tbody>
      <tfoot>

      </tfoot>
      </table>
    </div>
  );
}

export default TableComponent;