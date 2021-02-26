test(`check title contains wip`, () => {
    expect("WIP: Add feature into Details/Specs".includes("WIP:")).toBe(true)
})

test(`check title doesn't contains wip`, () => {
    expect("Add feature into Details/Specs".includes("WIP:")).toBe(false)
})