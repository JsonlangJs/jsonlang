import { ArrayRules } from './array';

describe('rule/array', () => {
  describe('ArrayRules.seq', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To get the result of seq passed values', async () => {
      const runner = async () => true;

      const results = await arrayRules.seq([true, false, 1, 'test', 0], runner);
  
      expect(results).toEqual(true);
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
  
    it('Should Success To get the result of filtering all inputs based on a given role',async  () => {
      const runner = async (rule: any, data: any) => data.value > rule.$I[0];
      const results = await arrayRules.filter([1,2,3,5], 'i' , { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual([3,5]);
    });

    it('Should Success To get the result of [] if the inputs are not an array', async () => {
      const runner = async (rule: any, data: any) => data.value > rule.$I[0];
      const results = await arrayRules.filter({'key': [1,2,3,5]}, 'i', { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual([]);
    });
  });

  describe('ArrayRules.foreach', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To iterate and get the result of True if the inputs are array', async () => {
      const runner = async (rule: any, data: any) => data.value > rule.$I[0];
      const results = await arrayRules.foreach([1,2,3,5], 'i', { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual(true);
    });

    it('Should Success To get the result of false if the inputs are not an array', async () => {
      const runner = async (rule: any, data: any) => data.value > rule.$I[0];
      const results = await arrayRules.foreach({'key': [1,2,3,5]}, 'i', { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual(false);
    });
  });

  describe('ArrayRules.map', () => {
    const arrayRules: any = new ArrayRules();
  
    it('Should Success To get the result of map all inputs based on a given role', async () => {
      const runner = async (rule: any, data: any) => data.value * rule.$I[0];
      const results = await arrayRules.map([1,2,3,5], 'i', { $R: '*', $I: [2] }, runner);

      expect(results).toEqual([2, 4, 6, 10]);
    });

    it('Should Success To get the result of [] if the inputs are not an array', async () => {
      const runner = async (rule: any, data: any) => data.value > rule.$I[0];
      const results = await arrayRules.map({'key': [1,2,3,5]}, 'i', { $R: '>', $I: [2] }, runner);
  
      expect(results).toEqual([]);
    });
  });
});


