import React, {PureComponent} from "react";
import NewsItem from "./NewsItem";
import style from "./News.module.css";
import {getNews} from "../../redux/reducers/newsReducer";
import {connect} from "react-redux";


class News extends PureComponent {

    getResults = (newResults) => {
        this.props.getResults(newResults)
    };

    componentDidMount() {
        this.getResults(this.props.results)
    }

    render() {

        const {results} = this.props;

        let news = results.map(item => {
            return <NewsItem key={item.index} title={item.title} image={item.thumbnail_standard}
                             url={item.url}/>
        });

        return (
            <>
                {results && <>
                    <div className={style.newsWrapper}>
                        {news}
                    </div>
                </>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.news.results
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getResults(newResults) {
            dispatch(getNews(newResults))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(News)
