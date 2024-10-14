import dayjs from "dayjs";

const formatDate = (date: any) => {
  const dateObj = new Date(date);
  const formatedDate = `
    ${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')} 
    ${String(dateObj.getDay()).padStart(2, '0')}/${String(dateObj.getMonth()).padStart(2, '0')}/${dateObj.getFullYear()}
  `
  return formatedDate;
}

const getStatus = (start: any, end: any) => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const now = new Date().getTime();

  if(now < startDate){return "CLOSED"}
  else if(now > endDate){return "FINISHED"}
  else {return "IN PROGRESS"}
}


const getColor = (status: string) => {
  switch(status){
    case "CLOSED": return "text-red-500";
    case "FINISHED": return "text-green-500";
    case "IN PROGRESS": return "text-yellow-500";
  }
}

export default {
  formatDate,
  getStatus,
  getColor
}