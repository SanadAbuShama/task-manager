import { useStatuses } from "@/context/statusContext/statusContext";
import { useEffect, useMemo, useState } from "react";
import { useTasks } from "@/context/tasksContext/tasksContext";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { CircleFadingPlus } from "lucide-react";
import CreateStatusDialog from "./CreateStatusDialog";

export default function StatusSelect() {

    const [isCreationDialogOpen, setIsCreationDialogOpen] = useState(false)
    const [selectedStatusId, setSelectedStatusId] = useState<string>()

    const { statuses } = useStatuses()

    const { tasks, setFilters } = useTasks();

    const { t } = useTranslation()

    const selectedStatus = useMemo(() => statuses?.find((stat) => stat.id === selectedStatusId), [selectedStatusId, statuses])

    const counts = useMemo(() => {
        const tasksPerStatus: Record<string, number> = {};

        tasks.forEach((task) => {
            if (tasksPerStatus[task.status]) {
                tasksPerStatus[task.status]++;
            } else {
                tasksPerStatus[task.status] = 1
            }
        })

        return tasksPerStatus
    }, [tasks])

    useEffect(() => {
        if (selectedStatusId) {
            setFilters((prev) => ({ ...prev, status: selectedStatusId }));
        }
    }, [selectedStatusId, setFilters])

    return (
        <>
            <Select
                value={selectedStatusId}
                onValueChange={(value) => {
                    if (value !== 'create') {
                        setSelectedStatusId(value);
                    }
                }}>
                <SelectTrigger className="md:w-[200px] md:min-w-[200px]">
                    <SelectValue placeholder={t('tasks.status')}>
                        <div className="flex gap-2 w-full items-center">
                            {selectedStatus && (
                                <div className="w-4 h-4 rounded-[3.25px]" style={{ background: selectedStatus?.color }} />
                            )}
                            {selectedStatus?.title ?? t('tasks.status')}
                        </div>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {Object.entries(counts).map(([key, value]) => {
                            const status = statuses?.find((stat) => stat.id === key);

                            return (
                                <SelectItem key={key} value={status?.id ?? ''} showCheckmark={false} className="pr-2 [&_span]:w-full">
                                    <div className="flex justify-between">
                                        <div className="flex gap-2 w-full">
                                            <div className="w-4 h-4 rounded-[3.25px]" style={{ background: status?.color }} />
                                            {status?.title}
                                        </div>
                                        {value}
                                    </div>
                                </SelectItem>
                            );
                        })}
                        <SelectItem
                            onPointerDown={() => {
                                setIsCreationDialogOpen(true);
                            }}
                            value="create"
                            showCheckmark={false}
                            className="pr-2 text-text [&_span]:w-full !opacity-100">
                            <div className="flex gap-[9px] items-center" >
                                <CircleFadingPlus size={13} />
                                {t('statuses.createNew')}
                            </div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <CreateStatusDialog
                open={isCreationDialogOpen}
                setDialogOpen={setIsCreationDialogOpen}
            />
        </>
    )
}