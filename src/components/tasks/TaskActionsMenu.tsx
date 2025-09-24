import { useStatuses, type Status } from "@/context/statusContext/statusContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Trans } from "react-i18next";
import { Zap, SquarePen, Trash } from "lucide-react";
import { useMemo } from "react";
import { useTasks, type Task } from "@/context/tasksContext/tasksContext";

export default function TaskActionsMenu({ task, onDelete }: { task: Task, onDelete: () => void }) {

    const { statuses } = useStatuses()
    const { setTasks } = useTasks()

    const currentStatus = useMemo(() => statuses?.find((status) => status.id === task.status), [statuses, task])

    const otherStatuses = useMemo(() => statuses?.filter((status) => status.id !== currentStatus?.id), [statuses, currentStatus])

    const updateTaskStatus = (newStatus: Status) => {
        const updatedTask = { ...task, status: newStatus.id };

        setTasks((tasks) => tasks.map((item) => item.id !== updatedTask.id ? item : updatedTask))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <MoreHorizontal size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[210px]" >
                <DropdownMenuGroup>
                    {otherStatuses && otherStatuses?.length > 0 && (
                        <DropdownMenuLabel className="flex gap-2 items-center font-normal">
                            <Zap size={14} />
                            <Trans
                                i18nKey="statuses.changeTo"
                            />
                        </DropdownMenuLabel>
                    )}
                    {statuses?.filter((status) => status.id !== currentStatus?.id).map((status) => (
                        <DropdownMenuItem
                            className="flex gap-2 items-center py-1.5 px-2"
                            onSelect={() => updateTaskStatus(status)}
                        >
                            <div className="w-4 h-4 rounded-[3.2px]" style={{ background: status.color }} />
                            {status.title}
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                        <SquarePen size={12} />
                        <Trans
                            i18nKey="statuses.edit"
                        />
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onDelete}>
                        <Trash size={12} />
                        <Trans
                            i18nKey="statuses.delete"
                        />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}