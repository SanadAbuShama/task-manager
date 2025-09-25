
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { ColorOption } from "./ColorOption"
import { useStatuses } from "@/context/statusContext/statusContext"

const COLOR_OPTIONS = ['#C40461', '#6A70EC', '#8CADE1', '#334D77', '#387C00', '#744CEE', '#BFA6A2', '#0079FF']


const formSchema = z.object({
    title: z.string().min(1),
    color: z.enum(COLOR_OPTIONS),
})

export function CreateStatusForm({ onDone }: { onDone: () => void }) {

    const { t } = useTranslation()

    const { setStatuses } = useStatuses()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            color: COLOR_OPTIONS[0]
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        setStatuses((prev) => [...(prev ?? []), { id: Date.now().toString(), title: data.title, color: data.color }]);
        onDone()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 lg:gap-6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-normal'>
                                {t('statuses.statusTitle')}
                            </FormLabel>
                            <FormControl>
                                <Input className="text-sub-text" placeholder={t('statuses.statusTitle')} {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-normal'>
                                {t('statuses.selectColor')}
                            </FormLabel>
                            <div className="flex items-center justify-between">
                                {COLOR_OPTIONS.map((color) =>
                                (<ColorOption
                                    key={color}
                                    selected={field.value === color}
                                    color={color}
                                    onClick={(value: string) => field.onChange(value)} />))}
                            </div>
                        </FormItem>
                    )}
                />
                <Button className='mt-4'>
                    {t('statuses.create')}
                </Button>
            </form>
        </Form>
    )
}