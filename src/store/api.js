export default {
    state: {
        api: {
            baseURL: 'https://api-factory.simbirsoft1.com/api/',
            url: {
                city: 'db/city',
                point: 'db/point',
            },
            options: {
                headers: {
                    'X-Api-Factory-Application-Id': process.env.VUE_APP_APPLICATION_ID,
                },
            }
        },
    },
    actions: {
        async loadData({
            state,
            commit
        }, {
            table,
            mutation
        }) {
            fetch(`${state.api.baseURL}${state.api.url[table]}`, state.api.options)
                .then(response => response.json())
                .then(data => {
                    commit(mutation, data);
                })
        },
    }
}