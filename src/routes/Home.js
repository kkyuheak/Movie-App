import { Component } from "../core/core";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/Movielist";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;

    this.el.classList.add("container");
    this.el.append(headline, search, movieList);
  }
}
