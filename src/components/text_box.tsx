function AssetTextBox({
  label,
  value,
  change,
}: {
  label: string;
  value: number;
  change?: number;
}) {
  const amountString = value.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 11,
  });
  return (
    <div className="mt-[4px] flex flex-col items-center">
      <div className="w-[242px] h-[40px] rounded-full flex flex-col justify-end items-center bg-gradient-to-b from-[#ECF0FF1a] to-[#3B3F5700]">
        <div className="relative bg-primary h-[39px] w-[240px] rounded-full flex flex-col justify-center text-[16px]">
          <div className="flex flex-row justify-center">
            <p className="text-white font-semibold">${amountString}</p>
          </div>
          {!!change ? (
            <p
              className={`absolute ${
                amountString.length > 9 ? "right-0" : "right-4"
              } text-[12px] ${
                change > 0 ? "text-[#00FFA3]" : "text-[#FF4D4D]"
              }  font-semibold`}
            >
              {change > 0 ? "+" : ""}
              {change}%
            </p>
          ) : null}
        </div>
      </div>

      <div className="h-[30px] mt-[2px] flex flex-col justify-center">
        <p className="text-dark-grey text-[12px] font-semibold">{label}</p>
      </div>
    </div>
  );
}

export default AssetTextBox;
