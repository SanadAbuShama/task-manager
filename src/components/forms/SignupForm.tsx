
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/context/auth/authContext"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import avatar from '../../assets/avatar.jpg';
import upload from '../../assets/upload.svg';
import { Link, useNavigate } from "react-router"
import { AppRoutes } from "@/AppRoutes"



const formSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
})

export function SignupForm() {

    const { login } = useAuth();
    const { t } = useTranslation();

    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        login({ email: data.email, name: data.name });
        navigate('/tasks');
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={() => (
                        <FormItem className="mb-6">
                            <FormControl>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={avatar} />
                                    </Avatar>
                                    <Button type="button" variant="outline" className="bg-white dark:bg-white text-base-foreground">
                                        <img src={upload} alt="Upload Image" />
                                        {t('images.upload')}
                                    </Button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {t('user.name')}
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={t('user.name')} {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {t('user.email')}
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={t('user.email')} {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {t('user.password')}
                            </FormLabel>
                            <FormControl>
                                <Input type="password" className="text-sub-text" placeholder={t('user.password')} {...field} />
                            </FormControl>
                            <FormDescription className='text-start'>
                                {t('validations.minCharacters', { characters: 8 })}
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <div className="mt-2">
                    <Button type="submit" className="w-full text-primary-foreground">
                        {t('user.signUp')}
                    </Button>
                    <div className="gap-1 flex text-sm/[160%] mt-10 md:mt-6 justify-center">
                        <span className="text-sub-text font-bold">
                            {t('user.haveAccount')}
                        </span>
                        <Link to={AppRoutes.signIn} className="underline text-primary">
                            {t('user.signIn')}
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
}