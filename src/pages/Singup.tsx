import { SignupForm } from '@/components/forms/SignupForm';
import { useTranslation } from 'react-i18next';

function Signup() {
    const { t } = useTranslation();

    return (
        <div className="w-full px-8 md:px-16 lg:p-0 lg:max-w-[360px] flex flex-col gap-10">
            <div>
                <h2 className="font-bold text-[38px] text-text mb-3">
                    {t('user.createAccount')}
                </h2>
                <p className="text-sub-text text-sm/[24px]">
                    {t('user.fillDetails')}
                </p>
            </div>
            <SignupForm />
        </div>
    )
}

export default Signup
