import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SpellIcons } from "./SpellIcons";
import { SpellDataObject, SpellInfoProps } from "../../types/SpellData";
import Card from 'react-bootstrap/Card';
import '../scss/SpellData.scss';

export function SpellCard(props: SpellInfoProps) {
    const [spellData, setSpellData] = useState<SpellDataObject>();

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/spells/${props.spellIndex}`)
            .then(response => {
                console.log(response);
                setSpellData(response.data);
            })
    }, [props.spellIndex]);


    return (
        <>
        {spellData && props.spellIndex &&
            <div className="spell-card border-gradient">
                <Card.Body>
                    <Card.Title className="mb-2 text-muted h2">{spellData.name}</Card.Title>
                    <SpellIcons spellData={spellData}/>
                    <Card.Text className="text-dark h6">{spellData.desc}</Card.Text>
                </Card.Body>
            </div>
        }
        </>
    )
};