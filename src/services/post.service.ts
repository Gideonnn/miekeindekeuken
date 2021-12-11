import data from '../data.json';
import { PostData } from '../types';

const h3 = 'my-8 text-xl font-bold text-gray-900 break-normal md:text-2xl';
const h2 = 'my-8 text-2xl font-bold text-gray-900 break-normal md:text-3xl';
const h1 = 'my-8 text-3xl font-bold text-gray-900 break-normal md:text-4xl';
const quote = 'my-12 w-full text-xl italic font-bold text-center';
const p = 'my-6';

const isEmpty = (str: string) => !!str;
const removeLeftoverNewlines = (str: string) => str.replace(/\n+/, '');
const insertH3 = (str: string) => str.replace(/^###\s?(.+)$/, `<h3 class="${h3}">$1</h3>`);
const insertH2 = (str: string) => str.replace(/^##\s?(.+)$/, `<h2 class="${h2}">$1</h2>`);
const insertH1 = (str: string) => str.replace(/^#\s?(.+)$/, `<h1 class="${h1}">$1</h1>`);
const insertImg = (str: string) => str.replace(/^!\[(.*)\]\((.*)\)$/, '<img src="$2" alt="$1" />');
const insertQuote = (str: string) => str.replace(/^>\s?(.+)$/, `<p class="${quote}">$1</p>`);
const insertParagraph = (str: string) => str.replace(/^(\w.*)$/, `<p class="${p}">$1</p>`);

const preProcessPost = (post: PostData): PostData => ({
  ...post,
  content: post.content
    .split(/\n\n/)
    .filter(str => isEmpty(str))
    .map(str => removeLeftoverNewlines(str))
    .map(str => insertH3(str))
    .map(str => insertH2(str))
    .map(str => insertH1(str))
    .map(str => insertImg(str))
    .map(str => insertQuote(str))
    .map(str => insertParagraph(str))
    .join(''),
});

export const getPosts = (): PostData[] =>
  Object.values(data)
    .slice(0, 5)
    .map(post => preProcessPost(post));

export const getPost = (id: string): PostData | undefined => getPosts().find(x => x.id === id);
