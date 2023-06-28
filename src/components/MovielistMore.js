import { Component } from "../core/core";
import movieStore, { searchMovies } from "../store/movie";

export default class MovielistMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "더 보기";

    this.el.addEventListener("click", async () => {
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
