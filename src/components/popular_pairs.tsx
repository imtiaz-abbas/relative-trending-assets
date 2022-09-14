import { getImage } from "../utils";

function PopularPairs({ items }: { items: Array<string> }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="bg-primary mt-[12px] h-[40px] rounded-full px-4 flex flex-row items-center gap-[12px]">
          {items.map((item) => (
            <img
              key={item}
              src={getImage(item)}
              alt={`image_${item}`}
              width={"22px"}
              height={"22px"}
            />
          ))}
        </div>
      </div>
      <div className="h-[30px] flex flex-col justify-center">
        <p className="text-dark-grey text-[12px] font-semibold">
          Popular pairs
        </p>
      </div>
    </div>
  );
}

export default PopularPairs;
