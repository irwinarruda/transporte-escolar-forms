import React from 'react';

export function useErrorHandler() {
    return React.useCallback((err, options = {}) => {
        let errorMessage;

        if (err.response) {
            errorMessage = Array.isArray(err.response.data.message)
                ? err.response.data.message[0]
                : err.response.data.message ||
                  err.response.status + ': ' + err.response.statusText;

            switch (err.response.status) {
                case 401:
                    break;
                default:
                    break;
            }
        } else if (err.request) {
            errorMessage = 'Não conseguimos nos conectar ao servidor.';
        } else {
            errorMessage = err.message;
        }
        return errorMessage;
    });
}
