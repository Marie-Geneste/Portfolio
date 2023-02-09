yarn add -D babel-jest enzyme enzyme-adapter-react-16 jest

Dans le package.json
"jest": {
    "modulePaths": [
      "./"
    ],
    "roots": [
      "<rootDir>/src",
      "<rootDir>/tests"
    ],
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": ["<rootDir>/tests/.setup.js"]
  }

Creer un dossier `tests` a la racine du projet

Ajouter un fichier .eslintrc
{
  "env": {
    "jest/globals": true
  },
  "rules": {
    "no-unused-expressions": "off"
  }
}

Un autre fichier `.setup.js`
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

Creer un dossier `__mocks__`

avec dedans deux fichiers :
fileMock,js
export default 'test-file-stub';

styleMock.js
export default {};

Rajouter des scripts dans le package.json 

"test": "jest",
"test:watch": "jest --watchAll"
