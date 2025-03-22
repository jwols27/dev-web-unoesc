import { FormEvent, useState } from 'react';

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
            <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome completo"
                onChange={(e) => setEmail({ ...email, nome: e.target.value })}
                required
            />
            <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Assunto"
                onChange={(e) =>
                    setEmail({ ...email, assunto: e.target.value })
                }
                required
            />
            <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Mensagem"
                required
                onChange={(e) =>
                    setEmail({ ...email, mensagem: e.target.value })
                }
                rows={6}
            ></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
};
