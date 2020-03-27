import React, {Component} from "react";
import style from "./News.module.css";
import nyt_logo from "../../images/news/nyt_logo.jpg";


class NewsItem extends Component {

    render() {

const {url,title,image} = this.props;

        return (
            <div className={style.newsItemWrapper}>
           <a href={`${url}`} className={style.newsTitle} target="_blank" rel="noopener noreferrer" > {title} </a>
                {!image && <div> <img className={style.imgTitle} alt="" src={nyt_logo} /> </div>}
                {image && <div> <img className={style.imgTitle} alt="" src={image}/>  </div>}
            </div>
        );
    }
}

export default NewsItem;
