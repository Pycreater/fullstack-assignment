import { AiFillGithub } from "react-icons/ai";

const footerLinks = [
  {
    title: "Abstract",
    links: ["Branches"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Release Notes", "Status"],
  },
  {
    title: "Community",
    links: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Legal"],
  },
];

const Footer = () => {
  return (
    <footer className="p-9 w-full h-[250px] bg-black rounded-b-2xl text-white flex justify-between">
      {footerLinks.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center p-9 gap-3"
        >
          <p className="font-bold cursor-pointer">{section.title}</p>
          <ul className="text-sm cursor-pointer text-center">
            {section.links.map((link) => (
              <li key={link} className="hover:font-semibold">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col justify-end p-9">
        <div className="text-sm text-center">
          <AiFillGithub size={"24px"} />
          <div className="flex flex-col mt-3">
            <span className="font-semibold">&copy; Copyright 2022</span>
            <span className="font-bold">Abstract Studio Design, Inc.</span>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
