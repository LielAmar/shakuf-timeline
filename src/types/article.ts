import { Content } from './content';

export interface Article extends Content {
  content: string;
  author: string;

  full_article: string;
  main_picture: string;
}