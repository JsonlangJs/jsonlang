import { JsonLang } from './app';

describe('app/app', () => {
  describe('JsonLang.execute', () => {
    const jsonLang = new JsonLang();

    it('Should Success To Execute Simple Rules', async () => {
      const results = jsonLang.execute( { "$R": "LessThan" , "$I": [10, 20] } );

      await expect(results).resolves.toEqual(true);
    });

    it('Should Success To Execute Simple Shortcut Rules', async () => {
      const results = jsonLang.execute( { "$R": "<" , "$I": [10, 20] } );

      await expect(results).resolves.toEqual(true)
    });

    it('Should Success To Execute Complex/Nested Rules', async () => {

      const results = jsonLang.execute({ 
        $R: '+',
        $I: [
          {
            $R: '+',
            $I: [
              1,
              { $R: '*', $I: [2, 3] },
              5
            ]
          },
          {
            $R: '+',
            $I: [
              1,
              { $R: '*', $I: [3, 3], $O: 'x' },
              5
            ]
          },
          { $R: 'Data', $I: ['x', 'Internal'] },
          { $R: 'Get', $I: ['user.age', null, { $R: 'Data', $I: ['*', 'External'] }] }
        ]
      }, { user: { name: 'test', age: 100 } });
      
      await expect(results).resolves.toEqual(136);
    });

    it('Should Success To get true if the condition is true', async () => {
      const results = jsonLang.execute({ $R: 'If', $I: [true, true, false] });

      await expect(results).resolves.toEqual(true);
    });

    it('Should Success To get true if the condition is false', async () => {
      const results = jsonLang.execute({ $R: 'If', $I: [false, true, false] });

      await expect(results).resolves.toEqual(false);
    });

    it('Should Success To get true if the condition is succeeded', async () => {
      const results = jsonLang.execute({ $R: 'If', $I: [{ $R: '&&', $I: [true, { $R: '||', $I: [0, 1] }] }, { $R: '+', $I: [6, 1, 2] }, { $R: '-', $I: [6, 1, 2] }]});

      await expect(results).resolves.toEqual(9);
    });

    it('Should Success To get true if the condition is succeeded', async () => {
      const results = jsonLang.execute({ $R: 'If', $I: [{ $R: '==', $I: [true, { $R: '&&', $I: [0, 1] }] }, { $R: '+', $I: [6, 1, 2] }, { $R: '-', $I: [6, 1, 2] }]});

      await expect(results).resolves.toEqual(3);
    });

    it('Should Failed To Execute non existing Rules', async () => {
      expect(jsonLang.execute( { "$R": "NotExisting" , "$I": [1] } )).rejects.toThrowError('The \"NotExisting\" Rule is not exist');
    });

    it('Should Failed To Execute cause of non existing Output', async () => {
      expect(jsonLang.execute( { $R: 'Data', $I: ['NotExisting', 'Internal'] } )).resolves.toEqual(null);
    });
  });

  describe('JsonLang.registerOne', () => {
    const jsonLang = new JsonLang();

    it('Should Success in registerOne Rule', async () => {
      jsonLang.registerOne({ identifier: { name: 'Test', shortcut: 't' } }, async (input: any) => {
        return `${input} Test`
      })
      
      const result = await jsonLang.execute({ 
        $R: 'Test',
        $I: [
          { $R: 'Get', $I: ['user.age', null, { $R: 'Data', $I: ['*', 'External'] } ] }
        ]
      }, { user: { name: 'test', age: 100 } });
      
      expect(result).toEqual('100 Test');
    });
  });

  describe('JsonLang.registerMany', () => {
    const jsonLang = new JsonLang();

    it('Should Success in registerMany Rule', async () => {

      const rules = new Map([
        [{ identifier: { name: 'Hello', shortcut: 'Hi' } }, async (input: any) => { return `Hello JsonLang in ${input}` }],
        [{ identifier: { name: 'Year' } }, async () => { return new Date().getFullYear().toString()  }]
      ]);

      jsonLang.registerMany(rules);
      
      const result = jsonLang.execute({ 
        $R: 'Hi',
        $I: [ { $R: 'Year', $I: [] } ]
      });
      
      await expect(result).resolves.toEqual(`Hello JsonLang in ${new Date().getFullYear().toString()}`);
    });
  });

  describe('JsonLang.getRulesDefinitions', () => {
    const jsonLang = new JsonLang();

    it('Should Success to get rules definitions', () => {
      expect(jsonLang.getRulesDefinitions().length).toBeGreaterThan(0);
    });
  });

});