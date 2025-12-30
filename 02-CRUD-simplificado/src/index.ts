const nameList: string[] = [];

const addName = (name: string): void => {
  nameList.push(name);
};

const getNames = (): void => {
  nameList.forEach((value, index) => {
    console.log({ [index]: value });
  });
};

const removeName = (index: number): void => {
  nameList.splice(index, 1);
};

const updateName = (index: number, name: string): void => {
  nameList.splice(index, 1, name);
};

addName('Alex');
addName('otavio');
addName('Roberto');
removeName(1);
updateName(1, 'Osvaldo');
getNames();
