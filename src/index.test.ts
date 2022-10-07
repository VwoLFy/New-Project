import {sqrt} from "./func1";

let a = 7;
describe("tests", () => {
    it('For test', () => {
        expect(a).toBe(7);
    });

    it('For test sqrt', () => {
        expect(sqrt(49)).toBe(7);
    });
})