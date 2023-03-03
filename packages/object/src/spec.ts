import { ObjectRules } from './index';


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

  describe('ObjectRules.set', () => {
    const objectRules: any = new ObjectRules();
  
    it('Should Success To get the result of true if successfully set property to object', () => {
   
      const results = objectRules.set('job.name', 'Footballer', { user: { name: 'test', age: 100 } });
  
      expect(results).toEqual(true);
    });
  });

  describe('ObjectRules.update', () => {
    const objectRules: any = new ObjectRules();
  
    it('Should Success To get the result true if the object is update', () => {
   
      const results = objectRules.update('job.name', 'Doctor', { name: 'test', age: 100, job: {name: 'Footballer'} });
  
      expect(results).toEqual(true);
    });

    it('Should Success To get the result of false if the path are not exist', () => {
   
      const results = objectRules.update('name', 'Doctor', {job: "Footballer"});
  
      expect(results).toEqual(false);
    });
  });

  describe('ObjectRules.delete', () => {
    const objectRules: any = new ObjectRules();
  
    it('Should Success To get the result of true if the property deleted from the oject', () => {
   
      const results = objectRules.delete('job.name', { name: 'test', age: 100, job: {name: 'Footballer'} });
  
      expect(results).toEqual(true);
    });

    it('Should Success To get the result of false if the path are not exist', () => {
   
      const results = objectRules.delete('name', {job: "Footballer"});
  
      expect(results).toEqual(false);
    });
  });
});

