import React from 'react';
import Layout from '@theme/Layout';
import JsonLangRunner from '@site/src/components/JsonLangRunner';


export default function Playground() {
  return ([
    <Layout title="Playground" description="Playground" key="playground">
      <JsonLangRunner example="1" height="70vh" key="playgroundRunner"></JsonLangRunner>
    </Layout>
  ]);
}



