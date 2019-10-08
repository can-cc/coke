import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "coke-pagination",
  styleUrl: "coke-pagination.css",
  shadow: true
})
export class CokePagination {
  @Prop() total: number;

  @Prop() pagesize: number;

  @Prop() currentpage: number;

  @Event() pageChanged: EventEmitter;

  private onButtonClick(event: Event, targetPageNumber: number): void {
    event.preventDefault();
    event.stopPropagation();
    if (
      targetPageNumber < 1 ||
      targetPageNumber > Math.ceil(this.total / this.pagesize)
    ) {
      throw new Error("out of pagination range");
    }
    this.pageChanged.emit(targetPageNumber);
  }

  private renderPageButtons(): Array<HTMLButtonElement> {
    const pageNumber = Math.ceil(this.total / this.pagesize);
    let buttons = [];
    for (let i = 0; i < pageNumber; i++) {
      buttons.push(
        <button
          class={
            this.currentpage === i
              ? "active pagintation--page-button"
              : "pagintation--page-button"
          }
          onClick={event => this.onButtonClick(event, i)}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  }

  render() {
    return (
      <div>
        <button
          class="pagintation--backward"
          onClick={event => this.onButtonClick(event, this.currentpage - 1)}
        >
          前
        </button>
        {this.renderPageButtons()}
        <button
          class="pagintation--forward"
          onClick={event => this.onButtonClick(event, this.currentpage + 1)}
        >
          后
        </button>
      </div>
    );
  }
}
