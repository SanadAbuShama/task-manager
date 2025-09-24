import todoRed from '../../assets/todoRed.png'
import moonLight from '../../assets/moonLight.svg'
import moonDark from '../../assets/moonDark.svg'

import { useTheme } from '@/context/theme/themeContext'
import { useAuth } from '@/context/auth/authContext'
import { UserAvatar } from './UserAvatar'
import { LanguageSelect } from './LanguageSelect'

export function Header() {

    const { theme, switchTheme } = useTheme()
    const { user } = useAuth()

    return (
        <header className={`flex items-center ${user ? 'justify-between' : 'justify-center lg:justify-between'} py-[20px] px-6 bg-background`}>
            <img src={todoRed} alt="Logo" className={`${!user ? 'lg:hidden' : ''}`} />
            <div className="gap-7 flex lg:ms-auto">
                <LanguageSelect />
                <img onClick={switchTheme} src={theme === 'light' ? moonLight : moonDark} alt="Theme Switch" className={`${user ? "block" : "hidden lg:block"} max-h-8`} />
                {user && (
                    <UserAvatar name={user.name} />
                )}
            </div>
        </header>
    )
}