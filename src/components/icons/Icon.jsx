import * as Icons from 'react-icons/fa';

function Icon({ name, size = 24, color = 'black', ...rest }) {
    const IconComponent = Icons[name];

    if (!IconComponent) {
        return <span>⚠️</span>;
    }
    return <IconComponent size={size} color={color} className="cursor-pointer hover:scale-125" {...rest} />;
}
export default Icon;