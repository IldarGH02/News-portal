import React from "react";

import NewsItem from "./components/NewsItem";

import { INewsDetail } from "types/INewsDetails";

import './styles.scss'

interface INewsListParams {
    list: INewsDetail[]
}

const newsList: React.FC<INewsListParams> = ({list}) => (
    <div className="newsList">
        {list.map((news: INewsDetail) => {
            return <NewsItem key={news._id} item={news}/>
        })}
    </div> 
)

export default newsList