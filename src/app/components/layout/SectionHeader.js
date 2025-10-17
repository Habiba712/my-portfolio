

export default function SectionHeader({ title, description }) {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-5">
            <h2 className="text-center">{title}</h2>
            <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
    )
}