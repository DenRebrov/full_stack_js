const someText = 'Super text'

function convertTextInObject(text) {
  const arrayString = text.split(' ');
  let objectArray = [];

  arrayString.forEach(function(element, index) {
    let object = {
      word: element,
      length: index + 1,
      isCapitalized: element.split('')[0].toUpperCase() === element.split('')[0]
    };
    objectArray.push(object);
  });
  return objectArray;
};

console.log(convertTextInObject(someText));
