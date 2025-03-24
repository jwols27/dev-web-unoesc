import { FormEvent, useState } from 'react';
import TextInputJ from './TextInputJ.tsx';
import TextAreaInputJ from './TextAreaInputJ.tsx';

interface EmailJ {
    nome: string;
    assunto: string;
    mensagem: string;
}

export const EmailForm = () => {
    const [email, setEmail] = useState<EmailJ>({
        nome: '',
        assunto: '',
        mensagem: ''
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.location.href = `mailto:juliapwols@pm.me?subject=${email.assunto}&body=${encodeURIComponent(email.mensagem)}`;
    };

    return (
        <form
            id="contato-form"
            className="flex-column"
            method="post"
            encType="text/plain"
            onSubmit={onSubmit}
        >
            <h3>Fale conosco!</h3>
            <TextInputJ
                name={'nome'}
                placeholder={'Nome completo'}
                theme={'dark'}
                onChange={(e) => setEmail({ ...email, nome: e.target.value })}
                required
            />
            <TextInputJ
                name={'assunto'}
                placeholder={'Assunto'}
                theme={'dark'}
                onChange={(e) =>
                    setEmail({ ...email, assunto: e.target.value })
                }
                required
            />
            <TextAreaInputJ
                name={'mensagem'}
                placeholder={'Mensagem'}
                theme={'dark'}
                required
                onChange={(e) =>
                    setEmail({ ...email, mensagem: e.target.value })
                }
                rows={6}
            />
            <button className={'btn transform'} type="submit">
                Enviar
            </button>
        </form>
    );
};
