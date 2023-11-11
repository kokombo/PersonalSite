import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";

const SendAMessageButton = ({ label }: { label: string }) => {
  return (
    <button className="flex items-center border-[1px] border-gray bg-grey py-4 px-10 gap-2 rounded-sm hover:scale-105 md:text-xl text-lg font-NeutonRegular">
      <Link
        to="mailto:samuelibrahim3029@gmail.com"
        className=" rounded-sm "
        aria-label={label}
      >
        {label}
      </Link>

      <MdMarkEmailRead />
    </button>
  );
};

export default SendAMessageButton;
