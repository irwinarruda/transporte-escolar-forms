import { useCallback } from 'react';
import { useAlertModal } from './AlertModal';

export function useErrorHandler() {
    const { createModal } = useAlertModal();

    return useCallback((err, options = {}) => {
        let errorMessage;

        if (err.response) {
            errorMessage = Array.isArray(err.response.data.messages)
                ? err.response.data.messages[0]
                : err.response.data.messages ||
                  err.response.status + ': ' + err.response.statusText;
        } else if (err.request) {
            errorMessage = 'Não conseguimos nos conectar ao servidor.';
        } else {
            errorMessage = err.message;
        }
        createModal('error', {
            title: options.title || 'Erro!',
            text: errorMessage,
        });
    });
}
