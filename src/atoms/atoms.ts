import { atom } from 'recoil';

export const isModalOpen = atom({
  key: 'modalOpen',
  default: false,
});

export const sourceID = atom({
  key: 'sourceID',
  default: 'undefined',
});

export const sourceGroupID = atom({
  key: 'sourceGroupID',
  default: 'undefined',
});
