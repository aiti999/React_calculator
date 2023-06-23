import React, {Component} from 'react';


class Result extends Component{
    render(){
        return(
          <div className='middle'>
        <div className="result" >
          <p>{this.props.result}</p>
        </div>
        </div>
        );
    }
}
export default Result;