import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const links = [
  {
    name: "Telegram",
    url: "https://t.me/Qa_typd",
    icon: <FaTelegram size={24} />,
  },
  {
    name: "Email",
    url: "mailto:imancx.cx@gmail.com",
    icon: <MdOutlineEmail size={24} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/kaRIOz",
    icon: <FaGithub size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/iman-jafari-cx",
    icon: <FaLinkedin size={24} />,
  },
];

const ContactLinks = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 mt-10 md:mt-32  rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Contact Me
      </h2>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-c dark:text-gray-300 dark:hover:text-fuchsia-500 transition"
          >
            {link.icon}
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;
