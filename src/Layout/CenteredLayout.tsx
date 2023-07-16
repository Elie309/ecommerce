
interface Props {
    children: React.ReactNode;
}

export default function CenteredLayout({children}: Props) {
    return (
        <main className="h-full w-full grid place-items-center">
            {children}
        </main>
    )
}
