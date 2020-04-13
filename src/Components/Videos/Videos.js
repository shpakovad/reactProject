import React, {Component} from 'react';
import './Videos.css';
import axios from 'axios';
import {NavLink, Route} from "react-router-dom";
import FoundVideo from "./FoundVideo";

 class Videos extends Component {
// AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs
     state={
         addedValue:'',
         resultValue:'',
         titlePopularVideos:'',
         popularVideos:null,
     };
     getTitlePopularVideos = (title,video) =>{
    this.setState({titlePopularVideos:title,popularVideos:video})
};
     // getPopularVideos = (id) =>{
     //     this.setState({idPopularVideos:id})
     // };

onChangedValue=(e)=>{
    this.setState({addedValue:e.currentTarget.value});
};
addValue = () =>{
     this.setState({resultValue:this.state.addedValue,addedValue:''})
};

onKeyPress=(e)=>{
    if(e.key==='Enter') {
       this.addValue()
    }
};
componentDidMount() {
    let API_KEY = 'AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs';
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=${API_KEY}`,
        {withCredentials:true} )
        .then(res=>{
            console.log(res);
            console.log(res.data.items);
            this.getTitlePopularVideos(res.data.items.map(item=>{
                let urlImage=`https://www.youtube.com/embed/${item.id}?controls=2`;
                return <div className="news-item-wrapper" key={item.id}>
                    <li className="title-popular-video" > <div className="wrapper-title-video"> <span> {item.snippet.title} </span> </div>
               <iframe width="300" height="200" src={urlImage} frameBorder="0" title="myFrame"> </iframe>
                </li>
                </div>
            }))
        })
}


     render() {

        const {onChangedValue,addValue,onKeyPress}=this;

        return (
            <div className="wrapper-video">

                <div className="input-group mb-3 search-input">
                    <input type="text" className="form-control" aria-describedby="button-addon2"  onChange={onChangedValue}
                           onKeyPress={onKeyPress} value={this.state.addedValue} />
                    <div className="input-group-append">
                     <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addValue}>
                                Search
                     </button>

                    </div>
                </div>
                {this.state.resultValue === '' ?  <>
                <div className="text-popular"> Popular: </div>
                    <div className="videos">
                    <div>{this.state.titlePopularVideos} </div>
                        <div>{this.state.popularVideos}</div>
                    </div>
                </>
                :

                 <FoundVideo resultValue={this.state.resultValue}/>
                    }

                    {/*<div className="wrapper-categories">*/}
                    {/*<span>Video categories</span>*/}
                    {/*    <li> Films and animations </li>*/}
                    {/*<li>Transport</li>*/}
                    {/*<li>Music</li>*/}
                    {/*<li>Animals</li>*/}
                    {/*<li>Sport</li>*/}
                    {/*<li>Travels</li>*/}
                    {/*<li>Video games</li>*/}
                    {/*<li>Humor</li>*/}
                    {/*<li>Entertainment</li>*/}
                    {/*<li>Hobbies and style</li>*/}
                    {/*<li>Science and technology</li>*/}
                    {/*</div>*/}
            </div>
        );
    }
};

export default Videos

