import { prisma } from '../../../../prisma/prisma'; 

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const { titulo, ano, status, genero, diretor } = body;

    // Convertendo 'ano' para string, se necessário
    const anoString = ano !== undefined ? ano.toString() : undefined;

    const updatedFilme = await prisma.postfilme.update({
        where: {
            id: parseInt(params.id), // Certifique-se de que esse ID existe
        },
        data: {
            titulo,
            ano: anoString,
            status,
            genero,
            diretor,
        },
    });

    return new Response(JSON.stringify(updatedFilme), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    });
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const deletedFilme = await prisma.postfilme.delete({
        where: {
            id: parseInt(params.id), // Certifique-se de que esse ID existe
        },
    });

    return new Response(JSON.stringify(deletedFilme), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    });
}