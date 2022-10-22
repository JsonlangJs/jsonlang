import { LogicalRules, ArrayRules, MathRules, ObjectRules } from './index';

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
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To get the result of all passed values', () => {
      const results = arrayRules.all(true, false, 1, 'test', 0);
  
      expect(results).toEqual([true, false, 1, 'test', 0]);
    });
  });

  describe('ArrayRules.flatten', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To get the result of flatten array with the given level', () => {
      const results = arrayRules.flatten([1, [{"key": 2}, [{"key": 3}]]], 2);
  
      expect(results).toEqual([1, {"key": 2}, {"key": 3}]);
    });

    it('Should Success To get the result of [] if the values are not array', () => {
      const results = arrayRules.flatten(1, 1);
  
      expect(results).toEqual([]);
    });
  });

  describe('ArrayRules.filter', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To get the result of filtering all inputs based on a given role', () => {
      const runner = (e:any) => (rule: any) => e > rule.$I[0];
      const results = arrayRules.filter([1,2,3,5], { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual([3,5]);
    });

    it('Should Success To get the result of [] if the inputs are not an array', () => {
      const runner = (e:any) => (rule: any) => e > rule.$I[0];
      const results = arrayRules.filter({'key': [1,2,3,5]}, { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual([]);
    });
  });

  describe('ArrayRules.foreach', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To iterate and get the result of True if the inputs are array', () => {
      const runner = (e:any) => (rule: any) => e > rule.$I[0];
      const results = arrayRules.foreach([1,2,3,5], { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual(true);
    });

    it('Should Success To get the result of false if the inputs are not an array', () => {
      const runner = (e:any) => (rule: any) => e > rule.$I[0];
      const results = arrayRules.foreach({'key': [1,2,3,5]}, { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual(false);
    });
  });

  describe('ArrayRules.map', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To get the result of map all inputs based on a given role', () => {
      const runner = (e:any) => (rule: any) => e * rule.$I[0];
      const results = arrayRules.map([1,2,3,5], { $R: '*', $I: [2] }, runner);

      expect(results).toEqual([2, 4, 6, 10]);
    });

    it('Should Success To get the result of [] if the inputs are not an array', () => {
      const runner = (e:any) => (rule: any) => e > rule.$I[0];
      const results = arrayRules.map({'key': [1,2,3,5]}, { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual([]);
    });
  });
});

describe('rule/math', () => {
  describe('MathRules.isNumber', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of true if all values are numbers', () => {
      const results = mathRules.isNumber([1,2,3,4,5]);
  
      expect(results).toEqual(true);
    });

    it('Should Success To get the result of false if one of values are not number', () => {
      const results = mathRules.isNumber([1,'2',{'data': {}}, [3,4],5,6]);
  
      expect(results).toEqual(false);
    });
  });

  describe('MathRules.sum', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of all values summation', () => {
      const results = mathRules.sum(1,2,3,4,5);
  
      expect(results).toEqual(15);
    });

    it('Should Success To get the result 0 if one of the values are not number', () => {
      const results = mathRules.sum(1,2,'3',4,5);
  
      expect(results).toEqual(0);
    });
  });

  describe('MathRules.subtract', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of all values subtraction', () => {
      const results = mathRules.subtract(500,200,50, 20);
  
      expect(results).toEqual(230);
    });

    it('Should Success To get the result 0 if one of the values are not number', () => {
      const results = mathRules.subtract(1,2,'3',4,5);
  
      expect(results).toEqual(0);
    });
  });

  describe('MathRules.multiply', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of all values multiplication', () => {
      const results = mathRules.multiply(1,2,3,4);
  
      expect(results).toEqual(24);
    });

    it('Should Success To get the result 0 if one of the values are not number', () => {
      const results = mathRules.multiply(1,2,'3',4,5);
  
      expect(results).toEqual(0);
    });
  });

  describe('MathRules.divide', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of all values division', () => {
      const results = mathRules.divide(500,50,5);
  
      expect(results).toEqual(2);
    });

    it('Should Success To get the result of 0 if one of the values contains 0', () => {
      const results = mathRules.divide(500,50,0);
  
      expect(results).toEqual(0);
    });

    it('Should Success To get the result 0 if one of the values are not number', () => {
      const results = mathRules.divide(1,2,'3',4,5);
  
      expect(results).toEqual(0);
    });
  });

  describe('MathRules.min', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of the minimum value', () => {
      const results = mathRules.min(500,700,200);
  
      expect(results).toEqual(200);
    });

    it('Should Success To get the result 0 if one of the values are not number', () => {
      const results = mathRules.min(1,2,'3',4,5);
  
      expect(results).toEqual(null);
    });
  });

  describe('MathRules.max', () => {
    const mathRules: any = new MathRules();
  
    it('Should Success To get the result of the maximum value', () => {
      const results = mathRules.max(500, 700, 200);
  
      expect(results).toEqual(700);
    });

    it('Should Success To get the result null if one of the values are not number', () => {
      const results = mathRules.max(1,2,'3',4,5);
  
      expect(results).toEqual(null);
    });
  });

  

});

describe('rule/objects', () => {
  describe('ObjectRules.get', () => {
    const objectRules: any = new ObjectRules();
  
    it('Should Success To get the result of the passed path of an object', () => {
   
      const results = objectRules.get('job', 'invalidPath', {job: "Footballer"});
  
      expect(results).toEqual('Footballer');
    });

    it('Should Success To get the default value if the path are not valid', () => {
   
      const results = objectRules.get('name', 'invalidPath', {job: "Footballer"});
  
      expect(results).toEqual('invalidPath');
    });
  });
});

