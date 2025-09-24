import { useTranslation } from "react-i18next";
import ResponsiveDialog from "../dialogs/ResponsiveDialog";
import { CreateTaskForm } from "../forms/CreateTaskForm";


export default function CreateTaskDialog({ open, setDialogOpen }: { open: boolean, setDialogOpen: (value: boolean) => void }) {

    const { t } = useTranslation()

    return (
        <ResponsiveDialog
            open={open}
            setDialogOpen={setDialogOpen}
            title={t('tasks.createTask')}
        >
            <CreateTaskForm onDone={() => setDialogOpen(false)} />
        </ResponsiveDialog>
    )
}