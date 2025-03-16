import {Afazer, AfazerTile} from "./components/AfazerTile.tsx";
import {useEffect, useState} from "react";

function App() {
    const [afazeres, setAfazeres] = useState<Afazer[]>([]);
    useEffect(() => {
        const json = localStorage.getItem("afazeres") ?? "[]";
        const a = JSON.parse(json) ?? [];
        setAfazeres(a);
    }, [])

    const changeAfazeres = (afs: Afazer[]) => {
        setAfazeres(afs);
        localStorage.setItem("afazeres", JSON.stringify(afs));
    }


    const onAfazerAdd = () => {
        const maxId = afazeres.length > 0
            ? afazeres.reduce((p, c) => (p && p.id > c.id) ? p : c).id
            : 0;
        const afazer: Afazer = {
            id: maxId + 1,
            nome: 'Afazer',
            desc: 'Descrição',
            feito: false,
        };
        changeAfazeres([...afazeres, afazer])
    }

    const onAfazerEdit = (index: number, values: Afazer) => {
        afazeres[index] = values;
        console.log(afazeres[index]);
        changeAfazeres(afazeres);
    }

    const onAfazerDelete = (index: number) => {
        const a = [...afazeres];
        a.splice(index, 1);
        changeAfazeres(a);
    }

    return (
        <main>
            <div id={'afazer-title'}>
                <h1>📝Lista de afazeres</h1>
                <button onClick={onAfazerAdd}>
                    <i className={"nf nf-cod-add"}></i>
                </button>
            </div>
            {afazeres.map((afazer: Afazer, i) => {
                return <AfazerTile key={`afazer-${afazer.id}`}
                                   afazer={afazer}
                                   index={i}
                                   onEdit={onAfazerEdit}
                                   onDelete={onAfazerDelete}
                />
            })}
        </main>
    )
}

export default App
