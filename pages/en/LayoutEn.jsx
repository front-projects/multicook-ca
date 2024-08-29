import { Outlet } from "react-router-dom";
import HeaderEn from "../../components/Header/HeaderEn";
import FooterEn from "../../components/Footer/FooterEn";

export default function LayoutEn() {
    return <div className="page">
        <HeaderEn />
        <Outlet />
        <FooterEn />
    </div>
}