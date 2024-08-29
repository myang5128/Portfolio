import Link from 'next/link';

const LinkSingular = ({ href, title }) => {
    return (
        <Link 
            href={href} 
            className="text-[#888E7B] lg:text-2xl md:text-xl text-l hover:text-[#58745F] hover:underline"
        >
            {title}
        </Link>
    );
};

export default LinkSingular;