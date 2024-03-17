import {type Article} from './model/types/article';
import {ArticleView} from './model/consts/consts';
import {ArticleDetails} from './ui/ArticleDetails/ArticleDetails';
import {type ArticleDetailsSchema} from './model/types/articleDetailsSchema';
import {ArticleList} from './ui/ArticleList/ArticleList';
import {ArticleViewSelector} from './ui/ArticleViewSelector/ArticleViewSelector';
import {ArticleTypeTabs} from './ui/ArticleTypeTabs/ArticleTypeTabs';

export type {Article, ArticleDetailsSchema};
export {ArticleTypeTabs, ArticleViewSelector, ArticleDetails, ArticleView, ArticleList};
