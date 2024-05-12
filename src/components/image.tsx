export default function Image({src, alt}: {src: string, alt: string}) {
    return (
        <div className="w-full">
            <img src={src} alt={alt} className="w-full aspect-square m-auto rounded-lg object-cover" />
        </div>
    )
}