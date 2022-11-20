export interface IDeveloperItem {
  id: number;
  name: string;
  marked: boolean;
}

export interface IArticle {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export interface IArticleArrayProps {
  articles: IArticle[];
}

export interface IArticleProps {
  article: IArticle;
}