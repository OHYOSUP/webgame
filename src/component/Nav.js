import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
        gap: "12px",
      }}
    >
      <Link to="/gugudan">구구단</Link>
      <Link to="/wordrelay">끝말잇기</Link>
      <Link to="/baseballnumber">숫자야구</Link>
    </nav>
  );
}
