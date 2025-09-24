import { Outlet } from "react-router";
import { Header } from "@/components/header/Header";

export default function DefaultLayout() {

    return (
        <main className="bg-background w-full h-full flex flex-col">
            <div className="py-0.5 sticky top-0 z-10 bg-background">
                <Header />
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
                <Outlet />
            </div>
        </main>
    );
}