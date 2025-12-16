import { describe, it, expect } from "vitest";
import { retrieveNumbersFromSearch } from "../utils/SearchUtils";

describe("Search.retrieveNumbersFromSearch", () => {
  it("returns a single number when one exists", () => {
    expect(retrieveNumbersFromSearch("Season 2")).toEqual(["2"]);
  });

  it("returns multiple numbers when more than one exists", () => {
    expect(retrieveNumbersFromSearch("Season 2 Episode 5")).toEqual(["2", "5"]);
  });

  it("extracts numbers mixed with letters", () => {
    expect(retrieveNumbersFromSearch("Season2Episode5")).toEqual([
      "2",
      "5",
    ]);
  });

  it("returns an empty array when no numbers are found", () => {
    expect(retrieveNumbersFromSearch("SeasonEpisode")).toEqual([]);
  });
});
