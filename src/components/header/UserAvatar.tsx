import avatar from '../../assets/avatar.jpg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Trans } from 'react-i18next';
import { LogOut, User } from 'lucide-react';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import { useAuth } from '@/context/auth/authContext';

export function UserAvatar({ name }: { name?: string }) {
    const { logout } = useAuth();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={avatar} />
                    {name && (
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    )}
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[134px]">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <Trans
                            i18nKey="headerActions.profile"
                        />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={logout}>
                        <LogOut />
                        <Trans
                            i18nKey="headerActions.exit"
                        />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}