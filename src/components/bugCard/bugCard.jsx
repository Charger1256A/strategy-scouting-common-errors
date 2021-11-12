import { useState, useEffect } from 'react';
import { openBugData } from "../../features/modal/bugDataModal.js";
import { useDispatch } from "react-redux";
import { Card } from 'antd';
import './bugCard.css';
import react from '../../assets/types/react.png';
import reactNative from '../../assets/types/react-native.png';
import xcode from '../../assets/types/xcode.png';
import javascript from '../../assets/types/javascript.png';
import html from '../../assets/types/html.png';
import css from '../../assets/types/css.png';
import other from '../../assets/types/other.png';


const { Meta } = Card;


export default function BugCard({ data }) {
    const [thumbnail, setThumbnail] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        const type = data.type_of_error;
        console.log(type);
        if (type === "react") {
            setThumbnail(react);
        } else if (type === "react native") {
            setThumbnail(reactNative);
        } else if (type === "xcode") {
            setThumbnail(xcode);
        } else if (type === "javascript") {
            setThumbnail(javascript);
        } else if (type === "HTML") {
            setThumbnail(html);
        } else if (type === "CSS") {
            setThumbnail(css);
        } else {
            setThumbnail(other);
        }
    }, [])

    return (
    <div>
        <Card
        onClick={() => dispatch(openBugData(data))}
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={thumbnail} />}
        >
            <Meta title={data.title} description={data.date} />
        </Card>
    </div>
    )
}