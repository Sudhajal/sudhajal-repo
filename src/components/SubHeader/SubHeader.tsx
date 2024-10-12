import Location from "./Location";
import Categories from "./Categories";
const SubHeader: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center mt-4 w-full text-sm tracking-normal leading-6 text-gray-800 max-w-[1040px] max-md:max-w-full">
      <Location />
      <Categories />
    </div>
  );
};

export default SubHeader;