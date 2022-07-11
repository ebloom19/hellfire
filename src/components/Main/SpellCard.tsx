import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SpellIcons } from "./SpellIcons";
import { SpellDataObject, SpellCardProps } from "../../types/SpellData";
import Card from 'react-bootstrap/Card';
import ReactHtmlParser from 'react-html-parser';
import converter from 'number-to-words';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../NavBar/responsive";
import '../scss/SpellData.scss';

export function SpellCard(props: SpellCardProps) {
    const [spellData, setSpellData] = useState<SpellDataObject>();
    const [errorMessage, setErrorMessage] = useState<string>();

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/spells/${props.spellIndex}`)
            .then(response => {
                console.log(response);
                setSpellData(response.data);
            })
            .catch(error => {
                setErrorMessage(error.message);
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

    return (
        <>
        {errorMessage && props.index == 0 &&
            <h2 style={{margin: '25px 0', textAlign: 'left'}}>
                {errorMessage}
            </h2>
        }
        {spellData && props.spellIndex &&
            <div className="spell-card border-gradient">
                <Card.Body>
                    <h2 className="spell-name">{spellData.name}</h2>
                    {props.idx && props.handleDelete && props.favoriteList?.includes(props.spellIndex) &&
                        <FontAwesomeIcon 
                            icon={solid('heart')} 
                            className="favorite" 
                            onClick={() => 
                                props.idx && props.handleDelete && 
                                props.handleDelete(props.idx)
                            }/>
                    }
                    {props.spellIndex && props.handleSave && !props.favoriteList?.includes(props.spellIndex) ?
                        <FontAwesomeIcon 
                            icon={regular('heart')} 
                            className="favorite" 
                            onClick={() => 
                                props.handleSave && props.spellIndex &&
                                props.handleSave(props.spellIndex)
                            }/>:
                        <FontAwesomeIcon 
                        icon={solid('heart')} 
                        className="favorite" 
                        onClick={() => 
                            props.idx && props.handleDelete && props.favoriteList &&
                            props.handleDelete(props.favoriteList.indexOf(props.spellIndex))
                        }/>
                    }
                    {props.index == 0 && !isMobile &&
                        <p className="more-info">Hover over the icons below for more info..</p>
                    }
                    {props.index == 0 && isMobile &&
                        <p className="more-info">Tap on the icons below for more info..</p>
                    }
                    <SpellIcons spellData={spellData} index={props.index} />
                    <div className="card-body">
                        {
                            spellData.desc?.map((t, i) => {

                                // Filter text body for -> ***Text*** = Bold Blue Text
                                let words = t.split(' ').map(w => {
                                    return (
                                        w.includes('***') ? 
                                            `<b class="bold-text">
                                                ${w.replace('***', '').replace('.***', '').replace('.', '')}
                                            </b>` : 
                                            w
                                    );
                                });

                                // Filter text body for -> 3d6 = roll three 6-sided dice
                                words = words.map(w => {
                                    const hasNumber = /\d/;
                                    return (
                                        hasNumber.test(w) && w.includes('d') && !w.includes('r') && w.split('').length < 6 && w.split('d')[0] ?
                                            `<b>${w}</b> (roll ${Number(w.split('d')[0]) && w.split('d')[0]} ${Number(w.split('d')[1]) && converter.toWords(w.split('d')[1])}-sided dice)` :
                                            w
                                    );
                                });

                                // filter for Confusion structure 
                                // | d10 | Behavior |
                                // |---|---|        

                                // Animated Object Statistics
                                // #####

                                const text = words.join(' ');

                                return (
                                    text.startsWith("-") ?
                                        <li className="list-item">
                                            { text.replace('-', '') }
                                        </li> :
                                        <p className="text-sm-left my-2">
                                            { ReactHtmlParser(text) }
                                        </p>
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