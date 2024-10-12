import { Request } from "express";
export class GetManySurveyDto {
  query: {
    take: 5,
    page?: number,
    orderType: "asc" | "desc",
    orderBy?: string,
    search?: string,
  }

  constructor(req: GetManySurveyDto){
    this.query = {
      take: 5,
      page: req.query.page ?? 1,
      orderBy: req.query.orderBy ?? null,
      orderType: req.query.orderType == "desc" ? "desc" : "asc",
      search: req.query.search ?? null,
    }
  }
}