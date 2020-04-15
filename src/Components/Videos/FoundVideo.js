import React, {PureComponent} from "react";
import "./Videos.css";
import axios from "axios";
import SearchInput from "./SearchInput";
import {withRouter} from "react-router-dom";
import style from "../Weather/Weather.module.css";

class FoundVideo extends PureComponent {

    state = {
        addedValue: "",
        resultValue: "",
    };

    onChangedValue = (e) => {
        this.setState({addedValue: e.currentTarget.value});
    };

    addValue = () => {

      // e.preventDefault();
      //       const foundVideo = e.target.elements.video.value;
      //       if (foundVideo) {
      //           let API_KEY = "AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs";
      //           axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${foundVideo}&type=video&videoDefinition=any&key=${API_KEY}`)
      //               .then(res=>{
      //                   console.log(res.data)
      //               })
      //       } else {
      //           console.log('error')
      //       }
        this.setState({resultValue:this.state.addedValue,addedValue: ''});
    };

    // qaz(e) {
    //     debugger
    //   //  this.setState({resultValue:this.state.addedValue,addedValue: ''});
    //     let API_KEY = "AIzaSyA1ekIAkTGCDSz_MdhqrskiiL7LuhQxYqs";
    //     let qwe = this.state.addedValue
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${qwe}&type=video&videoDefinition=any&key=${API_KEY}`)
    //         .then(res => {
    //             console.log(res.data);
    //
    //            res.data.items.map(item => {
    //                 let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
    //                 let text = item.snippet.title.replace(/&quot;/g, " ");
    //                 return <div className="wrapper-found-video" key={item.index}>
    //                     <li className="title-found-video">
    //                         <div className="wrapper-frame-video"><span> {text} </span></div>
    //                         {/*<iframe width="300" height="200" src={urlImage} frameBorder="0" title="myFrameVideo"></iframe>*/}
    //                     </li>
    //                 </div>
    //             })
    //
    //         });
    // }

    render() {

        const {resultValue,addedValue} = this.state;
        const {addValue,onChangedValue} = this;

        return (

            <div className="wrapper-video">

        {/*<form onSubmit={this.addValue} data-test-id="increment">*/}
        {/*    <input type='text' name="video" />*/}
        {/*    < button > Search </button>*/}
        {/*</form>*/}

                <div className="input-group mb-3 search-input" >
                    <input type="text" className="form-control" aria-describedby="button-addon2"
                           onChange={onChangedValue} value={addedValue} />
                    <div className="input-group-append">
                        <button  className="btn btn-outline-secondary" type="button" id="button-addon2"
                                 onClick={addValue} > Search </button>
                    </div>
                </div>

                <div >
                    <select className="sort-videos">
                        <option selected>Sort by...</option>
                        <option>Name</option>
                    </select>
                </div>

            <div className="text-resultValue">{resultValue}</div>
            </div>
        );
    }
};

export default withRouter  (FoundVideo)

