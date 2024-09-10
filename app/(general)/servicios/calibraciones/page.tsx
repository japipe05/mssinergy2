import type { Metadata } from "next";

//para el Seo super importante
export const metadata: Metadata = {
 title: 'SEO Title about',
 description: 'SEO Title about',
 keywords: ['About page','page','felipe','...']
};
export default function calibracionesPage(){
    return(
        <main className="flex flex-col items-center p-24">
            <span className="text-3xl">Servicio de Calibraciones
            </span>
            <p>Laboratorio de Presión diferencial: Ms Sinergy ofrece el servicio en esta variable para calibración
Manómetro digital, manómetro analógico transmisor de presión y columna de líquido con un
alcance de medición desde </p>
        </main>
    );
}