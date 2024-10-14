import * as React from 'react';

interface AddSurveyComponentProps {
  onClick: () => void;
}

const AddSurveyComponent: React.FC<AddSurveyComponentProps> = ({onClick}) => {
  return (
    <div 
      className='text-white font-medium border-t border-zinc-800 cursor-pointer hover:bg-zinc-900 px-6 py-2'
      onClick={onClick}
    >
      <p className='w-full text-center text-zinc-600 text-2xl'>+</p>
    </div>
  )
}

export default AddSurveyComponent