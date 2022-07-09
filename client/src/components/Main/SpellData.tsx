import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SpellDataObject, SpellInfoProps } from "../../types/SpellData";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../scss/SpellData.scss';
import { cp } from "node:fs/promises";

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
                    <div className="d-flex justify-content-around align-items-start">
                        <div className="icons">
                            <FontAwesomeIcon icon={solid('arrow-up-9-1')} />
                            <p>{spellData.level}</p>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={solid('wand-magic')} />
                            <p>{spellData?.casting_time}</p>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={solid('brain')} />
                            {spellData.concentration ? <FontAwesomeIcon className="mt-2" icon={solid('check')} /> : <FontAwesomeIcon className="mt-2" icon={solid('xmark')} />}
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={solid('maximize')} />
                            <p>{spellData.range}</p>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={solid('dragon')} />
                            {spellData.ritual ? <FontAwesomeIcon className="mt-2" icon={solid('check')} /> : <FontAwesomeIcon className="mt-2" icon={solid('xmark')} />}
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={solid('stopwatch')} />
                            <p>{spellData.duration}</p>
                        </div>
                    </div>
                    <Card.Text className="text-dark h6">{spellData.desc}</Card.Text>
                </Card.Body>
            </div>
        }
        </>
    )
};