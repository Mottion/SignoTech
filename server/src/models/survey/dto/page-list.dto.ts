import { GetManySurveyDto } from "./get-many-survey.dto";

export class PageListDto<T = any[]> {
  results: T;
  page: number;
  orderType: "asc" | "desc";
  orderBy?: string;
  take: number;
  totalResults: number

  constructor(
    results: T,
    count: number,
    params: GetManySurveyDto["query"]
  ){
    this.results = results;
    this.page = params.page;
    this.orderBy = params.orderBy;
    this.orderType = params.orderType;
    this.take = params.take;
    this.totalResults = count;
    
  }
}