import { Trans, useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import StatusSelect from "../status/StatusSelect";
import TasksTable from "./TasksTable";
import search from '../../assets/search.svg'
import CreateTaskDialog from "./CreateTaskDialog";
import { useState } from "react";
import { useStatuses } from "@/context/statusContext/statusContext";
import Empty from "./Empty";


export default function Tasks() {

    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

    const { t } = useTranslation()

    const { statuses } = useStatuses();

    return (
        statuses?.length === 0 ? (
            <Empty />
        ) : (
            <>
                <Button onClick={() => setIsCreateDialogOpen(true)} className="ms-auto w-full md:w-auto">
                    <Trans
                        i18nKey="tasks.create"
                    />
                </Button >
                <div className="flex gap-2 flex-wrap md:flex-nowrap">
                    <div className="relative w-full">
                        <Input placeholder={`${t('tasks.search')}...`} className="ps-8" />
                        <img src={search} alt="Seacr Icon" className="absolute left-0 top-0 m-2.5 h-4 w-4 text-sub-text" />
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