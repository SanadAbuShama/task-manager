import { SignInForm } from '@/components/forms/SignInForm';
import { useTranslation } from 'react-i18next';

function SignIn() {
    const { t } = useTranslation();

    return (
        <div className="w-full px-8 md:px-32 lg:p-0 lg:max-w-[360px] flex flex-col gap-10 md:gap-14 lg:gap-6">
            <div>
                <h2 className="font-bold text-[32px]/[48px] text-text mb-6 lg:mb-3">
                    {t('user.signIn')}
                </h2>
                <p className="text-sub-text text-[16px]/[32px]">
                    {t('user.unlockContent')}
                </p>
            </div>
            <SignInForm />
        </div>
    )
}

export default SignIn
