const PeekIterator = require("../common/PeekIterrator");
const arrayToGenerator = require("../common/arrayToGenerator");
const { describe, it } = require("mocha")

const { assert } = require("chai");

describe("test PeekIterator", () => {
  it("test_peek", () => {
    const it = new PeekIterator(arrayToGenerator([..."abcdefg"]));
    assert.equal(it.next(), "a");
    assert.equal(it.next(), "b");
    assert.equal(it.next(), "c");
    assert.equal(it.next(), "d");
    assert.equal(it.next(), "e");
    assert.equal(it.next(), "f");
    assert.equal(it.next(), "g");
  });
});
