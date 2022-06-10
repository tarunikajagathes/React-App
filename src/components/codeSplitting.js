import { add } from "./math.js";

console.log(add(16, 26));

// This creates a bundle
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(16, 26));

// To reduce this we can use code-spliting since large bundles will reduce speed


import("./math").then(math => {
    console.log(math.add(16, 26));
  });

//   React.lazy
const mathComponent = React.lazy(() => import('./math'));

// import React, { Suspense } from 'react';

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
