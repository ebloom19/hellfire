import "../../styling/scss/SpellData.scss";

import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import parse from "html-react-parser";
import converter from "number-to-words";
import React, { FC, useEffect, useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import { breakPoints } from "../../styling/break-points";
import { SpellIcons } from "../spell-icons/spell-icons";
import { SpellCardType, SpellData } from "./spell-card.types";

export const SpellCard: FC<SpellCardType> = ({ spellIndex, key, idx, handleDelete, handleSave, favouriteList }) => {
	const [spellData, setSpellData] = useState<SpellData>();
	const [errorMessage, setErrorMessage] = useState<string>();

	const isMobile = useMediaQuery({ maxWidth: breakPoints.mobile });

	useMemo(() => {
		axios
			.get(`https://www.dnd5eapi.co/api/spells/${spellIndex}`)
			.then((response) => {
				console.log(response);
				setSpellData(response.data);
			})
			.catch((error) => {
				setErrorMessage(error.message);
			});
	}, [spellIndex]);

	return (
		<>
			{errorMessage && key == 0 && <h2 style={{ margin: "25px 0", textAlign: "left" }}>{errorMessage}</h2>}
			{spellData && spellIndex && (
				<div className="spell-card border-gradient">
					<Card.Body>
						<h2 className="spell-name">{spellData.name}</h2>
						{idx && handleDelete && favouriteList?.includes(spellIndex) && (
							<FontAwesomeIcon
								icon={solid("heart")}
								className="favorite"
								onClick={() => idx && handleDelete && handleDelete(idx)}
							/>
						)}
						{spellIndex && handleSave && !favouriteList?.includes(spellIndex) ? (
							<FontAwesomeIcon
								icon={regular("heart")}
								className="favorite"
								onClick={() => handleSave && spellIndex && handleSave(spellIndex)}
							/>
						) : (
							<FontAwesomeIcon
								icon={solid("heart")}
								className="favorite"
								onClick={() => idx && handleDelete && favouriteList && handleDelete(favouriteList.indexOf(spellIndex))}
							/>
						)}
						{key == 0 && !isMobile && <p className="more-info">Hover over the icons below for more info..</p>}
						{key == 0 && isMobile && <p className="more-info">Tap on the icons below for more info..</p>}
						<SpellIcons spellData={spellData} index={key} />
						<div className="card-body">
							{spellData.desc?.map((t, i) => {
								// Filter text body for -> ***Text*** = Bold Blue Text
								let words = t.split(" ").map((w) => {
									return w.includes("***")
										? `<b class="bold-text">
                                                ${w.replace("***", "").replace(".***", "").replace(".", "")}
                                            </b>`
										: w;
								});

								// Filter text body for -> 3d6 = roll three 6-sided dice
								words = words.map((w) => {
									const hasNumber = /\d/;
									return hasNumber.test(w) &&
										w.includes("d") &&
										!w.includes("r") &&
										w.split("").length < 6 &&
										w.split("d")[0]
										? `<b>${w}</b> (roll ${Number(w.split("d")[0]) && w.split("d")[0]} ${
												Number(w.split("d")[1]) && converter.toWords(w.split("d")[1])
										  }-sided dice)`
										: w;
								});

								// filter for Confusion structure
								// | d10 | Behavior |
								// |---|---|

								// Animated Object Statistics
								// #####

								const text = words.join(" ");

								return text.startsWith("-") ? (
									<li className="list-item">{text.replace("-", "")}</li>
								) : (
									<p className="text-sm-left my-2">{parse(text)}</p>
								);
							})}
						</div>
					</Card.Body>
				</div>
			)}
		</>
	);
};
