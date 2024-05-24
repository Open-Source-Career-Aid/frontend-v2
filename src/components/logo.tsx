import IconComponent from './icon';
export default function Logo({ showfull = false }: { showfull?: boolean }) {
    return (
        <div className="flex flex-row justify-between items-center">
            { showfull ?
            <p className="inika-bold text-3xl leading-10 text-blue-primary">dumbspl<span className="text-orange-strong">ai</span>n</p>
            :
            <IconComponent name="Logo" classNames="w-6 h-6" />
            }
        </div>
    );
}