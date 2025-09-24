import { useTranslation } from "react-i18next";
import ResponsiveDialog from "../dialogs/ResponsiveDialog";
import { CreateStatusForm } from "../forms/status/CreateStatusForm";


export default function CreateStatusDialog({ open, setDialogOpen }: { open: boolean, setDialogOpen: (value: boolean) => void }) {

    const { t } = useTranslation()

    return (
        <ResponsiveDialog
            open={open}
            setDialogOpen={setDialogOpen}
            title={t('statuses.createStatus')}
        >
            <CreateStatusForm onDone={() => setDialogOpen(false)} />
        </ResponsiveDialog>
    )
}