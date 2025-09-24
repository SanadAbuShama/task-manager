import { Trans, useTranslation } from "react-i18next";
import ResponsiveDialog from "../dialogs/ResponsiveDialog";
import { useStatuses, type Status } from "@/context/statusContext/statusContext";
import { Button } from "../ui/button";
import { useTasks } from "@/context/tasksContext/tasksContext";

type DeleteDialogProps = { statusToDelete: Status, open: boolean, setDialogOpen: (value: boolean) => void }

export default function DeleteStatusDialog({ statusToDelete, open, setDialogOpen }: DeleteDialogProps) {

    const { setTasks } = useTasks();
    const { setStatuses } = useStatuses();

    const { t } = useTranslation()

    const onDelete = () => {
        setStatuses((prev) => prev?.filter((item) => item.id !== statusToDelete.id) ?? [])
        setTasks((prev) => prev.filter((task) => task.status !== statusToDelete.id));
        setDialogOpen(false)
    }

    return (
        <ResponsiveDialog
            open={open}
            setDialogOpen={setDialogOpen}
            title={t('statuses.deleteStatus')}
        >
            <div className="text-center">
                <p className="mb-4 font-bold text-xl">
                    <Trans
                        i18nKey="statuses.beware"
                        values={{
                            statusTitle: statusToDelete.title
                        }}
                    />
                </p>
                <p className="mb-10 text-[16px]">
                    <Trans
                        i18nKey="statuses.deleteWarning"
                    />
                </p>
                <Button className="w-full" onClick={onDelete}>
                    <Trans
                        i18nKey="statuses.deleteThisStatus"
                    />
                </Button>
            </div>
        </ResponsiveDialog>
    )
}