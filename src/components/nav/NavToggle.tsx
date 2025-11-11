import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface NavToggleProps {
    open: boolean;
    onToggle: () => void;
}

export default function NavToggle({ open, onToggle }: NavToggleProps) {
    return (
        <button
            className="md:hidden absolute right-6"
            onClick={onToggle}
            aria-label="Toggle menu"
        >
            <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
        </button>
    );
}
