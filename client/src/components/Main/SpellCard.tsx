import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SpellIcons } from "./SpellIcons";
import { SpellDataObject, SpellInfoProps } from "../../types/SpellData";
import Card from 'react-bootstrap/Card';
import ReactHtmlParser from 'react-html-parser';
import converter from 'number-to-words';
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

    // Confusion
    // | d10 | Behavior |
    // |---|---|
    // | 1 | The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn. |
    // | 2-6 | The creature doesn't move or take actions this turn. |
    // | 7-8 | The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. |
    // | 9-10 | The creature can act and move normally. |

    // Control Water ***


    // 3d6 = roll three 6-sided dice


    return (
        <>
        {spellData && props.spellIndex &&
            <div className="spellCard borderGradient">
                <Card.Body>
                    <h2 className="spellName">{spellData.name}</h2>
                    <SpellIcons spellData={spellData} index={props.index} />
                    <div className="cardBody">
                        {
                            spellData.desc?.map((t, i) => {

                                let words = t.split(' ').map(w => {
                                    return (
                                        w.includes('***') ? 
                                            `<b class="boldText">${w.replace('***', '').replace('.***', '').replace('.', '')}</b>` : 
                                            w
                                    )
                                })

                                words = words.map(w => {
                                    const hasNumber = /\d/;

                                    return (
                                        hasNumber.test(w) && w.includes('d') && !w.includes('r') && w.split('').length < 6 && w.split('d')[0] ?
                                            `<b>${w}</b> (roll ${Number(w.split('d')[0]) && w.split('d')[0]} ${Number(w.split('d')[1]) && converter.toWords(w.split('d')[1])}-sided dice)` :
                                            w
                                    )
                                })

                                // filter for Confusion structure 
                                // | d10 | Behavior |
                                // |---|---|        

                                // Animated Object Statistics
                                // #####

                                const text = words.join(' ');

                                return (
                                    text.startsWith("-") ?
                                        <li className="listItem">{ text.replace('-', '') }</li> :
                                        <><p className="text-sm-left my-2">{ ReactHtmlParser(text) }</p></>
                                );
                            })
                        }
                    </div>
                </Card.Body>
            </div>
        }
        </>
    )
};