import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import utils from '../../utils';
import { TableComponentProps } from '../../@types/components/TableComponentProps';
import { useServer } from '../../contexts/ServerContext';
import { PaginationDtoProps } from '../../@types/publics/PaginationDtoProps';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const columns = ["ID", "STATUS", "NAME", "START", "END"]

const TableComponent: React.FC<TableComponentProps> = ({search}) => {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState<PaginationDtoProps>({} as PaginationDtoProps);
  const [page, setPage] = useState(0);
  const server = useServer();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      getSurveys();
    }, 200);

    return () => clearTimeout(timer);
  }, [search, page])

  const getSurveys = async () => {
    const response = await server.getSurveys(search, page);
    if(response?.results.length != 0){
      setSurveys(response)
    }
  }

  const handlePage = (id: number) => {
    navigate(`/survey/${id}`)
  }

  const renderRows = () => {
    const page = 0;
    const elements: React.ReactNode[] = []
    const perPage = surveys.take;
    const start = page >= surveys.results.length ? surveys.results.length - perPage : page;
    const end = page+perPage >= surveys.results.length ? surveys.results.length : page+perPage;
    
    for(let i = start; i < end; i++){
      const value = surveys.results[i];
      const status = utils.getStatus(value.start, value.end);
      const response = utils.getColor(status);
      elements.push(
        <tr onClick={() => {handlePage(value.id)}} className='text-white font-medium border-t border-zinc-800 cursor-pointer hover:bg-zinc-900' key={i}>
          <td className={"p-4 "}>{value.id}</td>
          <td className={"p-4 " + response}>{status}</td>
          <td className={"p-4 "}>{value.name}</td>
          <td className={"p-4 "}>{utils.formatDate(value.start)}</td>
          <td className={"p-4 "}>{utils.formatDate(value.end)}</td>
        </tr>
      )
    }
    return elements;
  }
  if(!surveys?.results || surveys.results.length == 0) return <></>;

  return (
    <>
      <div className='w-full mt-4 rounded border border-zinc-800 overflow-scroll rounded-b-none' style={{scrollbarWidth: "none"}}>
        <table className='w-full'>
          <thead>
            <tr>
              {columns.map((text, index) => (
                <th key={index} className='p-4 text-left' style={{color: "#a1a1aa"}}>{text}</th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {renderRows()}
          </tbody>

        </table>
      </div>
      <div className='flex items-center py-3 px-10 w-full text-white font-medium border rounded border-t-0 border-zinc-800 justify-end'>
        <ArrowLeftIcon onClick={() => {setPage(+surveys.page -1)}} sx={{width: 30, height: 30, cursor: "pointer"}} />
        <p>{surveys.results.length * surveys.page}/{surveys.totalResults}</p>
        <ArrowRightIcon onClick={() => {setPage(+surveys.page + 1)}} sx={{width: 30, height: 30, cursor: "pointer"}} />
      </div>
    </>
  );
}

export default TableComponent;