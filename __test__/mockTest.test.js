/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import { getLevel } from "../src/main.js";
import fetchData from "../src/http.js";


jest.mock('../src/http.js');

beforeEach(() => {
    jest.resetAllMocks();
    });

  test("должен вызвать fetchData", () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel (150)
    expect(fetchData).toBeCalledWith('https://server/user/150');
  }  )

  test("должен вызвать fetchData", () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel (1)
    expect(fetchData).toBeCalledWith('https://server/user/1');
  }  )

  test("должен вызвать fetchData", () => {
    fetchData.mockReturnValue(JSON.stringify({}));
    getLevel ()
    expect(fetchData).toBeCalledWith("https://server/user/undefined");
  }  )
