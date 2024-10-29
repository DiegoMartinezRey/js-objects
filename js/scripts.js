// - Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: "John",
  surname: "Doe",
  age: 25,
  hobbies: ["leer", "tocar la guitarra", "pasear con las cabras"],
  pets: [
    { name: "Max", type: "perro" },
    { name: "Whiskers", type: "gato" },
  ],
  address: {
    street: "123 Main Street",
    city: "Gotham",
    state: "California",
    postalCode: "12345",
    country: "USA",
  },
  phone: "+1234567890",
  email: "johndoe@example.com",
  occupation: "Ingeniero de software",
  education: "Master en ciencia de datos",
};

console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años, mis hobbies son ${user.hobbies}, tengo dos mascotas, mi ${user.pets[0].type} quien se llama ${user.pets[0].name} y mi ${user.pets[1].type} quien se llama ${user.pets[1].name}. Soy ciudadano de ${user.address.country}, vivo en ${user.address.state}, ${user.address.city} y me pueden ubicar en la direccion ${user.address.street} PC: ${user.address.postalCode}. Tengo un ${user.education} y actualmente trabajo como ${user.occupation}, si me quieres contactar mi numero telefonico es ${user.phone} y mi correo es ${user.email}.`
);

// - Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const dataNumbers = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [], // número + 2
    },
    thirdFloor: {
      numbersDouble: [], // número * 2
    },
  },
  fourthFloor: {
    numbersDividedBy2: [], // número / 2
  },
  fifthFloor: {
    onlyEven: [], // Números pares
    onlyOdd: [], //   Números impares
  },
};

for (let i = 0; i < dataNumbers.numbers.length; i++) {
  dataNumbers.firstFloor.secondFloor.numbersPlus2.push(
    dataNumbers.numbers[i] + 2
  );
  dataNumbers.firstFloor.thirdFloor.numbersDouble.push(
    dataNumbers.numbers[i] * 2
  );
  dataNumbers.fourthFloor.numbersDividedBy2.push(dataNumbers.numbers[i] / 2);
  if (dataNumbers.numbers[i] % 2 == 0) {
    dataNumbers.fifthFloor.onlyEven.push(dataNumbers.numbers[i]);
  } else {
    dataNumbers.fifthFloor.onlyOdd.push(dataNumbers.numbers[i]);
  }
}
console.log(dataNumbers.firstFloor.secondFloor.numbersPlus2);
console.log(dataNumbers.firstFloor.thirdFloor.numbersDouble);
console.log(dataNumbers.fourthFloor.numbersDividedBy2);
console.log(dataNumbers.fifthFloor.onlyEven);
console.log(dataNumbers.fifthFloor.onlyOdd);

// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

const dataStrings = {
  firstFloor: {
    vowels: [], // Vocales
  },
  secondFloor: {
    consonants: [], // Consonantes
  },

  fourthFloor: {
    asciiCode: [], // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [], // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: "",
  },
};

const fillObject = (phrase) => {
  const vowels = `aeiouáéíóúAEIOU`;
  const consonants = "bcdfghjklmnñpqrstvwxyz";
  const alphabet = "abcdefghijklmnñopqrstuvwxyz";
  let phraseReplace = phrase;
  let phraseCode = "";

  for (let i = 0; i < phrase.length; i++) {
    if (vowels.includes(phrase[i])) {
      dataStrings.firstFloor.vowels.push(phrase[i]);
    } else {
      if (phrase[i] !== " ") {
        dataStrings.secondFloor.consonants.push(phrase[i]);
      }
    }
    dataStrings.fourthFloor.asciiCode.push(phrase.charCodeAt(i));

    phraseReplace = phraseReplace
      .replaceAll("a", 1)
      .replaceAll("e", 2)
      .replaceAll("i", 3)
      .replaceAll("o", 4)
      .replaceAll("u", 5)
      .replaceAll("á", 1)
      .replaceAll("é", 2)
      .replaceAll("í", 3)
      .replaceAll("ó", 4)
      .replaceAll("ú", 5)
      .replaceAll("A", 1)
      .replaceAll("E", 2)
      .replaceAll("I", 3)
      .replaceAll("O", 4)
      .replaceAll("U", 5);

    if (consonants.includes(phraseReplace[i])) {
      if (phraseReplace[i] !== "b") {
        phraseCode += consonants[consonants.indexOf(phraseReplace[i]) - 1];
      } else {
        phraseCode += "z";
      }
    } else {
      if (phraseReplace[i] === " ") {
        phraseCode += alphabet[Math.floor(Math.random() * alphabet.length)];
      } else {
        phraseCode += phraseReplace[i];
      }
    }
    dataStrings.sixthFloor.secretCode = phraseCode;
  }

  const wordsSplit = phrase.split(" ");
  for (const words of wordsSplit) {
    dataStrings.fifthFloor.wordsInUppercase.push(words.toUpperCase());
    dataStrings.fifthFloor.wordsInLowercase.push(words.toLowerCase());
  }

  console.log(dataStrings.firstFloor.vowels);
  console.log(dataStrings.secondFloor.consonants);
  console.log(dataStrings.fourthFloor.asciiCode);
  console.log(dataStrings.fifthFloor.wordsInUppercase);
  console.log(dataStrings.fifthFloor.wordsInLowercase);
  console.log(dataStrings.sixthFloor.secretCode);
};

fillObject("Si no estudias acabarás como Enrique");
fillObject("Estamos viendo objetos");
