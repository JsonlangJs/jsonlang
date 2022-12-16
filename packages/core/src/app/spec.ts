import { JsonLang } from './app';

describe('app/app', () => {
  describe('JsonLang.execute', () => {
    const jsonLang = new JsonLang();

    it('Should Success To Execute Simple Rules', () => {
      const results = jsonLang.execute( { "$R": "LessThan" , "$I": [10, 20] } );

      expect(results).toEqual(true);
    });

    it('Should Success To Execute Simple Shortcut Rules', () => {
      const results = jsonLang.execute( { "$R": "<" , "$I": [10, 20] } );

      expect(results).toEqual(true)
    });

    it('Should Success To Execute Complex/Nested Rules', () => {

      const result = jsonLang.execute({ 
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
          { $R: 'Var', $I: ['x'] },
          { $R: 'Get', $I: ['user.age', null, { $R: 'Data', $I: [] }] }
        ]
      }, { user: { name: 'test', age: 100 } });
      
      expect(result).toEqual(136);
    });

    it('Should Success To get true if the condition is true', () => {
      const results = jsonLang.execute({ $R: 'If', $I: [true, true, false] });

      expect(results).toEqual(true);
    });

    it('Should Success To get true if the condition is false', () => {
      const results = jsonLang.execute({ $R: 'If', $I: [false, true, false] });

      expect(results).toEqual(false);
    });

    it('Should Success To get true if the condition is succeeded', () => {
      const results = jsonLang.execute({ $R: 'If', $I: [{ $R: '&&', $I: [true, { $R: '||', $I: [0, 1] }] }, { $R: '+', $I: [6, 1, 2] }, { $R: '-', $I: [6, 1, 2] }]});

      expect(results).toEqual(9);
    });

    it('Should Success To get true if the condition is succeeded', () => {
      const results = jsonLang.execute({ $R: 'If', $I: [{ $R: '==', $I: [true, { $R: '&&', $I: [0, 1] }] }, { $R: '+', $I: [6, 1, 2] }, { $R: '-', $I: [6, 1, 2] }]});

      expect(results).toEqual(3);
    });

    it('Should Failed To Execute non existing Rules', () => {
      expect(() => jsonLang.execute( { "$R": "NotExisting" , "$I": [1] } )).toThrowError('The \"NotExisting\" Rule is not exist');
    });

    it('Should Failed To Execute cause of non existing Output', () => {
      expect(() => jsonLang.execute( { "$R": "Var" , "$I": ["NotExisting"] } )).toThrowError('The \"NotExisting\" output value is not exist');
    });

    it('Should Failed To Execute cause of non existing Data', () => {
      expect(() => jsonLang.execute( { "$R": "Data" , "$I": [] } )).toThrowError('There is no data passed');
    });
  });

  describe('JsonLang.executeAsync', () => {
    const jsonLang = new JsonLang();

    it('Should Success To Execute Simple Rules', async () => {
      const results = jsonLang.executeAsync( { "$R": "LessThan" , "$I": [10, 20] } );

      await expect(results).resolves.toEqual(true);
    });

    it('Should Success To Execute Simple Shortcut Rules', async () => {
      const results = jsonLang.executeAsync( { "$R": "<" , "$I": [10, 20] } );

      await expect(results).resolves.toEqual(true);
    });

    it('Should Success To Execute Complex/Nested Rules', async () => {
      const result = jsonLang.executeAsync({ 
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
          { $R: 'Var', $I: ['x'] },
          { $R: 'Get', $I: ['user.age', null, { $R: 'Data', $I: [] }] }
        ]
      }, { user: { name: 'test', age: 100 } });
      
      await expect(result).resolves.toEqual(136);
    });

    it('Should Failed To Execute non existing Rules', async () => {
      await expect(jsonLang.executeAsync( { "$R": "NotExisting" , "$I": [1] } )).rejects.toThrowError('The \"NotExisting\" Rule is not exist');
    });

    it('Should Failed To Execute cause of non existing Output', async () => {
      expect(jsonLang.executeAsync( { "$R": "Var" , "$I": ["NotExisting"] } )).rejects.toThrowError('The \"NotExisting\" output value is not exist');
    });

    it('Should Failed To Execute cause of non existing Data', () => {
      expect(() => jsonLang.execute( { "$R": "Data" , "$I": [] } )).toThrowError('There is no data passed');
    });
  });

  describe('JsonLang.registerOne', () => {
    const jsonLang = new JsonLang();

    it('Should Success in registerOne Rule', () => {
      jsonLang.registerOne({ name: 'Test', shortcut: 't' }, (input: any) => {
        return `${input} Test`
      })
      
      const result = jsonLang.execute({ 
        $R: 'Test',
        $I: [
          { $R: 'Get', $I: ['user.age', null, { $R: 'Data', $I: [] }] }
        ]
      }, { user: { name: 'test', age: 100 } });
      
      expect(result).toEqual('100 Test');
    });

    it('Should Failed To Execute Async Rule cause of Promise Rejection', async () => {
      jsonLang.registerOne({ name: 'Validate', shortcut: 'v' }, async (input: any) => {
        return new Promise((resolve, reject) => {
          if (input) resolve(1);
          else reject(0);
        });
      })

      await expect(jsonLang.executeAsync({ $R: 'v', $I: [] })).rejects.toThrowError('Failed to Run \"v\" cause of 0');
    });
  });

  describe('JsonLang.registerMany', () => {
    const jsonLang = new JsonLang();

    it('Should Success in registerMany Rule', () => {

      const rules = new Map([
        [{ name: 'Hello', shortcut: 'Hi' }, (input: any) => { return `Hello JsonLang in ${input}` }],
        [{ name: 'Year' }, () => { return new Date().getFullYear().toString()  }]
      ]);

      jsonLang.registerMany(rules);
      
      const result = jsonLang.execute({ 
        $R: 'Hi',
        $I: [ { $R: 'Year', $I: [] } ]
      });
      
      expect(result).toEqual(`Hello JsonLang in ${new Date().getFullYear().toString()}`);
    });
  });

  describe('JsonLang.getRulesIds', () => {
    const jsonLang = new JsonLang();

    it('Should Success to get rules Ids', () => {
      expect(jsonLang.getRulesIds().length).toBeGreaterThan(0);
    });
  });

});