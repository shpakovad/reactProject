import React, {Component} from "react";
import axios from "axios";
import style from "./News.module.css"
import NewsItem from "./NewsItem";

//pFpSg40feER6OKDiEgPgdLKM1TFaXD8k nytimes


class News extends Component {

    state = {
        results: [],
    };

    getResults = (newResults) => {
        this.setState({results: newResults})
    };

    componentDidMount() {
        const API_KEY = 'pFpSg40feER6OKDiEgPgdLKM1TFaXD8k';
        axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`)
            .then((res => {

                let newResults = res.data.results;
                this.getResults(newResults);
                console.log(newResults)
            }))
    }

    render() {

        let news = this.state.results.map(item => {
            return <NewsItem key={item.index} title={item.title} image={item.thumbnail_standard}
                             url={item.url}/>
        });

        return (
            <>
                {this.state.results && <>
                    <div className={style.newsWrapper}>
                        {news}
                    </div>
                </>}
            </>
        );
    }
}

export default News;
