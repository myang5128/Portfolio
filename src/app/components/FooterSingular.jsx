import Link from 'next/link';

const FooterSingular = ({ href, title }) => {
    return (
        <Link 
            href={href} 
            className="text-[#888E7B] text-xl hover:text-[#58745F] hover:underline"
        >
            {title}
        </Link>
    );
};

export default FooterSingular;