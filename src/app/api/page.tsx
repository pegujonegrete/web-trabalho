"use client"; // Isso indica que este componente será renderizado no lado do cliente

import React, { useState } from 'react';

const CadastroPage = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        ano: '',
        status: '',
        genero: '',
        diretor: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/cadastro', { // Altere para a sua rota POST
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Filme cadastrado com sucesso: ' + JSON.stringify(result));
            } else {
                alert('Erro ao cadastrar o filme.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar o filme.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Cadastro de Filmes</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                        style={{ 
                            marginLeft: '10px', 
                            padding: '5px', 
                            width: '100%', 
                            border: '1px solid #ccc', // Adicionando borda
                            borderRadius: '4px' // Bordas arredondadas
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="ano">Ano:</label>
                    <input
                        type="text"
                        id="ano"
                        name="ano"
                        value={formData.ano}
                        onChange={handleChange}
                        required
                        style={{ 
                            marginLeft: '10px', 
                            padding: '5px', 
                            width: '100%', 
                            border: '1px solid #ccc', // Adicionando borda
                            borderRadius: '4px' // Bordas arredondadas
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                        style={{ 
                            marginLeft: '10px', 
                            padding: '5px', 
                            width: '100%', 
                            border: '1px solid #ccc', // Adicionando borda
                            borderRadius: '4px' // Bordas arredondadas
                        }}
                    >
                        <option value="">Selecione um status</option>
                        <option value="Lançamento">Lançamento</option>
                        <option value="Em Cartaz">Em Cartaz</option>
                        <option value="Disponível">Disponível</option>
                        <option value="Indisponível">Indisponível</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="genero">Gênero:</label>
                    <select
                        id="genero"
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        required
                        style={{ 
                            marginLeft: '10px', 
                            padding: '5px', 
                            width: '100%', 
                            border: '1px solid #ccc', // Adicionando borda
                            borderRadius: '4px' // Bordas arredondadas
                        }}
                    >
                        <option value="">Selecione um gênero</option>
                        <option value="Ação">Ação</option>
                        <option value="Comédia">Comédia</option>
                        <option value="Drama">Drama</option>
                        <option value="Terror">Terror</option>
                        <option value="Ficção Científica">Ficção Científica</option>
                        <option value="Romance">Romance</option>
                        <option value="Documentário">Documentário</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="diretor">Diretor:</label>
                    <input
                        type="text"
                        id="diretor"
                        name="diretor"
                        value={formData.diretor}
                        onChange={handleChange}
                        required
                        style={{ 
                            marginLeft: '10px', 
                            padding: '5px', 
                            width: '100%', 
                            border: '1px solid #ccc', // Adicionando borda
                            borderRadius: '4px' // Bordas arredondadas
                        }}
                    />
                </div>

                <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Salvar</button>
            </form>
        </div>
    );
};

export default CadastroPage;
