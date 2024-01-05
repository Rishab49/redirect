import { useParams } from "react-router-dom";
export default function Redirect(){

    // slug because App.jsx:16 has :slug
    const {slug} = useParams();
    // function to redirect user to new location
    window.location.replace(`https://www.google.com/${slug}`);


    return null
}