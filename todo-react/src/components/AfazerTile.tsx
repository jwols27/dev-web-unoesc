import {ChangeEvent, useMemo, useState} from "react";

export interface Afazer {
    id: number;
    nome: string;
    desc: string;
    feito: boolean;
}

interface IAfazerTile {
    afazer: Afazer;
    index: number;
    onEdit: (id: number, values: Afazer) => void;
    onDelete: (id: number) => void;
}

export const AfazerTile = ({afazer, index, onEdit, onDelete}: IAfazerTile) => {
    const [editando, setEditando] = useState<boolean>(false);

    const [nome, setNome] = useState<string>(afazer.nome);
    const [desc, setDesc] = useState<string>(afazer.desc);
    const [feito, setFeito] = useState<boolean>(afazer.feito);

    const onChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setFeito(e.target.checked);
        onEdit(index, novoAfazer)
    }

    const onNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value)
    }

    const onDescChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value)
    }

    const onEditandoChange = () => {
        if (editando) {
            onEdit(index, novoAfazer);
        }
        setEditando(!editando);
    }

    const novoAfazer: Afazer = useMemo(() => {
        return {
            id: afazer.id,
            nome: nome,
            desc: desc,
            feito: feito,
        } as Afazer;
    }, [nome, desc, feito])

    return <div id={`afazer-${afazer.id}`} className={'afazer card'}>
        <input type={'checkbox'} checked={feito} onChange={onChecked}/>
        <div className="afazer-info">
            {editando
                ? <input type={'text'} value={nome} onChange={onNomeChange}></input>
                : <b>{nome}</b>}
            {editando
                ? <input type={'text'} value={desc} onChange={onDescChange}></input>
                : <p>{desc}</p>}
        </div>
        <button className={editando ? "save-btn" : 'edit-btn'} onClick={onEditandoChange}>
            <i className={editando ? "nf nf-fa-save" : 'nf nf-fa-edit'}/>
        </button>
        <button className={'del-btn'} onClick={() => {
            onDelete(index)
        }}>
            <i className={'nf nf-md-delete'}/>
        </button>
    </div>
}