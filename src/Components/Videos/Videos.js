import React, {PureComponent} from "react";
import "./Videos.css";
import {NavLink} from "react-router-dom";
import {getPopularVideosListTh} from "../../redux/reducers/videosReducer";
import {connect} from "react-redux";


class Videos extends PureComponent {

    state={
        sortType: 'asc',
        selectedValue: 'All',
        key: '',
        track: "",
        filterValue: "All",
    };
    onSort = (sortType, key) => {
        this.setState({
            sortType,
            key
        })
    };
    // onSort=()=>{
    //     alert('bzn')
    // }

    componentDidMount() {
        this.props.getPopularVideosList(this.props.popularVideos)
    }

    render() {

        const {popularVideos} = this.props;

        let sorted = popularVideos.sort((a, b) => {
            let isReversed = (this.state.sortType === 'asc') ? 1 : -1;
            switch (this.state.key) {
                case 'views':
                    return isReversed * a.props.views.localeCompare(b.props.views);
                case 'like':
                    return isReversed * a.videoItem.props.like.localeCompare(b.videoItem.props.like);
                case 'dislike':
                    return isReversed * a.props.dislike.localeCompare(b.props.dislike);
            }
        });

        return (
            <div className="wrapper-video">
                <form className="sortForm" onSubmit={sorted}>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" >
                                <option selected>Sort by...</option>
                                <option value="1">Date</option>
                                <option onClick={()=>{this.onSort('desc','views')}} >Views</option>
                                <option value="3">Like</option>
                                <option value="3">Dislike</option>
                            </select>
                        </div>
                    </div>
                </form>


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
                                               dislike={videoItem.props.dislike}/>
                        })}
                    </div>


            </div>
            </div>
        );
    }
}

const VideosItem = (props) => {

    return (
        <li className="title-popular-video">
            <div className="wrapper-title-video"><span> {props.title} </span></div>
            <iframe width="300" height="200" src={props.src} frameBorder="0" title="myFrame"></iframe>
            <div className="views"> views: {props.views} </div>
            <div className="statistics">
                <div> like: {props.like}  </div>
                <div> dislike: {props.dislike}  </div>
            </div>
        </li>
    )
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
