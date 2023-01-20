import { MathRules } from './index';

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


