import Link from 'next/link';

const NavLink = ({ href, title }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Link 
            href={href} 
            className="block py-2 pl-3 pr-4 text-[#90E0EF] sm:text-xl rounded md:p-0 hover:text-white"
            onClick={handleClick}
        >
            {title}
        </Link>
    );
};

export default NavLink;