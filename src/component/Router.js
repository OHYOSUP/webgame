import { Route, Routes } from "react-router-dom";
import Gugudan from "./Gugudan";
import WordRelay from "./WordRelay";
import BaseballNumber from "./BaseballNumber";

export default function Router() {
  return (
    <Routes>
      <Route path="/gugudan" element={<Gugudan />}>
        구구단
      </Route>
      <Route path="/wordrelay" element={<WordRelay />} />
      <Route path="/baseballnumber" element={<BaseballNumber />} />
    </Routes>
  );
}
