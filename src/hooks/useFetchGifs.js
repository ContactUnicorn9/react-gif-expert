import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export default function useFetchGifs( category) {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() =>
    {
        const gifs = await getGifts(category);
        setImages( gifs );
        setIsLoading( false);
    }

    useEffect( () => {
        getImages();
    }, [])

    

    return {
        images: images,
        isLoading: isLoading
    }
}
