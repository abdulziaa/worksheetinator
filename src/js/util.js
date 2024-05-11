const emojis = "⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🥅 ⛳️ 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁 🎪 🥁 🎮 🧩 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🧃 🥤 🕹 🔨 ⚒ 🛠 🧸 🎁 🎈 📓 📔 📒 📕 📗 📘 📙 📚 📖 🖋 🖌 🖍 ✏️ 🔎 ❤️ 🧡 💛 💚 💙 💜 🧑‍🎄 🐈‍⬛ 😺 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🐚 🌾 💐 🌷 🌹 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌚 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ❄️ ☃️ ⛄️".split(" ");
const countable = "⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🚲 🛵 🏍 🛺 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 ✈️ 🛩 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🗿 🗽 🗼 🏰 🏯 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏗 🏭 🏢 🏬 🏣 🏥 🏦 🏨 🏪 🏫 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🌅 🌄 🌠 🎆 🌉 🌁 🎪 🥁 🎮 🧩 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🌽 🥕 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🥪 🥙 🧆 🌮 🌯 🥗 🥘 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🧃 🥤 🕹 🔨 ⚒ 🛠 🧸 🎁 🎈 📓 📔 📒 📕 📗 📘 📙 📚 📖 🖋 🖌 🖍 ✏️ 🔎 ❤️ 🧡 💛 💚 💙 💜 🧑‍🎄 🐈‍⬛ 😺 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🐇 🦝 🦨 🦡 🦦 🦥 🐁 🐀 🦔 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍁 🍄 🐚 🌾 💐 🌷 🌹 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌚 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ ❄️ ☃️ ⛄️".split(" ");
function randomInts(quantity, max){
  const arr = []
  while(arr.length < quantity){
    var candidateInt = Math.floor(Math.random() * max) + 1
    if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt) //unique numbers only!
  }
return(arr)
}
const rand = max => Math.floor(Math.random() * max);
const randRange = (min, max) => rand(max - min) + min;
const randArr = arr => arr[rand(arr.length)];
const shuffle = arr => arr.map(val => ({ val, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({val}) => val)
;
const SINGLE_DIGITS = [2,3,4,5,6,7,8,9];
const randNoOnes = () => randArr(SINGLE_DIGITS);
const randRangeByDigits = digits => {
  if (digits === 1) return randNoOnes();
  if (digits < 1) return randRange(1, digits * 10);
  const start = Math.pow(10, digits - 1);
  const end = Math.pow(10, digits) - 1;
  return randRange(start, end);
};
const solution = (x, y, mathSymbol) => {
  switch (mathSymbol) {
    case "*": return x * y;
    case "/": return x / y;
    case "-": return x - y;
    default: return x + y;
  }
};
const getUrlParam = param => {
  const paramMap = {};
  const urlArr = document.location.href.split("?");
  const queryParam = urlArr.length > 1 ? urlArr[1] : false;
  if (queryParam) {
    var paramArr = queryParam.split("&");
    paramArr.map(paramSet => {
      if (paramSet.indexOf(param + "=") === 0) {
        paramMap[param] = paramSet.split("=")[1].replace(/%20/g, " ");
      }
    });
  }
  return paramMap[param] || false;
};
const setUrlParam = param => {
  const url = document.location.href.split("?")[0];
  window.history.pushState({ param: param }, param, url + (param ? "?" + param : ""));
  return false;
};
const strXTimes = (str, x) => {
  return new Array(x).fill().map((a, i) => str + (i > 0 && i % 4 === 0 ? '<br/>' : '')).join("");
};
const repeat = (str, x) => {
  return new Array(x).fill().map(() => str).join("");
};

// Names for word problems
const names = "Malcom Sue Deann Wilbert Viola Ashley Muriel Clark Abigail Lucia Michal Melba Elden Eliseo Wanda Mike Samuel Samantha Arturo Jean Kristin Moshe Kelli Elisa Silas Lino Louie Wilton Michelle Wilfredo Kristine Alexis Keven Kathy Marylou Edgar Lottie Donald Leigh Emery Grover Tim Kenny Shon Pam Robin Parker Tyrone Jody Shanna Stanton Modesto Rosario Hayden Rupert Kirby Adeline Natasha Owen Lupe Alphonse Gregorio Saul Joanne Carolyn Tanisha Judson Sarah Rosie Margarito Beth Elizabeth Thanh Basil Benny Lynwood Lionel Tisha Wilbur Theo Summer Dominick Jefferson Max Filiberto Laura August Zachery Elvin Luther Magdalena Fritz Maxwell Stacie Hallie Joseph Eunice Debra Gabriel Sebastian Michael Steven"
const namesArray = names.split(" ");
const objects = "apples books cars pencils chairs tables cups balls trees computers houses pens bicycles shoes keys windows dogs cats birds coins sandwiches televisions phones hats laptops forks spoons plates doors backpacks watches rulers glasses flowers cookies t-shirts socks gloves bottles trains butterflies rockets cameras balloons cups cones tires fishes jackets belts stairs candles mirrors maps tents globes magnets cakes paintings flags microscopes alarm clocks thermometers microphones bridges scissors matches tissues ladders saws chains lightbulbs hammers nails buttons watches backpacks pillows blankets sunglasses mirrors crayons markers papers clips staplers erasers calculators puzzles cameras vases glasses kites umbrellas gloves mittens scarves"
const objectsArray = objects.split(" ");

// reduction for fractions: https://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}

// changing reduced fractions to mixed numbers, returns A/A if it's only a whole number answer
function toMixedNumber(n, d) {
  if (d === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  if (n < d) {
    return [0, n , d]; // Already a proper fraction
  }

  if (n === d) {
    return [1, 'A' , 'A']; // one
  }

  if (d === 1) {
    return [n, 'A' , 'A']; // whole number + whole number
  }

  var w = Math.floor(n / d);  // Whole number part
  var remainder = n % d;       // Remaining numerator

  return  [w, remainder, d ]; 
}