import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscMail } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Accueil", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "À propos", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Projets", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscMail size={18} />, label: "Contact", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10 px-6">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Paul-Emile
        </h1>

        <div className="flex gap-3 order-2 md:order-none">
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill ri-2x"></i></a>
          <a href="mailto:contact@paul-emile.com"><i className="ri-mail-fill ri-2x"></i></a>
        </div>

        <div className="order-3 md:order-none mt-15 md:mt-0 md:mb-0">
          <Dock items={items} panelHeight={30} baseItemSize={60} magnification={100} />
        </div>
      </div>

      <p className="mt-8 text-sm text-zinc-500">© {new Date().getFullYear()} Paul-Emile — AI Creative Strategist</p>
    </div>
  );
};

export default Footer;
