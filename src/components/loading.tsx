export default function Loading({ loading } : { loading: boolean }) {
    return (
        <div>
        {loading && <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>}
        </div>
    )
}