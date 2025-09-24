import { Outlet } from "react-router";
import SidePromo from "./SidePromo";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export default function AuthLayout() {

    return (
        <div className="h-full w-full flex">
            <SidePromo />
            <main className="bg-background flex-1 flex flex-col">
                <div className="sticky top-0 z-10 bg-background">
                    <Header />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    );
}