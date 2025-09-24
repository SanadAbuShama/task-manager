import type { Status } from "@/context/statusContext/statusContext";


export default function Status({ status }: { status: Status }) {

    return (
        <>
            <div
                className="hidden md:block px-1 py-2 rounded-sm font-bold text-sm"
                style={{
                    backgroundColor: `#${status.color.replace('#', '')}1A`,
                    color: status.color
                }}>
                <p className="hidden md:block">{status.title}</p>
            </div>
            <div
                className="w-6 h-6 rounded-sm md:hidden"
                style={{
                    backgroundColor: status.color,
                }}
            />
        </>
    )
}