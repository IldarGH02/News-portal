import { INewsDetail } from "./INewsDetails"

export interface INews {
    status: string,
    total_hits: number,
    page: number,
    total_pages: number,
    age_size: number,
    articles: INewsDetail[]
}