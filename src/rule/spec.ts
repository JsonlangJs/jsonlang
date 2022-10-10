import { LogicalRules, ArrayRules } from './index';

describe('rule/logical', () => {
  describe('LogicalRules.and', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true if all values are true', () => {
      const results = logicalRules.and(true, true);

      expect(results).toEqual(true);
    });

    it('Should Success To get true if all values are not false, null or 0', () => {
      const results = logicalRules.and(true, 1, {}, 'Test', new Date());

      expect(results).toEqual(true);
    });

    it('Should Success To get false if one of values are false', () => {
      const results = logicalRules.and(true, false);

      expect(results).toEqual(false);
    });

    it('Should Success To get false if one of values are false, null or 0', () => {
      const results = logicalRules.and(true, 0, {}, 'Test', new Date());

      expect(results).toEqual(false);
    });
  });

  describe('LogicalRules.or', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true if of one values are true', () => {
      const results = logicalRules.or(true, true);

      expect(results).toEqual(true);
    });

    it('Should Success To get true if of one values are not false, null or 0', () => {
      const results = logicalRules.or('Test', 0, null);

      expect(results).toEqual(true);
    });

    it('Should Success To get false if all values are false, null or 0', () => {
      const results = logicalRules.and(0, false);

      expect(results).toEqual(false);
    });
  });

  describe('LogicalRules.not', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get false of true value', () => {
      const results = logicalRules.not(true);

      expect(results).toEqual(false);
    });

    it('Should Success To get false of false value', () => {
      const results = logicalRules.not(false);

      expect(results).toEqual(true);
    });
  });

  describe('LogicalRules.equal', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true of two same values and in same type', () => {
      const result1 = logicalRules.equal(false, false);
      const result2 = logicalRules.equal(5, 5);
      const result3 = logicalRules.equal("Test 123", "Test 123");
      const result4 = logicalRules.equal({"t": 1, "b": "test"}, {"t": 1, "b": "test"});

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
      expect(result3).toEqual(true);
      expect(result4).toEqual(true);
    });

    it('Should Success To get false of two different values but in same type', () => {
      const result1 = logicalRules.equal(false, true);
      const result2 = logicalRules.equal(5, 6);
      const result3 = logicalRules.equal("Test 123", "Test 1235");
      const result4 = logicalRules.equal({"t": 1, "b": "test"}, {"t": 2, "b": "test"});

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
    });

    it('Should Success To get true of two same values but in different type', () => {
      const result1 = logicalRules.equal('false', false);
      const result2 = logicalRules.equal(true, 'true');

      const result3 = logicalRules.equal('11', 11);
      const result4 = logicalRules.equal(12, '12');

      const result5 = logicalRules.equal('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicalRules.equal({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
      expect(result3).toEqual(true);
      expect(result4).toEqual(true);
      expect(result5).toEqual(true);
      expect(result6).toEqual(true);
    });
  });

  describe('LogicalRules.notEqual', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get false of two same values and in same type', () => {
      const result1 = logicalRules.notEqual(false, false);
      const result2 = logicalRules.notEqual(5, 5);
      const result3 = logicalRules.notEqual("Test 123", "Test 123");
      const result4 = logicalRules.notEqual({"t": 1, "b": "test"}, {"t": 1, "b": "test"});

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
    });

    it('Should Success To get true of two different values but in same type', () => {
      const result1 = logicalRules.notEqual(false, true);
      const result2 = logicalRules.notEqual(5, 6);
      const result3 = logicalRules.notEqual("Test 123", "Test 1235");
      const result4 = logicalRules.notEqual({"t": 1, "b": "test"}, {"t": 2, "b": "test"});

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
      expect(result3).toEqual(true);
      expect(result4).toEqual(true);
    });

    it('Should Success To get false of two same values but in different type', () => {
      const result1 = logicalRules.notEqual('false', false);
      const result2 = logicalRules.notEqual(true, 'true');

      const result3 = logicalRules.notEqual('11', 11);
      const result4 = logicalRules.notEqual(12, '12');

      const result5 = logicalRules.notEqual('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicalRules.notEqual({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
      expect(result5).toEqual(false);
      expect(result6).toEqual(false);
    });
  });

  describe('LogicalRules.greaterThan', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicalRules.greaterThan(6, 5);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicalRules.greaterThan(1, 5);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicalRules.greaterThan(7, 7);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two non-numeric values,', () => {
      const result1 = logicalRules.greaterThan('false', false);
      const result2 = logicalRules.greaterThan(true, 'true');

      const result3 = logicalRules.greaterThan('11', 11);
      const result4 = logicalRules.greaterThan(12, '12');

      const result5 = logicalRules.greaterThan('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicalRules.greaterThan({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
      expect(result5).toEqual(false);
      expect(result6).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicalRules.greaterThan('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicalRules.greaterThan('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });

  describe('LogicalRules.lessThan', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicalRules.lessThan(3, 100);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicalRules.lessThan(5, -1);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicalRules.lessThan(-8, -8);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two non-numeric values,', () => {
      const result1 = logicalRules.lessThan('false', false);
      const result2 = logicalRules.lessThan(true, 'true');

      const result3 = logicalRules.lessThan('11', 11);
      const result4 = logicalRules.lessThan(12, '12');

      const result5 = logicalRules.lessThan('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicalRules.lessThan({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
      expect(result5).toEqual(false);
      expect(result6).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicalRules.lessThan('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicalRules.lessThan('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });

  describe('LogicalRules.greaterThanOrEqual', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicalRules.greaterThanOrEqual(6, 5);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicalRules.greaterThanOrEqual(1, 5);

      expect(result).toEqual(false);
    });

    it('Should Success To get true of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicalRules.greaterThanOrEqual(7, 7);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two objects values', () => {
      const result1 = logicalRules.greaterThanOrEqual('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result2 = logicalRules.greaterThanOrEqual({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicalRules.greaterThanOrEqual('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicalRules.greaterThanOrEqual('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });

  describe('LogicalRules.lessThanOrEqual', () => {
    const logicalRules: any = new LogicalRules();

    it('Should Success To get true of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicalRules.lessThanOrEqual(3, 100);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicalRules.lessThanOrEqual(5, -1);

      expect(result).toEqual(false);
    });

    it('Should Success To get true of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicalRules.lessThanOrEqual(-8, -8);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two objects values', () => {
      const result1 = logicalRules.lessThanOrEqual('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result2 = logicalRules.lessThanOrEqual({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicalRules.lessThanOrEqual('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicalRules.lessThanOrEqual('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });
});

describe('rule/array', () => {
  describe('ArrayRules.all', () => {
    const logicalRules: any = new ArrayRules();
  
    it('Should Success To get the result of all passed values', () => {
      const results = logicalRules.all(true, false, 1, 'test', 0);
  
      expect(results).toEqual([true, false, 1, 'test', 0]);
    });
  });
});
