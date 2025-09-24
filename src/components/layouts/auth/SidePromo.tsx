import todoImage from '../../../assets/todo.png'
import redGhost from '../../../assets/redGhost.png'
import whiteGhost from '../../../assets/whiteGhost.png'
import { useTranslation } from "react-i18next";

export default function SidePromo() {

    const { t } = useTranslation();

    return (
        <div className="hidden lg:flex flex-col items-center justify-between h-full w-[520px] bg-primary py-[100px]">
            <img src={todoImage} alt="Todo" className="max-w-[279px]" />
            <div className="bg-primary-400 text-white font-wetpaint py-2 px-3.5 rounded-xl ms-[50px] mt-[10%] relative">
                <img src={redGhost} alt="Red Ghost" className="rotate-[-1.95deg] absolute -start-[105px] -top-[162px]  rtl:scale-x-[-1]" />
                <p className="text-lg">{t("todos.hauntedList")}</p>
                <p className="text-lg">{t("todos.buriedTasks")}</p>
            </div>
            <div className="flex items-center gap-2 min-w-[424px] text-primary-foreground relative">
                <img src={whiteGhost} alt="White Ghost" className="w-[149px] left-[-157px] top-[-45px] rtl:scale-x-[-1]" />
                <div>
                    <p className="font-bold">Iztech Vally</p>
                    <p className="font-normal opacity-80">Iztech Vally</p>
                </div>
            </div>
        </div>
    );
}