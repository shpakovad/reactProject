import React, {PureComponent} from "react";
import "./Videos.css";
import {NavLink} from "react-router-dom";
import {getPopularVideosListTh} from "../../redux/reducers/videosReducer";
import {connect} from "react-redux";


class Videos extends PureComponent {

    componentDidMount() {
        this.props.getPopularVideosList(this.props.popularVideos)
    }

    render() {

        const {popularVideos} = this.props;
        console.log(popularVideos);
        return (
            <div className="wrapper-video">
                <NavLink to="/videos_found" className="btn btn-outline-secondary search-btn" type="button"
                         id="button-addon2"> Search Videos </NavLink>
                <div className="text-popular"> Popular:</div>

                {!popularVideos &&
                <div className="spinner-border text-danger spinner-place" role="status"></div>
                }

                <div className="videos">
                    <div>{popularVideos}</div>
                </div>

            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        popularVideos: state.videos.popularVideos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularVideosList(popularVideos) {
            dispatch(getPopularVideosListTh(popularVideos))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos)
