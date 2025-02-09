import {memo} from 'react';
import {loginReducer} from '../../model/slice/loginSlice';
import {DynamicModuleLoader} from '@/shared/lib/dynamicModuleLoader/dynamicModuleLoader';
import LoginContent from './LoginContent';

export type LoginFormProps = {
    className?: string;
};

const LoginForm = memo((props: LoginFormProps) => {
    const {className = ''} = props;

    const initialReducers = {
        loginForm: loginReducer,
    };

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <LoginContent userAgent='desktop'/>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
