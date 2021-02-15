import { timesTwo} from "./functions"


test("Mutliplies by 2", () => {
    expect(timesTwo(4)).toBe(8);
})