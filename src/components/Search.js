import { Component } from "../core/core";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input placeholder="영화 제목을 검색하세요!"/>
      <button class="btn btn-primary">검색!</button>
    `;

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      //
    });

    inputEl.addEventListener("keydown", () => {});

    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {});
  }
}
