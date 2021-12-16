import { atom, selector } from 'recoil';

interface ITodo {
  id: number;
  text: string;
  category: string;
}

type categoriesType = string[];
type currentCtaType = string;

export const todos = atom<ITodo[]>({
  key: 'todos',
  default: JSON.parse(window.localStorage.getItem('todos') as string) || [],
});

export const categories = atom<categoriesType>({
  key: 'categories',
  default:
    JSON.parse(window.localStorage.getItem('categories') as string) || [],
});

export const currentCategory = atom<currentCtaType>({
  key: 'currentCta',
  default: 'all',
});

export const todoSelector = selector({
  key: 'todoSelector',
  get: ({ get }) => {
    const todoList = get(todos);
    const currentCta = get(currentCategory);
    const filteredList =
      currentCta === 'all'
        ? todoList
        : todoList.filter(todo => todo.category === currentCta);

    return filteredList;
  },
});
