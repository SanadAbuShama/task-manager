import { Trans } from "react-i18next";
import { Button } from "../ui/button";
import sadGhost from '../../assets/sadGhost.png'
import { useState } from "react";
import CreateStatusDialog from "../status/CreateStatusDialog";

export default function Empty() {

    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

    return (
        <div className="px-6 h-full flex items-center">
            <div className="border-dashed border h-[430px] w-full flex flex-col justify-center items-center">
                <img src={sadGhost} alt="Sad Ghost" className="max-h-[91px] mb-[38px]" />
                <p className="text-text text-2xl/[40px] font-bold mb-2">
                    <Trans
                        i18nKey="empty.emptyHere"
                    />
                </p>
                <p className="text-[16px]/[32px] text-sub-text mb-6">
                    <Trans
                        i18nKey="empty.noStatuses"
                    />
                </p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                    <Trans
                        i18nKey="statuses.createNew"
                    />
                </Button>
            </div>
            <CreateStatusDialog
                open={isCreateDialogOpen}
                setDialogOpen={setIsCreateDialogOpen}
            />
        </div>
    )
}