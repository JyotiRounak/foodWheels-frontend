import sum from "../../sum";

test("sum compoent", ()=>{
    const result = sum(10,2);
    expect(result).toBe(12);
});