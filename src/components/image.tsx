export default function Image({src, alt}: {src: string, alt: string}) {
    return (
        <div className="w-full">
            <img src={src} alt={alt} className="size-80 m-auto rounded-lg object-cover" />
        </div>
    )
}