import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "../css/main.css";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fc8eaac95fb8492fb03297c640b838e5&pagesize=12";
    const data = await fetch(url);
    const parsedata = await data.json();
    // console.log(parsedata);
    this.setState({ articles: parsedata.articles });
  }

  handleNext = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fc8eaac95fb8492fb03297c640b838e5&pagesize=12&page=${
      this.state.page + 1
    }`;
    const data = await fetch(url);
    const parsedata = await data.json();
    this.setState({ articles: parsedata.articles, page: this.state.page + 1 });
  };

  handlePrev = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fc8eaac95fb8492fb03297c640b838e5&pagesize=12&page=${
      this.state.page - 1
    }`;
    const data = await fetch(url);
    const parsedata = await data.json();
    this.setState({ articles: parsedata.articles, page: this.state.page - 1 });
  };

  // -------------------------
  render() {
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
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-info m-3"
              onClick={this.handlePrev}
            >
              &laquo; Previous
            </button>
            <button type="button" className="btn btn-danger m-3">
              &#8249;Happy Face, Happy Reader&#8250;
            </button>
            <button
              type="button"
              className="btn btn-warning m-3"
              onClick={this.handleNext}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
