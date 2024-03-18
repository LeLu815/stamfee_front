import Image from "next/image";

// import whiteLogo from ";
// import ornageLogo from ;

export default function Logo(props: { color: "white" | "orange" }) {
  return (
    <>
      {props.color === "white" && (
        <Image
          src="/svg/Stamffee_white.svg"
          alt="Stamffee"
          width="500"
          height="500"
          style={{ width: "100%", objectFit: "cover" }}
        />
      )}
      {props.color === "orange" && (
        <Image
          src="/svg/Stamffee_orange.svg"
          alt="Stamffee"
          width="500"
          height="500"
          style={{ width: "100%", objectFit: "cover" }}
        />
      )}
    </>
  );
}
