import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import SelectSearch from 'react-select-search';
import { SpellCard } from "./SpellCard";
import { Rings } from 'react-loader-spinner';
import { SpellsObject } from "../../types/SpellsList";

function callServer() {
    axios.get('http://localhost:8000/test', {
      params: {
        table: 'sample',
      },
    }).then((response) => {
      console.log(response.data);
    });
}

export function SpellsList() {
    const [spells, setSpells] = useState<SpellsObject[]>();
    const [numberOfSpells, setNumberOfSpells] = useState<number>();
    const [selectedSpell, setSelectedSpell] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/spells')
            .then(response => {
                setSpells(response.data.results);
                setNumberOfSpells(response.data.count);
                setLoading(false);
            })
    }, []);

    const options = spells?.map(s => {
        return {name: s.name, value: s.index}
    })

    console.log(options);

    return (
        <>
        {!loading ?
            <div>
                <>
                <Form.Select aria-label="Default select example" size="lg" onChange={(e) => setSelectedSpell(e.target.value)}>
                    {spells?.map((s, i) => {
                        return <option value={s.index} key={i}>{s.name}</option>
                    })}
                </Form.Select>
                {callServer()}
                {options &&
                    <SelectSearch options={options} placeholder="Choose your language" />
                }



                </>
            </div>
            :
            <Rings />
        }
        <SpellCard spellIndex={selectedSpell}/>
        </>
    )
};