import { Outlet } from "react-router";
import { AppLayout } from "../../layout/AppLayout";
import { tecnicoVariants } from "./tecnicoVariants";
import type { VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface ChamadoTecnico {
    id: string
    title: string
    descricao: string
    status: "ABERTO" | "EM_ANDAMENTO" | "ENCERRADO"
    updatedAt: string
    totalPrice: number
    tecnico: string
    cliente: string
}


interface TecnicoProps extends VariantProps<typeof tecnicoVariants> {
    tecnicoId?: string // 🔹 caso queira filtrar chamados por técnico
    chamados?: ChamadoTecnico[] // 🔹 se quiser passar os chamados via props
}

export function DashboardTecnico({ tecnicoId }: TecnicoProps) {
    const [chamados, setChamados] = useState<ChamadoTecnico[]>([])

    useEffect(() => {
        async function fetchChamados() {
            const response = await api.get(`/chamados/tecnico/${tecnicoId}`)
            setChamados(response.data)
        }
        fetchChamados()
    }, [tecnicoId])

    return (
        <AppLayout role="TECNICO">
            <Outlet context={{ chamados }} />
        </AppLayout>
    );
}