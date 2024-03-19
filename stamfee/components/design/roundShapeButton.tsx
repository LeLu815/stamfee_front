export default function RoundShapeButton(props: {
  text: string;
  textColor: "white" | "black";
  backgroundColor: "coffee";
}) {
  const fontSize =
    "text-small-1 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1";
  const textColor = props.textColor === "white" ? "text-white" : "text-black";
  const backgroundColor =
    props.backgroundColor === "coffee" ? "bg-myColor-coffee" : "";
  const padding =
    "py-mypt-1 mobile-size:py-mypt-2 tablet-size:py-mypt-3 browser-size:py-mypt-4";
  const border =
    "rounded mobile-size:rounded-lg tablet-size:rounded-xl browser-size:rounded-2xl";
  const dropShadow =
    "shadow-small mobile-size:shadow-mobile tablet-size:shadow-tablet browser-size:shadow-browser";

  return (
    <div
      className={`w-full  text-center max-w-md mx-auto ${fontSize} ${textColor} ${backgroundColor} ${padding} ${border} ${dropShadow} font-medium`}
    >
      {props.text}
    </div>
  );
}
