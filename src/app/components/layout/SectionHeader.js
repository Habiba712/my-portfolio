

export default function SectionHeader({ title, description }) {
    return (
        <div className="section-header flex flex-col items-center justify-center w-full px-4 py-5">
            <h2 className="text-center">{title}</h2>
            <p className="w-80 text-center text-sm">{description}</p>
        </div>
    )
}