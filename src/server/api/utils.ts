import pkgJSON from '../../../package.json';

interface PkgJSON {
  author: string;
}

interface Author {
  name: string;
  lastname: string;
}

export const toJSON = (objString: string) => JSON.parse(objString);

const loadAuthorInformation = (pkgObject: PkgJSON) => {
  let author: Author;

  if (pkgObject) {
    const { author: rawAuthor } = pkgObject;
    const [name, lastname] = rawAuthor.split(/\s/);
    author = { name, lastname };
  }

  return () => {
    return author;
  }
};

export const getAuthor = loadAuthorInformation(pkgJSON);
