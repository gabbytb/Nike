const Button = ({ label, iconURL, backgroundColor, textColor, borderColor }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : `bg-coral-red rounded-full text-white border border-coral-red`} `}>
        {label}
        
        {
          iconURL && 
            <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
        }
    </button>
  );
};
export default Button;
