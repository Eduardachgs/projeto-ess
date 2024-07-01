import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import styles from './styles';
import CreatePost from '../../services/posts/CreatePost';
import GetFilmes from '../../services/filmes/GetFilmes';

const Dashboard = () => {
    const navigate = useNavigate();
    const [filmes, setFilmes] = useState([]);

    useEffect(() => { 
        async function fetchData() {
            const response = await GetFilmes();
            setFilmes(response.data);
        }
        fetchData();
    }, []);

    const handleBack = () => {
        navigate("/")
    };

    const handlePost = async () => {
        const response = await CreatePost(1, "d9613d10-3330-11ef-808d-490c8ec6fe12", 5, "HAHAHAHHAHAHAHHAHAHAH");
        console.log(response)
    }

    return (
        <div style={styles.container}>
            <div>
                <h1>Bem vindo ao dashboard</h1>
                <Button variant="contained" color="primary" onClick={handleBack}>
                    Voltar
                </Button>
                {filmes.map((filme) => (
                    <Link to={`/filme/${filme.filme_id}`} key={filme.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div>
                            <h2>{filme.nome}</h2>
                            <p>{filme.sinopse}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;