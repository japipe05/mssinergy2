import type { Metadata } from "next";

//para el Seo super importante
export const metadata: Metadata = {
 title: 'SEO Title Quienes-somos',
 description: 'SEO Title Quienes-somos',
 keywords: ['Quienes-somos page','page','','...']
};
export default function QuienessomosPage(){
    return(
        <>
        <span className="text-7xl">Quienes-somos!!
        </span>
        </>
    );
}