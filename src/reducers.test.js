import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";
import * as reducers from "./reducers";

describe("search Robotes", () => {
  const INITIAL_STATE = {
    searchField: "",
  };
  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle search field", () => {
    expect(
      reducers.searchRobots(INITIAL_STATE, {
        type: CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const INITIAL_STATE = {
    robots: [],
    isPending: true,
  };
  it("", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle Request robots pending action", () => {
    expect(
      reducers.requestRobots(INITIAL_STATE, REQUEST_ROBOTS_PENDING)
    ).toEqual(INITIAL_STATE);
  });
  it("should handle Request robots pending action", () => {
    expect(
      reducers.requestRobots(INITIAL_STATE, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [1, 2, 3, 5],
      })
    ).toEqual({
      robots: [1, 2, 3, 5],
      isPending: false,
    });
  });
});
