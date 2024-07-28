import FormUsuario from "@/components/usuario/FormUsuario";
import { Suspense } from "react";

export default function Page() {

    return (
        <Suspense fallback={<div>carrregando....</div>}>
            <FormUsuario />
        </Suspense>
    )
}