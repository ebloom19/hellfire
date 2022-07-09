import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
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
    const [selectedSpell, setSelectedSpell] = useState<SelectOptionType>();
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        axios.get('https://www.dnd5eapi.co/api/spells')
            .then(response => {
                setSpells(response.data.results);
                setLoading(false);
            })
    }, []);

    const optionList = spells?.map(s => {
        return {value: s.index, label: s.name}
    })

    type SelectOptionType = { label: string, value: string }

    const handleSelectionChange = (option: SelectOptionType | null) => {
        if (option) {
            setSelectedSpell(option)
        }
    };

    const customStyles = {
        option: (provided: any, state: any) => ({
        //   ...provided,
          borderBottom: '2px solid #264c5e',
          color: state.isSelected ? 'black' : '#264c5e',
          padding: 20,
        }),

      }
      
      
    return (
        <>
        {!loading ?
            <div>
                <>
                {/* <Form.Select aria-label="Default select example" size="lg" onChange={(e) => setSelectedSpell(e.target.value)}>
                    {spells?.map((s, i) => {
                        return <option value={s.index} key={i}>{s.name}</option>
                    })}
                </Form.Select> */}
                {callServer()}
                {optionList &&
                    <Select
                    options={optionList}
                    placeholder="Select a spell"
                    value={selectedSpell}
                    onChange={handleSelectionChange}
                    styles={customStyles}
                    isSearchable={true}
                    />
                }   



                </>
            </div>
            :
            <Rings />
        }
        {selectedSpell &&
            <SpellCard spellIndex={selectedSpell.value}/>
        }
        </>
    )
};