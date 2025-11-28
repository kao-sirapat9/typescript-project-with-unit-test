import { describe, it, expect } from "vitest";
import { merge } from "../src/merge";

describe("merge()", () => {
    it("should merge correctly", () => {
        const c1 =[1,3,5];
        const c2 =[9,7,4];
        const c3 =[2,6,8,10];

        const result = merge(c1, c2, c3);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});