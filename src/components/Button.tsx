
import { useState } from 'react';

interface propriedadeBotao {
    cor: string;
    children: String;
}

export function BotaoEmNegrito(props: propriedadeBotao) {
    const [contar, atualizarContar] = useState(1);

    function incrementar() {
        atualizarContar(contar + 1);
    }

    return (
        <button type="button"
            style={{ backgroundColor: props.cor }}
            onClick={incrementar}
        >
            <strong>{props.children}</strong><br /><strong>{contar}</strong>
        </button>
    );
}