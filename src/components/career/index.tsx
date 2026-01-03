
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import FooterTwo from "../../layouts/footers/FooterTwo";
import Wrapper from "../../layouts/Wrapper";
import HomeLayout from "../homes/HomeLayout";
import CareerHero from "./CareerHero";
import CareerBenefits from "./CareerBenefits";
import CareerPositions from "./CareerPositions";

export default function Career() {
	const sections = [
		<CareerHero />,
		<CareerBenefits />,
		<CareerPositions />,
	];

	return <Wrapper><HomeLayout header={<HeaderTwo />} footer={<FooterTwo />} sections={sections} /></Wrapper>;
}

