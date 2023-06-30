import { Component } from "../core/core";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/Movielist";
import MovielistMore from "../components/MovielistMore";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const movielistMore = new MovielistMore().el;

    this.el.classList.add("container");
    this.el.append(headline, search, movieList, movielistMore);
  }
}
