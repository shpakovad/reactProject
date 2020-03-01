import React, {Component} from 'react';
import style from "./Weather.module.css";

class City extends Component {
    //
    // state={
    //     city:''
    // };
    //
    // addInfo = ()=>{
    //     this.props.selectCity(this.state.city)
    //     this.setState({title:''})
    // };
    //
    // onChangedInputValue=(e)=>{
    //     this.setState({city: e.currentTarget.value})
    // };

    render() {

        return (
            <div >
            {/*    <input type='text' className={style.searchCity} placeholder='Enter City'*/}
            {/*           value={this.state.city}*/}
            {/*           onChange={this.onChangedInputValue}*/}
            {/*    />*/}
            {/*    <button onClick={this.addInfo}  >Search</button>*/}
            {/*<div >*/}
            {/*  city:{this.props.name}*/}
            {/*</div>*/}
            </div>
        );
    }
}

export default City;
