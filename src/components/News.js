import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "../css/main.css";

export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fc8eaac95fb8492fb03297c640b838e5";
    const data = await fetch(url);
    const parsedata = await data.json();
    // console.log(parsedata);
    this.setState({ articles: parsedata.articles });
  }
  render() {
    // console.log("hii i am render ");

    return (
      <>
        <div className="main">
          <h2 className="header text-center ">NewStar- Top News Heading!!!</h2>

          <div className="row">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-3" key={e.url}>
                  <Newsitem
                    title={e.title ? e.title.slice(0, 40) : ""}
                    disc={e.description ? e.description.slice(0, 70) : ""}
                    imgurl={e.urlToImage}
                    url={e.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
