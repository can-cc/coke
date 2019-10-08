import { newE2EPage } from "@stencil/core/testing";

describe("pagintaion", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<coke-pagination></coke-pagination>");
    const element = await page.find("coke-pagination");
    expect(element).toHaveClass("hydrated");
  });

  it("renders forward and backward buttons", async () => {
    const page = await newE2EPage();

    await page.setContent("<coke-pagination></coke-pagination>");

    const backwardButton = await page.find(
      "coke-pagination >>> .pagintation--backward"
    );
    expect(backwardButton).toBeDefined();

    const forwardButton = await page.find(
      "coke-pagination >>> .pagintation--forward"
    );
    expect(forwardButton).toBeDefined();
  });

  it("renders correctly pages buttons", async () => {
    const page = await newE2EPage();

    await page.setContent(
      '<coke-pagination pagesize="10" currentpage="2" total="89"></coke-pagination>'
    );

    const pageButtons = await page.findAll(
      "coke-pagination >>> .pagintation--page-button"
    );
    expect(pageButtons.length).toEqual(9);

    const activeButton = await page.find(
      "coke-pagination >>> .pagintation--page-button.active"
    );
    expect(activeButton.innerText).toEqual("3");
  });
});
