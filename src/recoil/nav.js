import {atom} from 'recoil';

export interface INavData {
    imageUrl: string;
    name: string;
    email: string;
    selectedMenu: string;
    isDarkMode: boolean; 
}

export const navData = atom<INavData>({
    key: 'navData',
    default: {
        imageUrl: 'https://i.namu.wiki/i/x9jfQUvtlnkV9g86wcKFegAk8efDjEZh3T93TyzOXW9LvNPxHbccbhpyixoWK8n9RwLNB11_9rofsVTOSAu30876fmsOW77622Zee2Yy7Nn2PAJj2DArNN8hWjVB0UlanGkHHe_X2aAkmtPhhjnrhg.webp',
        name: '',
        email: '',
        selectedMenu: '',
        isDarkMode: true
    },
});