
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next"
import { useStatuses } from "@/context/statusContext/statusContext"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTasks } from "@/context/tasksContext/tasksContext"

const formSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.string().min(1)
})

export function CreateTaskForm({ onDone }: { onDone: () => void }) {

    const { t } = useTranslation()

    const { setTasks } = useTasks()

    const { statuses } = useStatuses()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            status: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        setTasks((prev) => [{
            id: Date.now().toString(),
            title: data.title,
            description: data.description,
            status: data.status,
        }, ...prev])
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
                                {t('tasks.taskTitle')}
                            </FormLabel>
                            <FormControl>
                                <Input className="text-sub-text" placeholder={t('tasks.taskTitle')} {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-normal'>
                                {t('tasks.description')}
                            </FormLabel>
                            <FormControl>
                                <Textarea className="text-sub-text h-[136px]" placeholder={t('tasks.description')} {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-normal'>
                                {t('tasks.status')}
                            </FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} {...field}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('tasks.status')} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {statuses?.map((status) => <SelectItem value={status.id}>{status.title}</SelectItem>)}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button>
                    {t('statuses.create')}
                </Button>
            </form>
        </Form>
    )
}