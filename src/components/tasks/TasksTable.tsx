import { useTasks, type Task } from "@/context/tasksContext/tasksContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { useStatuses } from "@/context/statusContext/statusContext";
import Status from '../status/Status'
import { type Status as StatusType } from "@/context/statusContext/statusContext";
import { useTranslation } from "react-i18next";
import TaskActionsMenu from "./TaskActionsMenu";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useMemo, useState } from "react";
import DeleteStatusDialog from "../status/DeleteStatusDialog";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const PAGE_SIZE = 7;

export default function TasksTable() {

    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    const [starredTasks, setStarredTasks] = useState<Task[]>([])

    const [statusToDelete, setStatusToDelete] = useState<StatusType>()

    const [page, setPage] = useState(0);

    const { t } = useTranslation()

    const { tasks, filteredTasks } = useTasks();

    const { statuses } = useStatuses();

    const totalTasks = filteredTasks ?? tasks;

    const numberOfPages = Math.ceil(totalTasks.length / PAGE_SIZE)

    const tasksToDisplay = useMemo(() => totalTasks.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE), [page, totalTasks])

    const from = 1 + PAGE_SIZE * page;

    const to = from + tasksToDisplay.length - 1;

    const disableNext = page === numberOfPages - 1;

    const disablePrevious = page === 0;

    const range = useMemo(() => t('tasks.dataRange', {
        from: tasksToDisplay.length === 0 ? 0 : from,
        to: tasksToDisplay.length === 0 ? 0 : to,
        total: totalTasks.length
    }), [from, t, to, totalTasks.length, tasksToDisplay.length])


    const handleStarClick = (clickedTask: Task) => {
        if (starredTasks.some((task) => task.id === clickedTask.id)) {
            setStarredTasks((prev) => prev.filter((task) => task.id !== clickedTask.id))
        } else {
            setStarredTasks((prev) => [...prev, clickedTask])
        }
    }

    return (
        <div>
            <Table className="table-fixed">
                <TableHeader>
                    <TableRow >
                        <TableHead className="h-9">Invoice</TableHead>
                        <TableHead className="h-9 hidden md:table-cell">{t('tasks.description')}</TableHead>
                        <TableHead className="text-center w-11 md:w-[120px] h-9 ">{t('tasks.status')}</TableHead>
                        <TableHead className="w-[32px] h-9" />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(tasksToDisplay).map((task) => {
                        const status = statuses?.find((status) => status.id === task.status);
                        const isStarred = starredTasks.some((item) => item.id === task.id)

                        return (
                            <TableRow className="border-0">
                                <TableCell className="text-start whitespace-nowrap overflow-ellipsis overflow-hidden h-16">
                                    <div className="flex items-center gap-[14px]">
                                        <Star className={`stroke-primary stroke-1 ${isStarred ? 'fill-primary' : ''}`} onClick={() => handleStarClick(task)} />
                                        {task.title}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-start whitespace-nowrap overflow-ellipsis overflow-hidden h-16">
                                    {task.description}
                                </TableCell>
                                <TableCell className="w-11 md:w-[120px] h-16">{status ? <Status status={status} /> : '-'}</TableCell>
                                <TableCell className="w-[32px] h-16">
                                    <TaskActionsMenu
                                        onDelete={() => {
                                            setStatusToDelete(status)
                                            setIsDeleteDialogOpen(true);
                                        }} task={task} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Pagination className="w-full mt-11">
                <PaginationContent className="w-full justify-between">
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => setPage((prev) => prev - 1)}
                            className={`border ${disablePrevious ? 'pointer-events-none opacity-50' : ''}`}
                            size="lg"
                            href="#"
                        >
                            <span className="flex items-center gap-[11px]">
                                <ArrowLeft size={12} className="rtl:scale-[-1]" />
                                {t('pagination.previous')}
                            </span>
                        </PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem className="text-sm">
                        {range}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => setPage((prev) => prev + 1)}
                            className={`border ${disableNext ? 'pointer-events-none opacity-50' : ''}`}
                            size="lg"
                            href="#"
                        >
                            <span className="flex items-center gap-[11px]">
                                {t('pagination.next')}
                                <ArrowRight size={12} className="rtl:scale-[-1]" />
                            </span>
                        </PaginationNext>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            {
                statusToDelete && (
                    <DeleteStatusDialog
                        open={isDeleteDialogOpen}
                        setDialogOpen={setIsDeleteDialogOpen}
                        statusToDelete={statusToDelete} />
                )
            }
        </div >
    )
}