export default function RoundShapeButton(props: {
  text: string;
  textColor: "white" | "black";
  backgroundColor: "coffee";
}) {
  const fontSize =
    "text-small-1 mobile-size:text-mobile-1 tablet-size:text-tablet-1 browser-size:text-browser-1";

  return (
    <div
      className={`w-full bg-myColor-orange rounded-full text-center max-w-md mx-auto ${fontSize} ${
        props.textColor === "white" ? "text-white" : "text-black"
      } ${props.backgroundColor === "coffee" ? "bg-myColor-coffee" : ""}`}
    >
      {props.text}
    </div>
  );
}
