import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";


type ResponsiveDialogProps = {
    open: boolean,
    title: string,
    children: React.ReactNode,
    setDialogOpen: (value: boolean) => void
}

export default function ResponsiveDialog({
    open,
    title,
    children,
    setDialogOpen
}: ResponsiveDialogProps) {

    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setDialogOpen}>
                <DialogContent className="sm:max-w-[448px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-6">
                        {children}
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setDialogOpen}>
            <DrawerContent className="p-6 pb-[40px]">
                <DrawerHeader className="flex items-center justify-between p-0">
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerClose>
                        <X size={16} className="text-sub-text" />
                    </DrawerClose>
                </DrawerHeader>
                <div className="mt-10">
                    {children}
                </div>
            </DrawerContent>
        </Drawer>
    )
}