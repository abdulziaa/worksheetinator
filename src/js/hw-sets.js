const verticalEq = (eq, i, columns, mathSym, long, answerSpace) => `
  <td class="text-muted number text-right">${i + 1}.)</td>
  <td class="pb-5 pt-3">
    <div class="vert-equation">${eq.x}</div>
    <div class="vert-equation">${mathSym} ${eq.y}</div>
    <div class="vert-equation md" ${answerSpace ? `style="margin-bottom:${answerSpace}rem;"`:''}><input type="text" class="answer-input"/></div>
  </td>
  ${((i + 1) % columns) === 0 ? `</tr><tr${long ? ' class="long"' : ''}>` : ''}`
  /**
   * Solve:
   *         z
   * mathSym x
   *       ___
   */
  , verticalEqZX_ = (eq, i, columns, mathSym, long) => `
    <td class="text-muted number"><span class="mr-2">${i + 1}.)</span></td>
    <td class="pb-5">
      <div class="vert-equation">${eq.z}</div>
      <div class="vert-equation">${mathSym} ${eq.x}</div>
      <div class="vert-equation"><input type="text" class="answer-input"/></div>
    </td>
    ${((i + 1) % columns) === 0 ? `</tr><tr${long ? ' class="long"' : ''}>` : ''}`
  , horizontalEq = (eq, i, columns, mathSym) => `
    <td class="text-right text-nowrap">
      <span class="number">${i + 1}.)</span>${eq.x} ${mathSym} ${eq.y} =
    </td>
    <td class="answer"><input type="text" class="answer-input down"/></td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}`
  , wordproblem = (eq, i, columns, mathSym) => {
    const randomObject = objectsArray[rand(objectsArray.length)];
    const namenumbers = randomInts(3,namesArray.length)
    console.log("Name 1: ", namesArray[namenumbers[1]],". Name 2: ",namesArray[namenumbers[2]])
    console.log("X: ", eq.x," Y: ", eq.y)
    return `
    <td class="text-right" style="padding-bottom: 3.5rem;">
      <div class="col-12 text-left">${i + 1}.) <span>${namesArray[namenumbers[1]]} has ${eq.x} ${randomObject}. ${namesArray[namenumbers[2]]} has ${eq.y} ${randomObject}. How many ${randomObject} do they have in total?</span></div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}
    `;
  }
  , algebrawordproblem = (eq, i, columns, mathSym) => {
    const randomObject = objectsArray[rand(objectsArray.length)];
    const namenumbers = randomInts(3,namesArray.length)
    console.log("Name 1: ", namesArray[namenumbers[1]],". Name 2: ",namesArray[namenumbers[2]])
    console.log("X: ", eq.x," Y: ", eq.y)
    return `
    <td class="text-right" style="padding-bottom: 3.5rem;">
      <div class="col-12 text-left">${i + 1}.) <span>${namesArray[namenumbers[1]]} has ${eq.x} ${randomObject}. ${namesArray[namenumbers[2]]} has some ${randomObject}. They both have ${eq.z} ${randomObject} all together. How many ${randomObject} does ${namesArray[namenumbers[1]]} have?</span></div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}
    `;
  }
  , onestepalgebra = (eq, i, columns, mathSym) => {
    console.log("X: ", eq.x," Y: ", eq.y)
    return `
    <td class="text-right" style="padding-bottom: 3.5rem;">
      <div class="col-12 text-left">${i + 1}.) <span>${eq.x} ${mathSym} 𝑥 = ${eq.z}</span></div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}
    `;
  }
  , fractionsEq = (eq, i, columns, mathSym) => {
    console.log("X: ", eq.x," Y: ", eq.y)
    return `
    <td class="text-right" style="padding-bottom: 3.5rem;">
      <div class="col-12 text-left">
          ${i + 1}.)
          <table class="fraction" style="margin-left:0.3em;">
              <tr>
                  <td class="top">${eq.y}</td>
              </tr>
              <tr>
                  <td class="bottom">${eq.x}</td>
              </tr>
          </table>
          ${mathSym}
          <table class="fraction">
              <tr>
                  <td class="top">${eq.v}</td>
              </tr>
              <tr>
                  <td class="bottom">${eq.w}</td>
              </tr>
          </table>
      </div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}
    `;
  }
  , longDivEq = (eq, i, columns, longer) => `
    <td class="text-muted number"><span class="mr-2">${i + 1}.)</span></td>
    <td>
      <div class="row long-div${longer ? ' er' : ''}">
        <div class="col-4"></div>
        <div class="col-8 text-left"><input type="text" class="answer-input"/></div>
        <div class="col-4 long-div-divisor">${eq.x}</div>
        <div class="col-8 long-div-numerator">${eq.z}</div>
      </div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}`
  , visualMultiEq = (eq, i, columns, size = 6) => `
    <td class="text-muted number"><span class="mr-2">${i + 1}.)</span></td>
    <td>
      <table class="grid-tbl"><tbody>${repeat(`<tr>${repeat(`<td></td>`, size)}`, size)}</tbody></table>
      <div class="equation mt-2 mb-2">
        ${eq.x} &times; ${eq.y} = <input type="text" class="answer-input down"/>
      </div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr style="border-top: 3px dotted gray;">' : ''}`
  , multiAddEq = (eq, i, columns) => `
    <td class="text-muted number"><span class="mr-2">${i + 1}.)</span></td>
    <td>
      <div class="text-nowrap">
        ${repeat(`+ <input type="text" class="answer-input down"/>`, eq.y).substr(2)}
      </div>
      <div style="height: 15rem;"></div>
      <div class="equation mt-4 mb-2">
        ${eq.x} &times; ${eq.y} = <input type="text" class="answer-input down"/>
      </div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}`
  , multiAddEq2 = (eq, i, columns) => `
    <td class="text-muted number"><span class="mr-2">${i + 1}.)</span></td>
    <td>
      <div class="text-nowrap">
        ${repeat(`+ <input type="text" class="answer-input down"/>`, eq.y).substr(2)}
      </div>
      <div style="height: 30rem;"></div>
      <div class="equation mt-4 mb-2">
        ${eq.x} &times; ${eq.y} = <input type="text" class="answer-input down"/>
      </div>
    </td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}`
  /**
   * Solve:
   *   x mathSym ___ = y
   */
  , horizontalEqX_Y = (eq, i, columns, mathSym) => `
  <td><span class="text-muted mr-2 number">${i + 1}.)</span></td>
  <td class="text-right text-nowrap">
    ${eq.x} ${mathSym} <input type="text" class="answer-input down"/> =
    </td>
    <td class="answer">${eq.z}</td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}`
  /**
   * Solve:
   *   z mathSym x = ___
   */
  , horizontalEqZX_ = (eq, i, columns, mathSym) => `
  <td><span class="text-muted mr-2 number">${i + 1}.)</span></td>
  <td class="text-right text-nowrap">
    ${eq.z} ${mathSym} ${eq.x} =
      </td>
    <td class="answer"><input type="text" class="answer-input down"/></td>
    ${((i + 1) % columns) === 0 ? '</tr><tr>' : ''}`
;
const hwSets = {
  "addition": {
    title: "Addition 1-digit Equations", category: "Addition",
    count: 100, columns: 4,
    useAllPossible1Digit: true,
    xSize: 1, ySize: 1, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => horizontalEq(eq, i, columns, "+"),
  },
  "addition-but-harder": {
    title: "Addition 2-1-digit Equations", category: "Addition",
    count: 100, columns: 4,
    useAllPossible1Digit: true,
    xSize: 2, ySize: 1, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => horizontalEq(eq, i, columns, "+"),
  },
  // "addition-visual-1": {
  //   title: "Addition Visual Equations Level 1 (1-6)", category: "Addition",
  //   count: 10, columns: 1,
  //   xSize: .6, ySize: .6,
  //   mathSymbol: "+",
  //   outputFunc: (eq, i) => visualAddition(eq, i, 0, "+", randArr(countable)),
  // },
  // "addition-visual-2": {
  //   title: "Addition Visual Equations Level 2", category: "Addition",
  //   count: 10, columns: 1,
  //   xSize: 1, ySize: 1,
  //   mathSymbol: "+",
  //   outputFunc: (eq, i) => visualAddition(eq, i, 0, "+", randArr(countable)),
  // },
  "addition-find-addends": {
    title: "Addition Find Addend Equations", category: "Addition",
    count: 100, columns: 3,
    useAllPossible1Digit: true,
    xSize: 1, ySize: 1, mathSymbol: "+",
    outputFunc: (eq, i, columns) => horizontalEqX_Y(eq, i, columns, "+"),
  },
  "addition-2-1": {
    title: "Addition 2-1-digit Equations", category: "Addition",
    count: 100, columns: 4,
    xSize: 2, ySize: 1, mathSymbol: "+",
    outputFunc: (eq, i, columns) => verticalEq(eq, i, columns, "+"),
  },
  "addition-2-2": {
    title: "Addition 2-digit Equations", category: "Addition",
    count: 100, columns: 4,
    xSize: 2, ySize: 2, mathSymbol: "+",
    outputFunc: (eq, i, columns) => verticalEq(eq, i, columns, "+"),
  },
  "addition-3-2": {
    title: "Addition 4-2-digit Equations", category: "Addition",
    count: 100, columns: 4,
    xSize: 3, ySize: 2, mathSymbol: "+",
    outputFunc: (eq, i, columns) => verticalEq(eq, i, columns, "+"),
  },
  "addition-3-3": {
    title: "Addition 3-digit Equations", category: "Addition",
    count: 100, columns: 4, long: true,
    xSize: 3, ySize: 3, mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEq(eq, i, columns, "+", long),
  },
  "addition-4-3": {
    title: "Addition 4-3-digit Equations", category: "Addition",
    count: 100, columns: 4, long: true,
    xSize: 4, ySize: 3, mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEq(eq, i, columns, "+", long),
  },
  "addition-4-4": {
    title: "Addition 4-digit Equations", category: "Addition",
    count: 100, columns: 4, long: true,
    xSize: 4, ySize: 4, mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEq(eq, i, columns, "+", long),
  },
  "addition-5-4": {
    title: "Addition 5-4-digit Equations", category: "Addition",
    count: 100, columns: 4, long: true,
    xSize: 5, ySize: 4, mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEq(eq, i, columns, "+", long),
  },
  "addition-5-5": {
    title: "Addition 5-digit Equations", category: "Addition",
    count: 100, columns: 4, long: true,
    xSize: 5, ySize: 5, mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEq(eq, i, columns, "+", long),
  },
  "subtraction": {
    title: "Subtraction 1-digit Equations", category: "Subtraction",
    count: 100, columns: 4,
    xSize: 1, ySize: 1,
    useAllPossible1Digit: 1,
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => horizontalEqZX_(eq, i, columns, "-"),
    answerKey: eq => eq.y,
  },
  "subtraction-find-diff": {
    title: "Subtraction Find Difference 1-digit",
    category: "Subtraction",
    count: 100,
    columns: 3,
    xSize: 1,
    ySize: 1,
    mathSymbol: "-",
    outputFunc: (eq, i, columns) => horizontalEqX_Y(eq, i, columns, "-"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(1, 9); 
        let y = randRange(2, 10); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x - y }; 
    },
  },
  "subtraction-find-diff-2-1": {
    title: "Subtraction Find Difference 2-1-digit",
    category: "Subtraction",
    count: 100,
    columns: 3,
    xSize: 1,
    ySize: 1,
    mathSymbol: "-",
    outputFunc: (eq, i, columns) => horizontalEqX_Y(eq, i, columns, "-"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(1, 9); 
        let y = randRange(10, 25); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x - y }; 
    },
  },
  "subtraction-find-diff-2": {
    title: "Subtraction Find Difference 2-digit",
    category: "Subtraction",
    count: 100,
    columns: 3,
    xSize: 1,
    ySize: 1,
    mathSymbol: "-",
    outputFunc: (eq, i, columns) => horizontalEqX_Y(eq, i, columns, "-"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(10, 98); 
        let y = randRange(10, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x - y }; 
    },
  },
  "subtraction-2-1": {
    title: "Subtraction 2-1-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(1, 9); 
      let z = randRange(10, 99); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction 2-2": {
    title: "Subtraction 2-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(10, 99); 
      let z = randRange(10, 99); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction-3-2": {
    title: "Subtraction 3-2-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(10, 99); 
      let z = randRange(100, 999); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction-3-3": {
    title: "Subtraction 3-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(100, 999); 
      let z = randRange(100, 999); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction-4-3": {
    title: "Subtraction 4-3-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(100, 999); 
      let z = randRange(1000, 9999); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction-4-4": {
    title: "Subtraction 4-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(1000, 9999); 
      let z = randRange(1000, 9999); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction-5-4": {
    title: "Subtraction 5-4-digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(1000, 9999); 
      let z = randRange(10000, 99999); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  "subtraction-5-5": {
    title: "Subtraction 5 digit Equations", category: "Subtraction",
    count: 100, columns: 4, long: true,
    mathSymbol: "+",
    outputFunc: (eq, i, columns, long) => verticalEqZX_(eq, i, columns, "-", long),
    answerKey: eq => eq.y,
    myGenEq: () => {
      let x = randRange(10000, 99999); 
      let z = randRange(10000, 99999); 
      if (z < x) { 
          [z, x] = [x, z]; 
      }
      let y = z - x
      console.log(x)
      console.log(y)
      console.log(z)
      return {x, y, z}; 
  },
  },
  // "multiplication-vis-emoji": {
  //   title: "Muliplication Visual Emoji Equations", category: "Multiplication",
  //   count: 16, columns: 2,
  //   xSize: 1, ySize: 1,
  //   myGenEq: () => {
  //     const x = randArr([2,3,4]);
  //     const y = randArr([1,2,3,4,5]);
  //     const z = x * y;
  //     return { x, y, z };
  //   },
  //   outputFunc: (eq, i, columns) => visualEmojiMultiEq(eq, i, columns),
  // },
  // "multiplication-vis-1": {
  //   title: "Muliplication Visual Lvl 1 Equations", category: "Multiplication",
  //   count: 16, columns: 2,
  //   xSize: 1, ySize: 1,
  //   myGenEq: () => {
  //     const x = randArr([2,3,4,5,6]);
  //     const y = randArr([2,3,4,5,6]);
  //     const z = x * y;
  //     return { x, y, z };
  //   },
  //   outputFunc: (eq, i, columns) => visualMultiEq(eq, i, columns, 6),
  // },
  // "multiplication-vis-2": {
  //   title: "Muliplication Visual Lvl 2 Equations", category: "Multiplication",
  //   count: 16, columns: 2,
  //   xSize: 1, ySize: 1,
  //   outputFunc: (eq, i, columns) => visualMultiEq(eq, i, columns, 9),
  // },
  // "multiplication-add-1": {
  //   title: "Muliplication Add Equations 1", category: "Multiplication",
  //   count: 16, columns: 2,
  //   myGenEqList: () => {
  //     const xList = [6,7,8,9];
  //     const yList = [2,3,4,5];
  //     const eqList = [];
  //     xList.forEach(x => yList.forEach(y => eqList.push({x, y, z: x * y})));
  //     eqList.sort(() => Math.random() - 0.5); //shuffle
  //     eqList.sort(() => Math.random() - 0.5); //shuffle
  //     return eqList;
  //   },
  //   outputFunc: (eq, i, columns) => multiAddEq(eq, i, columns),
  // },
  // "multiplication-add-2": {
  //   title: "Muliplication Add Equations 2", category: "Multiplication",
  //   count: 16, columns: 2,
  //   myGenEqList: () => {
  //     const xList = [6,7,8,9];
  //     const yList = [6,7,8,9];
  //     const eqList = [];
  //     xList.forEach(x => yList.forEach(y => eqList.push({x, y, z: x * y})));
  //     eqList.sort(() => Math.random() - 0.5); //shuffle
  //     eqList.sort(() => Math.random() - 0.5); //shuffle
  //     return eqList;
  //   },
  //   outputFunc: (eq, i, columns) => multiAddEq2(eq, i, columns),
  // },
  "multiplication": {
    title: "Multiplication 1-digit Equations", category: "Multiplication",
    count: 100, columns: 4,
    xSize: 1, ySize: 1,
    useAllPossible1Digit: 1,
    mathSymbol: "*",
    outputFunc: (eq, i, columns) => horizontalEq(eq, i, columns, "&times;"),
  },
  "multiplication-find-multiple": {
    title: "Multiplication Find Multiple Equations", category: "Multiplication",
    count: 100, columns: 3,
    xSize: 1, ySize: 1,
    useAllPossible1Digit: 1,
    mathSymbol: "*",
    outputFunc: (eq, i, columns) => horizontalEqX_Y(eq, i, columns, "&times;"),
  },
  "multiplication-11-13": {
    title: "Multiplication 2 to 1-digit (11-14) Equations", category: "Multiplication",
    count: 100, columns: 3,
    mathSymbol: "*",
    myGenEq: () => {
      const x = randRange(11, 14);
      const y = randNoOnes();
      const z = x * y;
      return { x, y, z };
    },
    outputFunc: (eq, i, columns) => horizontalEq(eq, i, columns, "&times;"),
  },
  "multiplication-2-1": {
    title: "Muliplication 2 to 1-digit Equations", category: "Multiplication",
    count: 100, columns: 4,
    xSize: 2, ySize: 1,
    mathSymbol: "*",
    outputFunc: (eq, i, columns) => verticalEq(eq, i, columns, "&times;"),
  },
  "multiplication-2-2": {
    title: "Muliplication 2-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 6,
    xSize: 2, ySize: 2,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "multiplication-3-2": {
    title: "Muliplication 3 to 2-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 10,
    xSize: 3, ySize: 2,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "multiplication-3-3": {
    title: "Muliplication 3-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 10,
    xSize: 3, ySize: 3,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "multiplication-4-3": {
    title: "Muliplication 4 to 3-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 10,
    xSize: 4, ySize: 3,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "multiplication-4-4": {
    title: "Muliplication 4-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 10,
    xSize: 4, ySize: 4,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "multiplication-5-4": {
    title: "Muliplication 5 to 4-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 10,
    xSize: 5, ySize: 4,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "multiplication-5-5": {
    title: "Muliplication 5-digit Equations", category: "Multiplication",
    count: 100, columns: 4, long: true, answerSpace: 10,
    xSize: 5, ySize: 5,
    mathSymbol: "*",
    outputFunc: (eq, i, columns, long, answerSpace) => verticalEq(eq, i, columns, "&times;", long, answerSpace),
  },
  "division": {
    title: "Division 1-digit Equations", category: "Division",
    count: 100, columns: 4,
    xSize: 1, ySize: 1,
    useAllPossible1Digit: 1,
    mathSymbol: "*",
    outputFunc: (eq, i, columns) => horizontalEqZX_(eq, i, columns, "&divide;"),
    answerKey: eq => eq.y,
  },
  "division-box": {
    title: "Division Box Format Equations", category: "Division",
    count: 100, columns: 4,
    xSize: 1, ySize: 1,
    useAllPossible1Digit: 1,
    mathSymbol: "*",
    outputFunc: (eq, i, columns) => longDivEq(eq, i, columns),
    answerKey: eq => eq.y,
  },
  "division-box-remainders": {
    title: "Division Box Format w/Remainders Equations", category: "Division",
    count: 100, columns: 3,
    myGenEq: () => {
      const x = randNoOnes();
      const y = randNoOnes();
      const remainder = rand(x - 1) + 1;
      const z = (x * y) + remainder;
      return { x, y, z, remainder};
    },
    outputFunc: (eq, i, columns) => longDivEq(eq, i, columns),
    answerKey: eq => `${eq.y} r. ${eq.remainder}`,
  },
  "division-long": {
    title: "Long Division Equations", category: "Division",
    count: 100, columns: 3,
    myGenEq: () => {
      const x = randNoOnes();
      const y = randRangeByDigits(2);
      const z = x * y;
      return { x, y, z };
    },
    outputFunc: (eq, i, columns) => longDivEq(eq, i, columns),
    answerKey: eq => eq.y,
  },
  "division-longer": {
    title: "Longer Division Equations", category: "Division",
    count: 100, columns: 3,
    myGenEq: () => {
      const x = randNoOnes();
      const y = randRangeByDigits(3);
      const z = x * y;
      return { x, y, z };
    },
    outputFunc: (eq, i, columns) => longDivEq(eq, i, columns, true),
    answerKey: eq => eq.y,
  },
  "division-long-remainders": {
    title: "Long Division w/Remainders Equations", category: "Division",
    count: 100, columns: 3,
    myGenEq: () => {
      const x = randNoOnes();
      const y = randRangeByDigits(2);
      const remainder = rand(x - 1) + 1;
      const z = (x * y) + remainder;
      return { x, y, z, remainder};
    },
    outputFunc: (eq, i, columns) => longDivEq(eq, i, columns),
    answerKey: eq => `${eq.y} r. ${eq.remainder}`,
  },
  "division-longer-remainders": {
    title: "Longer Division w/Remainders Equations", category: "Division",
    count: 100, columns: 3,
    mathSymbol: "*",
    myGenEq: () => {
      const x = randNoOnes();
      const y = randRangeByDigits(3);
      const remainder = rand(x - 1) + 1;
      const z = (x * y) + remainder;
      return { x, y, z, remainder};
    },
    outputFunc: (eq, i, columns) => longDivEq(eq, i, columns, true),
    answerKey: eq => `${eq.y} r. ${eq.remainder}`,
  },
  "wp-addition-1digit": {
    title: "1-Digit Problem", category: "Addition Word Problems",
    count: 100, columns: 2,
    xSize: 1, ySize: 1, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => wordproblem(eq, i, columns, "+"),
    answerKey: eq => eq.z,
    myGenEq: () => {
        let x = randRange(1, 10); 
        let y = randRange(1, 10); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "wp-addition-2-1-digit": {
    title: "2-1-Digit Problem", category: "Addition Word Problems",
    count: 100, columns: 2,
    xSize: 2, ySize: 1, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => wordproblem(eq, i, columns, "+"),
    answerKey: eq => eq.z,
    myGenEq: () => {
        let x = randRange(10, 99); 
        let y = randRange(1, 10); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "wp-addition-2-digit": {
    title: "2-Digit Problem", category: "Addition Word Problems",
    count: 100, columns: 2,
    xSize: 2, ySize: 2, //number of digits in x & y.
    // comment so that i trigger github action
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => wordproblem(eq, i, columns, "+"),
    answerKey: eq => eq.z,
    myGenEq: () => {
        let x = randRange(10, 99); 
        let y = randRange(10, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "wp-addition-3-2-digit": {
    title: "3-2-Digit Problem", category: "Addition Word Problems",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => wordproblem(eq, i, columns, "+"),
    answerKey: eq => eq.z,
    myGenEq: () => {
        let x = randRange(100, 999); 
        let y = randRange(10, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "wp--missing-addition-3-2-digit": {
    title: "3-2-Digit Algebra Problem", category: "Addition Word Problems",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => algebrawordproblem(eq, i, columns, "+"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(100, 999); 
        let y = randRange(10, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "1stepaddition": {
    title: "1 Step Addition", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, "+"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(1, 99); 
        let y = randRange(1, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "1stepaddition2": {
    title: "1 Step Addition 2digit", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, "+"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(10, 99); 
        let y = randRange(10, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "1stepaddition2-3": {
    title: "1 Step 2-3digit", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, "+"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(10, 99); 
        let y = randRange(100, 999); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x + y }; 
    },
  },
  "1stepsubtraction": {
    title: "1 Step Subtraction", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, "-"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(1, 99); 
        let y = randRange(1, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x - y }; 
    },
  },
  "1stepsubtraction2": {
    title: "1 Step Subtraction 2digit", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, "-"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(10, 99); 
        let y = randRange(10, 99); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x - y }; 
    },
  },
  "1stepsubtraction2-3": {
    title: "1 Step Subtraction 2-3 digit", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "+",
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, "-"),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(10, 99); 
        let y = randRange(100, 999); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x - y }; 
    },
  },
  "1stepmultiplication": {
    title: "1 Step Multiplication", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "*",  
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, " ⋅ "),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(2, 12); 
        let y = randRange(2, 12); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x * y }; 
    },
  },
  "1stepmultiplicationharder": {
    title: "1 Step Multiplication (harder)", category: "Pre-Algebra",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "*",  
    outputFunc: (eq, i, columns) => onestepalgebra(eq, i, columns, " ⋅ "),
    answerKey: eq => eq.y,
    myGenEq: () => {
        let x = randRange(2, 20); 
        let y = randRange(2, 20); 
        if (x < y) { 
            [x, y] = [y, x]; 
        }
        return { x, y, z: x * y }; 
    },
  },
  "1dg-adding_like_dens-nosimp": {
    title: "Addition (Like Denominators)", category: "Fractions",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "*",  
    outputFunc: (eq, i, columns) => fractionsEq(eq, i, columns, " + "),
    answerKey: eq => `
    <table class="fraction" style="margin-top: 1rem; padding-bottom: 1rem;">
      <tr>
        <td class="top">${eq.y + eq.v}</td>
      </tr>
      <tr>
        <td class="bottom">${eq.w}</td>
      </tr>
    </table>
    `,
    myGenEq: () => {
        let x = randRange(2, 20); 
        let y = randRange(2, x);
        
        let w = x
        let v = randRange(2, x); 

        return { x, y, v, w}; 
    },
  },
  "1dg-adding_like_dens-simp": {
    title: "Addition (Like Denominators) w/ Simplification", category: "Fractions",
    count: 100, columns: 2,
    xSize: 3, ySize: 2, //number of digits in x & y.
    mathSymbol: "*",  
    outputFunc: (eq, i, columns) => fractionsEq(eq, i, columns, " + "),
    answerKey: eq => `
    ${eq.mixed[0] === 0 ? '' : eq.mixed[0]}
    ${eq.mixed[1] === 'A'? `
    <table class="fraction" style="margin-top: 1rem; padding-bottom: 1rem; opacity: 0;">
      <tr>
        <td class="top">${eq.mixed[1]}</td>
      </tr>
      <tr>
        <td class="bottom">${eq.mixed[2]}</td>
      </tr>
    </table>
    ` : `
    <table class="fraction" style="margin-top: 1rem; padding-bottom: 1rem;">
      <tr>
        <td class="top">${eq.mixed[1]}</td>
      </tr>
      <tr>
        <td class="bottom">${eq.mixed[2]}</td>
      </tr>
    </table>
    `}
    `,
    myGenEq: () => {
        let x = randRange(2, 20); 
        let y = randRange(1, x);
        
        let w = x
        let v = randRange(1, x); 

        let red = reduce((y + v),w)

        let mixed = toMixedNumber(red[0],red[1])

        return { x, y, v, w, red, mixed}; 
    },
  },
};
