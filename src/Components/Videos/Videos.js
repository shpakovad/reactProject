import React, {PureComponent} from "react";
import "./Videos.css";
import axios from "axios";
import FoundVideo from "./FoundVideo";
import SearchInput from "./SearchInput";
import {NavLink, Route} from "react-router-dom";
import News from "../News/News";


class Videos extends PureComponent {

    state = {
        addedValue: "",
        resultValue: "",
        titlePopularVideos: "",
        popularVideos: null,
    };

    getTitlePopularVideos = (title, video) => {
        this.setState({titlePopularVideos: title, popularVideos: video})
    };

    onChangedValue = (e) => {
        this.setState({addedValue: e.currentTarget.value});
    };

    addValue = () => {
        this.setState({resultValue: this.state.addedValue, addedValue: ''})
    };

    componentDidMount() {
        let API_KEY = "AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs";
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=${API_KEY}`)
            .then(res => {
                console.log(res.data.items);
                this.getTitlePopularVideos(res.data.items.map(item => {
                    let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
                    return <div className="news-item-wrapper" key={item.id}>
                        <li className="title-popular-video">
                            <div className="wrapper-title-video"><span> {item.snippet.title} </span></div>
                            <iframe width="300" height="200" src={urlImage} frameBorder="0" title="myFrame"></iframe>
                        </li>
                    </div>
                }))
            })
    }

    render() {

        const {onChangedValue, addValue} = this;
        const {addedValue, resultValue, titlePopularVideos, popularVideos} = this.state;

        return (

            <div className="wrapper-video">

                <NavLink to="/videos_found"  className="btn btn-outline-secondary" type="button" id="button-addon2"> Search Videos </NavLink>



                        <div className="text-popular"> Popular:</div>

                        {!titlePopularVideos && !popularVideos &&
                        <div className="spinner-border text-danger spinner-place" role="status"></div>
                        }
                        <div className="videos">
                            <div>{titlePopularVideos} </div>
                            <div>{popularVideos}</div>
                        </div>

            </div>
        );
    }
};

export default Videos
