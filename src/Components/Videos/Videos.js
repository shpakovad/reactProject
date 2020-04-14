import React, {PureComponent} from "react";
import "./Videos.css";
import axios from "axios";
import FoundVideo from "./FoundVideo";
import SearchInput from "./SearchInput";

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
    // getPopularVideos = (id) =>{
    //     this.setState({idPopularVideos:id})
    // };

    onChangedValue = (e) => {
        this.setState({addedValue: e.currentTarget.value});
    };
    addValue = () => {
        this.setState({resultValue: this.state.addedValue, addedValue: ''})
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addValue()
        }
    };

    componentDidMount() {
        let API_KEY = "AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs";
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=${API_KEY}`,
            {withCredentials: true})
            .then(res => {
                console.log(res);
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

        const {onChangedValue, addValue, onKeyPress} = this;
         const {addedValue, resultValue,titlePopularVideos, popularVideos} = this.state;

        return (

                    <div className="wrapper-video">

                        <SearchInput addValue={addValue}  onChangedValue={onChangedValue} onKeyPress={onKeyPress} addedValue={addedValue}  />

                        { resultValue === '' ? <>
                                <div className="text-popular"> Popular:</div>

                                { !titlePopularVideos && !popularVideos &&
                                <div className="spinner-border text-danger spinner-place" role="status"></div>
                                 }

                                    <div className="videos">
                                        <div>{titlePopularVideos} </div>
                                        <div>{popularVideos}</div>
                                    </div>
                            </>
                            :
                            <FoundVideo resultValue={resultValue}/>
                        }
                    </div>
        );
    }
};

export default Videos

