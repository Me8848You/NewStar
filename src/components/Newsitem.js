import React, { Component } from "react";
import "../css/card.css";
import "../img/car.jpg";

// const {title, disc, imgurl } = this.props;
// console.log(this.props);

export class Newsitem extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <img src={this.props.imgurl?this.props.imgurl:"https://static.toiimg.com/thumb/msid-100559745,imgsize-694254,width-400,resizemode-4/100559745.jpg" } alt="Soon..." />
            <div className="box">
              <div className="content">
                {/* <span className="heading">{this.props.count}</span> */}
                <span className="content"> {this.props.title} </span>
                <p className="p">{this.props.disc}...</p>

                <a href={this.props.url} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
