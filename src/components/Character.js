import Footer from "../components/Footer";
import './css/Character.css';
import { useState, useEffect } from "react";
import { GetCharAPI } from '../services/api_data';

export default function Character() {
    const [char, setChar] = useState("");

    const fetchCharacter = async () => {
        const Rchar = await GetCharAPI();
        //Specific API object
        setChar(Rchar.data)
    };
    useEffect(() => {
        fetchCharacter();
    }, []);

    return (
       <div>
           <h1>{char.name}</h1> 
            <button onClick={fetchCharacter} style={{
                backgroundColor: 'rgb(0, 110, 160)', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center',
                texDecoration: 'none', display: 'inlineBlock', fontSize: '18px', margin: '4px 2px', cursor: 'pointer'
            }} >New Character
            
      </button>
            <div>
                <img src={char.img} alt="character img" />
            </div>
            <Footer />
        </div>
    );
}