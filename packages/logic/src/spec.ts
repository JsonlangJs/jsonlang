import { LogicRules } from './index';

describe('rule/logical', () => {
  describe('LogicRules.and', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true if all values are true', () => {
      const results = logicRules.and(true, true);

      expect(results).toEqual(true);
    });

    it('Should Success To get true if all values are not false, null or 0', () => {
      const results = logicRules.and(true, 1, {}, 'Test', new Date());

      expect(results).toEqual(true);
    });

    it('Should Success To get false if one of values are false', () => {
      const results = logicRules.and(true, false);

      expect(results).toEqual(false);
    });

    it('Should Success To get false if one of values are false, null or 0', () => {
      const results = logicRules.and(true, 0, {}, 'Test', new Date());

      expect(results).toEqual(false);
    });
  });

  describe('LogicRules.or', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true if of one values are true', () => {
      const results = logicRules.or(true, true);

      expect(results).toEqual(true);
    });

    it('Should Success To get true if of one values are not false, null or 0', () => {
      const results = logicRules.or('Test', 0, null);

      expect(results).toEqual(true);
    });

    it('Should Success To get false if all values are false, null or 0', () => {
      const results = logicRules.and(0, false);

      expect(results).toEqual(false);
    });
  });

  describe('LogicRules.not', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get false of true value', () => {
      const results = logicRules.not(true);

      expect(results).toEqual(false);
    });

    it('Should Success To get false of false value', () => {
      const results = logicRules.not(false);

      expect(results).toEqual(true);
    });
  });

  describe('LogicRules.equal', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true of two same values and in same type', () => {
      const result1 = logicRules.equal(false, false);
      const result2 = logicRules.equal(5, 5);
      const result3 = logicRules.equal("Test 123", "Test 123");
      const result4 = logicRules.equal({"t": 1, "b": "test"}, {"t": 1, "b": "test"});

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
      expect(result3).toEqual(true);
      expect(result4).toEqual(true);
    });

    it('Should Success To get false of two different values but in same type', () => {
      const result1 = logicRules.equal(false, true);
      const result2 = logicRules.equal(5, 6);
      const result3 = logicRules.equal("Test 123", "Test 1235");
      const result4 = logicRules.equal({"t": 1, "b": "test"}, {"t": 2, "b": "test"});

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
    });

    it('Should Success To get true of two same values but in different type', () => {
      const result1 = logicRules.equal('false', false);
      const result2 = logicRules.equal(true, 'true');

      const result3 = logicRules.equal('11', 11);
      const result4 = logicRules.equal(12, '12');

      const result5 = logicRules.equal('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicRules.equal({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
      expect(result3).toEqual(true);
      expect(result4).toEqual(true);
      expect(result5).toEqual(true);
      expect(result6).toEqual(true);
    });
  });

  describe('LogicRules.notEqual', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get false of two same values and in same type', () => {
      const result1 = logicRules.notEqual(false, false);
      const result2 = logicRules.notEqual(5, 5);
      const result3 = logicRules.notEqual("Test 123", "Test 123");
      const result4 = logicRules.notEqual({"t": 1, "b": "test"}, {"t": 1, "b": "test"});

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
    });

    it('Should Success To get true of two different values but in same type', () => {
      const result1 = logicRules.notEqual(false, true);
      const result2 = logicRules.notEqual(5, 6);
      const result3 = logicRules.notEqual("Test 123", "Test 1235");
      const result4 = logicRules.notEqual({"t": 1, "b": "test"}, {"t": 2, "b": "test"});

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
      expect(result3).toEqual(true);
      expect(result4).toEqual(true);
    });

    it('Should Success To get false of two same values but in different type', () => {
      const result1 = logicRules.notEqual('false', false);
      const result2 = logicRules.notEqual(true, 'true');

      const result3 = logicRules.notEqual('11', 11);
      const result4 = logicRules.notEqual(12, '12');

      const result5 = logicRules.notEqual('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicRules.notEqual({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
      expect(result5).toEqual(false);
      expect(result6).toEqual(false);
    });
  });

  describe('LogicRules.greaterThan', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicRules.greaterThan(6, 5);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicRules.greaterThan(1, 5);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicRules.greaterThan(7, 7);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two non-numeric values,', () => {
      const result1 = logicRules.greaterThan('false', false);
      const result2 = logicRules.greaterThan(true, 'true');

      const result3 = logicRules.greaterThan('11', 11);
      const result4 = logicRules.greaterThan(12, '12');

      const result5 = logicRules.greaterThan('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicRules.greaterThan({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
      expect(result5).toEqual(false);
      expect(result6).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicRules.greaterThan('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicRules.greaterThan('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });

  describe('LogicRules.lessThan', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicRules.lessThan(3, 100);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicRules.lessThan(5, -1);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicRules.lessThan(-8, -8);

      expect(result).toEqual(false);
    });

    it('Should Success To get false of two non-numeric values,', () => {
      const result1 = logicRules.lessThan('false', false);
      const result2 = logicRules.lessThan(true, 'true');

      const result3 = logicRules.lessThan('11', 11);
      const result4 = logicRules.lessThan(12, '12');

      const result5 = logicRules.lessThan('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result6 = logicRules.lessThan({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
      expect(result3).toEqual(false);
      expect(result4).toEqual(false);
      expect(result5).toEqual(false);
      expect(result6).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicRules.lessThan('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicRules.lessThan('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });

  describe('LogicRules.greaterThanOrEqual', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicRules.greaterThanOrEqual(6, 5);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicRules.greaterThanOrEqual(1, 5);

      expect(result).toEqual(false);
    });

    it('Should Success To get true of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicRules.greaterThanOrEqual(7, 7);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two objects values', () => {
      const result1 = logicRules.greaterThanOrEqual('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result2 = logicRules.greaterThanOrEqual({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicRules.greaterThanOrEqual('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicRules.greaterThanOrEqual('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });

  describe('LogicRules.lessThanOrEqual', () => {
    const logicRules: any = new LogicRules();

    it('Should Success To get true of two numbers, 1st one is less than the 2nd one', () => {
      const result = logicRules.lessThanOrEqual(3, 100);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two numbers, 1st one is greater than the 2nd one', () => {
      const result = logicRules.lessThanOrEqual(5, -1);

      expect(result).toEqual(false);
    });

    it('Should Success To get true of two numbers, 1st one is equal to the 2nd one', () => {
      const result = logicRules.lessThanOrEqual(-8, -8);

      expect(result).toEqual(true);
    });

    it('Should Success To get false of two objects values', () => {
      const result1 = logicRules.lessThanOrEqual('{\"t\":1,\"b"\:\"test\"}', {"t": 1, "b": "test"});
      const result2 = logicRules.lessThanOrEqual({"t": 1, "b": "test"}, '{\"t\":1,\"b"\:\"test\"}');

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });

    it('Should Success To get false of two non-parsable strings', () => {
      const result1 = logicRules.lessThanOrEqual('{\"t\":1,\"b"\:\"test}', 'test');
      const result2 = logicRules.lessThanOrEqual('{\"t\":1,\"b"\:\"test}', 1);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });
  });
});


