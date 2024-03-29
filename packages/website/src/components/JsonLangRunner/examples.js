export default function getExample(exampleNum) {
  const examples = [
    [`{
      "$R": "+",
      "$I": [{
        "$R": "+",
        "$I": [1, { "$R": "*", "$I": [2, 3] }, 5]
      }, {
        "$R": "+",
        "$I": [1, { "$R": "*", "$I": [3, 3, 7], "$O": "x" }, 6, 7]
      }, {
        "$R": "Data",
        "$I": ["x", "Internal"]
      }, {
        "$R": "Get",
        "$I": ["user.age", null, { "$R": "Data", "$I": ["*", "External"] }]
      }]
}`, `{ 
  "user": {
    "name": "test",
    "age": 100
  } 
}`],
[
`{ 
  "$R": "All", 
  "$I": [
    { "$R": "+", "$I": [1, 2], "$O": "y" },
    { "$R": "Data", "$I": ["y", "Internal"] }
  ] 
}
`,
`
{}
`
],
[
`{ 
  "$R": "Data",
  "$I": ["*", "External"] 
}
`,
`{
  "name": { 
    "first": "Cristiano",
    "last": "Ronaldo"
  },
  "job": "Footballer" 
}
`
],
[
`{ 
  "$R": "Sum",
  "$I": [3, 4, 6]
}
`,
`{}
`
],
[
`{ 
  "$R": "-",
  "$I": [3, 4, 6]
}
`,
`{}
`
],
[
`{ 
  "$R": "Multiply",
  "$I": [3, 4, 6]
}
`,
`{}
`
],
[
`{ 
  "$R": "/",
  "$I": [50, 5, 20]
}
`,
`{}
`
],
[
`{ 
  "$R": "And",
  "$I": [true, true, false]
}
`,
`{}
`
],
[
`{ 
  "$R": "||",
  "$I": [true, false, true, true]
}
`,
`{}
`
],
[
`{ 
  "$R": "Equal",
  "$I": ["x", "x"]
}
`,
`{}
`
],
[
`{ 
  "$R": "!=",
  "$I": ["x", "y"]
}
`,
`{}
`
],
[
`{ 
  "$R": "Not",
  "$I": [true]
}
`,
`{}
`
],
[
`{ 
  "$R": ">",
  "$I": [31, 4]
}
`,
`{}
`
],
[
`{ 
  "$R": "<",
  "$I": [41, 9]
}
`,
`{}
`
],
[
`{ 
  "$R": ">=",
  "$I": [9, 9]
}
`,
`{}
`
],
[
`{ 
  "$R": "<=",
  "$I": [8, 9]
}
`,
`{}
`
],
[
`{ 
  "$R": "Get",
  "$I": [
    "name.last",
    "Unknown Name",
    { "$R": "Data", "$I": ["*", "External"] }
  ]
}
`,
`{
  "name": { 
    "first": "Cristiano",
    "last": "Ronaldo"
  },
  "job": "Footballer" 
}
`
],
[
`{ 
  "$R": "All", 
  "$I": [
    { "$R": "+", "$I": [1, 3, 5] },
    { "$R": "-", "$I": [5, 3] }
  ] 
}
`,
`{}`
],
[
`{ 
  "$R": "Filter", 
  "$I": [
    [1, 3, 5],
    "i",
    { 
      "$R": ">",
      "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2] 
    }
  ]
}
`,
`{}`
],
[
`{ 
  "$R": "Map", 
  "$I": [
    [1, 3, 5],
    "i",
    { 
      "$R": "+",
      "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2]
    }
  ]
}
`,
`{}`
],
[
`{ 
  "$R": "Foreach", 
  "$I": [
    [1, 3, 5],
    "i",
    {
      "$R": "+",
      "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2]
    }
  ]
}
`,
`{}`
],
[
`{ 
  "$R": "Flatten", 
  "$I": [
    [[[1, 3, 1], [33, 6, 3]], [33, 6, 66, 654]],
    2
  ]
}
`,
`{}`
],
[
`{
  "$R": "<" ,
  "$I": [10, 20]
}`,
`{}`
],
[
`{ 
  "$R": "All", "$I": [
    { 
      "$R": "Filter",
      "$I": [
        [1, 3, 5],
        "i",
        { 
          "$R": ">",
          "$I": [{ "$R": "Data", "$I": ["i", "Internal"] }, 2]
        }
      ]
    },
    { 
      "$R": "Filter",
      "$I": [
        { 
          "$R": "Get",
          "$I": [
            "data.test",
            null,
            { "$R": "Data", "$I": ["*", "External"] }
          ]
        },
        "k",
        {
          "$R": "<",
          "$I": [{ "$R": "Data", "$I": ["k", "Internal"] }, 500]
        }
      ]
    }
  ] 
}
`,
`
{ 
  "data": { 
    "id": "test",
    "test": [100, 300, 700]
  } 
}
`
],
[
`{ 
  "$R": "Test",
  "$I": [
    { 
      "$R": "Get",
      "$I": ["user.age", null, { "$R": "Data", "$I": ["*", "External"] }]
    }
  ]
}
`,
`{
  "user": { 
    "name": "test",
    "age": 100
  }
}`
],
[
`{ 
  "$R": "If",
  "$I": [
    { 
      "$R": ">",
      "$I": [
        {
          "$R": "Data",
          "$I": ["age", "External"]
        },
        3
      ]
    },
    { 
      "$R": "If",
      "$I": [0, "Failed", "Success"]
    },
    false
  ]
}

`,
`{ 
  "name": "test",
  "age": 100
}`
],
[
`{ 
  "$R": "ArrayConcat",
  "$I": [[3, 5], [3, 7]]
}

`,
`{}`
],
[
`{ 
  "$R": "ArrayUnique",
  "$I": [3, 5, 3, 7, 1, 1]
}
`,
`{}`
]
];

  return examples[exampleNum-1];
}
