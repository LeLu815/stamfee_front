export default function RoundShapeButton(props: {
  text: string;
  textColor: "white" | "black";
}) {
  return (
    <div
      className={`w-full bg-myColor-orange rounded-full ${
        props.textColor === "white" ? "text-white" : "text-black"
      }`}
    >
      {props.text}
    </div>
  );
}
