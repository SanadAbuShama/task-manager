
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { useAuth } from "@/context/auth/authContext"
import { Link, useNavigate } from "react-router"
import { AppRoutes } from "@/AppRoutes"


const formSchema = z.object({
    email: z.email(),
    password: z.string().min(1),
})

export function SignInForm() {

    const { login } = useAuth()
    const { t } = useTranslation()

    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        login({ email: data.email });
        navigate('/tasks')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 lg:gap-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {t('user.email')}
                            </FormLabel>
                            <FormControl>
                                <Input className="text-sub-text" placeholder={t('user.email')} {...field} />
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
                        </FormItem>
                    )}
                />
                <div className="md:mt-4 lg:mt-0">
                    <Button type="submit" className="w-full text-primary-foreground">
                        {t('user.signIn')}
                    </Button>
                    <div className="gap-1 flex text-sm/[160%] mt-10 md:mt-6 justify-center">
                        <span className="text-sub-text font-bold">
                            {t('user.noAccount')}
                        </span>
                        <Link to={AppRoutes.signUp} className="underline text-primary">
                            {t('user.signUp')}
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
}