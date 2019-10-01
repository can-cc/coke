import { Component, Prop, h, Event, EventEmitter, State } from "@stencil/core";

@Component({
  tag: "coke-pagination",
  styleUrl: "coke-pagination.css",
  shadow: true
})
export class CokePagination {
  @Prop() total!: number;

  @Prop() pageSize!: number;

  @Prop() currentPage!: number;

  @Event() pageChanged: EventEmitter;

  private onButtonClick(event: Event, targetPageNumber: number): void {
    event.preventDefault();
    event.stopPropagation();
    if (
      targetPageNumber < 1 ||
      targetPageNumber > Math.ceil(this.total / this.pageSize)
    ) {
      throw new Error("out of pagination range");
    }
    this.pageChanged.emit(targetPageNumber);
  }

  private renderPageButtons(): Array<HTMLButtonElement> {
    const pageNumber = Math.ceil(this.total / this.pageSize);
    let buttons = [];
    for (let i = 0; i < pageNumber; i++) {
      buttons.push(
        <button
          class={
            this.currentPage === i
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
          onClick={event => this.onButtonClick(event, this.currentPage - 1)}
        >
          前
        </button>
        {this.renderPageButtons()}
        <button
          class="pagintation--forward"
          onClick={event => this.onButtonClick(event, this.currentPage + 1)}
        >
          后
        </button>
      </div>
    );
  }
}
