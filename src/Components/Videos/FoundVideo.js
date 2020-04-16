import React, {PureComponent} from "react";
import "./Videos.css";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {getPopularVideosListTh} from "../../redux/reducers/videosReducer";
import {connect} from "react-redux";
import {getFoundVideosListAC} from "../../redux/reducers/foundVideosReducer";


class FoundVideo extends PureComponent {

    state = {
        resultValue: "",
    };

    addValue = (e) => {
        e.preventDefault();
        const foundVideo = e.target.elements.video.value;
        if (foundVideo) {
            let API_KEY = "AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs";
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&q=${foundVideo}&type=video&videoDefinition=any&key=${API_KEY}`)
                .then(res => {
                    let addedValue = res.data.items.map((item, index) => {
                        let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
                        let text = item.snippet.title.replace(/&quot;/g, " ");
                        return <div className="wrapper-found-video" key={index}>
                            <li className="title-found-video">
                                <div className="wrapper-frame-video"><span> {text} </span></div>
                                <iframe className="frame-video" width="60%" height="300px" src={urlImage}
                                        frameBorder="0" title="myFrameVideo"></iframe>
                            </li>
                        </div>

                    });
                    this.props.getFoundVideosList(addedValue)
                //    this.setState({resultValue: addedValue});
                })

        } else {
            console.log('Error')
        }
    };

    render() {

        const {foundVideos} = this.props;

        return (
            <div className="wrapper-video">
                <form onSubmit={this.addValue} data-test-id="increment">
                    <div className="input-group mb-3 search-input">
                        <input type='text' name="video" className="form-control" aria-describedby="button-addon2"/>
                        < button className="btn btn-outline-secondary" id="button-addon2"> Search</button>
                    </div>
                </form>
                <div className="text-resultValue">{foundVideos}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        foundVideos: state.found_videos.foundVideos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFoundVideosList (foundVideos) {
            dispatch(getFoundVideosListAC (foundVideos))
        }
    }
};

const FoundVideoConnect = connect(mapStateToProps, mapDispatchToProps)(FoundVideo)
export default withRouter(FoundVideoConnect)
