module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/questionarios',
                permanent: true,
            },
        ];
    },
};
