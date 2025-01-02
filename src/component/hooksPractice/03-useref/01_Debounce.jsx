import { useRef } from "react";

const DebounceButton = ({ onClick, children }) => {
  const refContainer = useRef(null);

  return (
    <button
      style={{
        backgroundColor: "black",
        width: "100%",
        color: "white",
        borderRadius: "8px",
        padding: "8px",
      }}
      onClick={() => {
        if (refContainer.current) {
          clearTimeout(refContainer.current);
        }
        refContainer.current = setTimeout(() => {
          onClick();
        }, 2000);
      }}
    >
      {children}
    </button>
  );
};

export default function ButtonContainer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        padding: "16px",
        borderRadius: "8px",
        gap: "16px",
      }}
    >
      <DebounceButton
        onClick={() => alert("You clicked chat room enter button")}
      >
        Enter Chat
      </DebounceButton>
      <DebounceButton onClick={() => alert("You clicked chat message button")}>
        Enter chat message
      </DebounceButton>
      <DebounceButton
        onClick={() => alert("You clicked leave chat room button")}
      >
        Leave Chat
      </DebounceButton>
    </div>
  );
}
