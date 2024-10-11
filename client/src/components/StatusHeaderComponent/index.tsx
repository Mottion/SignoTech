import * as React from 'react';
import utils from '../../utils';

const StatusHeaderComponent: React.FC<{value: any}> = ({value}) => {
  const status = utils.getStatus(value.start, value.end);
  return (
    <div className='flex flex-wrap gap-2 mt-4 py-3 px-10 w-full text-white font-medium rounded border border-b-0 border-zinc-800'>
      <div className='m-auto flex gap-2' >
        <p className='text-zinc-500'>START:</p>
        <p>{utils.formatDate(value.start)}</p>
      </div>
      <div className='m-auto flex gap-2' >
        <p className='text-zinc-500'>STATUS:</p>
        <p className={utils.getColor(status)}>{status}</p>
      </div>
      <div className='m-auto flex gap-2'>
        <p className='text-zinc-500'>END:</p>
        <p>{utils.formatDate(value.end)}</p>
      </div>
    </div>
  )
}

export default StatusHeaderComponent;