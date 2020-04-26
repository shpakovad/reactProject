import React, {PureComponent} from "react";
import "./Videos.css";
import {NavLink} from "react-router-dom";
import {getPopularVideosListTh, sortedVideoAC} from "../../redux/reducers/videosReducer";
import {connect} from "react-redux";


class Videos extends PureComponent {

    onSort = (key) => {
        this.props.sortedVideo(key)
    };

    componentDidMount() {
        this.props.getPopularVideosList(this.props.popularVideos)
    }

    render() {

        const {popularVideos} = this.props;

        let sorted = popularVideos.sort((a, b) => {
            switch (this._reactInternalFiber.key) {
                case 'views':
                    return (b.props.views) - (a.props.views);
                case 'like':
                    return (b.props.like) - (a.props.like);
                case 'dislike':
                    return (b.props.dislike) - (a.props.dislike);
            }
        });

        return (
            <div className="wrapper-video">
                <SortedBlock onSort={this.onSort}/>

                <NavLink to="/videos_found" className="btn btn-outline-secondary search-btn" type="button"
                         id="button-addon2"> Search Videos </NavLink>
                <div className="text-popular"> Popular:</div>

                {!popularVideos &&
                <div className="spinner-border text-danger spinner-place" role="status"></div>
                }

                <div className="videos">
                    <div className="item-wrapper">
                        {popularVideos.map((videoItem, index) => {
                            return <VideosItem key={index} title={videoItem.props.title} src={videoItem.props.urlImage}
                                               views={videoItem.props.views} like={videoItem.props.like}
                                               dislike={videoItem.props.dislike} sorted={sorted}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const SortedBlock = (props) => {

    const {onSort} = props;

    return (
        <div className="sorted-block">
            <span className="sorted-title">Sort by: </span>
            <button type="button" className="btn btn-outline-dark"
                    onClick={() => {
                        onSort('views')
                    }}>Views
            </button>
            <button type="button" className="btn btn-outline-dark"
                    onClick={() => {
                        onSort('like')
                    }}>Like
            </button>
            <button type="button" className="btn btn-outline-dark"
                    onClick={() => {
                        onSort('dislike')
                    }}>Dislike
            </button>
        </div>
    )
};

const VideosItem = (props) => {

    return (
        <li className="title-popular-video">
            <div className="wrapper-title-video"><span> {props.title} </span></div>
            <iframe width="300" height="200" src={props.src} frameBorder="0" title="myFrame"></iframe>
            <div className="views"> views: {props.views.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}  </div>
            <div className="statistics">
                <div> like: {props.like.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}  </div>
                <div> dislike: {props.dislike.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}  </div>
            </div>
        </li>
    )
};

const mapStateToProps = (state) => {
    return {
        popularVideos: state.videos.popularVideos,
        key: state.videos.key,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularVideosList(popularVideos) {
            dispatch(getPopularVideosListTh(popularVideos))
        },
        sortedVideo(key) {
            dispatch(sortedVideoAC(key))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
