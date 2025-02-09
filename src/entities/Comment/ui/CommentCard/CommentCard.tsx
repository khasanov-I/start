import {memo, type ReactNode} from 'react';
import cls from './CommentCard.module.scss';
import {classNames} from '@/shared/lib/classNames';
import {type Comment} from '../../model/types/comment';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {Avatar} from '@/shared/ui/Avatar/Avatar';
import {Text} from '@/shared/ui/Text/Text';
import {AppLink} from '@/shared/ui/AppLink/AppLink';
import {getRouteProfile} from '@/shared/const/router';
import {NoAvatar} from '@/shared/assets/img';

type CommentCardProps = {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
};

export const CommentCard = memo((props: CommentCardProps): ReactNode => {
    const {className = '', comment, isLoading} = props;

    return isLoading
        ? <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <Skeleton width={30} height={30} border='50%' />
                <Skeleton height={16} width={100} className={cls.username} />
            </div>
            <Skeleton className={cls.text} width='100%' height={50} />
        </div>
        : <AppLink to={getRouteProfile(String(comment?.profileId))} className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                <Avatar size={30} src={comment?.profileAvatar ? `${__API__}/static/${comment?.profileAvatar}` : NoAvatar as string} />
                <Text className={cls.username} title={comment?.profileUsername} />
            </div>
            <Text className={cls.text} text={comment?.text} />
        </AppLink>;
});
