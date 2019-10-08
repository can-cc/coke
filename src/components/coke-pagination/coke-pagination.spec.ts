import { CokePagination } from "./coke-pagination";

it("should onPageChanged correclty on pagation component", async () => {
  const pagintaion = new CokePagination();

  pagintaion.pagesize = 10;
  pagintaion.total = 90;
  pagintaion.currentpage = 1;

  const changedSpy = jest.fn();
  pagintaion.pageChanged = {
    emit: changedSpy
  };
  (<any>pagintaion).onButtonClick(
    {
      preventDefault: () => {},
      stopPropagation: () => {}
    },
    3
  );
  expect(changedSpy).toHaveBeenCalledWith(3);
});
