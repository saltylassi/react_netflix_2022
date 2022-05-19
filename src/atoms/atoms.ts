import { atom } from 'recoil';

export const isModalOpen = atom({
  key: 'modalOpen',
  default: false,
});

export const modalGroupID = atom({
  key: 'modalGroupID',
  default: 'undefined',
});
