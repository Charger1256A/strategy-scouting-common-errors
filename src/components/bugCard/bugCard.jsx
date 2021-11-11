import { useState, useEffect } from 'react';
import { Card } from 'antd';
import './bugCard.css';
import reactNative from '../../assets/types/react-native.png';
import react from '../../assets/types/react.png';

const { Meta } = Card;


export default function BugCard({ title, date, type }) {
    return (
    <div>
        {type === "react" &&
        <Card
        hoverable
        style={{ width: 275 }}
        cover={<img alt="example" src={react} />}
        >
            <Meta title={title} description={date} />
        </Card>
        }
        {type === "react native" && 
            <Card
            hoverable
            style={{ width: 275 }}
            cover={<img alt="example" src={reactNative} />}
            >
                <Meta title={title} description={date} />
            </Card>
        }
    </div>
    )
}