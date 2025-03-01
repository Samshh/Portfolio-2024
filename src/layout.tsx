import { Outlet } from "react-router-dom";
import SVGGrainEffect from "@/components/SVGGrainEffect";

export default function Layout() {
  return (
    <main>
      <SVGGrainEffect />
      <Outlet />
    </main>
  );
}
