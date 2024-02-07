import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    country: "in",
    category: "general",
  };

  

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
    document.title = `News Slash - ${(this.props.category[0]).toUpperCase() + this.props.category.slice(1)}`;
  }

  // async componentDidMount() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06ea853b3b1f4df88d72933a456d75f9&page=1&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     article: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading:false
  //   });
  //   console.log(this.state.totalResults);
  // }

  async componentDidMount() {
    await this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      await this.fetchNews();
    }
  }

  async fetchNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06ea853b3b1f4df88d72933a456d75f9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrev = async () => {
    console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06ea853b3b1f4df88d72933a456d75f9&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ article: parsedData.articles });
    // this.setState({
    //   page: this.state.page - 1,
    //   article: parsedData.articles,
    //   loading:false
    // });
    this.setState({ page: this.state.page + 1 });
    this.fetchNews();
  };

  handleNext = async () => {
    console.log("Next");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06ea853b3b1f4df88d72933a456d75f9&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ article: parsedData.articles });
    // this.setState({
    //   page: this.state.page + 1,
    //   article: parsedData.articles,
    //   loading:false
    // });
    this.setState({ page: this.state.page - 1 });
    this.fetchNews();
  };

  render() {
    return (
      <div className="container my-3">
        <div className="text-center" style={{ margin: "35px 0px" }}>
          <h2>News Slash - Top {(this.props.category[0]).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        </div>
        {this.state.loading && <Loader />}
        <div className="row">
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col-md-4 gy-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title !== null
                        ? element.title.slice(0, 45)
                        : element.title
                    }
                    description={
                      element.description !== null
                        ? element.description.slice(0, 88)
                        : element.description
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page === 1}
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
