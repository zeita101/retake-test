import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { GetQuotAPI } from '../services/api_data';

export default function Quote() {
    const [quote, setQuote] = useState("");

    const fetchQuote = async () => {
        const RandQuote = await GetQuotAPI();
        //Specific API object
        setQuote()
    };
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
       <div>
           <h1>{setQuote.name}</h1> 
            <button onClick={fetchQuote} style={{
                backgroundColor: 'rgb(0, 110, 160)', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center',
                texDecoration: 'none', display: 'inlineBlock', fontSize: '18px', margin: '4px 2px', cursor: 'pointer'
            }} >New Quote
            
      </button>
            <div>
        <h2>{quote}</h2>
            </div>
            <Footer />
        </div>
    );
}