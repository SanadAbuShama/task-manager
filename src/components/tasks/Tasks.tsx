import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import StatusSelect from "../status/StatusSelect";
import TasksTable from "./TasksTable";
import searchIcon from '../../assets/search.svg'
import CreateTaskDialog from "./CreateTaskDialog";
import { useEffect, useState } from "react";
import { useStatuses } from "@/context/statusContext/statusContext";
import Empty from "./Empty";
import { useTasks } from "@/context/tasksContext/tasksContext";


export default function Tasks() {

    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
    const [search, setSearch] = useState('');

    const { t } = useTranslation()

    const { statuses } = useStatuses();

    const { setFilters } = useTasks();

    useEffect(() => {
        setFilters((prev) => ({ ...prev, search: search }))
    }, [search, setFilters])

    return (
        statuses?.length === 0 ? (
            <Empty />
        ) : (
            <>
                <Button onClick={() => setIsCreateDialogOpen(true)} className='ms-auto w-full md:w-auto'>
                    {t('tasks.create')}
                </Button >
                <div className="flex gap-2 flex-wrap md:flex-nowrap">
                    <div className="relative w-full">
                        <Input placeholder={`${t('tasks.search')}...`} className="ps-8" onChange={(e) => setSearch(e.target.value)} />
                        <img src={searchIcon} alt="Seacr Icon" className="absolute left-0 top-0 m-2.5 h-4 w-4 text-sub-text" />
                    </div>
                    <StatusSelect />
                </div>
                <TasksTable />
                <CreateTaskDialog
                    open={isCreateDialogOpen}
                    setDialogOpen={setIsCreateDialogOpen}
                />
            </>
        )
    )
}