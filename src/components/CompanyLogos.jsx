import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Socials
      </h5>
      <ul className="flex">
        {companyLogos.map((item) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={item.id}
          >
            <a target="_blank" href={item.url}><img src={item.imageUrl} width={60} height={60} alt={item.imageUrl} /></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
