import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {fetchWeather} from "../actions";
import CountrySelector from "../components/country_selector";

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          term : "",
          code : "US"
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        //fetch weather data
        // console.log("event data", event);

        this.props.fetchWeather(this.state.term, this.state.code);
        this.setState({term:"", code:"US"});
    }
    render() {

        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="col-md-4">
                    <CountrySelector/>
                </div>
                <div className="col-md-8">
                    <div className="input-group">
                        <input
                        value={this.state.term}
                        placeholder={"Get a Five-day forecast in your favorite cities"}
                        className={"form-control"}
                        onChange={this.onInputChange}
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="submit">Submit</button>
                        </span>
                    </div>
                </div>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);