import { useAuth } from '@/context/auth/authContext'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/context/language/languageContext'
import { useTheme } from '@/context/theme/themeContext'
import languageLight from '../../assets/languageLight.svg'
import languageDark from '../../assets/languageDark.svg'

export function LanguageSelect() {

    const { user } = useAuth()
    const { theme } = useTheme()

    const { setLanguage } = useLanguage()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <img src={theme === 'light' ? languageLight : languageDark} alt="Language Switch" className={`${user ? "block" : "hidden lg:block"} max-h-8`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[134px]">
                <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={() => setLanguage('en')}>
                        English
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => setLanguage('ar')}>
                        العربية
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}