export function ColorOption({ color, selected, onClick }: { color: string, selected: boolean, onClick: (val: string) => void }) {


    return (
        <div style={{ padding: selected ? '4px' : '0', border: selected ? `1px solid ${color}` : '0', borderRadius: '8px' }}>
            <div
                className="h-[30px] w-[30px] rounded-md"
                onClick={() => onClick(color)}
                style={{ background: color }}
            />
        </div>

    )
}