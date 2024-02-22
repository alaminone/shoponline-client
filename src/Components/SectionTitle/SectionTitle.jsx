// eslint-disable-next-line react/prop-types
const Sectiontitle = ({ subtitle, mainTitle, discription }) => {
  return (
    <div>
      <div className="text-center mb-10 max-w-[600px] mx-auto space-y-4">
        <p className=" text-sm text-primary uppercase">{subtitle}</p>
        <h1 className="text-3xl font-bold uppercase">{mainTitle}</h1>
        <p className="text-xs text-gray-400">{discription}</p>
      </div>
    </div>
  );
};

export default Sectiontitle;
