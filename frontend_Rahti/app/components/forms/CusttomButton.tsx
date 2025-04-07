


interface CusttomButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const CusttomButton: React.FC<CusttomButtonProps> = ({label,onClick}) => {
    return (
        <button 
            onClick={onClick} 
            className="bg-red-500 w-full px-4 py-2 rounded-xl text-white cursor-pointer  hover:bg-green-600"
        >{label}</button>
    );
};

export default CusttomButton;