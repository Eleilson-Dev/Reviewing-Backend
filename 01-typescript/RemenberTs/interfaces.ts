interface IUser {
  id: number;
  name: string;
  email: string;
  module?: IModule;
}

interface IModule {
  name: string;
  skils: string[];
}

const user: IUser = {
  id: 1,
  name: 'Elleilson',
  email: 'elleylson@gmail.com',
  module: { name: 'Modulo 1', skils: ['typescript', 'javascript', 'json'] },
};
