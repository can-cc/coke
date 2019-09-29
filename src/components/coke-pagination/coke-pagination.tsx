import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'coke-pagination',
  styleUrl: 'coke-pagination.css',
  shadow: true
})
export class CokePagination {
  /**
   * The first name
   */
  @Prop() totoal: number;

  /**
   * The middle name
   */
  @Prop() pageSize: number;

  /**
   * The last name
   */

  private getText(): string {
    return 'hi';
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
