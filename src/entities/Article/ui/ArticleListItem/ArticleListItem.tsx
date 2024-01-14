import {memo, useCallback, type ReactNode} from 'react';
import cls from './ArticleListItem.module.scss';
import {ArticleView, type Article, ArticleBlockType, type ArticleTextBlock} from 'entities/Article/model/types/article';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames';
import {Text} from 'shared/ui/Text/Text';
import {EyeLogo} from 'shared/assets/icons';
import {Card} from 'shared/ui/Card/Card';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Button} from 'shared/ui/Button/Button';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {useNavigate} from 'react-router-dom';
import {pagePaths} from 'shared/lib/routeConfig';

type ArticleListItemProps = {
    className?: string;
    article: Article;
    view: ArticleView;
};

export const ArticleListItem = memo((props: ArticleListItemProps): ReactNode => {
    const {className = '', article, view} = props;

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(pagePaths.article_details + article.id);
    }, [article.id, navigate]);

    const {t} = useTranslation();

    if (view === ArticleView.SMALL) {
        return <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types}/>
                    <Text text={String(article.views)} className={cls.views}/>
                    <EyeLogo className='icons' />
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </div>;
    }

    const textBlocks = article.blocks.find(block =>
        block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
            <div className={cls.header}>
                <Avatar size={30} src={article.user.avatar}/>
                <Text text={article.user.username} className={cls.username}/>
                <Text text={article.createdAt} className={cls.date}/>
            </div>
            <Text title={article.title} className={cls.title} />
            <Text text={article.type.join(', ')} className={cls.types}/>
            <img src={article.img} className={cls.img}/>
            {textBlocks && <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock}/>}
            <div className={cls.footer}>
                <Button onClick={onOpenArticle}>
                    {t('Читать далее')}
                </Button>
                <Text text={String(article.views)} className={cls.views}/>
                <EyeLogo className='icons' />
            </div>
        </Card>
    </div>;
});
