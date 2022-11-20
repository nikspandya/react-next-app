import { makeAutoObservable } from 'mobx';
import { IDeveloperItem } from '../types/type';

class DeveloperStoreImpl {
  developers: IDeveloperItem[] = [
    {
      id: 1,
      name: 'Nik01',
      marked: false,
    },
    {
      id: 2,
      name: 'Niks02',
      marked: false,
    },
    {
      id: 2,
      name: 'Nik03',
      marked: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addDeveloper(name: string): void {
    const item: IDeveloperItem = {
      id: Math.random(),
      name,
      marked: false,
    };
    this.developers.push(item);
  }

  markDeveloper(id: number): void {
    // Toggle the value of marked by selected developer item
    const index = this.developers.findIndex((item) => item.id === id);
    if (index > -1) 
      this.developers[index].marked = !this.developers[index].marked;
  }

  removeDeveloper(id: number): void {
    // Delete the developer item by selected developer id
    const index = this.developers.findIndex((item) => item.id === id);
    if (index > -1) 
      this.developers.splice(index, 1);
  }
}

export const developerStore = new DeveloperStoreImpl();